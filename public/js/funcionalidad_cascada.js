$(function () {
  var down1 = false;
  $("#secTrabajoInv").click(function() {
    down1 = !down1;
    if(down1){
      $( "#hideTrabajo" ).show( 1000, function() {
        //$( this ).remove();
      });
    }else{
      $( "#hideTrabajo" ).hide( 1000, function() {
        //$( this ).remove();
      });
    }
  });

  var down2 = false;
  $("#secEvaluacion").click(function() {
    down2 = !down2;
    if(down2){
      $( "#hideEvaluacion" ).show( 1000, function() {
        //$( this ).remove();
      });
    }else{
      $( "#hideEvaluacion" ).hide( 1000, function() {
        //$( this ).remove();
      });
    }
  });

  var down3 = false;
  $("#seccion1").click(function() {
    down3 = !down3;
    if(down3){
      $( "#rubro1" ).show( 500, function() {
        //$( this ).remove();
      });
    }else{
      $( "#rubro1" ).hide( 500, function() {
        //$( this ).remove();
      });
    }
  });

  var down4 = false;
  $("#seccion2").click(function() {
    down4 = !down4;
    if(down4){
      $( "#rubro2" ).show( 500, function() {
        //$( this ).remove();
      });
    }else{
      $( "#rubro2" ).hide( 500, function() {
        //$( this ).remove();
      });
    }
  });

  var down5 = false;
  $("#seccion3").click(function() {
    down5 = !down5;
    if(down5){
      $( "#rubro3" ).show( 500, function() {
        //$( this ).remove();
      });
    }else{
      $( "#rubro3" ).hide( 500, function() {
        //$( this ).remove();
      });
    }
  });

  var down6 = false;
  $("#seccion4").click(function() {
    down6 = !down6;
    if(down6){
      $( "#rubro4" ).show( 500, function() {
        //$( this ).remove();
      });
    }else{
      $( "#rubro4" ).hide( 500, function() {
        //$( this ).remove();
      });
    }
  });

  var down7 = false;
  $("#seccion5").click(function() {
    down7 = !down7;
    if(down7){
      $( "#rubro5" ).show( 500, function() {
        //$( this ).remove();
      });
    }else{
      $( "#rubro5" ).hide( 500, function() {
        //$( this ).remove();
      });
    }
  });

  var down8 = false;
  $("#seccion6").click(function() {
    down8 = !down8;
    if(down8){
      $( "#rubro6" ).show( 500, function() {
        //$( this ).remove();
      });
    }else{
      $( "#rubro6" ).hide( 500, function() {
        //$( this ).remove();
      });
    }
  });

  var down9 = false;
  $("#seccion7").click(function() {
    down9 = !down9;
    if(down9){
      $( "#rubro7" ).show( 500, function() {
        //$( this ).remove();
      });
    }else{
      $( "#rubro7" ).hide( 500, function() {
        //$( this ).remove();
      });
    }
  });

  $('#b_finalizar').click(function() {
    console.log("CALIDAD DE RESUMEN: ", $('input[name=calidad]:checked').val());
    console.log("ORIGINALIDAD: ", $('input[name=originalidad]:checked').val());
    console.log("CUANTITATIVAS: ", $('input[name=cuantitativas]:checked').val());
    console.log("CUALITATIVAS: ", $('input[name=cualitativas]:checked').val());
    console.log("MIXTAS: ", $('input[name=mixtas]:checked').val());
    console.log("TRASCENDENCIA: ", $('input[name=trascendencia]:checked').val());
    console.log("ASPECTOS ETNICOS: ", $('input[name=aspectos]:checked').val());
  });
})
