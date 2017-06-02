$(document).ready(function() {
  $("#track-selector-form").submit(function(event) {
    var frontVsBack = $("input#front-vs-back").val();
    var enterpriseSoftware = $("input#enterprise-software").val();
    var androidDevelopment= $("input#android-development").val();
    var evilMicrosoft = $("input#evil-microsoft").val();
    var wordpressBusinessDevelopment = $("input#wordpress-business-development").val();
    var dynamicWebApps = $("input#dynamic-web-apps").val();

    // branching tree goes here

    $(".cssDesign").text(frontVsBack);
    $(".enterpriseSoftware").text(enterpriseSoftware);
    $(".androidDevelopment").text(androidDevelopment);
    $(".evilMicrosoft").text(evilMicrosoft);
    $(".wordpressBusinessDevelopment").text(wordpressBusinessDevelopment);
    $(".dynamicWebApps").text(dynamicWebApps);

    $("#results").show();

    event.preventDefault();
  });
});
