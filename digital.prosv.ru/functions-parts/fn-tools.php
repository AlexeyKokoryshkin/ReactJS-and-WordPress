<?php

function pr_r($obj) {

    print_r("<pre>");
    print_r($obj);
    print_r("</pre><br /><hr /><br />");
}



/*
function custom_upload_mimes ( $existing_mimes ) {
    
    $existing_mimes['7z'] = 'application/x-7z-compressed';
    
 
    return $existing_mimes;
}
 
add_filter('upload_mimes', 'custom_upload_mimes');
*/
