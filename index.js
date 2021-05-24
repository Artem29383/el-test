const container = document.querySelector('.container');
const questions = [
  {
    id: 1,
    question: 'Должны в системе тестирования присутствовать инструменты управления тестами',
    positive: 0.7,
    negative: 0.3,
    probability: {
      letstest: [0.7, 0.3],
      onlinetestpad: [0.7, 0.3],
      google: [0.7, 0.3],
      moodle: [0.7, 0.3],
    },
    radioFirst: {
      id: 'radioFirst',
      isCheck: false,
    },
    radioTwo: {
      id: 'radioTwo',
      isCheck: true,
    }
  },
  {
    id: 2,
    question: 'Должны быть в системе тестирования в наличии все типы тестирования',
    positive: 0.95,
    negative: 0.05,
    probability: {
      letstest: [0.95, 0.05],
      onlinetestpad: [0.95, 0.05],
      google: [0.4, 0.6],
      moodle: [0.2, 0.8],
    },
    radioFirst: {
      id: 'radioFirst',
      isCheck: false,
    },
    radioTwo: {
      id: 'radioTwo',
      isCheck: true,
    }
  },
  {
    id: 3,
    question: 'Должна в системе тестирования быть возможность создания теста для группы учеников',
    positive: 0.83,
    negative: 0.17,
    probability: {
      letstest: [0.83, 0.17],
      onlinetestpad: [0.83, 0.17],
      google: [0.83, 0.17],
      moodle: [0.83, 0.17],
    },
    radioFirst: {
      id: 'radioFirst',
      isCheck: false,
    },
    radioTwo: {
      id: 'radioTwo',
      isCheck: true,
    }
  },
  {
    id: 4,
    question: 'Должны вопросы в системе тестирования формироваться в случайном порядке',
    positive: 0.75,
    negative: 0.25,
    probability: {
      letstest: [0.75, 0.25],
      onlinetestpad: [0.75, 0.25],
      google: [0.25, 0.75],
      moodle: [0.75, 0.25],
    },
    radioFirst: {
      id: 'radioFirst',
      isCheck: false,
    },
    radioTwo: {
      id: 'radioTwo',
      isCheck: true,
    }
  },
  {
    id: 5,
    question: 'Должны осуществляться хранение истории тестирования',
    positive: 0.8,
    negative: 0.2,
    probability: {
      letstest: [0.8, 0.2],
      onlinetestpad: [0.8, 0.2],
      google: [0.8, 0.2],
      moodle: [0.8, 0.2],
    },
    radioFirst: {
      id: 'radioFirst',
      isCheck: false,
    },
    radioTwo: {
      id: 'radioTwo',
      isCheck: true,
    }
  },
  {
    id: 6,
    question: 'Какая должна быть система тестирования по стоимости',
    positive: 0.6,
    negative: 0.4,
    probability: {
      letstest: [0.6, 0.4],
      onlinetestpad: [0.6, 0.4],
      google: [0.6, 0.4],
      moodle: [0.4, 0.6],
    },
    radioFirst: {
      id: 'radioFirst',
      isCheck: false,
    },
    radioTwo: {
      id: 'radioTwo',
      isCheck: true,
    }
  },
  {
    id: 7,
    question: 'Должно осуществляться ведение статистики ответов',
    positive: 0.87,
    negative: 0.13,
    probability: {
      letstest: [0.87, 0.13],
      onlinetestpad: [0.87, 0.13],
      google: [0.87, 0.13],
      moodle: [0.87, 0.13],
    },
    radioFirst: {
      id: 'radioFirst',
      isCheck: false,
    },
    radioTwo: {
      id: 'radioTwo',
      isCheck: true,
    }
  },
  {
    id: 8,
    question: 'Должна быть возможность прохождения тестового (тренировочного) примера',
    positive: 0.7,
    negative: 0.3,
    probability: {
      letstest: [0.7, 0.3],
      onlinetestpad: [0.3, 0.7],
      google: [0.3, 0.7],
      moodle: [0.3, 0.7],
    },
    radioFirst: {
      id: 'radioFirst',
      isCheck: false,
    },
    radioTwo: {
      id: 'radioTwo',
      isCheck: true,
    }
  },
  {
    id: 9,
    question: 'Должна присутствовать возможность автономного использования системы без подключения к сети Интернет',
    positive: 0.2,
    negative: 0.8,
    probability: {
      letstest: [0.2, 0.8],
      onlinetestpad: [0.2, 0.8],
      google: [0.2, 0.8],
      moodle: [0.8, 0.2],
    },
    radioFirst: {
      id: 'radioFirst',
      isCheck: false,
    },
    radioTwo: {
      id: 'radioTwo',
      isCheck: true,
    }
  },
  {
    id: 10,
    question: 'Должна присутствовать возможность более расширенной настройки тестов.',
    positive: 0.85,
    negative: 0.15,
    probability: {
      letstest: [0.85, 0.15],
      onlinetestpad: [0.15, 0.85],
      google: [0.15, 0.85],
      moodle: [0.15, 0.85],
    },
    radioFirst: {
      id: 'radioFirst',
      isCheck: false,
    },
    radioTwo: {
      id: 'radioTwo',
      isCheck: true,
    }
  },
  {
    id: 11,
    question: 'Должна система тестирования отличаться простотой формирования тестовых заданий.',
    positive: 0.7,
    negative: 0.3,
    probability: {
      letstest: [0.7, 0.3],
      onlinetestpad: [0.7, 0.3],
      google: [0.7, 0.3],
      moodle: [0.7, 0.3],
    },
    radioFirst: {
      id: 'radioFirst',
      isCheck: false,
    },
    radioTwo: {
      id: 'radioTwo',
      isCheck: true,
    }
  },
]


