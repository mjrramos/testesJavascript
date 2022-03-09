// class Math {
//     sum(a, b){
//         return a + b;
//     }
// }

class Math {
    sum(a, b, callback){
        setTimeout(()=> {
            callback(a + b);
        }, 5)
    }

    multiply(a, b){
        return a * b;
    }
}

module.exports = Math;