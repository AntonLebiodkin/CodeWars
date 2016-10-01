/**
 * Created by root on 01.10.16.
 */
// https://www.codewars.com/kata/526dad7f8c0eb5c4640000a4/train/javascript
/*
 Create a Vector object that supports addition, subtraction,
 dot products, and norms. So, for example:

 var a = new Vector([1,2,3]);
 var b = new Vector([3,4,5]);
 var c = new Vector([5,6,7,8]);
 a.add(b); // should return Vector([4,6,8])
 a.subtract(b); // should return Vector([-2,-2,-2])
 a.dot(b); // should return 1*3+2*4+3*5 = 26
 a.norm(); // should return sqrt(1^2+2^2+3^2)=sqrt(14)
 a.add(c); // throws an error
 If you try to add, subtract, or dot two vectors with different lengths,
 you must throw an error!

 Also provide:

 a toString function, so that using the vectors from above,
 a.toString() === '(1,2,3)' (in Python,
 this is a __str__ method, so that str(a) == '(1,2,3)')
 an equals function, so that two vectors who have the same components are equal
 The test cases will utilize the user-provided equals method.

*/

var Vector = function (components) {
    this.components = components;
};

Vector.prototype.isSameLengthWith = function (vector) {
    return this.components.length == vector.components.length;
};
Vector.prototype.add = function (vector) {
    if (!this.isSameLengthWith(vector)){
        throw Error();
    }
    var components = [];
    this.components.map(function (val, i) {
        components.push(val + vector.components[i]);
    });
    return new Vector(components);
};

Vector.prototype.subtract = function (vector) {
    if (!this.isSameLengthWith(vector)){
        throw Error();
    }
    var self = this;
    var components = [];
    this.components.map(function (val, i) {
        components.push(val - vector.components[i]);
    });
    return new Vector(components);
};

Vector.prototype.dot = function (vector) {
    var dot = 0;
    if (!this.isSameLengthWith(vector)){
        throw Error();
    }
    this.components.map(function (val, i) {
        dot += val * vector.components[i];
    });
    return dot;
};

Vector.prototype.norm = function () {
    var norm = 0;
    this.components.map(function (val, i) {
        norm += val;
    });
    return Math.sqrt(norm);
};

Vector.prototype.equals = function (vector) {
    var equals = true;
    if (!this.isSameLengthWith(vector)){
        equals = false;
    }
    this.components.map(function (val, i) {
        if (val != vector.components[i]){
            equals = false;
        }
    });
    return equals;
};

Vector.prototype.toString = function () {
    var vectorToString = '';
    if (!this.components)
        vectorToString = '()';
    return '(' + this.components.toString() + ')';
};
