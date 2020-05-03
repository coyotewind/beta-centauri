// make the canvas grid

const count = 64;
const grid = $('.grid');

function makeGrid() {

  for ( let i = 0; i < count; i = i + 1 ) { 
    const cell = $('<div class="cell">');
    grid.append(cell);
  }

}
makeGrid()


// make the color palette
 
function makePalette() {

  const pickColor = ['black','brown','red','orange','yellow','green','blue','indigo','violet']
  const palette = $('.palette');

  for ( let i = 0; i < pickColor.length; i = i + 1 ) {
    const button = $('<button>').css('background-color', pickColor[i]);
    palette.append(button);
  }

  $('.palette button').first().addClass('active');

}
makePalette();


// define what happend when the palette is clicked

function onPaletteClick() {

  $('.palette button').removeClass('active');
  $(this).addClass('active'); 
  // targets specific button clicked instead of all buttons

}
$('.palette button').click(onPaletteClick);


// define what happens when grid is clicked

// function onGridClick() {

//   const cellColor = $('.palette button.active').css('background-color');

//   if (cellColor === $(this).css('background-color')) {
//     $(this).css('background-color', '' );
//   } else {  
//     $(this).css('background-color',cellColor); 
//   }

// }
// $('.grid .cell').click(onGridClick);


// define what happens clear button is clicked

function onClearClick() {

  $('.grid .cell').css('background-color', '');

}
$('.controls .clear').click(onClearClick);


// define what happens fill all button is clicked

function onFillAllClick() {

  const cellColor = $('.palette button.active').css('background-color');
  $('.grid .cell').css('background-color',cellColor); 
  // targets all cells

}
$('.controls .fill-all').click(onFillAllClick);


function onFillEmptyClick() {

  const cellColor = $('.palette button.active').css('background-color');
  const elements = $('.grid .cell');

  for (let i = 0; i < elements.length; i = i + 1) {
    let element = $( elements[i] );
    if ($(element).css('backgroundColor') == 'rgba(0, 0, 0, 0)') {
      $(element).css('backgroundColor', cellColor);
    }
  }

}
$('.controls .fill-empty').click(onFillEmptyClick);

// creates click and drag when grid is entered

function onGridEnter() {
  
    let  mouseIsDown = false;
    const cellColor = $('.palette button.active').css('background-color');

    // runs this function when entering a cell
    // checks if mouse if down or not

    $('.grid .cell').mouseenter(function () {
      if (mouseIsDown) {
        $(this).css('background-color',cellColor);
      } else {
        mouseIsDown = false;
      }
    });

    // sets mouse down as true

    $('.grid .cell').mousedown(function () {
      mouseIsDown = true;
      $(this).css('background-color',cellColor);
    });

    // sets mouse down as false

    $('.grid .cell').mouseup(function () {
      mouseIsDown = false;
    });

};
$('.grid').mouseenter(onGridEnter);