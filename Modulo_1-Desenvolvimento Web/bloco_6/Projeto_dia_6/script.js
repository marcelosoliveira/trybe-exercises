/* window.onload = function() {
    addDays();
    addMonths();
    addYears();
}
let days = ['Dia', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10',
'11', '12', '13', '14', '15', '16', '17', '18', '19', '20',
'21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'];
let months = ['Mês', 'jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul',
'ago', 'set', 'out', 'nov', 'dez'];
let years = ['Ano', '1940', '1941', '1942', '1943', '1944', '1945', '1946',
'1947', '1948', '1949', '1950', '1951', '1952', '1953', '1954', '1955',
'1956', '1957', '1958', '1959', '1960', '1961', '1962', '1963', '1964',
'1965', '1966', '1967', '1968', '1969', '1970', '1971', '1972', '1973',
'1974', '1975', '1976', '1977', '1978', '1979', '1980', '1981', '1982',
'1983', '1984', '1985', '1986', '1987', '1988', '1989', '1990', '1991',
'1992', '1993', '1994', '1995', '1996', '1997', '1998', '1999', '2000',
'2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009',
'2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018',
'2019', '2020'];
selectDay = document.querySelector(".chooseDay");
selectMonth = document.querySelector(".chooseMonth");
selectYear = document.querySelector(".chooseYear");
function addDays() {
    for (index = 0; index < days.length; index += 1) {
        let createElement = document.createElement("option");
        createElement.innerText = days[index];
        selectDay.appendChild(createElement);
    }
}
function addMonths() {
    for (index = 0; index < months.length; index += 1) {
        let createElement = document.createElement("option");
        createElement.innerText = months[index];
        selectMonth.appendChild(createElement);
    }
}
function addYears() {
    for (index = 0; index < years.length; index += 1) {
        let createElement = document.createElement("option");
        createElement.innerText = years[index];
        selectYear.appendChild(createElement);
    }
} */
const getForm = document.querySelector('.rightFormInputs');
const getRightSide = document.querySelector('.right-content');
const getFirstName = document.querySelector('#firstName');
const getLastName = document.querySelector('#lastName');
const getPhoneEmail = document.querySelector('#phoneEmail');
const getBirthdate = document.querySelector('#birthdate');
const radioFem = document.querySelector('#gender1');
const radioMas = document.querySelector('#gender2');
const getGender = document.querySelector('#gender3');
const getLoginButton = document.querySelector('#button-login');

const rulesValidate = {
  firstname: {
    required: true,
  },
  lastname: {
    required: true,
  },
  phone_email: {
    required: true,
  },
  password: {
    required: true,
  },
  birthdate: {
    required: true,
  },
  gender: {
    required: true,
  },
};

const messagesValidate = {
  firstname: {
    required: 'Campo inválido',
  },
  lastname: {
    required: 'Campo inválido',
  },
  phone_email: {
    required: 'Campo inválido',
  },
  password: {
    required: 'Campo inválido',
  },
  birthdate: {
    required: 'Campo inválido',
  },
  gender: {
    required: 'Campo inválido',
  },
};

function letItBe() {
  const getError = document.querySelector('#errorMessage');
  if (getError == null) {
    const createElementMessage = document.createElement('p');
    createElementMessage.innerText = 'Campos inválidos';
    createElementMessage.className = 'error';
    createElementMessage.id = 'errorMessage';
    getForm.appendChild(createElementMessage);
  } else {
    getError.remove();
    const createElementMessage = document.createElement('p');
    createElementMessage.innerText = 'Campos inválidos';
    createElementMessage.className = 'error';
    createElementMessage.id = 'errorMessage';
    getForm.appendChild(createElementMessage);
  }
}

function letsDoIt() {
  getRightSide.innerHTML = '';
  const firstNameInput = getFirstName.value;
  const lastNameInput = getLastName.value;
  const phoneEmailInput = getPhoneEmail.value;
  const birthdateInput = getBirthdate.value;
  let genderInput = '';
  if (radioFem.checked === true) { genderInput = 'Feminino'; } else if (radioMas.checked === true) { genderInput = 'Masculino'; } else { genderInput = 'Personalizado'; }
  const createNewElementMessage = document.createElement('p');
  createNewElementMessage.innerHTML = `Olá, ${firstNameInput} ${lastNameInput} \n ${phoneEmailInput} \n ${birthdateInput} \n ${genderInput}`;
  getRightSide.innerHTML = createNewElementMessage.innerHTML;
  getRightSide.classList.add('newRightElement');
}

const helpMePlease = {
  rules: rulesValidate,
  messages: messagesValidate,
  invalidFormCallback: letItBe,
  submitHandler: letsDoIt,
};

window.onload = function () {
  const godSaveMe = new window.JustValidate('.rightFormInputs', helpMePlease);
  return godSaveMe;
};

function clickFormLogin() {
  const getInfoPhoneEmail = document.querySelector('#user-email-phone');
  alert(getInfoPhoneEmail.value);
}

function genderRadio() {
  const getNewGenderCamp = document.querySelector('#newGender');
  const inputGender = document.createElement('input');
  const textBefore = document.querySelector('#facebook-register');
  if (getGender.checked && getNewGenderCamp == null) {
    inputGender.setAttribute('name', 'gender-custom');
    inputGender.setAttribute('class', 'formRight');
    inputGender.setAttribute('id', 'newGender');
    inputGender.setAttribute('placeholder', 'Gênero (opcional)');
    textBefore.parentNode.insertBefore(inputGender, textBefore);
  }
}

function clearNewGender() {
  const getNewGenderCamp = document.querySelector('#newGender');
  if (getNewGenderCamp !== null) {
    getNewGenderCamp.remove();
  }
}

getGender.addEventListener('click', genderRadio);
radioFem.addEventListener('click', clearNewGender);
radioMas.addEventListener('click', clearNewGender);
getLoginButton.addEventListener('click', clickFormLogin);
