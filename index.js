const randomNumber = Math.floor(Math.random() * 10);
console.log(randomNumber);

for (let i = 1; i <= 3; i++) {
  let user = +prompt(
    "Oyijon google 1-dan 10-gacha qanaqadir son kiritkan, o'shani topsez man o'g'liz Jahongirdan sovg'a bor"
  );
  if (randomNumber === user) {
    alert(
      `siz toptiz. Oyi Man sizi judayam yahshi koraman.😘😘😘😘 bu son-${randomNumber}`
    );
    break;
  } else if (i === 3) {
    alert(`${randomNumber}-siz shu sonni topolmadiz 3-imkoniyat ketib bo'ldi`);
  } else if (randomNumber > user) {
    alert("Sal balandroq son ayting ");
  } else if (user > randomNumber) {
    alert("Sal kamroq son ayting");
  } else {
    alert(`1-10-gacha son kiritin`);
  }
}
