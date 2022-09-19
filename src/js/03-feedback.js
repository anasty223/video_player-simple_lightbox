// import throttle  from "lodash.throttle";



// const refs = {
//    form: document.querySelector('.feedback-form'),
//    textarea: document.querySelector('.feedback-form textarea'),
//    input: document.querySelector('.feedback-form input')
// };

// const STORAGE_KEY = "feedback-form-state";
// populateTextearea();
// populateInput();


// refs.form.addEventListener('submit', onFormSubmit);
// refs.textarea.addEventListener('input', throttle(onTextearea,500));

// refs.input.addEventListener('input',throttle(onInput,500));

// function onFormSubmit(evt) {
//     evt.preventDefault();

//     console.log("отправляем форму");

//     // evt.currentTarget.reset();
// //записываем ключ
//     localStorage.removeItem(STORAGE_KEY);
// }

// function onTextearea(evt) {
//     const message = evt.target.value;
  
//     localStorage.setItem(STORAGE_KEY,message)
// }

// function onInput(evt) {
//     const email = evt.target.value;

//     localStorage.setItem(STORAGE_KEY,email)
// }

// //сохраняем текст
// function populateTextearea() {
//     let savedMessage = localStorage.getItem(STORAGE_KEY);

//     if (savedMessage) {
//         console.log(savedMessage);
//         refs.textarea.value = savedMessage;
//     }
// }
// function populateInput() {
//     let savedEmail = localStorage.getItem(STORAGE_KEY);

//      if (savedEmail) {
//         console.log(savedEmail);
//         refs.input.value = savedEmail;
//     }
// }

// ===========================================================
import throttle from 'lodash.throttle';

const refs = {
   form: document.querySelector('.feedback-form'),
   textarea: document.querySelector('.feedback-form textarea'),
   input: document.querySelector('.feedback-form input')
};

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onFormInput, 500));



const LOCALSTOREGE_KEY = 'feedback-form-state'

initForm();
function onFormInput(e) {
   
   let persistedFilters = localStorage.getItem(LOCALSTOREGE_KEY);
   persistedFilters = persistedFilters ? JSON.parse(persistedFilters) : {};
   persistedFilters[e.target.name] = e.target.value;
   localStorage.setItem(LOCALSTOREGE_KEY, JSON.stringify(persistedFilters));
   
};

function initForm() {
   let persistedFilters = localStorage.getItem(LOCALSTOREGE_KEY);
   if (persistedFilters) {
      persistedFilters = JSON.parse(persistedFilters);
      Object.entries(persistedFilters).forEach(([name, value]) => {
         refs.form.elements[name].value = value;
      });
    }
}
function onFormSubmit(e) {
   e.preventDefault();
   const formData = new FormData(refs.form);
  
  
   const user = {};
   formData.forEach((value, name) => {
      
       user[name] = value;
      

   });
   console.log(user);

   e.currentTarget.reset();
   localStorage.removeItem(LOCALSTOREGE_KEY);
};