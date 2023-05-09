const secondsId = document.getElementById("seconds");
const minutesId = document.getElementById("minutes");
const hoursId = document.getElementById("hours");

let running = false;
let intervalId; 
const start = () =>{
	try{
		if(!running)
		{
			let secondsInt = parseInt(secondsId.innerText);
			let minutesInt = parseInt(minutesId.innerText);
			let hoursInt = parseInt(hoursId.innerText);
			
			intervalId = setInterval(()=>{
				secondsInt++;
				secondsId.innerText = secondsInt;

				if(secondsInt > 59){
					secondsInt = 0;
					secondsId.innerText = secondsInt;
					minutesInt++;
					minutesId.innerText = minutesInt;
				}
			}, 10);
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
