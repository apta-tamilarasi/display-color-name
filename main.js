let color=["red", "aqua", "yellow", "purple", "brown", "green", "gray","greenyellow","black","pink", "blue","orange"]
let a=document.getElementById("color")



function start(){
	var b=Math.floor(Math.random()*color.length)
	var c=a.innerHTML=color[b]
	a.style.color=c

}