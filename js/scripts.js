$(document).ready(function() {
  $("#track-selector-form").submit(function(event) {
    var firstName = $("input#first-name").val();
      // console.log(firstName);
    var frontVsBack = $("#front-vs-back").val();
      // console.log(frontVsBack);
    var enterpriseSoftware = $("#enterprise-software").val();
      // console.log(enterpriseSoftware);
    var androidDevelopment= $("#android-development").val();
      // console.log(androidDevelopment);
    var evilMicrosoft = $("#evil-microsoft").val();
      // console.log(evilMicrosoft);
    var wordpressBusinessDevelopment = $("#wordpress-business-development").val();
      // console.log(wordpressBusinessDevelopment);
    var dynamicWebApps = $("#dynamic-web-apps").val();
      // console.log(dynamicWebApps);

    // branching tree goes here
    if (frontVsBack === "1") {
      $("#results").show();
      $(".cssDesign").show();
      $(".firstName").text(firstName);
      $(".idealResult").text("CSS/Design");
    } else {
      if (enterpriseSoftware === "Yes"){
        if (androidDevelopment === "Yes" && evilMicrosoft === "No"){
          $("#results").show();
          $(".androidDevelopment").show();
          $(".firstName").text(firstName);
          $(".idealResult").text("Java/Android");
        } else if (androidDevelopment === "No" && evilMicrosoft === "Yes") {
          $("#results").show();
          $(".evilMicrosoft").show();
          $(".firstName").text(firstName);
          $(".idealResult").text("C#/.NET");
        } else {
          $("#results").show();
          $(".androidDevelopment").show();
          $(".evilMicrosoft").show();
          $(".firstName").text(firstName);
          $(".idealResult").text("Java/Android");
        };
      } else {
        if (androidDevelopment === "Yes" && evilMicrosoft === "No"){
          $("#results").show();
          $(".androidDevelopment").show();
          $(".firstName").text(firstName);
          $(".idealResult").text("Java/Android");
        } else if (androidDevelopment === "No" && evilMicrosoft === "Yes") {
          $("#results").show();
          $(".evilMicrosoft").show();
          $(".firstName").text(firstName);
          $(".idealResult").text("C#/.NET");
        } else if (androidDevelopment === "Yes" && evilMicrosoft === "Yes"){
          $("#results").show();
          $(".androidDevelopment").show();
          $(".evilMicrosoft").show();
          $(".firstName").text(firstName);
          $(".idealResult").text("Java/Android");
        } else {
          if (wordpressBusinessDevelopment !== "4" && dynamicWebApps === "No") {
            $("#results").show();
            $(".wordpressBusinessDevelopment").show();
            $(".firstName").text(firstName);
            $(".idealResult").text("PHP/Drupal");
          } else if (wordpressBusinessDevelopment !== "4" && dynamicWebApps === "Yes") {
            $("#results").show();
            $(".wordpressBusinessDevelopment").show();
            $(".dynamicWebApps").show();
            $(".firstName").text(firstName);
            $(".idealResult").text("PHP/Drupal");
          } else if (wordpressBusinessDevelopment === "4" && dynamicWebApps === "Yes") {
            $("#results").show();
            $(".dynamicWebApps").show();
            $(".firstName").text(firstName);
            $(".idealResult").text("Ruby/Rails");
          } else if (wordpressBusinessDevelopment === "4" && dynamicWebApps === "No") {
            $("#results").show();
            $(".noResults").show();
            $(".idealResult").text("You've indicated that you're not interested in any of the choices. Perhaps you'd like to consider something other than programming?");
          };
        };
      };
    };

    event.preventDefault();
  });
});
