/* global moment */
import { LightningElement, wire } from 'lwc';
import { loadScript, loadStyle} from 'lightning/platformResourceLoader';
import App from '@salesforce/resourceUrl/app';
import getContactList from '@salesforce/apex/ContactController.getContactList';
import getAccountList from '@salesforce/apex/ContactController.getAccountList';

export default class LWCReactContainer extends LightningElement {
    handleLoad() {
        getAccountList()
            .then(result => {
                console.log(result);
            })
            .catch(error => {
                console.log(result);
            });
    }
    @wire(getContactList)
    wiredContacts({ error, data }) {
        Promise.all([
            loadScript(this, App + '/bundle.js'),
        ]).then(() => {
            mount(this.template.querySelector('div'), { contacts: data, error: error, handleLoad: this.handleLoad});
        });
    }

}
