
const Number_r = (function(menssage){
    const methods = {
      public: {},
      private: {}
    };

    const public = methods.public;
    const private = methods.private;

    private.values = {
      "I": 1,
      "V": 5,
      "X": 10,
      "L": 50,
      "C": 100,
      "D": 500,
      "M": 1000
    };

    private.number = /([IVXLCDM]+)/g;
    
    private.test = function(number) {
      
    };

    public.decimal = function(number) {
      const val = number.split("");
      var decimal = 0;
      
      for(let i = 0; i < val.length; i++) {
        if( private.values[ val[i] ] < private.values[ val[i + 1] ] ) {
          const num1 = val.splice(i, 1)[0];
          const num2 = val.splice(i, 1)[0];
          decimal += private.values[ num2 ] - private.values[ num1 ];
          i--;
        }else decimal += private.values[ val[i] ];
      };

      return decimal;
    };

    return public;
})(console.log);

//console.log(Number_r.decimal("XXX"))