// let name = "abishek       ";

// console.log(name.truelength);

let myHeros = ["thor", "spidernman"];

let heroPower = {
  thor: "hammer",
  spiderman: "sling",

  getSpiderPower: function () {
    console.log(`Spidy power is ${this.spiderman}`);
  },
};

Object.prototype.abby = function () {
  console.log(`abby is there`);
};

Array.prototype.heyAbby = function () {
  console.log(`New hello`);
};

// heroPower.heyAbby()
// myHeros.heyAbby();

// inheritance

const user = {
  name: "abby",
  email: "abby@msf.com",
};

const teacher = {
  makeVideo: true,
};

const teachingSupport = {
  isAvailabe: false,
};

const TASupport = {
  makeAssisgnment: "Assignment",
  fullTime: true,
  __proto__: teachingSupport,
};

teacher.__proto__ = user;

// modern syntax

Object.setPrototypeOf(teachingSupport, teacher);

let anotherUsername = "abbyxss  ";

String.prototype.trueLength = function () {
  console.log(`${this}`);
  console.log(`True lenght is: ${this.trim().length}`);
};

anotherUsername.trueLength();

"abx  ".trueLength()
"man".trueLength()
