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
		let oddArr=arr.filter(num => num%2 != 0);
	setTimeout(()=>{
		resolve([oddArr,arr]);
	},1000);
	});
}

function MultiplyBy2(arr){
	return new Promise((resolve,reject)=>{
        let newArr=arr.map(myFunc);
        function myFunc(num){
		    if(num%2==0)
			    return num *=2;
            else 
                return num;
	    }
		setTimeout(()=>{
		resolve(newArr);
	},2000);
});
}

numArray().then((arr)=>filterOdd(arr))
.then((result)=>{
    
	output.textContent = result[0];
	return MultiplyBy2(result[1]);
}).then((newArr)=>{
	output.textContent += newArr;
})






















