$(document).ready(function(){
    $("#dotext1").hide();
    $("#dotext2").hide();
    $("#dotext3").hide();
    $("#dotext4").hide();
     $(".imagetoggle0 , .imagetoggle1").click(function(){
     $("#dotext").toggle();
     $(".imagetoggle0").toggle();
     });
     $(".imagetoggle2 , .imagetoggle3").click(function(){
     $("#dotext2").toggle();
     $(".imagetoggle2").toggle();
     });
     $(".imagetoggle4 , .imagetoggle5").click(function(){
     $("#dotext3").toggle();
     $(".imagetoggle4").toggle();
     });
     $(".imagetoggle6 , .imagetoggle7").click(function(){
     $("#dotext4").toggle();
     $(".imagetoggle6").toggle();
     });
   });
