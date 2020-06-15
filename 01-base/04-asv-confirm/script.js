/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function myFunc () {

    let age = prompt("How old are you ?");
    let sex = prompt("Are you male or female ?");
    let city = prompt("what city are you from ?");

    let result = confirm("you are " + age + " years old, you are a " + sex + " and you come from " + city + "?");

    if (result) {
        confirm("you are " + age + " years old, you are a " + sex + " and you come from " + city + "?");
    } else {
        myFunc();
    }

})();
