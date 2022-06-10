// Task 1 Создайте объект ноутбука

const objNoteBook = {
  serialNumber: '3V5E7EA',
  noteBookModel: 'HP 255 G8',
  dysplay: {
    matrix: 'IPS',
    resolutionDisplay: {
      width: 1920,
      height: 1080,
    },
  },
  cpu: {
    cores: 8,
    cpuModel: 'AMD Ryzen 7 5700U',
    frequencyGHZ: {
      minGHZ: 1.8,
      maxGHZ: 4.3,
    },
    ramGB: 8,
    dataDrivers: {
      capacityGb: 256,
      diskType: 'SSD',
    },
    videoCard: 'AMD Radeon Graphics',
    pcCase: {
      color: 'silver',
      weightKg: 1.7,
      dimensions: {
        widthMM: 358,
        heightMM: 19,
        lengthMM: 242,
      },
    },
  },
}
console.log(objNoteBook)

// Task 2 Создайте класс который описывает создание нового пользователя с помощью логина и пароля. Сделайте несколько обьектов. Создайте массив из нескольких обьектов (не вводите id)

class User {
  constructor(loginValue, passwordValue) {
    this.login = loginValue
    this.password = passwordValue
  }
}

const user1 = new User('login1', 'qwerty')
const user2 = new User('superman', 'qwerty12345')
const user3 = new User('vasya-petrov', 'qwerty')

const users = [
  {
    login: 'login1',
    password: 'qwerty',
  },
  {
    login: 'superman',
    password: 'qwerty12345',
  },
  {
    login: 'vasya-petrov',
    password: 'qwerty',
  },
]

// Task 3 Из полученого массива в задании 2 сделайте карту (map). в качестве ключа используйте логин

let userMap = new Map()
for (let i = 0; i < users.length; i++) {
  userMap.set(users[i].login, users[i])
}

// Task 4* разными способами решите вопрос соединения двух массивов без повторов
