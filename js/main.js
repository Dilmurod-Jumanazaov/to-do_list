const elForm = document.querySelector(".form-box");
const elInput = elForm.querySelector(".form-box__input");
const elTimeInput = elForm.querySelector(".form-box__time-input");
const elVoiceBtn = document.querySelector(".voice__btn");
const elList = document.querySelector(".list");
const elVoiceText = document.querySelector(".voice-text");

// Bu yerda array yaratib oldik.Va uning ichida object datalari saqladik.
let newArray = [
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
  }
];

function toDo(todoList) {
  // bu yerda hozir HTMLda mavjud bolgan <ol></ol> ni ichini function ishlashidan oldin har safar bosh srtingga tenglab qoydik.
  // yani buni .innerHTML = ""; propertysi ==> (xususiyati) yordamida qildik.
  elList.innerHTML = "";
  todoList.forEach(function (item,index,arr) {
    // bu yerda HTMLda yangi li,p,time elementlarini yaratib oldik
    let liElement = document.createElement("li");
    let titleElement = document.createElement("p");
    let timeElement = document.createElement("time");
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
  let inputValue = elInput.value.trim();
  let timeInput = elTimeInput.value;
  // bu yerda bitta new object yaratdik.Va uning ichiga inputdan kelyotgan datalarni joylab qoyyabmiz.
  let new_obj = {
    "title": inputValue,
    "time": timeInput
  }
  // bu yerda bitta new array yaratdik va uning ichiga yaratilgan new_obj ni ".push" methodi yordamida joylab qo'yyabmiz.
  newArray.unshift(new_obj);
  
  toDo(newArray);
  
})

// let date = new Date(); // build in class yani obj (obyekt);
// let hour = date.getHours();
// let minute = date.getMinutes();

// let voiceRecord = new webkitSpeechRecognition();
// // voiceRecord.lang = "";

// voiceRecord.onresult = function(evt) {
//   let title = evt.results[0][0].transcript;
//   let voice_obj = {
//     "title": title,
//     "time": `${hour}:${minute}`
//   }
//   newArray.push(voice_obj);
//   toDo(newArray);
// }

// elVoiceBtn.addEventListener("click", function() {
//   voiceRecord.start();
//   elVoiceText.classList.add("d-block");
// });
// voiceRecord.onend = function() {
//   elVoiceText.classList.add("voice-text");
// }

let date = new Date() // new Date bu JS ni ozida bolgan build in class yani ozi ham bitta obj(obyekt)
let hour = date.getHours();
let minute = date.getMinutes();

const voiceRecord = new webkitSpeechRecognition();

voiceRecord.onresult = function(evt) {
  let title = evt.results[0][0].transcript;
  let voice_obj = {
    "title": title,
    "time": `${hour}:${minute + 1}`
  }
  newArray.push(voice_obj);
  toDo(newArray);
}

elVoiceBtn.addEventListener("click", function() {
  voiceRecord.start();
  elVoiceText.classList.add("d-block");
})
