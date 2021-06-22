<?php

use Illuminate\Support\Facades\Route;

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

//Route::get('/', function () {
 //   return view('welcome');
//});

//Auth::routes();

//Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
Route::group(['prefix' => LaravelLocalization::setLocale(),
              'middleware' => [ 'localize' ]], function () {

    Route::get(LaravelLocalization::transRoute('/'), function () {
        return view('welcome');
    });
    Route::get(LaravelLocalization::transRoute('routes.about-us'), function () {
        return view('about-us');
    });
    Route::get(LaravelLocalization::transRoute('routes.studies'), function () {
        return view('consumer-studies');
    });
   // Route::get(LaravelLocalization::transRoute('routes.consumer_studies'), function () {
   //     return view('consumer-studies');
   // });
    Route::get(LaravelLocalization::transRoute('routes.privacy'), function () {
        return view('privacy-policy');
    });

    Route::get(LaravelLocalization::transRoute('routes.partners'), function () {
        return view('our-partners');
    });
    
    Route::get(LaravelLocalization::transRoute('routes.careers'), function () {
        return view('careers');
    });
    Route::get(LaravelLocalization::transRoute('routes.sample'), function () {
        return view('consumer.sampling');
    });
    Route::get(LaravelLocalization::transRoute('routes.analysis'), function () {
        return view('consumer.data-analysis');
    });
    Route::get(LaravelLocalization::transRoute('routes.questionnaire'), function () {
        return view('consumer.questionnaire-design');
    });
    Route::get(LaravelLocalization::transRoute('routes.visualization'), function () {
        return view('consumer.data-visualization');
    });
    Route::get(LaravelLocalization::transRoute('routes.connect'), function () {
        return view('consumer.connect');
    });
      
    Route::get(LaravelLocalization::transRoute('routes.terms'), function () {
        return view('terms-of-use');
    });
    Route::get(LaravelLocalization::transRoute('routes.raports'), function () {
        return view('resources');
    });
    Route::get(LaravelLocalization::transRoute('routes.faq'), function () {
        return view('faq');
    });
    Route::get(LaravelLocalization::transRoute('routes.faq'), function () {
        return view('faq');
    });
    Route::get(LaravelLocalization::transRoute('routes.contactus'), function () {
        return view('contact-us');
    });
    Route::post(LaravelLocalization::transRoute('/app/login', [
        'uses'=>'Auth\LoginController@Login',
        'as'=>'account.login'
    ]));





Route::get('/app/password-reset', 'PasswordResetController@index');
Route::get('/ethical-survey/admin-panel-member/register/non-repeat/action', 'UserController@firstRegister');
Route::post('/ethical-survey/admin-panel-member/register/non-repeat/store/action', [
    'uses' => 'UserController@saveFirstRegister',
    'as' => 'admin.firstStore'
]);
Route::post('/ethical-survey/admin-panel-member/register/', [
    'uses' => 'UserController@memberStore',
    'as' => 'admin.saveMember'
]);
Route::post('/ethical-survey/admin-panel-member/user/request', [
    'uses' => 'Auth\ResetPasswordController@requestReset',
    'as' => 'user.request'
]);
Route::get('/app/reset/password/{token}', [
    'uses'=>'Auth\ResetPasswordController@getReset',
    'as'=>'user.getReset'
]);
Route::get('/app/updaates/password', [
    'uses'=>'Auth\ResetPasswordController@updatePassword',
    'as'=>'user.updatePassword'
]);

Route::get('/app/login', [
    'uses'=>'MemberAccountLoginController@index',
    'as'=>'user.login'
    ]);

    
Route::post('/app/login', [
    'uses'=>'Auth\LoginController@Login',
    'as'=>'account.login'
]);

Route::post('/ethical-survey/member/save/request', [
    'uses' => 'admin\ContactController@saveCallRequest',
    'as' => 'member.request'
]);
Route::post('/ethical-survey/member/save/contactus', [
    'uses' => 'admin\ContactController@saveContactus',
    'as' => 'member.contactus'
]);

Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
Route::prefix('/Administration/')->group(
    function () {

        //admin project category routes
        Route::get('project/categories', [
            'uses' => 'projects\CategoryController@index',
            'as' => 'projects.category'
        ]);
        Route::get('project/getCategories', [
            'uses' => 'projects\CategoryController@getCategories',
            'as' => 'projects.getCategories'
        ]);
        Route::post('project/saveCategories', [
            'uses' => 'projects\CategoryController@saveCategories',
            'as' => 'projects.saveCategories'
        ]);
        Route::put('project/updateCategories', [
            'uses' => 'projects\CategoryController@updateCategories',
            'as' => 'projects.updateCategories'
        ]);
        Route::get('/project/categories/show/{id}', [
            'uses' => 'projects\CategoryController@show',
            'as' => 'projects.showCategories'
        ])->middleware('auth');

        Route::delete('/project/categories/delete/{id}', [
            'uses' => 'projects\CategoryController@destroy',
            'as' => 'projects.deleteCategories'
        ])->middleware('auth');

        //admin project subcategory routes
        Route::get('project/subcategories', [
            'uses' => 'projects\SubcategoryController@index',
            'as' => 'projects.subcategory'
        ]);
        Route::get('project/getSubcategories', [
            'uses' => 'projects\SubcategoryController@getSubcategories',
            'as' => 'projects.getSubcategories'
        ]);
        Route::post('project/saveSubcategories', [
            'uses' => 'projects\SubcategoryController@saveSubcategories',
            'as' => 'projects.saveSubcategories'
        ]);
        Route::put('project/updateSubcategories', [
            'uses' => 'projects\SubcategoryController@updateSubcategories',
            'as' => 'projects.updateSubcategories'
        ]);
        Route::get('/project/subcategories/show/{id}', [
            'uses' => 'projects\SubcategoryController@show',
            'as' => 'projects.showSubcategories'
        ])->middleware('auth');

        Route::delete('/project/subcategories/delete/{id}', [
            'uses' => 'projects\SubcategoryController@destroy',
            'as' => 'projects.deleteSubcategories'
        ])->middleware('auth');

        //admin project  routes
        Route::get('project/projects', [
            'uses' => 'projects\ProjectController@index',
            'as' => 'projects.projects'
        ]);
        Route::get('project/getProjects', [
            'uses' => 'projects\ProjectController@getProjects',
            'as' => 'projects.getProjects'
        ]);
        Route::post('project/saveProject', [
            'uses' => 'projects\ProjectController@saveProject',
            'as' => 'projects.saveProject'
        ]);
        Route::put('project/updateProject', [
            'uses' => 'projects\ProjectController@updateProject',
            'as' => 'projects.updateProject'
        ]);
        Route::get('/project/project/show/{id}', [
            'uses' => 'projects\ProjectController@show',
            'as' => 'projects.showProject'
        ])->middleware('auth');

        Route::delete('/project/project/delete/{id}', [
            'uses' => 'projects\ProjectController@destroy',
            'as' => 'projects.deleteProject'
        ])->middleware('auth');
        Route::get('/category/subcategory', [
            'uses' => 'projects\ProjectController@getSubcategory',
            'as' => 'projects.getSubcategory2'
        ])->middleware('auth');
        Route::get('/project/project/detail/{id}', [
            'uses' => 'projects\ProjectController@projectDetail',
            'as' => 'projects.projectDetail'
        ]);

        //admin project Files routes
        Route::get('project/files', [
            'uses' => 'projects\FileController@index',
            'as' => 'projects.files'
        ]);
        Route::get('project/getFiles', [
            'uses' => 'projects\FileController@getFiles',
            'as' => 'projects.getFiles'
        ]);
        Route::post('project/saveFile', [
            'uses' => 'projects\FileController@saveFile',
            'as' => 'projects.saveFile'
        ]);
        Route::put('project/updateFile', [
            'uses' => 'projects\FileController@updateFile',
            'as' => 'projects.updateFile'
        ]);
        Route::get('/project/file/show/{id}', [
            'uses' => 'projects\FileController@show',
            'as' => 'projects.showFile'
        ])->middleware('auth');

        Route::delete('/project/file/delete/{id}', [
            'uses' => 'projects\FileController@destroy',
            'as' => 'projects.deleteFile'
        ])->middleware('auth');
        Route::get('/project/file/read/{id}', [
            'uses' => 'projects\FileController@readFile',
            'as' => 'projects.readFile'
        ]);

            //        user and admin account edition
        Route::get('profiles/change/password', [
            'uses' => 'admin\ProfileController@changePassword',
            'as' => 'profiles.getPassword'
        ]);
        Route::post('profiles/update/password', [
            'uses' => 'admin\ProfileController@updatePassword',
            'as' => 'profiles.updatePassword'
        ]);

        Route::get('profiles/view/profile', [
            'uses' => 'admin\ProfileController@viewProfile',
            'as' => 'profiles.viewProfile'
        ]);
        Route::get('profiles/getInfo', [
            'uses' => 'admin\ProfileController@getInfo',
            'as' => 'profiles.getInfo'
        ]);
        Route::post('profiles/update/info', [
            'uses' => 'admin\ProfileController@updateInfo',
            'as' => 'profiles.updateInfo'
        ]);
        Route::get('profiles/get/profile', [
            'uses' => 'admin\ProfileController@getProfile',
            'as' => 'profiles.getProfile'
        ]);
        Route::post('profiles/update/profile', [
            'uses' => 'admin\ProfileController@updateProfile',
            'as' => 'profiles.updateProfile'
        ]);




        //        users or members routes
        Route::get('member/list', [
            'uses' => 'Admin\MemberController@index',
            'as' => 'members.index'
        ]);
        Route::get('member/get/list', [
            'uses' => 'Admin\MemberController@getMembers',
            'as' => 'members.getMembers'
        ]);
        Route::get('member/detail/{id}', [
            'uses' => 'Admin\MemberController@memberDetail',
            'as' => 'members.memberDetail'
        ]);
        Route::put('member/confirm/{id}', [
            'uses' => 'Admin\MemberController@confirmMember',
            'as' => 'members.confirmMember'
        ]);
        Route::delete('member/delete/{id}', [
            'uses' => 'Admin\MemberController@deleteMember',
            'as' => 'members.deleteMember'
        ]);



     //        survey routes
        Route::get('survey/list', [
            'uses' => 'Admin\SurveyController@index',
            'as' => 'survey.index'
        ]);
        Route::get('survey/sendSurvey', [
            'uses' => 'Admin\SurveyController@sendSurvey',
            'as' => 'survey.sendSurvey'
        ]);
        Route::get('survey/get/member', [
            'uses' => 'Admin\SurveyController@getMemberSurvey',
            'as' => 'survey.getMemberSurvey'
        ]);
        Route::get('survey/get/survey', [
            'uses' => 'Admin\SurveyController@getSurvey',
            'as' => 'survey.getSurvey'
        ]);
        Route::post('survey/save/survey', [
            'uses' => 'Admin\SurveyController@saveSurvey',
            'as' => 'survey.saveSurvey'
        ]);
        Route::get('survey/show/{id}', [
            'uses' => 'Admin\SurveyController@showSurvey',
            'as' => 'survey.showSurvey'
        ]);
        Route::put('survey/update/survey', [
            'uses' => 'Admin\SurveyController@updateSurvey',
            'as' => 'survey.updateSurvey'
        ]);
        Route::put('survey/close/{id}', [
            'uses' => 'Admin\SurveyController@closeSurvey',
            'as' => 'survey.closeSurvey'
        ]);
        Route::put('survey/activate/{id}', [
            'uses' => 'Admin\SurveyController@activateSurvey',
            'as' => 'survey.activateSurvey'
        ]);
        Route::delete('survey/delete/{id}', [
            'uses' => 'Admin\SurveyController@deleteSurvey',
            'as' => 'survey.deleteSurvey'
        ]);
        Route::get('survey/detail/{id}', [
            'uses' => 'Admin\SurveyController@surveyDetail',
            'as' => 'survey.surveyDetail'
        ]);
        Route::get('survey/getDetail/{id}', [
            'uses' => 'Admin\SurveyController@getSurveyAttendance',
            'as' => 'survey.getSurveyAttendance'
        ]);

        Route::post('survey/sendSurvey/sms', [
            'uses' => 'Admin\SurveyController@sendSurveySMS',
            'as' => 'survey.sendSurveySMS'
        ]);
    });
});
