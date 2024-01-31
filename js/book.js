//  example on class with constructor
class Book {
    // non-param constr
    constructor() {
        // prop init
        this.title = "C prog";
        this.author = "DR";
        this.price= "340";

    }
    getBookInfo(){
        return `${this.title} &nbsp; ${this.author} &nbsp; ${this.price}`;
    }
}