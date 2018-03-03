// Select color input
var color = $('#colorPicker').val(); 
// Select size input
var M = $('#inputHeight').val();
var N = $('#inputWidth').val();
//get value of gridHeight and gridWidth
// When size is submitted by the user, call makeGrid()

function makeGrid() {
  var tbl = document.getElementById('table id="pixelCanvas"');
  var tbody = document.createElement('tbody');
  for (var i = 0; i <= M; i++){
    var newRow = tbl.insertRow(0);
    for (var j = 0; j <= N; j++) {
      var newCell = newRow.insertCell(0);
      }
    }
    tbl.appendChild(tbody);
  };
  $('#sizePicker').submit(function (evt) {
    evt.preventDefault()
  }); 
    makeGrid()
      // add bg color to cell
   $('cell').click(function(evt){
       $(evt.target).css('background', color)
      });