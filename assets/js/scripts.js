// Scripts.js


$('#element1').draggable({helper:'clone'});
$('#element2').draggable({helper:'clone'});
$("#images").droppable({
  drop: function(e, ui) {
    if((ui.draggable.attr("id")) == 'element1'){
       $('.element2').hide();
       $('.element1').show();
    }else if((ui.draggable.attr("id")) == 'element2'){
       $('.element1').hide();
       $('.element2').show();
    }
  }
});
