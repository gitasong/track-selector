$(document).ready(function() {
  $("#track-selector-form").submit(function(event) {
    var frontVsBack = $("#front-vs-back").val();
      console.log(frontVsBack);
    var enterpriseSoftware = $("#enterprise-software").val();
      console.log(enterpriseSoftware);
    var androidDevelopment= $("#android-development").val();
      console.log(androidDevelopment);
    var evilMicrosoft = $("#evil-microsoft").val();
      console.log(evilMicrosoft);
    var wordpressBusinessDevelopment = $("#wordpress-business-development").val();
      console.log(wordpressBusinessDevelopment);
    var dynamicWebApps = $("#dynamic-web-apps").val();
      console.log(dynamicWebApps);

    // branching tree goes here
    if (frontVsBack === "1") {
      $("#results").show();
      $(".cssDesign").show();
      $(".idealResult").text("CSS/Design");
    } else {
      if (enterpriseSoftware === "Yes"){
        if (androidDevelopment === "Yes" && evilMicrosoft === "No"){
          $("#results").show();
          $(".androidDevelopment").show();
          $(".idealResult").text("Java/Android");
        } else if (androidDevelopment === "No" && evilMicrosoft === "Yes") {
          $("#results").show();
          $(".evilMicrosoft").show();
          $(".idealResult").text("C#/.NET");
        } else {
          $("#results").show();
          $(".androidDevelopment").show();
          $(".evilMicrosoft").show();
          $(".idealResult").text("Java/Android");
        }
      } else {
        $("#results").show();
        $(".wordpressBusinessDevelopment").show();
        $(".dynamicWebApps").show();
        $(".idealResult").text("Ruby/Rails");
      }
      // if (androidDevelopment === "Yes" || evilMicrosoft === "Yes") {
      //   $("#results").show();
      //   $(".androidDevelopment").show();
      //   $(".evilMicrosoft").show();
      // } else {
      //   $("#results").show();
      //   $(".wordpressBusinessDevelopment").show();
      //   $(".dynamicWebApps").show();
      // }
    };

    // $(".cssDesign").text(frontVsBack);
    // $(".enterpriseSoftware").text(enterpriseSoftware);
    // $(".androidDevelopment").text(androidDevelopment);
    // $(".evilMicrosoft").text(evilMicrosoft);
    // $(".wordpressBusinessDevelopment").text(wordpressBusinessDevelopment);
    // $(".dynamicWebApps").text(dynamicWebApps);

    // $("#results").show();

    event.preventDefault();
  });
});
