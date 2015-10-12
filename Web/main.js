import $ from 'jquery';
import ko from 'knockout';

function namespace(name) {
    return function decorator(target) {
        console.log(target);
    }
}

@namespace("Hello")
class Something {
    sayHello() {
        console.log("Hello and then some - and more and even more - and then some");
    }
}

class SomethingElse extends Something {
	
}

let somethingElseInstance = new Something();
somethingElseInstance.sayHello();


console.log(ko);


