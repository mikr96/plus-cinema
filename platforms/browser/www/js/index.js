$(function() {
  function parseHash(newHash, oldHash) {
    crossroads.parse(newHash);
  }

  const url = "http://localhost/WTCAPI";
  var movieDetails = {};

  var home = crossroads.addRoute("/", function() {
    var homeTemplate = Handlebars.templates["home"];

    $.ajax({
      type: "POST",
      beforeSend: function(request) {
        request.setRequestHeader(
          "authorization",
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJteWNvbnRhY3RzLm5ldCIsInJvbGUiOiJhZG1pbiIsInVzZXJuYW1lIjoiaGFoYSJ9.QbSiJvCRhyTAyUztAX-c2qYC4GZsKRJcvGND_l8hlXA"
        );
      },
      contentType: "application/json",
      url: url + "/getMovie",
      dataType: "json",
      success: function(movie) {
        movieDetails = movie.map(e => {
          return [e.id + "," + e.movie_name];
        });
        sessionStorage.setItem("movieDetails", JSON.stringify(movieDetails));
        htmlTemplate = homeTemplate({ movie });
        $("#divhome").empty();
        $("#divhome")
          .html(htmlTemplate)
          .show();
      },
      error: function() {
        alert("An error occurred while processing JSON file.");
      }
    });

    $("#divhome").fadeIn();
    $("#divadmin").hide();
    $("#divmovie").hide();
    $("#divtheatre").hide();
    $("#divcontact").hide();
    $("#divlogin").hide();
    $("#divsignup").hide();
    $("#divseat").hide();
    $("#divpayment").hide();
    $("#divbooking_history").hide();

    $(".navbar-collapse li").removeClass("active");
    $(".navbar-collapse li a[href='#home']")
      .parent()
      .addClass("active");
  });

  var wtc = crossroads.addRoute("/home", function() {
    var homeTemplate = Handlebars.templates["home"];

    $.ajax({
      type: "POST",
      beforeSend: function(request) {
        request.setRequestHeader(
          "authorization",
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJteWNvbnRhY3RzLm5ldCIsInJvbGUiOiJhZG1pbiIsInVzZXJuYW1lIjoiaGFoYSJ9.QbSiJvCRhyTAyUztAX-c2qYC4GZsKRJcvGND_l8hlXA"
        );
      },
      contentType: "application/json",
      url: url + "/getMovie",
      dataType: "json",
      success: function(movie) {
        movieDetails = movie.map(e => {
          return [e.id + "," + e.movie_name];
        });
        console.log(movieDetails);
        sessionStorage.setItem("movieDetails", JSON.stringify(movieDetails));
        htmlTemplate = homeTemplate({ movie });
        $("#divhome").empty();
        $("#divhome")
          .html(htmlTemplate)
          .show();
      },
      error: function() {
        alert("An error occurred while processing JSON file.");
      }
    });

    $("#divhome").fadeIn();
    $("#divadmin").hide();
    $("#divmovie").hide();
    $("#divtheatre").hide();
    $("#divcontact").hide();
    $("#divlogin").hide();
    $("#divsignup").hide();
    $("#divseat").hide();
    $("#divpayment").hide();
    $("#divbooking_history").hide();

    $(".navbar-collapse li").removeClass("active");
    $(".navbar-collapse li a[href='#home']")
      .parent()
      .addClass("active");
  });

  var wtc_user = crossroads.addRoute("/home-user", function() {
    var homeTemplate = Handlebars.templates["home"];
    $.ajax({
      type: "POST",
      beforeSend: function(request) {
        request.setRequestHeader(
          "authorization",
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJteWNvbnRhY3RzLm5ldCIsInJvbGUiOiJhZG1pbiIsInVzZXJuYW1lIjoiaGFoYSJ9.QbSiJvCRhyTAyUztAX-c2qYC4GZsKRJcvGND_l8hlXA"
        );
      },
      contentType: "application/json",
      url: url + "/getMovie",
      dataType: "json",
      success: function(movie) {
        movieDetails = movie.map(e => {
          return [e.id + "," + e.movie_name];
        });
        sessionStorage.setItem("movieDetails", JSON.stringify(movieDetails));

        htmlTemplate = homeTemplate({ movie });
        $("#divhome").empty();
        $("#divhome")
          .html(htmlTemplate)
          .show();
      },
      error: function() {
        alert("An error occurred while processing JSON file.");
      }
    });

    $("#divhome").fadeIn();
    $("#divmovie").hide();
    $("#divtheatre").hide();
    $("#divcontact").hide();
    $("#divlogin").hide();
    $("#divsignup").hide();
    $("#divseat").hide();
    $("#divpayment").hide();
    $("#divbooking_history").hide();

    $(".navbar-collapse li").removeClass("active");
    $(".navbar-collapse li a[href='#home']")
      .parent()
      .addClass("active");
    $(".navbar-collapse ul[id='typeofuser']").empty();
    $(".navbar-collapse ul[id='typeofuser']").append(
      "<li class='nav-item'><a id='history' class='nav-link'>Booking History</a></li>"
    );
    $(".navbar-collapse ul[id='typeofuser']").append(
      "<li class='nav-item'><a id='logout' class='nav-link'>Logout</a></li>"
    );
    $("div[id='user']").empty();
    $("div[id='user']").append(
      "<a class='navbar-brand' href='#home-user'>Hello, " +
        sessionStorage.getItem("user") +
        "</a>"
    );
  });

  var wtc_admin = crossroads.addRoute("/home-admin", function() {
    var homeTemplate = Handlebars.templates["admin"];
    var htmlTemplate;

    $.ajax({
      type: "POST",
      beforeSend: function(request) {
        request.setRequestHeader(
          "authorization",
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJteWNvbnRhY3RzLm5ldCIsInJvbGUiOiJhZG1pbiIsInVzZXJuYW1lIjoiaGFoYSJ9.QbSiJvCRhyTAyUztAX-c2qYC4GZsKRJcvGND_l8hlXA"
        );
      },
      contentType: "application/json",
      url: url + "/getMovie",
      dataType: "json",
      success: function(movie) {
        htmlTemplate = homeTemplate({ movie });
        $("#divadmin").empty();
        $("#divadmin")
          .html(htmlTemplate)
          .show();
      },
      error: function() {
        alert("An error occurred while processing JSON file.");
      }
    });

    $("#divadmin").fadeIn();
    $("#divhome").hide();
    $("#divmovie").hide();
    $("#divtheatre").hide();
    $("#divcontact").hide();
    $("#divlogin").hide();
    $("#divsignup").hide();
    $("#divseat").hide();
    $("#divpayment").hide();
    $("#divbooking_history").hide();

    $(".navbar-collapse li").removeClass("active");
    $(".navbar-collapse li a[href='#home']")
      .parent()
      .addClass("active");
    $(".navbar-collapse ul[id='typeofuser']").empty();
    $(".navbar-collapse ul[id='typeofuser']").append(
      "<li class='nav-item'><a id='logout' class='nav-link'>Logout</a></li>"
    );
    $("div[id='user']").empty();
    $("div[id='user']").append(
      "<a class='navbar-brand' href='#home-admin'>Hello, Admin</a>"
    );
    $(".navbar-collapse ul[id='options']").empty();
  });

  var movie = crossroads.addRoute("/movie", function() {
    var homeTemplate = Handlebars.templates["movie"];

    $.ajax({
      type: "POST",
      beforeSend: function(request) {
        request.setRequestHeader(
          "authorization",
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJteWNvbnRhY3RzLm5ldCIsInJvbGUiOiJhZG1pbiIsInVzZXJuYW1lIjoiaGFoYSJ9.QbSiJvCRhyTAyUztAX-c2qYC4GZsKRJcvGND_l8hlXA"
        );
      },
      contentType: "application/json",
      url: url + "/getMovie",
      dataType: "json",
      success: function(movie) {
        htmlTemplate = homeTemplate({ movie });
        $("#divmovie").empty();
        $("#divmovie")
          .html(htmlTemplate)
          .show();
      },
      error: function() {
        alert("An error occurred while processing JSON file.");
      }
    });

    $("#divhome").hide();
    $("#divadmin").hide();
    $("#divmovie").fadeIn();
    $("#divtheatre").hide();
    $("#divcontact").hide();
    $("#divlogin").hide();
    $("#divsignup").hide();
    $("#divseat").hide();
    $("#divpayment").hide();
    $("#divbooking_history").hide();

    $(".navbar-collapse li").removeClass("active");
    $(".navbar-collapse li a[href='#movie']")
      .parent()
      .addClass("active");
  });

  var movie = crossroads.addRoute("/booking_history", function() {
    var homeTemplate = Handlebars.templates["booking_history"];

    var cinema = sessionStorage.getItem("cinema");
    var date = sessionStorage.getItem("date");
    var time = sessionStorage.getItem("time");
    var seats = sessionStorage.getItem("seats");
    var movie = sessionStorage.getItem("movie_name");
    var totalPrice = sessionStorage.getItem("totalPrice");

    var object = {
      cinema: "",
      movie: "",
      date: "",
      time: "",
      seats: "",
      totalPrice: ""
    };

    object["cinema"] = cinema;
    object["movie"] = movie;
    object["date"] = date;
    object["time"] = time;
    object["seats"] = seats;
    object["totalPrice"] = totalPrice;

    htmlTemplate = homeTemplate({ object });
    $("#divbooking_history").empty();
    $("#divbooking_history")
      .html(htmlTemplate)
      .show();

    $("#divhome").hide();
    $("#divadmin").hide();
    $("#divmovie").hide();
    $("#divtheatre").hide();
    $("#divcontact").hide();
    $("#divlogin").hide();
    $("#divsignup").hide();
    $("#divseat").hide();
    $("#divpayment").hide();
    $("#divbooking_history").fadeIn();

    $(".navbar-collapse li").removeClass("active");
    $(".navbar-collapse li a[href='#movie']")
      .parent()
      .addClass("active");
  });

  var theatre = crossroads.addRoute("/theatre", function() {
    var homeTemplate = Handlebars.templates["theatre"];

    $("#divtheatre").empty();
    $("#divtheatre")
      .html(homeTemplate)
      .show();

    $("#divhome").hide();
    $("#divadmin").hide();
    $("#divmovie").hide();
    $("#divtheatre").fadeIn();
    $("#divcontact").hide();
    $("#divlogin").hide();
    $("#divsignup").hide();
    $("#divseat").hide();
    $("#divpayment").hide();
    $("#divbooking_history").hide();

    $(".navbar-collapse li").removeClass("active");
    $(".navbar-collapse li a[href='#theatre']")
      .parent()
      .addClass("active");
  });

  var contacts = crossroads.addRoute("/contacts", function() {
    var homeTemplate = Handlebars.templates["contact"];

    $("#divcontact").empty();
    $("#divcontact")
      .html(homeTemplate)
      .show();

    $("#divhome").hide();
    $("#divadmin").hide();
    $("#divmovie").hide();
    $("#divtheatre").hide();
    $("#divcontact").fadeIn();
    $("#divlogin").hide();
    $("#divsignup").hide();
    $("#divseat").hide();
    $("#divpayment").hide();
    $("#divbooking_history").hide();

    $(".navbar-collapse li").removeClass("active");
    $(".navbar-collapse li a[href='#contacts']")
      .parent()
      .addClass("active");
  });

  var signup = crossroads.addRoute("/signup", function() {
    var homeTemplate = Handlebars.templates["signup"];

    $("#divsignup").empty();
    $("#divsignup")
      .html(homeTemplate)
      .hide()
      .fadeIn(1000);

    $("#divhome").hide();
    $("#divadmin").hide();
    $("#divmovie").hide();
    $("#divtheatre").hide();
    $("#divcontact").hide();
    $("#divlogin").hide();
    $("#divsignup").fadeIn();
    $("#divseat").hide();
    $("#divpayment").hide();
    $("#divbooking_history").hide();

    $(".navbar-collapse li").removeClass("active");
    $(".navbar-collapse li a[href='#signup']")
      .parent()
      .addClass("active");
  });

  var login = crossroads.addRoute("/login", function() {
    var homeTemplate = Handlebars.templates["home"];

    $("#divhome").hide();
    $("#divadmin").hide();
    $("#divmovie").hide();
    $("#divtheatre").hide();
    $("#divcontact").hide();
    $("#divlogin").fadeIn();
    $("#divsignup").hide();
    $("#divseat").hide();
    $("#divpayment").hide();
    $("#divbooking_history").hide();

    $(".navbar-collapse li").removeClass("active");
    $(".navbar-collapse li a[href='#login']")
      .parent()
      .addClass("active");
  });

  var seat = crossroads.addRoute("/seat", function() {
    var homeTemplate = Handlebars.templates["seat"];

    $.ajax({
      type: "POST",
      beforeSend: function(request) {
        request.setRequestHeader(
          "authorization",
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJteWNvbnRhY3RzLm5ldCIsInJvbGUiOiJhZG1pbiIsInVzZXJuYW1lIjoiaGFoYSJ9.QbSiJvCRhyTAyUztAX-c2qYC4GZsKRJcvGND_l8hlXA"
        );
      },
      contentType: "application/json",
      url: url + "/getMovieSeat",
      dataType: "json",
      success: function(seats) {
        console.log(seats);
        var seat_no = seats.map(e => {
          if (sessionStorage.getItem("movieId") == e.id)
            return [e.seat_no + ","];
        });
        sessionStorage.setItem("seat_no", seat_no);
        $("#divseat").empty();
        $("#divseat")
          .html(homeTemplate)
          .show();
      },
      error: function() {
        alert("An error occurred while processing JSON file.");
      }
    });
    $("#divhome").hide();
    $("#divmovie").hide();
    $("#divtheatre").hide();
    $("#divcontact").hide();
    $("#divseat").fadeIn();
    $("#divlogin").hide();
    $("#divsignup").hide();
    $("#divpayment").hide();
    $("#divbooking_history").hide();

    $(".navbar-collapse li").removeClass("active");
    $(".navbar-collapse li a[href='#login']")
      .parent()
      .addClass("active");
  });

  var payment = crossroads.addRoute("/payment", function() {
    var homeTemplate = Handlebars.templates["payment"];

    $("#divpayment").empty();
    $("#divpayment")
      .html(homeTemplate)
      .show();

    $("#divhome").hide();
    $("#divmovie").hide();
    $("#divtheatre").hide();
    $("#divcontact").hide();
    $("#divlogin").hide();
    $("#divsignup").hide();
    $("#divseat").hide();
    $("#divpayment").fadeIn();
    $("#divbooking_history").hide();

    $(".navbar-collapse li").removeClass("active");
    $(".navbar-collapse li a[href='#login']")
      .parent()
      .addClass("active");
  });

  hasher.initialized.add(parseHash); //parse initial hash
  hasher.changed.add(parseHash); //parse hash changes
  hasher.init(); //start listening for history change

  //Submit feedback form
  $("#feedbackForm").submit(function(event) {
    event.preventDefault(); //prevent redirect/page refresh

    console.log("submitted");

    //serialized form data
    var formData = $(this).serialize();

    request = $.ajax({
      type: "post",
      data: formData,
      url: "processform.php",
      dataType: "json",
      success: function(data) {
        console.log(data);
      },
      error: function() {
        console.log("error");
      }
    });
  });

  $("#login").click(() => {
    $("#divlogin").fadeIn();
  });

  $("#loginForm").submit(function(event) {
    event.preventDefault(); //prevent redirect/page refresh
    const url = "http://localhost/WTCAPI";

    var formData = JSON.stringify({
      username: $("#loginForm")
        .find("input[id='username']")
        .val(),
      password: $("#loginForm")
        .find("input[id='password']")
        .val()
    });

    var username = document.getElementById("username").value;

    if (username != "root") {
      request = $.ajax({
        type: "post",
        contentType: "application/json",
        data: formData,
        url: url + "/login",
        dataType: "json",
        success: function(data) {
          console.log("success", data);
          sessionStorage.setItem("user", data.username);

          swal({
            type: "success",
            title: "Successful",
            text: "Successfully Login",
            buttons: "Back To Homepage"
          }).then(function() {
            console.log("triggered redirect here");
            $(location).attr("href", "#home-user");
            $("div").removeClass("modal-backdrop show");
          });
        },
        error: function(data) {
          console.log("fail", data);

          swal({
            type: "error",
            title: "Oops...",
            text: "Something went wrong! Cannot login.",
            buttons: "Try Again"
          }).then(function(isConfirm) {
            if (isConfirm) {
              window.location.reload();
            }
          });
        }
      });
    } else {
      request = $.ajax({
        type: "post",
        contentType: "application/json",
        data: formData,
        url: url + "/loginAdmin",
        dataType: "json",
        success: function(data) {
          console.log("success", data.token);

          var token = data.token;
          var base64Url = token.split(".")[1];
          var base64 = decodeURIComponent(
            atob(base64Url)
              .split("")
              .map(function(c) {
                return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
              })
              .join("")
          );

          var admin_id = JSON.parse(base64);
          console.log("admin", admin_id.id);

          sessionStorage.setItem("admin_id", admin_id.id);

          swal({
            type: "success",
            title: "Successful",
            text: "Successfully Login",
            buttons: "Back To Homepage"
          }).then(function() {
            console.log("triggered redirect here");
            $(location).attr("href", "#home-admin");
            $("div").removeClass("modal-backdrop show");
          });
        },
        error: function(data) {
          console.log("fail", data);

          swal({
            type: "error",
            title: "Logging Out",
            text: "Something went wrong! Cannot login.",
            buttons: "Try Again"
          }).then(function(isConfirm) {
            if (isConfirm) {
              window.location.reload();
            }
          });
        }
      });
    }
  });

  $(document).on("click", "#logout", function() {
    swal({
      type: "error",
      title: "Logging Out",
      text: "Are you sure ?",
      buttons: ["No", "Yes"]
    }).then(function(isConfirm) {
      if (isConfirm) {
        sessionStorage.clear();
        window.location.href = "index.html";
      }
    });
  });

  $(document).on("click", "#history", function() {
    $(location).attr("href", "#booking_history");
  });
});
