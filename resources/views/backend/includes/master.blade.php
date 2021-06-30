<!DOCTYPE html>
<html lang="en">
<meta http-equiv="content-type" content="text/html;charset=UTF-8" />
<head>

    <meta charset="utf-8">
    <meta content="width=device-width, initial-scale=1, shrink-to-fit=no" name="viewport">
    <meta name="description" content="Ethical Research Solution">
    <meta name="author" content="Ethical Research Solution">
    <meta name="keywords" content="Ethical Research Solution">

    <!-- Favicon -->
    <link rel="shortcut icon" href="{{asset('/images/favicon.ico')}}">

    <!-- Title -->
    <title>@yield('title') | ERS|DashBoard</title>

    <!-- Bootstrap css-->
    <link href="{{asset('dashboard/assets/plugins/bootstrap/css/bootstrap.min.css')}}" rel="stylesheet"/>

    <!-- Icons css-->
    <link href="{{asset('dashboard/assets/plugins/web-fonts/icons.css')}}" rel="stylesheet"/>
    <link href="{{asset('dashboard/assets/plugins/web-fonts/font-awesome/font-awesome.min.css')}}" rel="stylesheet">
    <link href="{{asset('dashboard/assets/plugins/web-fonts/plugin.css')}}" rel="stylesheet"/>

    <!-- Style css-->
    <link href="{{asset('dashboard/assets/css/style/style.css')}}" rel="stylesheet">
    <link href="{{asset('dashboard/assets/css/skins.css')}}" rel="stylesheet">
    <link href="{{asset('dashboard/assets/css/dark-style.css')}}" rel="stylesheet">
    <link href="{{asset('dashboard/assets/css/colors/default.css')}}" rel="stylesheet">

    <!-- Color css-->
    <link id="theme" rel="stylesheet" type="text/css" media="all" href="{{asset('dashboard/assets/css/colors/color.css')}}">

    <!-- Select2 css-->
    <link href="{{asset('dashboard/assets/plugins/select2/css/select2.min.css')}}" rel="stylesheet">

    <!-- Mutipleselect css-->
    <link rel="stylesheet" href="{{asset('dashboard/assets/plugins/multipleselect/multiple-select.css')}}">

    <!-- Sidemenu css-->
    <link href="{{asset('dashboard/assets/css/sidemenu/sidemenu.css')}}" rel="stylesheet">

    <!-- Switcher css-->
    <link href="{{asset('dashboard/assets/switcher/css/switcher.css')}}" rel="stylesheet">
    <link href="{{asset('dashboard/assets/switcher/demo.css')}}" rel="stylesheet">
    @yield('css')
</head>

<body class="main-body leftmenu">

