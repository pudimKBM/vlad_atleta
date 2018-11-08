import {MDCRipple} from '@material/ripple';
import {MDCSelect} from '@material/select';
import {MDCTextField} from '@material/textfield';
import{MDCCheckbox} from "@material/checkbox"; 
import{MDCFormField} from "@material/form-field";
import {MDCFloatingLabel} from "@material/floating-label"
const formField = new MDCFormField(document.querySelector('.mdc-formfield'));
const checkbox = new MDCCheckbox(document.querySelector('.mdc-checkbox'));
const shippingForm = document.querySelector('#crane-shipping-form');



const floatingLabel = new MDCFloatingLabel(document.querySelector('.mdc-floating-label'));
shippingForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  alert('Success!');
});

new MDCRipple(document.querySelector('.mdc-button'));
new MDCSelect(document.querySelector('.mdc-select'));

const textFieldElements = [].slice.call(document.querySelectorAll('.mdc-text-field'));
textFieldElements.forEach((textFieldEl) => {
  formField.input = checkbox;
  new MDCTextField(textFieldEl);
});
