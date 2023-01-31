import { LightningElement,api } from 'lwc';
import { publish,createMessageContext,releaseMessageContext } from 'lightning/messageService';
import SAMPLEMC from "@salesforce/messageChannel/LMSDemo__c";

export default class Assignment6case extends LightningElement {
    subjectc='';
    descriptionc='';
    phonenc='';
    context = createMessageContext();
    @api recordId;

    subjectChange(event){
        this.subjectc=event.target.value;
        console.log('message in handle change '+this.subjectc);
    }
    descriptionChange(event){
        this.descriptionc=event.target.value;
        console.log('message in handle change '+this.descriptionc);
    }
    phoneChange(event){
        this.phonenc=event.target.value;
        console.log('message in handle change '+this.phonenc);
    }
    // @track Msg={'Subject':this.subjectc,'Description':this.descriptionc,'Phone':this.phonenc};
    publishMC() {
        const message = {
            messageToSend: {Subject:this.subjectc,Description:this.descriptionc,Phone:this.phonenc},
            sourceSystem: "From create Case form"
        };
        // console.log('message in publish method '+message);
        publish(this.context, SAMPLEMC, message);
    }
    
    handleSuccess(event) {
        this.recordId = event.detail.id;
        console.log(this.recordId);
    } 
}