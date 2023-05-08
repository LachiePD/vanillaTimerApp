const secondsId = document.getElementById("seconds");
let running = false;
let intervalId; 
const start = () =>{
	try{
		if(!running)
		{
			console.log("initiated")
			let secondsInt = parseInt(secondsId.innerText);
			intervalId = setInterval(()=>{
				secondsInt++;
				secondsId.innerText = secondsInt;
			}, 1000);
			running =true;
		}
	}catch(err){console.log(err)}
}


const reset = () =>{
	stop();
	secondsId.innerText = 0;

}


const stop = () =>{
	running = false;
	clearInterval(intervalId);
}


document.getElementById("buttonStart").addEventListener("click", start);
document.getElementById("buttonReset").addEventListener("click", reset);
document.getElementById("buttonStop").addEventListener("click", stop);
