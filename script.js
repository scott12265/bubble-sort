let arr = []
let temp
let list

function setup(){
  frameRate(60)
  noStroke()
  rectMode(CENTER)
  createCanvas(2300,600)
  for(i = 0; i < 1000; i++){
    arr.push(i)
  }
  list = shuffle(arr)
}

function draw(){
  background(60)
     for(i = 0; i < list.length; i++){
    fill('green')
    rect(i*2, height, 1, list[i])
    if(list[i] < list[i - 1]){
  temp = list[i]
  list[i] = list[i - 1]
  list[i - 1] = temp
  
    } 
  }
  console.log('on')
}

 


