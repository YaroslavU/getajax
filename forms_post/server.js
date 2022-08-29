export default {
	'/handler/': function({post}) {
        var log = "John", pass = "D12345";
        var login = post.login, password = post.password;
		if(login == log && password == pass){
		    return 'right';
        }
        else{
            return "wrong";
        }
	}
}