// База данных, содаю массив объектов
let studentsList = [
  {
    name: 'Илья',
    surename: 'Андреевич',
    lastname: 'Иванов',
    birthday: new Date(1994, 4, 12),
    startlearn: '2007',
    // endEducationYear: '',
    faculty: 'Физики'
  },
  {
    name: 'Кира',
    surename: 'Леонидовна',
    lastname: 'Алёхина',
    birthday: new Date(1999, 7, 22),
    startlearn: '2024',
    // endEducationYear: '',
    faculty: 'Химии'
  },
  {
    name: 'Павел',
    surename: 'Петрович',
    lastname: 'Сухарь',
    birthday: new Date(1984, 2, 19),
    startlearn: '2003',
    // endEducationYear: '',
    faculty: 'Информатики'
  },
  {
    name: 'Тимофей',
    surename: 'Олегович',
    lastname: 'Горький',
    birthday: new Date(1988, 9, 10),
    startlearn: '2017',
    // endEducationYear: '',
    faculty: 'Математики'
  },

  {
    name: 'Ефросиния',
    surename: 'Григорьевич',
    lastname: 'Биязова',
    birthday: new Date(1991, 1, 29),
    startlearn: '2013',
    // endEducationYear: '',
    faculty: 'Математики'
  },
  {
    name: 'Федор',
    surename: 'Петрович',
    lastname: 'Курчатов',
    birthday: new Date(2000, 12, 2),
    startlearn: '2021',
    // endEducationYear: '',
    faculty: 'Астрономии'
  },
  {
    name: 'Юлия',
    surename: 'Даниловна',
    lastname: 'Янчук',
    birthday: new Date(1998, 8, 8),
    startlearn: '2024',
    // endEducationYear: '',
    faculty: 'Физики'
  },
  {
    name: 'Юлия',
    surename: 'Даниловна',
    lastname: 'Янчук',
    birthday: new Date(1994, 4, 4),
    startlearn: '2024',
    // endEducationYear: '',
    faculty: 'Физики'
  },
  {
    name: 'Юлия',
    surename: 'Даниловна',
    lastname: 'Янчук',
    birthday: new Date(1979, 12, 9),
    startlearn: '2024',
    // endEducationYear: '',
    faculty: 'Физики'
  }
]
let sortColumnFlag = 'fio',
  sortDirectionsFlag = true;
// Создание элементов
const $app = document.getElementById('app')
// создаем форму
const $addForm = document.createElement('form'),
  $inputName = document.createElement('input'),
  $inputSureName = document.createElement('input'),
  $inputLastName = document.createElement('input'),
  $inputAge = document.createElement('input'),
  $inputStartLearn = document.createElement('input'),
  $inputFaculty = document.createElement('input'),
  $button = document.createElement('button')

$addForm.setAttribute('id', 'add-form')
$addForm.classList.add('mb-3')

// добавляю атрибуты input
Object.assign($inputName, {
  type: 'text',
  placeholder: 'Введите имя',
  id: 'add-form__name-inp'
})
Object.assign($inputSureName, {
  type: 'text',
  placeholder: 'Введите отчество',
  id: 'add-form__surename-inp'
})
Object.assign($inputLastName, {
  type: 'text',
  placeholder: 'Введите фамилию',
  id: 'add-form__lastname-inp'
})
Object.assign($inputAge, {
  type: 'date',
  min: '01.01.1900',
  max: new Date(),
  placeholder: 'Введите дату рождения в формате ХХ.ХХ.ХХХХ',
  id: 'add-form__age-inp'
})
Object.assign($inputStartLearn, {
  placeholder: 'Введите год начала обучения',
  type: 'number',
  id: 'add-form__startlearn-inp'
})
Object.assign($inputFaculty, {
  type: 'text',
  placeholder: 'Введите название факультета',
  id: 'add-form__fuculty-inp'
})

$button.setAttribute('type', 'submit')
$button.classList.add('btn', 'btn-primary')

$button.textContent = 'Добавить пользователя'

$addForm.append($inputName)
$addForm.append($inputSureName)
$addForm.append($inputLastName)
$addForm.append($inputAge)
$addForm.append($inputStartLearn)
$addForm.append($inputFaculty)
$addForm.append($button)
$app.append($addForm)