<!-- Switcher -->
<div class="switcher-wrapper">
    <div class="demo_changer">
        <div class="demo-icon bg_dark">
            <i class="fa fa-cog fa-spin  text_primary"></i>
        </div>
        <div class="form_holder sidebar-right1">
            <div class="row">
                <div class="predefined_styles">
                    <div class="swichermainleft text-center">
                        <div class="p-3">
                            <a href="https://laravel.spruko.com/spruha/index.html" class="btn btn-primary btn-block mt-0">View Demo</a>
                            <a href="https://themeforest.net/item/spruha-laravel-admin-dashboard-template/29818213" class="btn btn-secondary btn-block">Buy Now</a>
                            <a href="https://themeforest.net/user/spruko/portfolio" class="btn btn-info btn-block">Our Portfolio</a>
                        </div>
                    </div>
                    <div class="swichermainleft">
                        <h4>Navigation Style</h4>
                        <div class="p-3">
                            <a href="index.html" class="btn btn-primary btn-block mt-0">LTR VERSION</a>
                            <a href="https://laravel.spruko.com/spruha/rtl/index" class="btn btn-success btn-block">RTL VERSION</a>
                        </div>
                    </div>
                    <div class="swichermainleft">
                        <h4>Layout Style</h4>
                        <div class="p-3">
                            <a href="index.html" class="btn btn-primary btn-block mt-0">Left Menu</a>
                            <a href="horizontal.html" class="btn btn-success btn-block">Horizontal Menu</a>
                        </div>
                    </div>
                    <div class="swichermainleft">
                        <h4 class="font-bold text-sm mr-3">Default Theme Switcher</h4>
                        <div class="swichermainleft my-4">
                            <a class="wscolorcode red-btn color blackborder color1" href="#" data-theme="assets/css/colors/color1.css"></a>
                            <a class="wscolorcode purple-btn color blackborder color2" href="#" data-theme="assets/css/colors/color2.css"></a>
                            <a class="wscolorcode green-btn color blackborder color3" href="#" data-theme="assets/css/colors/color3.css"></a>
                            <a class="wscolorcode pink-btn color blackborder color4" href="#" data-theme="assets/css/colors/color4.css"></a>
                            <a class="wscolorcode orange-btn color blackborder color5" href="#" data-theme="assets/css/colors/color5.css"></a>
                        </div>
                    </div>
                    <div class="swichermainleft">
                        <h4>Ions Styles</h4>
                        <div class="switch_section my-2">
                            <div class="switch-toggle d-flex">
                                <span class="mr-auto">Icon Style</span>
                                <div class="onoffswitch2">
                                    <input type="checkbox" name="onoffswitch2" id="myonoffswitch51" class="onoffswitch2-checkbox">
                                    <label for="myonoffswitch51" class="onoffswitch2-label"></label>
                                </div>
                            </div>
                        </div>
                        <div class="switch_section my-2">
                            <div class="switch-toggle d-flex">
                                <span class="mr-auto">Theme Style</span>
                                <div class="onoffswitch2">
                                    <input type="checkbox" name="onoffswitch2" id="myonoffswitch52" class="onoffswitch2-checkbox">
                                    <label for="myonoffswitch52" class="onoffswitch2-label"></label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="swichermainleft">
                        <h4>Theme Layout</h4>
                        <div class="switch_section d-flex my-4">
                            <div class="d-block text-center mx-auto">
                                <button type="button" id="background5" class="bg5 mb-3 wscolorcode1 blackborder"></button>
                                <span class="badge badge-light tx-12">Dark layout</span>
                            </div>
                            <div class="d-block text-center mx-auto">
                                <button type="button" id="background6" class="bg6 mb-3 wscolorcode1 blackborder"></button>
                                <span class="badge badge-light tx-12">Light layout</span>
                            </div>
                        </div>
                    </div>
                    <div class="swichermainleft">
                        <h4>Header Styles Mode</h4>
                        <div class="switch_section d-flex my-4">
                            <div class="d-block text-center mx-auto">
                                <button type="button" id="background3" class="bg3 mb-3 wscolorcode1 blackborder"></button>
                                <span class="badge badge-light tx-12">Dark Header</span>
                            </div>
                            <div class="d-block text-center mx-auto">
                                <button type="button" id="background4" class="bg4 mb-3 wscolorcode1 blackborder"></button>
                                <span class="badge badge-light tx-12">Color Header</span>
                            </div>
                        </div>
                    </div>
                    <div class="swichermainleft">
                        <h4>Leftmenu Styles Mode</h4>
                        <div class="switch_section d-flex my-4">
                            <div class="d-block text-center mx-auto">
                                <button type="button" id="background1" class="bg1 wscolorcode1 blackborder"></button>
                                <span class="badge badge-light tx-12">Color Menu</span>
                            </div>
                            <div class="d-block text-center mx-auto">
                                <button type="button" id="background2" class="bg2 wscolorcode1 blackborder"></button>
                                <span class="badge badge-light tx-12">Light Menu</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- End Switcher -->

<!-- Loader -->
<div id="global-loader">
    <img src="{{asset('dashboard/assets/img/loader.svg')}}" class="loader-img" alt="Loader">
</div>
<!-- End Loader -->

