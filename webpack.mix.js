const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

// VUE JS
mix.js('resources/js/app.js', 'public/js');
// SCSS File
mix.sass('resources/sass/app.scss', 'public/css');
// Vanilla JS
mix.scripts([
    'node_modules/jquery/dist/jquery.min.js',
    'node_modules/popper.js/dist/umd/popper.js',
    'node_modules/bootstrap/dist/js/bootstrap.js',
    'node_modules/pace-progress/pace.min.js',
    'node_modules/perfect-scrollbar/dist/perfect-scrollbar.min.js',
    'node_modules/@coreui/coreui/dist/js/coreui.min.js',
    'resources/js/spin.min.js',
    'resources/js/ladda.min.js',
    'resources/js/global.js',
], 'public/js/all.js');
// Plain CSS
mix.styles([
    'node_modules/flag-icon-css/css/flag-icon.min.css',
    'node_modules/font-awesome/css/font-awesome.min.css',
    'node_modules/@coreui/coreui/dist/css/coreui.min.css',
    'node_modules/pace-progress/themes/orange/pace-theme-minimal.css',
    'node_modules/perfect-scrollbar/css/perfect-scrollbar.css',
    'node_modules/simple-line-icons/css/simple-line-icons.css',
    'resources/css/ladda-themeless.min.css',
    'resources/css/overwrite.css',
], 'public/css/all.css');