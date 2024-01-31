//  example on class with constructor
class Book {
    // param constr
    constructor(title,author,price) {
        // prop init
        this.title = title;     //prop=param
        this.author = author;
        this.price= price;

    }
    getBookInfo(){
        return `${this.title} &nbsp; ${this.author} &nbsp; ${this.price}`;
    }
}