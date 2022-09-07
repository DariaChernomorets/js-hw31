(function () {
    'use strict'


    const bind = function (fn,thisArg,...args) {


        return function() {
            fn.call(thisArg,...args)
        }
    }
    const Dasha = {
        color: 'blue',
        size: 'small'
    };

    const Masha = {
        color: 'red',
        size: 'big'
    };

    function f1(a, b, c) {
        console.log('f1 ' + this.color + ' ' + this.size + a + b + ' ' + c);
    }



    console.log(bind(f1,Dasha,1,5,3))

    const newF1 = bind(f1,Masha,12,8,7)
    newF1()
})()

