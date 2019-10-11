// //player object

// const player={ 
// 	character: $('#player'),
// 	playerPos: 0
// }

// console.log(player)

// const ai={
// 	character: $('#ai'),
// 	aiPos: 0
// }


// console.log(ai)

// let playerPosition =0;
// let aiPosition =0;

// let x=0




// console.log(x)
// //move the player function

// player.character.click(function(){
// 	console.log($(this))
// 	$(this).animate({
// 		'left': (playerPosition+=100)+'px'
// 	})
// 	player.playerPos=playerPosition
// 	result()
// 	console.log('this is the current value of player position: ' +playerPosition)

	
// })




// const aiMove=(x) => {
	
	

// 	if(ai.aiPos<1000){

// 		// $(".level").change(function(){
// 		// let x=$(this).val()
// 		// // console.log($(this).value)
// 		// console.log(x)
// 		// y=x
		
// 		// })
// 		// console.log(y)
		
// 		console.log(x)
// 		ai.character.animate({
// 			'left':(aiPosition+=x)+"px"
// 		})
	

// 	} else {
// 	return true
// 	}
// 	ai.aiPos=aiPosition
// 	setTimeout(aiMove,500)
// 	result()
// }

// $("#start").click(function(){
		
// 		aiMove()
		
// })

	 



// const result =() =>{
// 	if (player.playerPos ===1000) {
// 		alert("player won!")
// 		return true
// 	}
// 	if(ai.aiPos===1000){
// 	alert('ai won')
// 	return true
// 	}
// }

//-------------------------------------


const player={ 
	character: $('#player'),
	playerPos: 0
}

console.log(player)

const ai={
	character: $('#ai'),
	aiPos: 0
}


console.log(ai)

let playerPosition =0;
let aiPosition =0;

let x=0

function level (){$(".level").change(function(){
	let x=$(this).val()
		// console.log($(this).value)

	})
}
console.log(x)

// move the player function

player.character.click(function(){
	console.log($(this))
	$(this).animate({
		'left': (playerPosition+=100)+'px'
	})
	player.playerPos=playerPosition
	result()
	console.log('this is the current value of player position: ' +playerPosition)

	
})



const aiMove=() => {
	
	

	if(ai.aiPos<1000){
		
		
		ai.character.animate({
			'left':(aiPosition+=x)+"px"
		})
	

	} else {
	return true
	}
	ai.aiPos=aiPosition
	setTimeout(aiMove,500)
	result()
}

$("#start").click(function(){
		
		aiMove()
		
})

	 



const result =() =>{
	if (player.playerPos ===1000) {
		alert("player won!")
		return true
	}
	if(ai.aiPos===1000){
	alert('ai won')
	return true
	}
}