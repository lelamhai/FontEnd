$(document).ready(function () {
  $("#myform").validate({
    onfocusout: false,
    onkeyup: false,
    onclick: false,
    rules: {
      email: {
        required: true,
        email: true,
      },
      password: {
        required: true,
        minlength: 8,
      },
      "re-password": {
        equalTo: "#password",
        minlength: 8,
      },
      phonenumber: {
        required: true,
        digits: true,
        maxlength: 10,
        minlength: 10,
      },
      "name-user": {
        required: true,
      },
      address: {
        required: true,
      },
    },
    messages: {
      email: {
        required: "Bắt buộc nhập email",
        email: "Nhập đúng chuẩn email",
      },
      password: {
        required: "Bắt buộc nhập password",
        minlength: "Hãy nhập ít nhất 8 ký tự",
      },
      "re-password": {
        equalTo: "Hai password phải giống nhau",
        minlength: "Hãy nhập ít nhất 8 ký tự",
      },
      phonenumber: {
        required: "Bắt buộc nhập số điện thoại",
        digits: "Vui lòng nhập số",
      },
      "name-user": {
        required: "Bắt buộc nhập tên người dùng",
      },
      address: {
        required: "Bắt buộc nhập địa chỉ",
      },
    },
  });
  $("#close-popup-sign-up").click(function () {
    $("#myform").trigger("reset");
    $("label.error").css("display","none");
  });
  $("#btn-submit-sign-up").click(function () {
    if ($("#check-notify").is(":checked")) {
      $("#text-notify-sign-up").css({
        "border-color": "",
        "border-width": "0px",
      });
    } else if ($("#check-notify").is(":not(:checked)")) {
      $("#text-notify-sign-up").css({
        "border-color": "red",
        "border-width": "1px",
        "border-style": "solid",
      });
    }
  });

  // bật tắt password

  // đăng kí
  $("#show-pass").click(function () {
    $("#password").attr("type", "text");
    $("#hide-pass").css("display", "unset");
  });
  $("#hide-pass").click(function () {
    $("#password").attr("type", "password");
    $("#hide-pass").css("display", "none");
  });
// đăng nhập
  $("#show-pass-s").click(function () {
    $("#password-s").attr("type", "text");
    $("#hide-pass-s").css("display", "unset");
  });
  $("#hide-pass-s").click(function () {
    $("#password-s").attr("type", "password");
    $("#hide-pass-s").css("display", "none");
  });

  // validate của form đăng nhập

  $("#myform-s").validate({
    onfocusout: false,
    onkeyup: false,
    onclick: false,
    rules: {
      email: {
        required: true,
        email: true,
      },
      password: {
        required: true,
        minlength: 8,
      },
    },
    messages: {
      email: {
        required: "Bắt buộc nhập email",
        email: "Nhập đúng chuẩn email",
      },
      password: {
        required: "Bắt buộc nhập password",
        minlength: "Hãy nhập ít nhất 8 ký tự",
      },
    },
  });
  $("#close-popup").click(function () {
    $("#myform-s").trigger("reset");
    $("label.error").css("display","none");
  });
});
