import { LightningElement } from 'lwc';

import { NavigationMixin } from 'lightning/navigation';



export default class Assignment10mixin extends NavigationMixin(LightningElement) {



    navigateToInstagram() {

        this[NavigationMixin.Navigate]({

            type: 'standard__webPage',

            attributes: {

                url: 'https://www.instagram.com/'

            }

        },

      );

    }



    navigateToLead() {

        this[NavigationMixin.Navigate]({

            type: 'standard__objectPage',

            attributes: {

                objectApiName: 'Lead',

                actionName: 'home'

            }

        });

    }



    navigateToContactList() {

        this[NavigationMixin.Navigate]({

            type: 'standard__objectPage',

            attributes: {

                objectApiName: 'Contact',

                actionName: 'list'

            },

            state: {

                filterName: 'All'

            }

        });

    }



    navigateToAccountRecord() {

        this[NavigationMixin.Navigate]({

            type: 'standard__recordPage',

            attributes: {

                recordId: '0012w00001FdRwsAAF',

                objectApiName: 'Account',

                actionName: 'view'

            }

        });

    }

}