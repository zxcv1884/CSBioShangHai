<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});
Route::get('/Peptides', function () {
    return view('welcome');
});
Route::get('/Instrumentation', function () {
    return view('welcome');
});
Route::get('/OnlineShop', function () {
    return view('welcome');
});
Route::get('/About', function () {
    return view('welcome');
});
Route::get('/PeptideNoteBook', function () {
    return view('welcome');
});

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');
