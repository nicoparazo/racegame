// const player ={
// 	character: $('#car')
// 	playerPos:0
// }

// let playerPosition =0;

let x=parseInt($("#player").css("left"))
console.log(x)

console.log("hello")

$('body').keydown(function(e){
	console.log(e.which)
	if(e.which==37){
		$("#player").css('left',x-5)
		x=parseInt($("#player").css("left"))
		console.log(x)
	}

	if(e.which==39){
		$("#player").css("left",x+5)
		x=parseInt($("#player").css("left"))
		console.log(x)
	}

	if(x==170 || x==520) {
		alert("Car Crash!!")
	}

	console.log(e)
})
