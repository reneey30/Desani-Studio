$(document).ready(function(){
    $("#development-image").click(function(){
      $("#development-image").slideDown('1500').hide('1000');
      $("#development").show('1500');
    });
    $("#development").click(function(){
      $("#development").slideUp('1500');
      $("#development-image").slideDown('1500');
    });
  });
  
  $(document).ready(function(){
    $("#design-image").click(function(){
      $("#design-image").slideDown('1500').hide('1000');
      $("#design").show('1500');
    });
    $("#design").click(function(){
      $("#design").slideUp('1500');
      $("#design-image").slideDown('1500');
    });
  });
  
  $(document).ready(function(){
    $("#product-image").click(function(){
      $("#product-image").slideDown('1500').hide('1000');
      $("#product").show('1500');
    });
    $("#product").click(function(){
      $("#product").slideUp('1500');
      $("#product-image").slideDown('1500');
    });
  });

 $("#pc1").mouseenter(function(){
    $(".txt1").show(2000);
    
});
 $("#pc1").mouseleave(function(){
   $(".txt1").hide(1000);
  });


  $("#pc2").mouseenter(function(){
    $(".txt2").show(2000);
    
});
 $("#pc2").mouseleave(function(){
   $(".txt2").hide(1000);
  });


  $("#pc3").mouseenter(function(){
    $(".txt3").show(2000);
    
});
 $("#pc3").mouseleave(function(){
   $(".txt3").hide(1000);
  });


  $("#pc4").mouseenter(function(){
    $(".txt4").show(2000);
    
});
 $("#pc4").mouseleave(function(){
   $(".txt4").hide(1000);
  });



  $("#pc5").mouseenter(function(){
    $(".txt5").show(2000);
    
});
 $("#pc5").mouseleave(function(){
   $(".txt5").hide(1000);
  });



  $("#pc6").mouseenter(function(){
    $(".txt6").show(2000);
    
});
 $("#pc6").mouseleave(function(){
   $(".txt6").hide(1000);
  });
  $("#pc6").mouseenter(function(){
    $(".txt6").show(2000);
    
});
 $("#pc7").mouseleave(function(){
   $(".txt7").hide(1000);
  });
  $("#pc7").mouseenter(function(){
    $(".txt7").show(2000);  
});

 $("#pc8").mouseleave(function(){
   $(".txt8").hide(1000);
  });
  $("#pc8").mouseenter(function(){
    $(".txt8").show(2000); 
});

  function submit(fo){
    var name= document.getElementById("name").value;
    var email = document.getElementById("email").value;
    alert("submmission received" + name);
  }
}