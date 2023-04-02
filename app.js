const quiz = [
  {
    question: 'ゲーム市場、最も売れたゲーム機は次のうちどれ？',
    answers: [
      'スーパーファミコン',
      'プレイステーション２',
      'ニンテンドースイッチ',
      'ニンテンドーDS'
    ],
    correct: 'ニンテンドーDS'
  }, {
    question: '糸井重里が企画に関わった、任天堂の看板ゲームといえば？',
    answers: [
      'Mother2',
      'スーパーマリオブラザーズ３',
      'スーパードンキーコング',
      '星のカービィ'
    ],
    correct: 'Mother2'
  }, {
    question: 'ファイナルファンタジーＩＶの主人公の名前は？',
    answers: [
      'フリオニール',
      'クラウド',
      'ティーダ',
      'セシル'
    ],
    correct: 'セシル'
  }
];

const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;

// const question ='ゲーム市場、最も売れたゲーム機は次のうちどれ？';
// const answers = [
//   'スーパーファミコン',
//   'プレイステーション２',
//   'ニンテンドースイッチ',
//   'ニンテンドーDS'
//   ];
// const correct ='ニンテンドーDS';

const $button = document.getElementsByTagName('button');
let buttonLength = $button.length;

//クイズの問題文、選択肢を定義（定数の文字をhtmlに反映させる）
const setupQuize = () => {
  document.getElementById('js-question').textContent = quiz[quizIndex].question;
  let buttonIndex = 0;
    while(buttonIndex < buttonLength){
    //繰り返したい命令
    $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
    buttonIndex++;
  }
}
setupQuize();

//previous
// $button[0].textContent = answers[0];
// $button[1].textContent = answers[1];
// $button[2].textContent = answers[2];
// $button[3].textContent = answers[3];

const clickHandler = (e) => {
  if(quiz[quizIndex].correct === e.target.textContent){
    window.alert('正解');
    score++;
  } else {
    window.alert('不正解')
  }

  quizIndex++;

  if(quizIndex < quizLength){
    setupQuize();
  }  else {
       window.alert('終了！あなたの正解数は' + score + '/' + quizLength + 'です。');
    }
};

//正誤判定
let handlerIndex = 0;
while(handlerIndex < buttonLength){
  $button[handlerIndex].addEventListener('click', (e) => {
    clickHandler(e);
    })
    handlerIndex++;
};

// $button[0].addEventListener('click', (e) => {
//   clickHandler(e);
// });

// $button[1].addEventListener('click', (e) => {
//   clickHandler(e);
// });

// $button[2].addEventListener('click', (e) => {
//   clickHandler(e);
// });

// $button[3].addEventListener('click', (e) => {
//   clickHandler(e);
// });