// создаю кнопоки для сортировки по ФИО и возрасту
const $blockSort = document.createElement('div'),
  $sortFioBtn = document.createElement('button'),
  $sortFacultyBtn = document.createElement('button'),
  $sortAgeBtn = document.createElement('button'),
  $sortStartLearnBtn = document.createElement('button')


$blockSort.classList.add('mb-3'),
  $sortFioBtn.classList.add('btn', 'btn-primary'),
  $sortFacultyBtn.classList.add('btn', 'btn-primary'),
  $sortAgeBtn.classList.add('btn', 'btn-primary'),
  $sortStartLearnBtn.classList.add('btn', 'btn-primary'),
  $blockSort.setAttribute('id', 'block-sort'),
  $sortFioBtn.setAttribute('id', 'sort__fio'),

  $sortAgeBtn.setAttribute('id', 'sort__age')

$sortFioBtn.textContent = 'Сортировка студентов по ФИО',
  $sortFacultyBtn.textContent = 'Сортировка студентов по возрасту',
  $sortAgeBtn.textContent = 'Сортировка студентов по факультету',
  $sortStartLearnBtn.textContent = 'Сортировка студентов по году началуа обучения'

$blockSort.append($sortAgeBtn),
  $blockSort.append($sortFioBtn),
  $blockSort.append($sortFacultyBtn),
  $blockSort.append($sortStartLearnBtn)

$app.append($blockSort)

// создаю форму поиска по ФИО и факультету
const $filterForm = document.createElement('form'),
  $filterFormTitle = document.createElement('h2'),
  $filterFormFoiInput = document.createElement('input'),
  $filterFormFacultyInput = document.createElement('input'),
  $filterFormStartYearLearnInput = document.createElement('input'),
  $filterFormEndYearLearnInput = document.createElement('input'),
  $filterFormBtn = document.createElement('button')

$filterForm.classList.add('mb-3'),
  $filterFormFoiInput.classList.add('form-control', 'mb-3'),
  $filterFormFacultyInput.classList.add('form-control', 'mb-3'),
  $filterFormStartYearLearnInput.classList.add('form-control', 'mb-3'),
  $filterFormEndYearLearnInput.classList.add('form-control', 'mb-3'),
  $filterFormBtn.classList.add('btn', 'btn-primary')

Object.assign($filterFormFoiInput, {
  type: 'text',
  placeholder: 'Введите ФИО',
})
Object.assign($filterFormFacultyInput, {
  type: 'text',
  placeholder: 'Введите название факультета',
})
Object.assign($filterFormStartYearLearnInput, {
  type: 'number',
  placeholder: 'Введите год начала обучения',
})
Object.assign($filterFormEndYearLearnInput, {
  type: 'text',
  placeholder: 'Введите год окончания обучения',
})

$filterFormTitle.textContent = 'Фильтрация',
  $filterFormBtn.textContent = 'Поиск'

$filterForm.append($filterFormTitle),
  $filterForm.append($filterFormFoiInput),
  $filterForm.append($filterFormFacultyInput),
  $filterForm.append($filterFormStartYearLearnInput),
  $filterForm.append($filterFormEndYearLearnInput),
  $filterForm.append($filterFormBtn),
  $app.append($filterForm)

// создаю таблицу
const $table = document.createElement('table'),
  $tableHead = document.createElement('thead'),
  $tableBody = document.createElement('tbody'),

  // в шапке создаем одну строку tr? стобц таблици
  $tableHeadTr = document.createElement('tr'),
  $tableHeadThFIO = document.createElement('th'),
  $tableHeadThBirthYear = document.createElement('th'),
  $tableHeadThStartLearn = document.createElement('th'),
  $tableHeadThFaculty = document.createElement('th')

$table.classList.add('table', 'table-dark', 'table-striped')
$tableHeadThFIO.textContent = 'ФИО'
$tableHeadThBirthYear.textContent = 'Дата рождения и возраст'
$tableHeadThStartLearn.textContent = 'Год начала обучения'
$tableHeadThFaculty.textContent = 'Факультет'

$tableHeadTr.append($tableHeadThFIO, $tableHeadThBirthYear, $tableHeadThStartLearn, $tableHeadThFaculty)


$tableHead.append($tableHeadTr)
$table.append($tableHead)
$table.append($tableBody)
$app.append($table)


