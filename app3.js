
function getRandomBetween(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
}

console.log(getRandomBetween(20, 42));

//Стоки
const  name = "Феодор";
const age = 47;

const output = "Привет, меня зовут " + name + " и мой возраст " + age + " лет.";
console.log(output);

const  name2 = "Феодор";
const age2 = 47;

function getAge2() {
    return age2
}

const output2 = `Привет, меня зовут ${name2} мой возраст ${age2 < 30 ? "A" : "B"} лет`
console.log(output2);


const output3 = `
<div>Это див</div>
<p>Это абзац</p>
`
console.log(output3);


const name4 = "Феодор";

console.log(name4.length);
console.log(name4.toUpperCase());
console.log(name4.toLowerCase());
console.log(name4.charAt(2));
console.log(name4.indexOf("дор"));
console.log(name4.startsWith("Фе"));
console.log(name4.endsWith("ор"));
console.log(name4.repeat(3));

const string = "       map      ";
console.log(string.trim());
console.log(string.trimLeft());
console.log(string.trimRight());


function logPerson(s, name5, age5) {
    if (age5 < 0) {
        age5 = "Ещё не родился"
    }
    return `${s[0]}${name5}${s[1]}${age5}${s[2]}`
}

const personName5 = "Феодор";
const personName6 = "Виктор";
const getAge5 = 47;
const getAge6 = -10;
const output5 = logPerson`Имя: ${personName5}, Возраст: ${getAge5}`;
const output6 = logPerson`Имя: ${personName6}, Возраст: ${getAge6}`;
console.log(output5);
console.log(output6);

