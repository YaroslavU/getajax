function digital_root(n) {
  
    var sum = 0, tmp;
    while (n > 9) {
        while (n) {
            tmp = n % 10;
            n = (n - tmp) / 10;
            sum += tmp;
        }
        n += sum;
        sum = 0;
    }
    return n;  
}
console.log(digital_root(887));
