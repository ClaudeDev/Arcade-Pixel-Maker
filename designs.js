var table = $('#pixel_canvas');     //table

function makeGrid(height, width) {
	
	height = $('#input_height').val();  //number of rows 
	width = $('#input_width').val();    //number of col 
	
	table.children().remove();          //removes previous table 
	$('p').remove();		    //removes blinking p

	for (var i = 0; i < height; i++) {      //creates rows
		table.append('<tr></tr>');
	
		for (var j = 0; j < width; j++) {        //creates columns
			$('tr').last().append('<td style="background-color: #0188A5;"></td>');
		}
	}
}

$( document ).ready(function() {
	$('#sizePicker').on('submit', function(e) {
		makeGrid();
		e.preventDefault();   //prevent from submitting to the server
	});
});


table.on('click','td', function paint(colorValue) {        //color square to the assigned value

	colorValue = $('#colorPicker').val();
	$(this).css( 'background-color', colorValue );
});    

table.on('dblclick','td', function remove() {        //removes color when double clicked

	$(this).css( 'background-color', '#0188A5' );
});  
