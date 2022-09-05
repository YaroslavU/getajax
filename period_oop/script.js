class Period{
    constructor(first, second) {
        this.first = first;
        this.second = second;        
    }
    static timeDif(first, second) {
        let firstArr = first.split(':');
        let secondArr = second.split(':');
        let firstSec = firstArr[0] * 3600 + firstArr[1] * 60 + Number(firstArr[2]);
        let secondSec = secondArr[0] * 3600 + secondArr[1] * 60 + Number(secondArr[2]);
        let diff = Math.abs(firstSec - secondSec);
        let diffArr = [];
        if (diff <= 3600) {
            diffArr[0] = 0;
            diffArr[1] = Math.trunc(diff / 60);
            diffArr[2] = diff - (diffArr[1] * 60);
        } else {
            diffArr[0] = Math.trunc(diff / 3600);
            diffArr[1] = Math.trunc((diff - 3600) / 60);
            diffArr[2] = (diff - 3600) - (diffArr[1] * 60);
        }
        var difference = diffArr.join(':');
        return difference;
    }
}
var period = new Period('10:20:54', '11:30:27');

console.log(Period.timeDif('10:20:54', '11:30:27'))