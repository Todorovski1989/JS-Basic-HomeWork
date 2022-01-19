console.log("HomeWork part #1:");
console.log("CREATE OBJECT ANIMAL WITH 2 PROPERTIES AND 1 METHOD");

let monkey = {
  name: "Stojche",
  kind: "Gorilla",
  speak: function () {
    return `Hey bro my name is ${this.name} and I am a ${this.kind}`;
  },
};
console.log(monkey.speak());

console.log("HomeWork part #2:");
console.log(
  "Write a JavaScript program to display the reading status of some book."
);

let Book = function (userTitle, userAuthor) {
  this.title = userTitle;
  this.atuhor = userAuthor;

  this.readingStatus = function (inputReadingStatus) {
    if (inputReadingStatus === true) {
      return `Alredy read ${this.title} from the author ${this.atuhor}`;
    } else {
      return `You still need to read ${this.title} from the author ${this.atuhor}`;
    }
  };
  //   return (inputReadingStatus = true
  //     ? `Alredy read ${this.title} from the author ${this.atuhor}`
  //     : `You still need to read ${this.title} from the author ${this.atuhor}`);
  // PROBAV SO SKRATENATA VERZIJA AMA NE MI DAVA NIKAKOV REZULTAT POMOSH? :D
};
let book1 = new Book("*The Robots of dawn*", "Isaac Asimov");
console.log(book1.readingStatus(true));

let book2 = new Book(
  "*Mockingjay: The Final Book of The Hunger Games*",
  "Suzanne Collins"
);
console.log(book2.readingStatus(false));
