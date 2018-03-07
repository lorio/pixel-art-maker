// Select color input
var color = $('#colorPicker').val(); 
// Select size input


// When size is submitted by the user, call makeGrid()

var w, h, row, col, tbl;
//get value of gridHeight and gridWidth

tbl = $('#pixelCanvas');


$('#sizePicker').submit(function makegrid(evt) {
    evt.preventDefault();  
    tbl.empty();
  h = $('#inputHeight').val();
  w = $('#inputWidth').val();
  for (var x = 1; x <= h; x++){
    row = ('<tr>');
    tbl.append(row);
 //append columns   
    for (var y = 1; y <= w; y++) {
      col = ('<td>');
      tbl.find('tr').last().append(col);
      }
    }

  });

   

    
      // add bg color to cell
 //  $('cell').click(function(evt){
  //     $(evt.target).css('background', color)
 //     });