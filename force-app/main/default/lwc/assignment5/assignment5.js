import { LightningElement } from 'lwc';
import FIRST_NAME from '@salesforce/schema/User.FirstName';
import LAST_NAME from '@salesforce/schema/User.LastName';
import EMAIL from '@salesforce/schema/User.Email';
export default class Assignment5 extends LightningElement {

    recordId = '0052w00000CGUx7AAH';
    fields = [FIRST_NAME, LAST_NAME, EMAIL];

}