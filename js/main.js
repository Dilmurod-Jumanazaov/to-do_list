var elForm = document.querySelector(".form-box");
var elInput = elForm.querySelector(".form-box__input");
var elTimeInput = elForm.querySelector(".form-box__time-input");
var elList = document.querySelector(".list");
// Bu yerda array yaratib oldik.Va uning ichida object datalari saqladik.
var newArray = [
  {
    "title": "Ertalab turaman",
    "time": "06:00"
  },
  {
    "title": "Yugurishga chiqaman",
    "time": "06:10"
  },
  {
    "title": "Nonushta qilaman",
    "time": "07:30"
  },
  {
    "title": "Ishlarimdi qilaman",
    "time": "08:00"
  },
  {
    "title": "Tushlik qilaman",
    "time": "12:00"
  },
  {
    "title": "Ertalab turaman",
    "time": "06:00"
  },
  {
    "title": "Dushga tushaman",
    "time": "13:00"
  },
  {
    "title": "O'qishga chiqib ketaman",
    "time": "13:30"
  },
  {
    "title": "Darsim boshlanadi",
    "time": "15:30"
  }
];

function toDo(todoList) {
  // bu yerda hozir HTMLda mavjud bolgan <ol></ol> ni ichini function ishlashidan oldin har safar bosh srtingga tenglab qoydik.
  // yani buni .innerHTML = ""; propertysi ==> (xususiyati) yordamida qildik.
  elList.innerHTML = "";
  todoList.forEach(function (item,index,arr) {
    // bu yerda HTMLda yangi li,p,time elementlarini yaratib oldik
    var liElement = document.createElement("li");
    var titleElement = document.createElement("p");
    var timeElement = document.createElement("time");
    // bu yerda timeElemnti uchun attribut qoshdik. "setAttribute" methodi yordamida.
    timeElement.setAttribute("datetime","2002-07-27");
    // bu yerda create qilgan elementlarimizga css dagi classlarni qoshib qodik.
    liElement.classList.add("list__item");
    titleElement.classList.add("list__desc");
    timeElement.classList.add("list__time");
    // bu yerda create qilgan elementlarimizga inputdan kelyotgan valuelarni berib qoydik.
    titleElement.textContent = item.title;
    timeElement.textContent = item.time;
    liElement.append(titleElement,timeElement);
    // Bu yerda HTMLda mavjud bolgan <ol></ol> tagining ichiga liElementni appendChild methodi yordamida qoshib qoydik.
    elList.appendChild(liElement);
  });
}
toDo(newArray);

elForm.addEventListener("submit", function(evt) {
  evt.preventDefault();;
  // bu yerda inputdan kelyotgan valuelarni oldik
  var inputValue = elInput.value.trim();
  var timeInput = elTimeInput.value;
  // bu yerda bitta new object yaratdik.Va uning ichiga inputdan kelyotgan datalarni joylab qoyyabmiz.
  var new_obj = {
    "title": inputValue,
    "time": timeInput
  }
  // bu yerda bitta new array yaratdik va uning ichiga yaratilgan new_obj ni ".push" methodi yordamida joylab qo'yyabmiz.
  newArray.unshift(new_obj);

  toDo(newArray);
  
})

