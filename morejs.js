//object oriented programming:

//PHP

// class Car {

// 	private make = "toyota"
// 	function drive(){

// 	}
// }

// var Corolla = new Car()// end PHP example


//javascript example
var Car = function (){

}

Car.drive = function (){

}

//

//class example// when you are creating a new object var make sure you capitalize the first letter;

//constructor runs immediately//
var Vehicle = function (wheels, doors){
	this.wheels = wheels;
	this.doors = doors;
}

Vehicle.drive = function (){

}

Vehicle.stop = function (){

}


var Car = new Vehicle(4, 4);
Car.drive();
Car.stop();

//prototype is specifically used for inheritance.

//this refers to the method being called.




