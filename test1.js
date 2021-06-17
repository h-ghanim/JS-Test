const person = {
    firstName: "Heba",
    lastName: "Ghanim",
    getFullName:function (){
        return this.firstName + " " + this.lastName;
    }
}

console.log(person.getFullName());