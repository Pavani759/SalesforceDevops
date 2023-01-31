import { LightningElement } from 'lwc';
import getLeads from '@salesforce/apex/LeadControllerHandler.fetchLeads';
export default class Assignment8 extends LightningElement {
    limit;
    leads;
    error;
    handleInput(event) {
        this.limit = event.target.value;
    }

    handleOnClick() {
        getLeads({ lim: this.limit })
            .then((result) => {
                this.leads = result;
                this.error = undefined;
            }).catch((error) => {
                this.error = error;
                this.leads = undefined;

        });

    }

}