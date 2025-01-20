/**
 * this module exports multiple functions from single file
 * @author koushik
 */
module.exports.MyMod = function() {
    /**
     * the main function exported as module
     * 
     * @returns a series of functions which are exported
     */
    this.funa = function() {
        console.log("First function");
    }
    this.funb = function() {
        console.log("Second function");
    }
    this.func = function() {
        return Math.sqrt(9);
    }
    this.fund = function(a) {
        return Math.log(a);
    }
    this.Books = class {
        constructor(name, auth) {
            this.name = name;
            this.auth = auth;
        }
    }
}