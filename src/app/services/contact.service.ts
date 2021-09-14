import { Injectable } from '@angular/core';
import { Contact } from '../data/contact.data';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor() { }

  createContact(contact: Contact): boolean {
    console.log(contact);
    return true;
  }
}
