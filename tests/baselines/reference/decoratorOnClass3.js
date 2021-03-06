//// [decoratorOnClass3.ts]
declare function dec<T>(target: T): T;

export
@dec
class C {
}

//// [decoratorOnClass3.js]
var __decorate = this.__decorate || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var C = (function () {
    function C() {
    }
    C = __decorate([
        dec
    ], C);
    return C;
})();
