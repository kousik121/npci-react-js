function Books(id, name, auth) {
    this.id = id;
    this.name = name;
    this.auth = auth;
    this.toString = function () {
        return this.id + " " + this.name + " " + this.auth;
    }
}
module.exports.Books = Books;