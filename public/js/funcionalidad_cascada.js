$(function () {
  var down = false;
  $("#secTrabajoInv").click(function() {
    down = !down;
    if(down){
      $( "#hideTrabajo" ).hide( 1000, function() {
        //$( this ).remove();
      });
    }else{
      $( "#hideTrabajo" ).show( 1000, function() {
        //$( this ).remove();
      });
    }

  });
})
