function makeid(l) {
  // write your code here
	let res=''
	let char='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
	for(let i=0;i<l;i++){
		const randomIndex = Math.floor(Math.random() * char.length);
        res += char[randomIndex];
	}
	return res;
}

// Do not change the code below.
const l = prompt("Enter a number.");
alert(makeid(l));
