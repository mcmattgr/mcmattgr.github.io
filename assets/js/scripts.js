// Scripts.js


$('#drag-woman').draggable({helper:'clone'});
$('#drag-man').draggable({helper:'clone'});  // makes top images draggable

$(".quid-contain, .hostile-contain").droppable({  //makes contents in div droppable
  drop: function(e, ui) {
    var idArray = ["drag-woman", "drag-man"];$('#drag-woman').draggable({helper:'clone'});
$('#drag-man').draggable({helper:'clone'});  // makes top images draggable
    if((idArray.indexOf(ui.draggable.attr("id")) + 1) && $(this).hasClass("quid-contain")) {  //if id is dragged do this

       $('.quid-with-' + ui.draggable.attr("id").substring(5)).show().siblings().hide();

    }else if ((idArray.indexOf(ui.draggable.attr("id")) + 1) && $(this).hasClass("hostile-contain")){  // else if dragged do this

       $('.hostile-with-' + ui.draggable.attr("id").substring(5)).show().siblings().hide();
    }
  }
});
