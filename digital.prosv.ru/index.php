<?php
  $TEMPLATE_PATH = parse_url(get_template_directory_uri(), PHP_URL_PATH);
?>
<!DOCTYPE html>
<html lang="en">
<head>
<?php $BRC_TEMPLATE_PATH = parse_url(get_template_directory_uri(), PHP_URL_PATH); ?>
<script src='<?php echo $BRC_TEMPLATE_PATH; ?>/react-src/node_modules/@devloco/create-react-wptheme-utils/wpThemeClient.js'></script>

<script src='<?php echo $BRC_TEMPLATE_PATH; ?>/react-src/node_modules/@devloco/create-react-wptheme-utils/wpThemeErrorOverlay.js'></script>

<script> wpThemeClient.start("ws", "127.0.0.1", "8090"); </script>

<meta charset="utf-8" />
    <!--
      manifest.json provides metadata used when your web app is installed on a
      user's mobile device or desktop. See https://developers.google.com/web/fundamentals/web-app-manifest/
    -->
    <link rel="manifest" href="<?php echo $TEMPLATE_PATH; ?>/manifest.json" />
    <!--
        If you're reading this from "view source" in your browser, it might not make sense as
        these tokens have already been evaluated and replaced, even in this remark blurb.

        Notice the use of "php echo $TEMPLATE_PATH;" and /test-digital/wp-content/themes/digital.prosv.ru in the tags above.
        Both will be replaced with the URL of the `public` folder during the build (/test-digital/wp-content/themes/digital.prosv.ru) or
        at render time (php echo $TEMPLATE_PATH;)
        Only files inside the `public` folder can be referenced like this.

        Unlike "/favicon.ico" or "favicon.ico", "/test-digital/wp-content/themes/digital.prosv.ru/favicon.ico" will
        work correctly both with client-side routing and a non-root public URL.
        Learn how to configure a non-root public URL by running `npm run wpbuild`.
    -->

<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="yandex-verification" content="bf48a31a19e4c438" />
<meta name="robots" content="all">
<meta name="format-detection" content="telephone=no">
<meta http-equiv="x-rim-auto-match" content="none">

<!-- Open Graph
<meta property="og:type" content="website">
<meta property="og:site_name" content="Обучающий сайт издательства &laquo;Просвещение&raquo">
<meta property="og:title" content="Цифровые технологии для современного образования &mdash; Группа компаний &laquo;Просвещение&raquo;">
<meta property="og:description" content="Сайт с обучающающими материалами по работе с электронными учебниками Издательства &laquo;Просвещение&raquo;.">
<meta property="og:url" content="https://digital.prosv.ru/">
<meta property="og:locale" content="ru_RU">
<meta property="og:image" content="https://digital.prosv.ru/og-image.svg">
<meta property="og:image:width" content="968">
<meta property="og:image:height" content="504">
-->

<meta name="description" content="Сайт с обучающающими материалами по работе с электронными учебниками Издательства &laquo;Просвещение&raquo;.">
<title>Цифровые технологии для современного образования &mdash; Группа компаний &laquo;Просвещение&raquo;</title>

<link rel="icon" type="image/ico" href="<?= get_template_directory_uri() ?>/react-src/src/components/img/digital.ico" />
<link rel="shortcut icon" type="image/x-icon" href="<?= get_template_directory_uri() ?>/react-src/src/components/img/digital.ico" />
<title><?=$current_item->title?></title>


<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-76622024-3" rel="nofollow"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-76622024-3');
</script>

<!-- Yandex.Metrika counter -->
<script type="text/javascript" >
   (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
   m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
   (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

   ym(56831812, "init", {
        clickmap:true,
        trackLinks:true,
        accurateTrackBounce:true,
        webvisor:true
   });
</script>
<noscript><div><img src="https://mc.yandex.ru/watch/56831812" style="position:absolute; left:-9999px;" alt="" /></div></noscript>
<!-- /Yandex.Metrika counter -->

<link href="/test-digital/wp-content/themes/digital.prosv.ru/static/css/1.chunk.css?50941abbc7f878a35ae7" rel="stylesheet"><link href="/test-digital/wp-content/themes/digital.prosv.ru/static/css/main.chunk.css?50941abbc7f878a35ae7" rel="stylesheet"></head>
    <body>
    <noscript>
        You need to enable JavaScript to run this app.
    </noscript>
    <div id="root"></div>
    <!--
        To begin the development, run `npm run wpstart` or `yarn wpstart`.
        To create a production bundle, use `npm run wpbuild` or `yarn wpbuild`.
    -->
    <script src="/test-digital/wp-content/themes/digital.prosv.ru/static/js/bundle.js?50941abbc7f878a35ae7"></script><script src="/test-digital/wp-content/themes/digital.prosv.ru/static/js/1.chunk.js?50941abbc7f878a35ae7"></script><script src="/test-digital/wp-content/themes/digital.prosv.ru/static/js/main.chunk.js?50941abbc7f878a35ae7"></script></body>
</html>
