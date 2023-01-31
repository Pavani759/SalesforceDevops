import { LightningElement } from 'lwc';
export default class SelectColorParentComponent extends LightningElement {
    value = 'green';
    get options() {
        return [
            { label: 'RED', value: 'red' },
            { label: 'GREEN', value: 'green' },
            { label: 'BLUE', value: 'blue' },
            { label: 'BROWN', value: 'brown' },
        ];
    }

    handleChange(event) {
        this.value = event.detail.value;
    }

}