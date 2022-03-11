
  
// $(document).ready(function(){
//     $("#development-image").click(function(){
//       $("#development-image").slideDown('1500').hide('1000');
//       $("#development").show('1500');
//     });
//     $("#development").click(function(){
//       $("#development").slideUp('1500');
//       $("#development-image").slideDown('1500');
    // });
    $(document).ready(function() {
    $("#img1").click(function() {
        $("#img1").toggle();
          $("#design").toggle();
        });

        $("#img2").click(function() {
          $("#img2").toggle();
            $("#develop").toggle();
          });

          $("#develop").click(function() {
            $("#img2").toggle();
              $("#develop").toggle();
            });

            $("#img3").click(function() {
              $("#img3").toggle();
                $("#product").toggle();
              });
              $("#product").click(function() {
                $("#img3").toggle();
                  $("#product").toggle();
                });
                
