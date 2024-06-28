var txt1 = 'text1';
console.log(txt1);

if (true) {
  var txt2 = 'text2';
  console.log(txt2);
}

console.log(txt1);
console.log(txt2); // var는 함수 스코프를 가지므로 if 블록 내에서도 접근 가능합니다.

let txt1_1 = 'text1_1';
const txt3 = 'hello';
console.log(txt1_1);

if (true) {
  let txt2_2 = 'text2_2';
  console.log(txt2_2);
}

console.log(txt1_1);
//console.log(txt2_2);  // 블록 외부에서는 let으로 선언된 txt2_2에 접근할 수 없습니다.
//txt3 = 'world'; // const는 재할당이 불가능합니다.
console.log(txt3);

// 추가한 코드
const weather = 'sunny';
console.log('Weather:', weather);

const word = 'apple';
console.log('Word:', word);