const renderHTML = () => {
  const string = questions.reduce((acc, item) => {
    return acc += `<div class="question">
      <div class="label">${item.question}?</div>
      <div class="buttons">
        <div class="radio">
          <input type="radio" data-id="${item.id}" data-value="positive" id="${item.radioFirst.id}${item.id}"
                 name="${item.question}" value="${item.positive}">
          <label for="${item.radioFirst.id}${item.id}">${item.id === 6 ? 'Бесплатная' : 'Да'}</label>
        </div>
        <div class="radio">
          <input type="radio" data-id="${item.id}" data-value="negative" id="${item.radioTwo.id}${item.id}"
                 name="${item.question}" value="${item.negative}">
          <label for="${item.radioTwo.id}${item.id}">${item.id === 6 ? 'Платная' : 'Нет'}</label>
        </div>
      </div>
    </div>`
  }, '');

  container.innerHTML += string;
  container.innerHTML += `<button id="result">Result</button>`;
}

const getResult = () => {
  let letstest = 1;
  let onlinetestpad = 1;
  let google  = 1;
  let moodle = 1;
  const inputs = document.querySelectorAll('[data-id]');
  const inputsChecked = Array.from(inputs).reduce((acc, input) => {
    acc = input.checked ? [...acc, input] : acc;
    return acc;
  }, []);
  if (inputsChecked.length < 11) {
    alert('Ответьте на все вопросы!')
    return;
  }
  inputsChecked.forEach(item => {
    const id = item.getAttribute('data-id') - 1;
    const isPositive = item.getAttribute('data-value') === 'positive'
    Object.keys(questions[id].probability).forEach(key => {
      if (isPositive) {
        letstest *= questions[id].probability.letstest[0];
        onlinetestpad *= questions[id].probability.onlinetestpad[0];
        google *= questions[id].probability.google[0];
        moodle *= questions[id].probability.moodle[0];
      } else {
        letstest *= questions[id].probability.letstest[1];
        onlinetestpad *= questions[id].probability.onlinetestpad[1];
        google *= questions[id].probability.google[1];
        moodle *= questions[id].probability.moodle[1];
      }
    })
  })

  const resultArray = [letstest, onlinetestpad, google, moodle];
  const resultString = ['letstest', 'onlinetestpad', 'google', 'moodle'];
  let max = Math.max(...resultArray);
  let resultIndex = resultArray.indexOf(max);
  const MAPA = {
    letstest: {
      img: 'assets/lets.png',
      link: 'https://letstest.ru'
    },
    onlinetestpad: {
      img: 'assets/online.png',
      link: 'https://onlinetestpad.com/ru'
    },
    google: {
      img: 'assets/google.png',
      link: 'https://www.google.ru/forms/about/'
    },
    moodle: {
      img: 'assets/moodle.png',
      link: 'https://moodle.org'
    }
  }

  const hello = document.querySelector('.hello');
  hello.classList.add('hide');
  container.innerHTML = `<form class="form">
                      <p class="center mb20">Оптимальная система для вас: ${resultString[resultIndex]}</p>
                      <img src="${MAPA[resultString[resultIndex]].img}" />
                      <a class="center m20 mt20" target="_blank" rel="noreferrer" href="${MAPA[resultString[resultIndex]].link}">${MAPA[resultString[resultIndex]].link}</a>
                      <button>Пройти опрос заново</button>
                      </form>`
}

renderHTML();
window.addEventListener('DOMContentLoaded', () => {
  document.getElementById('result').addEventListener('click', getResult);
})
