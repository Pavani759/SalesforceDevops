import { LightningElement, api } from 'lwc';

export default class HelloWorld extends LightningElement {
    @api sname = 'Pavani';
    handleNameChange(event){
        this.sname = event.target.value;

    }
}