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
    if (frontVsBack === "1" || frontVsBack === "3") {
      $("#results").show();
      $(".cssDesign").show();
    } else {
      $("#results").show();
      $(".androidDevelopment").show();
      $(".evilMicrosoft").show();
      $(".wordpressBusinessDevelopment").show();
      $(".dynamicWebApps").show();
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
