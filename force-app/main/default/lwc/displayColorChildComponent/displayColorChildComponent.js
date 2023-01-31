import { LightningElement, api } from 'lwc';
export default class DisplayColorChildComponent extends LightningElement {
    @api selectedColor;
    renderedCallback() {
        this.template.querySelector(".customBar").style.backgroundColor = this.selectedColor;
    }
}