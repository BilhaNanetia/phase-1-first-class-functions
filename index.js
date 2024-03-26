
 const spy = chai.spy();
 function receivesAFunction (callback) {
    callback();       //Calls the callback function
 }
 receivesAFunction(spy);

 
 function returnsANamedFunction () {
    function greet (){              //Defines a named function
        return "Hello, World!";
    }
    return greet;          //Return the named function
 }
 const fn = returnsANamedFunction();
 const result = fn ();

 
 function returnsAnAnonymousFunction () {
    return function () {
        console.log("This is an anonymous function");
    } 
 }   
 fn();    //Output: This is an anonymous function!

                  
 
