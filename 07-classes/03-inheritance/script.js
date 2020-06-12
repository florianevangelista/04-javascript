/* becode/javascript
 *
 * /07-classes/03-inheritance/script.js - 7.3: héritage
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    class Animal {
        constructor(name) {
            this.name = name;
        }

        get sayHello() {
            return `${this.constructor.greeting}! I'm ${this.name}!`;
        }
    }
    
    class Dog extends Animal {
        constructor(name) {
            super(name);
        }
        
        static get greeting() {
            return "Hello how are you ?";
        }
    } 
    
    class Cat extends Animal {
        constructor(name) {
            super(name);
        }
        
        static get greeting() {
            return "Hello how are you ?";
        }
    } 
    
    document.getElementById("run").addEventListener("click", ()=>{
        
        const dog = new Dog('Rex');
        const cat = new Cat('Simba');
    
        console.log(dog.sayHello);
        console.log(cat.sayHello);
    });
})();
