// Select color input
var color = $('#colorPicker').val(); 
// Select size input
var M = $('#inputHeight').val();
var N = $('#inputWidth').val();
//get value of gridHeight and gridWidth
// When size is submitted by the user, call makeGrid()

function makeGrid() {
  var tbl = document.getElementById('pixelCanvas');
  var tbod = document.createElement('tbody');
  var row = document.createElement('tr');
  var col = document.createElement('td');
  
  for (var i = 0; i <= M; i++){
 //   tbod.appendChild(row);
 //append columns   
    for (var j = 0; j <= N; j++) {
      row.appendChild(col);
 //     tbl.appendChild(tbod);
      }
    }
    tbod.appendChild(row); 
    tbl.appendChild(tbod);
  };
  $('#sizePicker').submit(function (evt) {
    evt.preventDefault();
    makeGrid();
  }); 
    
      // add bg color to cell
   $('cell').click(function(evt){
       $(evt.target).css('background', color)
      });