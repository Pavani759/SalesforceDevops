import { LightningElement } from 'lwc';

export default class HelloConditionalRendering extends LightningElement {

    isSelected = false;
    handleChange(event){
        this.isSelected = event.target.checked;
    }
}