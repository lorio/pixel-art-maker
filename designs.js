// Select color input
var color = $('#colorPicker').val(); 
// Select size input


// When size is submitted by the user, call makeGrid()
function makeGrid() {
var inX, inY, row, col, tbl, tbod;
//get value of gridHeight and gridWidth
inY = $('#inputHeight').val();
inX = $('#inputWidth').val();

tbl = $('#pixelCanvas');
//tbod = $('<tbody></tbody>');
var tbody =$('<tbody></tbody>');
tbody.appendTo(tbl);
/*  
  for (var i = 0; i <= inY; i++){
    row = $('tr');
    tbod.append(row);
 //append columns   
    for (var j = 0; j <= inX; j++) {
      col = $('td');
      row.append(col);
      }
    }*/
  };
  $('#sizePicker').submit(function (evt) {
    evt.preventDefault();
    makeGrid();
  }); 
    
      // add bg color to cell
   $('cell').click(function(evt){
       $(evt.target).css('background', color)
      });