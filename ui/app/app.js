import { LightningElement, track } from 'lwc';
import getContactList from '@salesforce/apex/ContactController.getContactList';

export  default class App extends LightningElement {
 
 @track searchKey;
 @track contacts;
 @track error;
 
 handleSearchKeyChange(event) {
   this.searchKey = event.target.value;
 }
 
  handleSearchClick() {
   getContactList({searchKey:'$searchKey'}).then(data =>{ 
            alert(JSON.stringify(data))
            this.contacts = data;
            this.error = undefined;
        }).catch(error =>{
            this.error = error;
            this.contacts = undefined;
        });
  }
 
}
