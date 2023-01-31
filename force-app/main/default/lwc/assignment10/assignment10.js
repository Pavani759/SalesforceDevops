import { LightningElement, wire } from 'lwc';
import CONTACT_FIRST_NAME from '@salesforce/schema/Contact.FirstName';
import CONTACT_LAST_NAME from '@salesforce/schema/Contact.LastName';
import CONTACT_PHONE from '@salesforce/schema/Contact.Phone';
import CONTACT_EMAIL from '@salesforce/schema/Contact.Email';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class Assignment10 extends LightningElement {
    fields = [CONTACT_FIRST_NAME, CONTACT_LAST_NAME, CONTACT_PHONE, CONTACT_EMAIL];



    handleSuccess() {

        this.dispatchEvent(

            new ShowToastEvent({

                title: 'Success!',

                message: ' Contact is created.',

                variant: 'success'

            }),

        );

    }

}