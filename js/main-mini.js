var link=document.querySelector(".link-button"),popup=document.querySelector(".feedback-wrapper"),close=document.querySelector(".modal-close"),login=popup.querySelector("[name=name]"),form=popup.querySelector("form"),email=popup.querySelector("[name=email]"),textarea=popup.querySelector("[name=text]");form.addEventListener("submit",function(e){e.preventDefault(),login.value&&email.value&&textarea.value||(e.preventDefault(),console.log("Нужно ввести данные"),login.classList.add("login-field-error"),email.classList.add("login-email-error"),textarea.classList.add("login-textarea-field-error"),popup.classList.add("shake"))}),link.addEventListener("click",function(){popup.classList.add("feedback-wrapper-show"),login.focus()}),close.addEventListener("click",function(){popup.classList.remove("feedback-wrapper-show"),popup.classList.remove("shake")}),window.addEventListener("keydown",function(e){27===e.keyCode&&(e.preventDefault(),popup.classList.contains("feedback-wrapper-show")&&(popup.classList.remove("feedback-wrapper-show"),popup.classList.remove("shake")))});