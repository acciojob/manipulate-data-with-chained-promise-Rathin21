//your JS code here. If required.
let output = document.querySelector("#output");
function numArray(){
	return new Promise((resolve,reject)=>{
		let arr=[1,2,3,4];
		setTimeout(()=>{
			resolve(arr);
		},3000);
	});
}
function filterOdd(arr){
	return new Promise((resolve,reject)=>{
		let evenArr=arr.filter(num => num%2 == 0);
	setTimeout(()=>{
		resolve(evenArr);
	},1000);
	});
}

function MultiplyBy2(arr){
	return new Promise((resolve,reject)=>{
        let newArr=arr.map(myFunc);
        function myFunc(num){
		   return num *=2;
	    }
		setTimeout(()=>{
		resolve(newArr);
	},2000);
});
}

numArray().then((arr)=>filterOdd(arr))
.then((evenArr)=>{
    
	output.textContent = evenArr;
	
	return MultiplyBy2(evenArr);
}).then((newArr)=>{
	console.log(newArr)
	// output.textContent += newArr;
})






















