import { LightningElement } from 'lwc';



export default class Assignment3 extends LightningElement {

    heightInM = '';

    weightInKG = '';

    isVisible1 = false;

    isVisible2 = false;

    showBMI = '';

    showPrevBMI = '';

    calcBMI;

    bmi = [];



    handleHeight(event) {

        this.heightInM = event.target.value;

    }

    handleWeight(event) {

        this.weightInKG = event.target.value;

    }



    handleOnClick() {

        this.calcBMI = Math.round(this.weightInKG/(this.heightInM*this.heightInM));

        this.bmi.push(this.calcBMI);

        this.isVisible1 = true;

        this.showBMI = 'Your BMI is ' + this.bmi[this.bmi.length - 1];

    }



    handleOnTick() {

        this.isVisible2 = true;

        this.showPrevBMI = 'Previous BMIs are ' + (this.bmi.slice(Math.max(this.bmi.length - 3, 0))).reverse();

    }

}