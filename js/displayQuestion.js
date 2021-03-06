const dataSet = [
  {
    data : {
      img : './assets/img/HanamichiSakuragi.png',
      name : '桜木花道',
      highSchool : '湖北高校',
      position : 'パワーフォワード'
    }
  },
  {
    data : {
      img : './assets/img/akagi.jpeg',
      name : '赤木剛憲',
      highSchool : '湖北高校',
      position : 'センター'
    }
  }, 
  {
    data : {
      img : './assets/img/rukawa.jpg',
      name : '流川楓',
      highSchool : '湖北高校',
      position : 'スモールフォワード'
    }
  }, 
  {
    data : {
      img : './assets/img/miyagi.jpg',
      name : '宮城リョータ',
      highSchool : '湖北高校',
      position : 'ポイントガード'
    },
  }, 
  {
    data : {
      img : './assets/img/mitsui.jpg',
      name : '三井寿',
      highSchool : '湖北高校',
      position : 'シューティングガード'
    },
  }, 
  { 
    data : {
      img : './assets/img/kogure.jpg',
      name : '木暮公延',
      highSchool : '湖北高校',
      position : 'シューティングガード'
    }
  },
  { 
    data : {
      img : './assets/img/yasuda.jpeg',
      name : '安田靖春',
      highSchool : '湖北高校',
      position : 'ポイントガード',
    }
  },
  { 
    data : {
      img : './assets/img/kakuta.png',
      name : '角田悟',
      highSchool : '湖北高校',
      position : 'センター',
    }
  },
  { 
    data : {
      img : './assets/img/anzai.jpg',
      name : '安西光義',
      highSchool : '湖北高校',
      position : '監督',
    }
  },
  { 
    data : {
      img : './assets/img/uozumi.png',
      name : '魚住純',
      highSchool : '陵南高校',
      position : 'センター',
    }
  },
  { 
    data : {
      img : './assets/img/ikegami.jpg',
      name : '池上亮二',
      highSchool : '陵南高校',
      position : 'シューティングガード',
    }
  },
  { 
    data : {
      img : './assets/img/sendo.jpg',
      name : '仙道彰',
      highSchool : '陵南高校',
      position : 'スモールフォワード',
    }
  },
  { 
    data : {
      img : './assets/img/fukuda.jpg',
      name : '福田吉兆',
      highSchool : '陵南高校',
      position : 'スモールフォワード',
    }
  },
  { 
    data : {
      img : './assets/img/koshino.jpg',
      name : '越野宏明',
      highSchool : '陵南高校',
      position : 'シューティングガード',
    }
  },
  { 
    data : {
      img : './assets/img/taoka.jpg',
      name : '田岡茂一',
      highSchool : '陵南高校',
      position : '監督',
    }
  },
  { 
    data : {
      img : './assets/img/fujima.jpg',
      name : '藤真健司',
      highSchool : '翔陽高校',
      position : 'ポイントガード / 監督',
    }
  },
  { 
    data : {
      img : './assets/img/hanagata.png',
      name : '花形透',
      highSchool : '翔陽高校',
      position : 'センター',
    }
  },
  { 
    data : {
      img : './assets/img/maki.jpg',
      name : '牧紳一',
      highSchool : '海南高校',
      position : 'ポイントガード',
    }
  },
  { 
    data : {
      img : './assets/img/jin.jpg',
      name : '神宗一郎',
      highSchool : '海南高校',
      position : 'シューティングガード',
    }
  },
  { 
    data : {
      img : './assets/img/nobunaga.jpg',
      name : '清田信長',
      highSchool : '海南高校',
      position : 'シューティングガード',
    }
  },
]

// 効果音インスタンスの生成
const correctSound = new Audio('./assets/mp3/correct.mp3')
const incorrectSound = new Audio('./assets/mp3/incorrect.mp3')

$(function(){

  // 答えの画面を初期非表示にする
  const displayQuestion = () => {
    $('#answers').hide();

    // 問題にする選手をランダムで選ぶ（配列のインデックスで選択）
    let correctAnswer = Math.floor(Math.random() * dataSet.length);

    // 4つの選択肢を格納する配列を生成
    // （上記のランダムで選んだインデックス番号を事前に格納）
    let answers = [correctAnswer,];

    // 不正解となる3つの選択肢を生成しanswersに格納
    for(let i = 0; i < 100; i++){
      let incorrectAnswer = Math.floor(Math.random() * dataSet.length)
    
      // 不正解の選択肢を重複しないように3つ生成する
      if(answers.includes(incorrectAnswer) === false){
        answers.push(incorrectAnswer);
  
        //正解を含む選択肢が4つになったらループ終了
        if(answers.length === 4){
          break;
        }
      }
    }

    //配列answersを並び替える
    let sortAnswers = [];
    for(let i =0; i < 4; i++){
      // インデックスをランダムで抽出
      let t = Math.floor(Math.random() * answers.length)
      // 選択されたインデックスの値をsortAnswersに追加
      sortAnswers.push(answers[t]);
      // 追加した値をanswersから削除
      answers.splice(t,1);
    }

    // 変数に選手名を代入
    let choice1 = dataSet[sortAnswers[0]].data.name
    let choice2 = dataSet[sortAnswers[1]].data.name
    let choice3 = dataSet[sortAnswers[2]].data.name
    let choice4 = dataSet[sortAnswers[3]].data.name


    // 問題の画像を表示
    $('#questionImg').attr('src',dataSet[correctAnswer].data.img)

    // 選択肢ボタンのテキストに選手名を代入
    $('#choice1').text(choice1)
    $('#choice2').text(choice2)
    $('#choice3').text(choice3)
    $('#choice4').text(choice4)

    // 選択肢ボタンに正解・不正解IDを保持させる
    $('#choice1').data('id', sortAnswers[0])
    $('#choice2').data('id', sortAnswers[1])
    $('#choice3').data('id', sortAnswers[2])
    $('#choice4').data('id', sortAnswers[3])
    
    // ボタンが押された際の処理
    $('.btnChoice').on('click', function(){
      
      // 押されたボタンの正解・不正解IDをキャッチ
      const answerId = $(this).data('id')
      let answerJudge = ''

      // 正解の場合
      if(answerId === correctAnswer){
        answerJudge = '正解！'
        // 効果音お再生
        correctSound.play();
        incorrectSound.pause();
        incorrectSound.currentTime = 0
        $('#answers').attr('class', 'correctAnswers')
      }
      // 不正解の場合
      else{
        answerJudge = '不正解...'
        // 効果音の再生
        incorrectSound.play();
        correctSound.pause();
        correctSound.currentTime = 0
        $('#answers').attr('class', 'incorrectAnswers')
      }

      // 答えの値・選手のデータを代入
      $('#answer').text(answerJudge)
      $('#name').text(dataSet[correctAnswer].data.name)
      $('#highSchool').text(dataSet[correctAnswer].data.highSchool)
      $('#position').text(dataSet[correctAnswer].data.position)

      $('#answers').fadeIn(1000)
    })

    $('#nextQuestion').on('click', function(){displayQuestion()});
    };
  
  $(window).on('load',displayQuestion());
})
