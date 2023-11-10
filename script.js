function fibonacci(num) {
// your code here
	if(num===0){
		return 0;
	}
	else if(num===1){
		return 1;
	}
	let prev=0;
	let curr=1;
	let next=0;
	for(let i=2;i<num;i++){
		next=curr+prev;
		prev=curr;
		curr=next;
	}
	return next;
}
module.exports = fibonacci;