// добавляю класс всем input
let inputs = document.querySelectorAll('#add-form input');
inputs.forEach(input => {
  input.classList.add("form-control", 'mb-3');
})
// при фокусе placeholder не будет
let inputPlaceholder = document.querySelectorAll(
  '#add-form input[type ="date"]'
)
inputPlaceholder.forEach(input => {
  inputPlaceholder.type = 'text'
  input.addEventListener('focus', function () {
    this.type = 'date';
  })
  input.addEventListener('blur', function () {
    if (this.value === '') {
      this.type = 'text',
        this.placeholder = 'Введите дату рождения в формате ХХ.ХХ.ХХХХ'
    }
  });
})


// /формат даты
function formatDate(date) {
  let dd = date.getDate();
  if (dd < 10) dd = '0' + dd;

  let mm = date.getMonth() + 1;
  if (mm < 10) mm = '0' + mm;

  let yy = date.getFullYear();
  if (yy < 10) yy = '0' + yy;

  return dd + '.' + mm + '.' + yy;
}
function calculateAge(birthday) {
  const birthDate = new Date(birthday)
  const diffInMS = Date.now() - birthDate.getTime()
  const ageDate = new Date(diffInMS)
  return Math.abs(ageDate.getUTCFullYear() - 1970)
}

function getLocalStudents() {
  const localStudent = localStorage.getItem('student list');
  if (localStudent) {
    studentsList = JSON.parse(localStudent).map(student => {
      student.birthday = new Date(student.birthday);
      student.startlearn = Number(student.startlearn)
      return student
    });
  }
  render(studentsList)
}
function setLocalStudents(arr) {
  localStorage.setItem('students list', JSON.stringify(arr));
  getLocalStudents(); // таблица обновится с новым студентом при перезагрузки страницы
  // console.log('students were set to local storage');
}

// функция создания элемента одного пользователя, разделяю код на подпрограммы
function createUserTR(oneUser) {

  const $userTr = document.createElement('tr'),
    $userFIO = document.createElement('th'),
    $userBirthYear = document.createElement('th'),
    $userStartLearn = document.createElement('th'),
    $userFaculty = document.createElement('th')

  $userFIO.textContent = oneUser.fio
  $userBirthYear.textContent = oneUser.infoYear
  $userStartLearn.textContent = oneUser.infoLearn
  $userFaculty.textContent = oneUser.faculty

  // student birthday


  $userTr.append($userFIO, $userBirthYear, $userStartLearn, $userFaculty)

  // функция верне одного пользователя, объект
  return $userTr
}
// filter
function filter(arr, prop, value) {
  return arr.filter(function (student) {
    if (student[prop].toLowerCase().includes(value.trim().toLowerCase())) return true
  });
}
function filterByNumber(arr, prop, value) {
  return arr.filter(function (student) {
    return student[prop] === Number(value);
  });
}

// функция рендера, отрисовки
function render(arrStudentsList) {
  // Для очистки полей ввода

  $tableBody.innerHTML = '';
  // делаю копию аргумента
  let copyStudentsList = [...arrStudentsList]
  // подготовка
  for (const oneUser of copyStudentsList) {
    oneUser.fio = oneUser.name + ' ' + oneUser.surename + ' ' + oneUser.lastname;
    let formattedBirthDate = formatDate(oneUser.birthday)
    const studentCurrentAge = calculateAge(oneUser.birthday)
    oneUser.infoYear = `${formattedBirthDate} (${studentCurrentAge} лет)` // for table rendering
    // годы обучения
    const startLearn = parseInt(oneUser.startlearn)
    const endEducationYear = parseInt(oneUser.startlearn) + 4;
    const currentYear = new Date().getFullYear();
    const studentCourse = currentYear - oneUser.startlearn;

    oneUser.endEducationYear = endEducationYear;
    // Проверить если сентябрь года окончания обучения уже прошёл
    if (currentYear > endEducationYear || (currentYear === endEducationYear && new Date().getMonth() > 8)) {
      oneUser.infoLearn = `${startLearn}-${endEducationYear} (обучение закончил)`;
      // tdEducation.textContent = `${studentObj.startEducationYear}-${endEducationYear} (закончил)`;
    } else if (startLearn === currentYear) {
      oneUser.infoLearn = `${startLearn} начало обучения 1 курс`
    } else {
      oneUser.infoLearn = `${startLearn}-${endEducationYear} (${studentCourse} курс)`;
    }
  }

  // сортировка элементы меняются местами
  copyStudentsList = copyStudentsList.sort(function (a, b) {
    let sort = a[sortColumnFlag] < b[sortColumnFlag]

    if (sortDirectionsFlag === false) sort = a[sortColumnFlag] > b[sortColumnFlag]
    if (sort) return -1
  })

  // поиск по ФИО
  if ($filterFormFoiInput !== '') copyStudentsList = filter(copyStudentsList, 'fio', $filterFormFoiInput.value)
  //  поиск по факультету
  if ($filterFormFacultyInput !== '') copyStudentsList = filter(copyStudentsList, 'faculty', $filterFormFacultyInput.value)
  // поиск по году поступления
  if ($filterFormStartYearLearnInput !== '') copyStudentsList = filter(copyStudentsList, 'startlearn', $filterFormStartYearLearnInput.value)
  // поиск по году окончания обучения
  if ($filterFormEndYearLearnInput.value !== '') copyStudentsList = filterByNumber(copyStudentsList, 'endEducationYear', $filterFormEndYearLearnInput.value)
  // Рендер отрисовка, перенесем список массива на сайт
  for (const oneUser of copyStudentsList) {
    // вызываю функцию createUserTR(oneUser), пр каждом повторении цикла, пользователь передается в ф-цию
    const $newUserTr = createUserTR(oneUser)
    $tableBody.append($newUserTr)
  }

}
render(studentsList)

