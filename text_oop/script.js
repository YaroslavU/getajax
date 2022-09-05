class Text {
    construclor(text) {
        this.text = text;
    }
    static textLenght(text) {
        return text.length;
    }
    static textLetters(text) {
        var letters = text.match(/[a-zA-Z]/g).length
        return letters;
    }
    static textSpace(text) {
        var space = text.match(/\s/g).length
        return space;
    }
    static textSymbols(text) {
        var symbols = text.length - (text.match(/\s/g).length);
        return symbols;
    }
    static textArr(text) {
        var clear = text.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
        return clear.split(' ');
    }
    static textArrSent(text) {
        return text.split('.');
    }

}
var text = new Text('hello')
console.log(Text.textLenght('Hello, my name is Yarik. I do my best, to becom a programmer'));
console.log(Text.textLetters('Hello, my name is Yarik. I do my best, to becom a programmer'));
console.log(Text.textSpace('Hello, my name is Yarik. I do my best, to becom a programmer'));
console.log(Text.textSymbols('Hello, my name is Yarik. I do my best, to becom a programmer'));
console.log(Text.textArr('Hello, my name is Yarik. I do my best, to becom a programmer'));
console.log(Text.textArrSent('Hello, my name is Yarik. I do my best, to becom a programmer'));