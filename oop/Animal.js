class Animal {
    constructor(kindof, name, age, height, weight){
        this.kindof = kindof;
        this.name = name;
        this.age = age;
        this.job = height;
        this.isSleeping = weight;
    }

language(){
    console.log(`${this.kindof} says wau, wau `);
}
}

module.exports = Animal;

//new Animal('dog', 'reksis', 3, '0.5m', 5 ).language();