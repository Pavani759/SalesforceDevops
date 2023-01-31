import { LightningElement,api } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

import CASE_SUBJECT from '@salesforce/schema/Case.Subject';
import CASE_DESCRIPTION from '@salesforce/schema/Case.Description';
import CASE_SUPPLIEDPHONE from '@salesforce/schema/Case.SuppliedPhone';
// import CASE_STATUS from '@salesforce/schema/Case.Status';
import CASE_ORIGIN from '@salesforce/schema/Case.Origin';

export default class Assignment6 extends LightningElement {
    @api objectApiName = 'Case';
    fields = [CASE_SUBJECT, CASE_DESCRIPTION, CASE_SUPPLIEDPHONE, CASE_ORIGIN];

    handleSuccess(event) {
        const evt = new ShowToastEvent({
            title: 'Case created',
            message: 'Record ID: ' + event.detail.id,
            variant: 'success',
        });
        this.dispatchEvent(evt);

    }
}