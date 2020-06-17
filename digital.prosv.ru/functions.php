<?php
add_theme_support('post-thumbnails'); // картинка записи для постов;

/** Константы  */
// include_once "functions-parts/fn-constants.php";

/** Тулзы */
include_once "functions-parts/fn-tools.php";


/** Лишние блоки */
include_once "functions-parts/fn-admin-remove-blocks.php";


// Изменение внутреннего контента админки
add_action('add_admin_bar_menus', 'reset_admin_wplogo');
function reset_admin_wplogo() {
    remove_action( 'admin_bar_menu', 'wp_admin_bar_wp_menu'); // удаляем стандартную панель (логотип)
    add_action( 'admin_bar_menu', 'my_admin_bar_wp_menu', 10 ); // добавляем свою панель (логотип)

    remove_action( 'admin_bar_menu', 'wp_admin_bar_site_menu', 30 ); // удаляем иконку со ссылкой на сайт
    remove_action( 'admin_bar_menu', 'wp_admin_bar_comments_menu', 60 ); // удаляем "Добавить новые комменты"
    remove_action( 'admin_bar_menu', 'wp_admin_bar_new_content_menu', 70 ); // удаляем "Добавить новый контент"
    remove_action( 'admin_bar_menu', 'wp_admin_bar_updates_menu', 50 ); // удаляем предложение об обновлении
}

// Добавление кастомного лого админ панели со ссылкой на сайт
function my_admin_bar_wp_menu( $wp_admin_bar ) {
	$wp_admin_bar->add_menu( array(
		'id'    => 'wp-logo',
        'title' => '<span style="font-family:dashicons; font-size:20px;" class="dashicons-admin-home"></span>', // иконка dashicon
		'href'  => home_url(),
		'meta'  => array(
			'title' => 'На страницу сайта',
		),
	) );
}

//свой текст в футере админки 
function wph_admin_footer_text () {
    echo null;
 }
 add_filter('admin_footer_text', 'wph_admin_footer_text');

// Отключение сообщений о необходимости обновиться
 if( ! current_user_can( 'edit_users' ) ){
	add_filter( 'auto_update_core', "return false" );

	add_filter( 'pre_site_transient_update_core', "return null" );
}


// Переименовал инфоблока Записи в Новости
function change_post_menu_label() {
    global $menu, $submenu;
    $menu[5][0] = 'Новости';
    $submenu['edit.php'][5][0] = 'Новости';
    $submenu['edit.php'][10][0] = 'Добавить новость';
    $submenu['edit.php'][16][0] = 'Новостные метки';
    echo '';
}
add_action( 'admin_menu', 'change_post_menu_label' );
function change_post_object_label() {
    global $wp_post_types;
    $labels = &$wp_post_types['post']->labels;
    $labels->name = 'Новости';
    $labels->singular_name = 'Новости';
    $labels->add_new = 'Добавить новость';
    $labels->add_new_item = 'Добавить новость';
    $labels->edit_item = 'Редактировать новость';
    $labels->new_item = 'Добавить новость';
    $labels->view_item = 'Посмотреть новость';
    $labels->search_items = 'Найти новость';
    $labels->not_found = 'Не найдено';
    $labels->not_found_in_trash = 'Корзина пуста';
}
add_action( 'init', 'change_post_object_label' );




//API вывода постов для ReactJS 

// Энд-поинты приложения
add_action('rest_api_init', function() {

    // Маршрут получения постов
    register_rest_route('api/', 'posts/', [
        'methods'  => 'GET',
        'callback' => 'getPosts',
        'args' => array(
            'id' => array(
                'default' => $id
            ),
            'type' => array(
                'default' => $type
            ),
            'counts' => array(
                'default' => $counts
            ),
        ),
    ]);

});

// Функция авторизации пользователя
function getPosts($request) {

    // Вытаскиваем в отдельные переменные ключи из запроса
    $type = $request['type'];
    $counts = $request['counts'];

        // Массив постов
        $posts = array();

        // Формируем запрос с помощью WP_Query
        $query = new WP_Query(array(
            'post_type' =>  $type,
            'posts_per_page' => $counts
        ));

        // Пройдемся по массиву
        while ($query->have_posts()) : $query->the_post();

            // Получаем заголовок и описание
            $title = esc_html(get_the_title());
            $desc = get_the_excerpt();
            $id = get_the_ID();
            $date = get_the_date();

        
            // Получаем ссылку на изображение (если оно есть)
            if(has_post_thumbnail()) {
                $thumb_id = get_post_thumbnail_id();
                $thumb_cover_url = wp_get_attachment_image_src($thumb_id, full, true);
                $imgUrl = $thumb_cover_url[0];
            } else {
                $imgUrl = 'null'; // Или можно указать ссылку на картинку-заглушку
            }

        
            // Формируем объект поста
            $post = array(
                "id" => $id,
                "title" => $title,
                "description" => $desc,
                "img" => $imgUrl,
                "date" => $date
            );

            // Добавляем его в массив постов
            array_push($posts, $post);

        endwhile; wp_reset_postdata();

        // Ответ - это массив постов
        $response = $posts;    

    // Возвращаем объект ответа
    return $response;
}

/* --------------- */
