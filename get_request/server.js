export default {
	'/handler/': function({get}) {
        let arr = ['user1', 'user2', 'user3'];
        let obj = {1: arr[0], 2: arr[1], 3: arr[2]};
		return obj[get.key];
	}
} 