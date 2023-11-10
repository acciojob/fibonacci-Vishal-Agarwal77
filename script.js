function fibonacci(num) {
// your code here
	if(num===0){
		return 0;
	}
	else if(num===1){
		return 0;
	}
	let prev=0;
	let curr=1;
	let next=1;
	for(let i=2;i<num;i++){
		next=curr+prev;
		prev=curr;
		curr=next;
	}
	return next;
}
module.exports = fibonacci;
