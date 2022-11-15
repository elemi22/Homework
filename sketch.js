console.log('Loading data...');

let table;
let positionsX = [900,900,1130,1150,950];
let positionsY = [200,400,270,500,600];

const canvasWidth = window.innerWidth;
const canvasHeight = 6000; // ⚠️ size limit if too long


//https://p5js.org/reference/#/p5/loadTable
function preload() {
  table = loadTable('future_cities_data_truncated.csv', 'csv', 'header');
}

function setup() {
  createCanvas(canvasWidth, canvasHeight);
  colorMode(HSB,100);

  const barMargin = 10;
  const barHeight = 30;

  //count the columns
  print(table.getRowCount() + ' total rows in table');
  print(table.getColumnCount() + ' total columns in table');
  print('All cities:', table.getColumn('current_city'));


   drawLayout();
   //drawAxesLabels();
}



function drawLayout(){
  let maxTemp = table.getColumn('Max_Temperature_of_Warmest_Month');
  let city = table.getColumn('current_city');
  strokeWeight(5);
  line(800, 800, 1300, 800); //bottom line
  line(800, 800, 700, 75);  //left
  line(1300, 800, 1400, 75); //right
  fill(50, 70, 90,);

  textSize(40);
  fill(0,0,60);
  text('Warmest Month', 30, 50);

  const highest = Math.max(...maxTemp.values());
  const lowest = Math.min(...maxTemp.values());
  print(mouseX,mouseY);


  
  noStroke();
  for(let i = 0; i < 5; i++){
  fill(50, 70, 90,);
  let size = map(maxTemp[i],lowest,highest,200,60);   //maping the temperatures to the max and min size for the squares
  drawIcecube(positionsX[i], positionsY[i], size, city[i]);
  }

  //drawing the citynames
  push();
  for(let j = 0; j < 5; j++){
  fill(0,0,60);
  textSize(20);
  text(city[j],30,100+j*50);
  text(maxTemp[j],140,100+j*50);
  }
  pop();
}

function drawIcecube(x, y, size, names){
//drawing the icecubes and there names

  push();
  translate(x, y);
  
  rotate(random( 0.0,35.0));
  fill(50,50,100);
  square(-size/2,-size/2,size,5);

  fill(0,0,0);
  textSize(24);
  text(names,-size/2+20,-size/2+40);

  pop();
 
  
}
//Big thanx to Lea and Carina who supported me mentally and with the code and with grammar ;P 