// при отправке формы
$addForm.addEventListener('submit', function (event) {
  event.preventDefault()

  // валидация делаю проверку input, проверяю на наличие пробела, метод .trim() обрезает с обеих сторон
  if ($inputName.value.trim() === "") {
    // const result = prompt('Имя не введено! Введите имя', $inputName.value)
    alert('Имя не введено! Введите имя')
    return
  }
  if ($inputSureName.value.trim() === "") {
    alert('Отчество не введено! Введите имя')
    return
  }
  if ($inputLastName.value.trim() === "") {
    alert('Фамилия не введена! Введите имя')
    return
  }
  // проверка на дату ввода
  const minDateAge = new Date(1900, 1, 1).toISOString().split('T')[0]
  const maxDateAge = new Date().toISOString().split('T')[0]
  if ($inputAge.value.trim() === '' || ($inputAge.value < minDateAge) || ($inputAge.value > maxDateAge)) {
    alert('Указана неподходящая дата! Укажите дату в диапазоне от 01.01.1900 до текущей даты.');
    return
  }

  const valueDateLearn = parseInt($inputStartLearn.value)
  const valueDateNow = new Date().toISOString().split('T')[0]
  if ($inputStartLearn.value.trim() === '' || (valueDateLearn < 2000) || ($inputStartLearn.value.trim() > valueDateNow)) {
    alert('Дата начала обучения  введена не верно! Введите год в диапазоне от 2000-го до текущего года')
    return
  }
  // добавляю нового пользователя
  studentsList.push({
    name: $inputName.value.trim(),
    surename: $inputSureName.value.trim(),
    lastname: $inputLastName.value.trim(),
    birthday: new Date($inputAge.value),
    startlearn: $inputStartLearn.value.trim(),
    endEducationYear: $filterFormEndYearLearnInput.value.trim(),
    faculty: $inputFaculty.value.trim()

  })
  console.log(studentsList)
  render(studentsList)

})

// сортировка по кнопкам
$sortFioBtn.addEventListener('click', function () {
  sortColumnFlag = 'fio'
  sortDirectionsFlag = !sortDirectionsFlag
  render(studentsList)
})
$sortFacultyBtn.addEventListener('click', function () {
  sortColumnFlag = 'faculty'
  sortDirectionsFlag = !sortDirectionsFlag
  render(studentsList)
})
$sortAgeBtn.addEventListener('click', function () {
  sortColumnFlag = 'birthday'
  sortDirectionsFlag = !sortDirectionsFlag
  render(studentsList)
});
$sortStartLearnBtn.addEventListener('click', function () {
  sortColumnFlag = 'startlearn'
  sortDirectionsFlag = !sortDirectionsFlag
  render(studentsList)
});


$filterForm.addEventListener('submit', function (event) {
  event.preventDefault();
  render(studentsList)
})
$filterFormFoiInput.addEventListener('input', function () {
  render(studentsList)
})
$filterFormFacultyInput.addEventListener('input', function () {
  render(studentsList)
})

$filterFormStartYearLearnInput.addEventListener('input', function () {
  render(studentsList)
})
$filterFormEndYearLearnInput.addEventListener('input', function () {
  render(studentsList)
});

getLocalStudents();
