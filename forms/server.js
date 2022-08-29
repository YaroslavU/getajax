export default {
	'/handler/': function({get}) {
		var day = get.day, mounth = get.mounth, year = get.year;
        if(day > 0 && day <= 31 && mounth > 0 && mounth <= 12 && year > 1900 && year <= 2022){
                    return 'thank you. you entered: ' + day + ', ' + mounth + ', ' + year;
        }
        else {
            return "can you, please, just enter a normal date?"
        }
	}
}