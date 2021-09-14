import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Salutations } from 'src/app/data/salutation.data';
import { ToArray } from 'src/app/helpers/enum.helper';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  salutations = ToArray(Salutations);

  contactForm = this.fb.group({
    salutation: ['', [Validators.required]],
    firstname: ['', [Validators.required]],
    lastname: ['', [Validators.required]],
    message: ['', [Validators.required]],
    tos: ['', [Validators.required]],
  });

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private contactService: ContactService,
  ) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    if (this.canSubmit()) {
      if (this.contactService.createContact(this.contactForm.getRawValue())){
        this.router.navigate(['.'], { relativeTo: this.activatedRoute, queryParams: { contactsent: true } });
      }
    }
  }

  canSubmit(): boolean {
    return (this.contactForm.valid && this.contactForm.touched && this.contactForm.get('tos')?.value == true);
  }

}
