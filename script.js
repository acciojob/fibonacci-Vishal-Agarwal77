function fibonacci(num) {
// your code here
	if(num===0){
		console.log(0);
		return ;
	}
	else if(num===1){
		console.log(1);
		return ;
	}
	let prev=0;
	let curr=1;
	let next=0;
	for(let i=2;i<=num;i++){
		next=curr+prev;
		prev=curr;
		curr=next;
	}
	console.log(next);
	return ;
}
module.exports = fibonacci;
