export default {
	'/handler/': function({post}) {
		var sum = Number(post.num1) + Number(post.num2) + Number(post.num3) + Number(post.num4) + Number(post.num5);
		var result = sum / 5;
		console.log(post);
		return 'form data received' + ' ' + result;
	}
}