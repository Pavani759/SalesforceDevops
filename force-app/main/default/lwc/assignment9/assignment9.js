import { LightningElement,track} from 'lwc';
// import server side apex class method
import getAccountList from '@salesforce/apex/CustomSearchSobjectLWC.getAccountList';
// import standard toast event
import {ShowToastEvent} from 'lightning/platformShowToastEvent'
export default class Assignment9 extends LightningElement {

    @track accountsRecord;
    searchValue = '';
    // update searchValue var when input field value change

    searchKeyword(event) {
        this.searchValue = event.target.value;
    }

 

    // call apex method on button click
    handleSearchKeyword() {
        if (this.searchValue !== '') {
            getAccountList({
                    searchKey: this.searchValue
                })
                .then(result => {
                    // set @track accounts variable with return account list from server  
                    this.accountsRecord = result;
                    console.log(this.accountsRecord);
                })

                .catch(error => {
                    const event = new ShowToastEvent({
                        title: 'Error',
                        variant: 'error',
                        message: error.body.message,

                    });

                    this.dispatchEvent(event);
                    // reset accounts var with null  
                    this.accountsRecord = null;

                });

        } else {
            // fire toast event if input field is blank
            const event = new ShowToastEvent({
                variant: 'error',
                message: 'Search text missing..',
            });
            this.dispatchEvent(event);
        }

    }

}