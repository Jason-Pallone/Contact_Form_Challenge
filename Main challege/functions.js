// Makes sure the contact form has been correctly filled out before submission
function validateForm(form) {
    for(var i=0; i < form.elements.length; i++){
      if(form.elements[i].value === '' && form.elements[i].hasAttribute('required')){
        alert('Please fill out all the required fields');
        validationMessage.style.display = 'none';
        return false;
      } else {
        validationMessage.style.color = "white";
        validationMessage.innerHTML = "You have filled in all the fields correctly";
        validationMessage.style.display = "block";
        validationMessage.style.background = "rgb(15, 218, 92)";
      }
    } 
  };
  
  
  // Displays an error message over current input element and changes input elements border to red.
  function errorMsgDisplay(inputElement, errorMsg){
      inputElement.style.border =  "thin solid red";
      errorMsg.style.display = 'block';
      errorMsg.style.color = 'red';
    };
  
  // Checks if a checkbox is checked, if it is, allows the element to be enabled.
  function isChecked(boolean, element) {
    if(boolean) {
      element.disabled = false;
      element.style.transition =".3s";
      element.style.opacity = 1;
    } else {
      element.disabled = true;
      element.style.transition = ".3s";  
      element.style.opacity = .5;
    }
  };
  
  // Checks to see if an element is required, if it is, addes the required attribute and class, else removes them.
  function isRequired(boolean, element, elementLabel) {
    if(boolean) {
      element.required = true;
      elementLabel.classList.add("required");
    } else {
      element.required = false;
      elementLabel.classList.remove("required");
    }
  };
    
    
  
    /* This was the validation function I was working on, I got it about halfway done. Still working to
    try and find a solution to have it validate correctly. It stops validating after phone number. */
  
    /*if( first.value != '' && last.value != ''
      && phone.value === phone.value.replace(/[^\d]/,'') 
      && phone.value != ''
      //&& email.value === /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(email.value)
      /*&& promo.value === /^[a-z0-9]+$/i) {
      validationMessage.style.color = "white";
      validationMessage.innerHTML = "You have filled in all the fields correctly";
      validationMessage.style.display = "block";
      validationMessage.style.background = "rgb(15, 218, 92)";
      } else {
      validationMessage.style.color = "red";
      validationMessage.innerHTML = "Please fill out all the required fields";
      validationMessage.style.display = "block";
      validationMessage.style.background = "white";
     }*/
  
  