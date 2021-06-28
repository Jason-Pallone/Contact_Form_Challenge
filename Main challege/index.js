// Form elements 
const contactForm = document.querySelector("#contact_form");
const firstName = document.querySelector("#first_name");
const lastName = document.querySelector("#last_name");
const phoneNumber = document.querySelector("#phone");
const email = document.querySelector("#email");
const howDidYouHearLabel = document.querySelector("#how_did_you_hear_label");
const howDidYouHearMenu = document.querySelector("#how_did_you_hear_menu");
const pleaseSpecifyLabel = document.querySelector("#please_specify_label");
const pleaseSpecify = document.querySelector("#please_specify");
const promo = document.querySelector("#promo_code");
const termsAndConditionsCheckbox = document.querySelector("#terms_and_conditions");
const termsAndConditionsLink = document.querySelector("#terms_and_conditions_link");

//Pop up box elements for terms and conditions
const zeroDisplay = document.querySelector("#zero");
const popUpBox =  document.querySelector("#popUpBox");
const hidePopUp = document.querySelector("#hide");


// Validation, error text elements and submit button
const validationMessage = document.querySelector("#validation_message");
const emailErrorMsg = document.querySelector("#email_error_msg");
const promoErrorMsg = document.querySelector("#promo_error_msg");
const formSubmitBtn = document.querySelector("#form_submit_btn");



// Form submission button, checks to see if terms and conditions have been accepted before submitting
formSubmitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if(termsAndConditionsCheckbox.checked) {
    validateForm(contactForm)
  } else {
    alert("Please accept the terms and conditions")
  };
});


// Checks to see if a valid email address is being entered 
email.addEventListener("input", (e) => {
  const emailInputValue = e.currentTarget.value;
  // Checks to see if email input is valid while it's being entered by the user
  if( emailInputValue.trim() !== '' && /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(emailInputValue) != true) {
     errorMsgDisplay(email, emailErrorMsg);
  } else {
      emailErrorMsg.style.display = 'none';
      email.style.border = "";
  };
});


// Adds or removes required class as needed from how did you hear, depending on promo code current value.
promo.addEventListener('input', (e) => {
  const promoInputValue = e.currentTarget.value;

  // Checking to see if promo code input is empty, if so, how did you hear is required.
  if (promo.value === '') {
    isRequired(true, howDidYouHearMenu, howDidYouHearLabel)
    // Checks to see if a valid promo code is being entered, if not, displays an error message
  } else if( promoInputValue.trim() !== '' && /^[a-z0-9]+$/i.test(promoInputValue) != true) {
    errorMsgDisplay(promo, promoErrorMsg);
  } else {
    isRequired(false, howDidYouHearMenu, howDidYouHearLabel)
    promo.style.border = "";
    promoErrorMsg.style.display = "none";
  }
});

// If the "Other" option is selected in the select menu, then "Please specify" becomes required, else it is not required
howDidYouHearMenu.addEventListener('change', (e) => {
  if(howDidYouHearMenu.value === "Other") {
    isRequired(true, pleaseSpecify, pleaseSpecifyLabel);
    pleaseSpecifyLabel.style.display = 'block';
    pleaseSpecify.style.display = 'block';
  } else {
    isRequired(false, pleaseSpecify, pleaseSpecifyLabel);
    pleaseSpecifyLabel.style.display = 'none';
    pleaseSpecify.style.display = 'none';
   
  };
});


// Terms and conditions pop up text element events
termsAndConditionsLink.addEventListener("click", (e) => {
  zeroDisplay.style.display = "inline-block";
  popUpBox.style.display = "inline-block";  
});

hidePopUp.addEventListener("click", (e) => {
  zeroDisplay.style.display = "none";
  popUpBox.style.display = "none";
});


// If terms and conditions has been accpeted, the submit button is enabled, else it is disabled
termsAndConditionsCheckbox.addEventListener("change", (e) => {
  if(termsAndConditionsCheckbox.checked) {
    isChecked(true, formSubmitBtn);
  } else {
    isChecked(false, formSubmitBtn);
  };
});