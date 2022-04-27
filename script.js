let arr = []
let startingAcc = 115
let temp
let list
let val = startingAcc
let rectangles = []
let rectangles2 = []


function setup() {
	noStroke()
	rectMode(CENTER)
	createCanvas(4000, 1000)
	for (i = 0; i < 2000; i++) {
		arr.push(i)
		rectangles[i] = new Rectangle(i * 2, height, 1, i * 2)
		rectangles2[i] = new Rectangle2(i * 2, height, 1, i * 2)
	}
	list = shuffle(arr)
}

function draw() {
	if (val > 1) {
		val -= 3
	} else {
		val = 1
	}

	background('black')
	for (i = 0; i < list.length; i++) {
		rectangles[i].show(i, height, 0.2, list[i], 60)
		// fill(i/5, 255, i/2)
		// rect(i*2, height, 1, list[i]*2)
		if (list[i] < list[i - val]) {
			rectangles2[i].show(i, height, 0.2, list[i], 60)
			temp = list[i]
			list[i] = list[i - val]
			list[i - val] = temp

		}
	}
  
}

function keyPressed() {
	if (keyCode === 13) {
		list = shuffle(arr)
		val = startingAcc
	}
}


class Rectangle {
	constsructor(x, y, w, h, c) {
		this.color = c
		this.x = x
		this.y = y
		this.w = w
		this.h = h
	}

	show(x, y, w, h, c) {
		rectMode(CENTER)
    noStroke()
		this.color = c
		this.x = x
		this.y = y
		this.w = w
		this.h = h
		fill('white')
		rect(this.x, this.y, this.w, this.h)
	}
}

class Rectangle2 {
	constsructor(x, y, w, h) {
		this.x = x
		this.y = y
		this.w = w
		this.h = h
	}

	show(x, y, w, h) {
		rectMode(CENTER)
    noStroke()
		this.x = x
		this.y = y
		this.w = w
		this.h = h
		fill('red')
		rect(this.x, this.y, this.w, this.h)
	}
}