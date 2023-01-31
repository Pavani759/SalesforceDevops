import { LightningElement,track } from 'lwc';
import { subscribe,unsubscribe,createMessageContext,releaseMessageContext } from 'lightning/messageService';
import SAMPLEMC from "@salesforce/messageChannel/LMSDemo__c";

export default class Assignment6caseview extends LightningElement {
    @track receivedMessage = '';
    subscription = null;
    context = createMessageContext();
    subject;
    description;
    phone;

    constructor() {
        super();
    }

    subscribeMC() {
        if (this.subscription) {
            return;
        }
        this.subscription = subscribe(this.context, SAMPLEMC, (message) => {
            // this.displayMessage(message);
            console.log(message.messageToSend.Subject+' hi');
            this.subject=message.messageToSend.Subject;
            this.description=message.messageToSend.Description;
            this.phone=message.messageToSend.Phone;
        });
     }
 
     unsubscribeMC() {
         unsubscribe(this.subscription);
         this.subscription = null;
     }

    //  displayMessage(message) {
    //    // console.log('message inside subscribe '+message);
    //      this.receivedMessage = message ? JSON.stringify(message, null, '\t') : 'no message payload';
    //  }

    //  disconnectedCallback() {
    //      releaseMessageContext(this.context);
    //  }
}