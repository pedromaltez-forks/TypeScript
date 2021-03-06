//// [numericIndexerConstrainsPropertyDeclarations2.ts]
// String indexer providing a constraint of a user defined type

class A {
    foo(): string { return ''; }
}

class B extends A {
    bar(): string { return ''; }
}

class Foo {
    [x: number]: A;
    1.0: A; // ok
    2.0: B; // ok
    "2.5": B // ok
    3.0: number; // error
    "4.0": string; // error
}

interface Foo2 {
    [x: number]: A;
    1.0: A; // ok
    2.0: B; // ok
    "2.5": B // ok
    3.0: number; // error
    "4.0": string; // error
}

var a: {
    [x: number]: A;
    1.0: A; // ok
    2.0: B; // ok
    "2.5": B // ok
    3.0: number; // error
    "4.0": string; // error
};

// error
var b: { [x: number]: A } = {
    1.0: new A(), 
    2.0: new B(), 
    "2.5": new B(),
    3.0: 1,
    "4.0": ''
}

//// [numericIndexerConstrainsPropertyDeclarations2.js]
// String indexer providing a constraint of a user defined type
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var A = (function () {
    function A() {
    }
    A.prototype.foo = function () { return ''; };
    return A;
})();
var B = (function (_super) {
    __extends(B, _super);
    function B() {
        _super.apply(this, arguments);
    }
    B.prototype.bar = function () { return ''; };
    return B;
})(A);
var Foo = (function () {
    function Foo() {
    }
    return Foo;
})();
var a;
// error
var b = {
    1.0: new A(),
    2.0: new B(),
    "2.5": new B(),
    3.0: 1,
    "4.0": ''
};
