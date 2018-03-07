
var w, h, row, col, tbl, newcolor;

// When size is submitted by the user, call makeGrid()

tbl = $('#pixelCanvas');

$('#sizePicker').submit(function makegrid(evt) {
    evt.preventDefault();  
    tbl.empty();
//get value of gridHeight and gridWidth
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
 // add bg color to cell from browse color-picker

   $(tbl).on('click','td', function(fill){
    newColor = $('#colorPicker').val();
          $(fill.target).css('background-color',newColor)     
        } );
