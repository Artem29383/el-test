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
    question: 'Должна присутствовать возможность более расширенной настройки тестов',
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
    question: 'Должна система тестирования отличаться простотой формирования тестовых заданий',
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
          <label class="ml10" for="${item.radioFirst.id}${item.id}">${item.id === 6 ? 'Бесплатная' : 'Да'}</label>
        </div>
        <div class="radio">
          <input type="radio" data-id="${item.id}" data-value="negative" id="${item.radioTwo.id}${item.id}"
                 name="${item.question}" value="${item.negative}">
          <label class="ml10" for="${item.radioTwo.id}${item.id}">${item.id === 6 ? 'Платная' : 'Нет'}</label>
        </div>
      </div>
    </div>`
  }, '');

  container.classList.add('show');
  container.innerHTML += `<p class="ppp center mb20 fz20">Для точного расчета подходящей для Вас системы ответьте на предлагаемые вопросы</p>`
  container.innerHTML += string;
  container.innerHTML += `<button id="result">Result</button>`;
  document.getElementById('result').addEventListener('click', getResult);
  document.querySelector('.hello').classList.add('hide');
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
      title: 'Letstest',
      img: 'assets/lets.png',
      link: 'https://letstest.ru',
      desc: 'В система Letstest доступны широкие возможности по созданию тестов. Разнообразные типы вопросов и гибкая настройка оценок позволяет создавать как простые тесты, так и психологические тестирования. Также система сразу готова к работе, не требуется скачивать и устанавливать какие-либо программы, необходим только браузер и доступ в интернет.'
    },
    onlinetestpad: {
      title: 'Onlinetestpad',
      img: 'assets/online.png',
      link: 'https://onlinetestpad.com/ru',
      desc: 'Ресурс Оnlinetestpad дает возможность создавать различные тесты, опросы, логические задачи, кроссворды, комплексные задания. Можно создавать тесты как самостоятельно, так и на основе предложенных шаблонов, изменяя их в соответствии со своим заданием или пожеланием.'
    },
    google: {
      title: 'Google формы',
      img: 'assets/google.png',
      link: 'https://www.google.ru/forms/about/',
      desc: 'Google формы позволяют выбирать типы вопросов – от простых тестовых полей до сложных шкал и сеток. Добавлять в форму видео-ролики с YouTube и фотографии. Статистику ответов вы найдете прямо в форме, также вы можете работать над формой вместе с друзьями, однокурсниками или коллегами.'
    },
    moodle: {
      title: 'Moodle',
      img: 'assets/moodle.png',
      link: 'https://moodle.org',
      desc: 'Система Мооdle имеет удобный интуитивно понятный интерфейс. Данный ресурс содержит обширный инструментарий для создания тестов, поддерживается несколько типов вопросов в тестовых заданиях (множественный выбор, на соответствие, верно/неверно, короткие ответы, эссе и др.)'
    }
  }

  const hello = document.querySelector('.hello');
  hello.classList.add('hide');
  container.innerHTML = `<form class="form">
                      <p class="center mb20 fwb">Оптимальная система для Вас: ${MAPA[resultString[resultIndex]].title}</p>
                      <img src="${MAPA[resultString[resultIndex]].img}" />
                      <div class="link mb20 mt20">
                      <p>Чтобы ознакомиться с ресурсом подробнее, перейдите по ссылке:</p>
                      <a class="center ml10" target="_blank" rel="noreferrer" href="${MAPA[resultString[resultIndex]].link}">${MAPA[resultString[resultIndex]].title}</a>
                      </div>
                      <p class="description">${MAPA[resultString[resultIndex]].desc}</p>
                      <button>Пройти опрос заново</button>
                      </form>`
}

window.addEventListener('DOMContentLoaded', () => {
  const begin = document.getElementById('begin');
  begin.addEventListener('click', renderHTML);
})
