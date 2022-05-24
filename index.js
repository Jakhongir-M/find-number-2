const randomNumber = Math.floor(Math.random() * 10);
console.log(randomNumber);

for (let i = 1; i <= 3; i++) {
  let user = +prompt("браузер уже вел какую-то цыфру от 1 до 10 найди ее");
  if (randomNumber === user) {
    alert(`вы выграли поздравляю вы нашли цыфру-${randomNumber}`);
    break;
  } else if (i === 3) {
    alert(
      `${randomNumber}-ты не нашла эту цыфру мандаринка,теперь ты должна поговорить со мною :D`
    );
  } else if (randomNumber > user) {
    alert("немного выше мандаринка ");
  } else if (user > randomNumber) {
    alert("Немного меньше мандаринка");
  } else {
    alert(`не ври`);
  }
}
