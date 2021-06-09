@extends('layouts.master')
@section('title','Password Reset')
@push('css')
@endpush

@section('content')
        <!-- Start main-content -->
        <div class="main-content">

        <section id="home" class="divider parallax layer-overlay" data-bg-img="images/bg/slide2.jpg">
      <div class="display-table">
        <div class="display-table-cell">
          <div class="container">
            <div class="row">
              <div class="col-md-6 col-md-push-3">
                <div class="text-center mb-60"><a href="index-mp-layout1.html" class=""><img alt="" src="images/logo-wide-white.png"></a></div>
                <div class="bg-lightest border-1px p-25">
                  <h4 class="text-theme-colored text-uppercase m-0">Reset your Password</h4>
                  <div class="line-bottom mb-30"></div>

                  <form id="request_form" name="appointment_form" class="mt-30" method="post" action="{{ route('user.request') }}">
                      @csrf
                      <div class="form-group">
                                    <div class="form-group">
            <label for="email" class="form-label">Email</label>
            <input type="email" id="email" name="email" class="form-control" placeholder="Email" required>
            </div>
                      <div class="add-messages"></div>
            <div class="row">
            <div class="col-md-4">
            <input  value="Reset Password" type="submit" class="btn btn btn-theme-colored" id="btnSave"  data-loading-text="Please wait..."/>
            </div>

        </div>
                  </div>
          </form>
                  <!-- Appointment Form Validation-->




                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
            <script>
                $(document).ready(function () {
                    // Saving

                    $('#request_form').submit(function (e) {
                        e.preventDefault();
                        var form = $(this);



                        var btn = $('#btnSave');
                        btn.button('loading');
//                                                console.log(form.serialize());
                        $.ajax({
                            url: form.attr('action'),
                            method: form.attr('method'),
                            data: form.serialize()
                        }).done(function (data) {
                            console.log(data);
                            if (data.message=="ok") {
                                btn.button('reset');
                                form[0].reset();

                                $('.add-messages').html('<div class="alert alert-success flat">' +
                                    '<button type="button" class="close" data-dismiss="alert">&times;</button>' +
                                    '<strong><i class="glyphicon glyphicon-ok-sign"></i></strong>You are receiving SMS Code for resetting your password. Please check Your  Phone </div>');

                                $(".alert-success").delay(500).show(10, function () {
                                    $(this).delay(3000).hide(10, function () {
                                        $(this).remove();
                                    });
                                }); // /.alert
                                window.location.replace("/survey-panel-member/check/sms/resetPassword");
                            }else if(data.message=="nosend"){
                                btn.button('reset');
                                $('.add-messages').html('<div class="alert alert-warning flat">' +
                                    '<button type="button" class="close" data-dismiss="alert">&times;</button>' +
                                    '<strong><i class="glyphicon glyphicon-exclamation-sign"></i></strong>Email is valid but SMS not Sent. Please Try Again With check your network </div>');

                                $(".alert-success").delay(500).show(10, function () {
                                    $(this).delay(3000).hide(10, function () {
                                        $(this).remove();
                                    });
                                }); // /.alert
                            }

                            else {
                                btn.button('reset');
                                $('.add-messages').html('<div class="alert alert-danger flat">' +
                                    '<button type="button" class="close" data-dismiss="alert">&times;</button>' +
                                    '<strong><i class="glyphicon glyphicon-ok-sign"></i></strong>Email is Invalid. Please Try Again </div>');

                                $(".alert-success").delay(500).show(10, function () {
                                    $(this).delay(3000).hide(10, function () {
                                        $(this).remove();
                                    });
                                }); // /.alert
                            }
                        }).fail(function (response) {
                            console.log(response.responseJSON);
                            btn.button('reset');


                            var errors= "";
                            errors+="<b>"+response.responseJSON.message+"</b>";
                            var data=response.responseJSON.errors;

                            $.each(data,function (i, value) {
                                console.log(value);
                                $.each(value,function (j, values) {
                                    errors += '<p>' + values + '</p>';
                                });
                            });
                            $('#add-messages').html('<div class="alert alert-danger flat">' +
                                '<button type="button" class="close" data-dismiss="alert">&times;</button>' +
                                '<strong><i class="glyphicon glyphicon-glyphicon-remove"></i></strong><b>oops:</b>'+errors+'</div>');

                            $(".alert-success").delay(5000).show(10, function () {
                                $(this).delay(3000).hide(10, function () {
                                    $(this).remove();
                                });
                            });




                        });
                        return false;
                    });

                });

            </script>
</div>
<!-- end main-content -->

<a class="scrollToTop" href="#"><i class="fa fa-angle-up"></i></a>
</div>
@endsection
@push('js')
@endpush