<!-- Page -->
<div class="page">

    @include('backend.includes.sidebar')
    @include('backend.includes.header')
    <!-- Main Content-->
        <div class="main-content side-content pt-0">
            <div class="container-fluid">
                <div class="inner-body">
                    <!-- Page Header -->
                    <div class="page-header">
                        <div>
                            <h2 class="main-content-title tx-24 mg-b-5">@yield('content_title')</h2>
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="{{route('home')}}">Home</a></li>
                                <li class="breadcrumb-item active" aria-current="page">@yield('content_target')</li>
                            </ol>
                        </div>
                        <div class="d-flex">
                            <div class="justify-content-center">
                                @yield('action_buttons')
{{--                                <button type="button" class="btn btn-white btn-icon-text my-2 mr-2">--}}
{{--                                    <i class="fe fe-download mr-2"></i> Import--}}
{{--                                </button>--}}
{{--                                <button type="button" class="btn btn-white btn-icon-text my-2 mr-2">--}}
{{--                                    <i class="fe fe-filter mr-2"></i> Filter--}}
{{--                                </button>--}}
{{--                                <button type="button" class="btn btn-primary my-2 btn-icon-text">--}}
{{--                                    <i class="fe fe-download-cloud mr-2"></i> Download Report--}}
{{--                                </button>--}}
                            </div>
                        </div>
                    </div>
                    <!-- End Page Header -->

{{--                    <!--Row-->--}}
{{--                    <div class="row row-sm">--}}
{{--                        <div class="col-sm-12 col-lg-12 col-xl-8">--}}

                            @yield('contents')

{{--                        </div>--}}
{{--                    </div>--}}





                </div>
            </div>
        </div>


</div>








<!-- Back-to-top -->
<a href="#top" id="back-to-top"><i class="fe fe-arrow-up"></i></a>

<!-- Jquery js-->
<script src="{{asset('dashboard/assets/plugins/jquery/jquery.min.js')}}"></script>

<!-- Bootstrap js-->
<script src="{{asset('dashboard/assets/plugins/bootstrap/js/popper.min.js')}}"></script>
<script src="{{asset('dashboard/assets/plugins/bootstrap/js/bootstrap.min.js')}}"></script>

<!-- Select2 js-->
<script src="{{asset('dashboard/assets/plugins/select2/js/select2.min.js')}}"></script>

<!-- Perfect-scrollbar js -->
<script src="{{asset('dashboard/assets/plugins/perfect-scrollbar/perfect-scrollbar.min.js')}}"></script>

<!-- Sidemenu js -->
<script src="{{asset('dashboard/assets/plugins/sidemenu/sidemenu.js')}}"></script>

<!-- Sidebar js -->
<script src="{{asset('dashboard/assets/plugins/sidebar/sidebar.js')}}"></script>

<!-- Internal Chart.Bundle js-->
<script src="{{asset('dashboard/assets/plugins/chart.js/Chart.bundle.min.js')}}"></script>

<!-- Peity js-->
<script src="{{asset('dashboard/assets/plugins/peity/jquery.peity.min.js')}}"></script>

<!-- Internal Morris js -->
<script src="{{asset('dashboard/assets/plugins/raphael/raphael.min.js')}}"></script>
<script src="{{asset('dashboard/assets/plugins/morris.js/morris.min.js')}}"></script>

<!-- Circle Progress js-->
<script src="{{asset('dashboard/assets/js/circle-progress.min.js')}}"></script>
<script src="{{asset('dashboard/assets/js/chart-circle.js')}}"></script>

<!-- Internal Dashboard js-->
<script src="{{asset('dashboard/assets/js/index.js')}}"></script>

<!-- Sticky js -->
<script src="{{asset('dashboard/assets/js/sticky.js')}}"></script>

<!-- Custom js -->
<script src="{{asset('dashboard/assets/js/custom.js')}}"></script>

<!-- Switcher js -->
<script src="{{asset('dashboard/assets/switcher/js/switcher.js')}}"></script>
<script src="{{ asset('/parsleyjs/js/parsley.min.js') }}" ></script>
<script src="{{ asset('/js/bootbox.min.js') }}" ></script>
@yield('js')
</body>

<!-- Mirrored from laravel.spruko.com/spruha/ltr/index by HTTrack Website Copier/3.x [XR&CO'2014], Mon, 15 Feb 2021 18:30:54 GMT -->
</html>
