const person = {
    firstName: "Heba",
    lastName: "Ghanim",
    getFullName: function(){
        console.log(this);
        return this.firstName + " " + this.lastName;
    }
}


function sum(x, y){
    console.log(this)
    return x + y;
}
//console.log(sum(3, 5));


//console.log(person.getFullName());
this.b = 10;

console.log(this == window);