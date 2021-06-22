<!-- Sidemenu -->
<div class="main-sidebar main-sidebar-sticky side-menu">
    <div class="sidemenu-logo">
        <a class="main-logo" href="index.html">
            <img src="{{asset('/images/logo-wide.png')}}" class="header-brand-img desktop-logo" alt="logo">
            <img src="{{asset('/images/logo-wide-white.png')}}" class="header-brand-img icon-logo" alt="logo">
            <img src="{{asset('/images/logo-wide.png')}}" class="header-brand-img desktop-logo theme-logo" alt="logo">
            <img src="{{asset('/images/favicon.ico')}}" class="header-brand-img icon-logo theme-logo" alt="logo">
        </a>
    </div>
    <div class="main-sidebar-body">
        <ul class="nav">
            <li class="nav-header"><span class="nav-label">Dashboard</span></li>
            <li class="nav-item">
                <a class="nav-link" href="{{route('home')}}"><span class="shape1"></span><span class="shape2"></span>
                    <i class="ti-home sidemenu-icon"></i><span class="sidemenu-label">Dashboard</span></a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="{{ route('members.index') }}"><span class="shape1"></span>
                    <span class="shape2"></span><i class="ti-user sidemenu-icon"></i><span class="sidemenu-label">Users</span></a>
            </li>

        </ul>
    </div>
</div>
<!-- End Sidemenu -->        <!-- Main Header-->
