import { LightningElement } from 'lwc';

export default class DataBindingComponent extends LightningElement {
    firstName;
    lastName;
    fullName;

    isVisible = false;
    value;

    handleFirstName(event){
        this.firstName = event.target.value;
    }

    handleLastName(event){
        this.lastName = event.target.value;
    }

    handleCompleteInput(){
            this.isVisible = true;
            this.fullName = this.firstName + ' ' + this.lastName;
            this.value = 'The full name is '+' ---> ' + this.fullName;
           
    }
}