class Zate{
    constructor(year, month, day) {
        this.year = year;
        this.month = month;
        this.day = day;        
    }
    static year(year, month, day) {
        var date = new Date(year, month, day);
        var n = date.getFullYear();
        return n;
    }
    static monthNo(year, month, day) {
        var date = new Date(year, month, day);
        var n = date.getMonth();
        return n;
    }
    static dayNo(year, month, day) {
        var date = new Date(year, month, day);
        var n = date.getDate();
        return n;
    }
    static weekNo(year, month, day) {
        var date = new Date(year, month, day);
        var n = date.getDay();
        return n;
    }
    static day(year, month, day) {
        var days = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
        var date = new Date(year, month, day);
        var n = date.getDay();
        return days[n];
    }
    static month(year, month, day) {
        var months = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];
        var date = new Date(year, month, day);
        var n = date.getMonth();
        return months[n - 1];
    }
}

var zate = new Zate(2022, 02, 24);
console.log(Zate.year(2022, 02, 24));
console.log(Zate.monthNo(2022, 02, 24));
console.log(Zate.dayNo(2022, 02, 24));
console.log(Zate.weekNo(2022, 02, 24));
console.log(Zate.day(2022, 02, 24));
console.log(Zate.month(2022, 02, 24));