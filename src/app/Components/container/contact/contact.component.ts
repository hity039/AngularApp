import { Component, OnInit , inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ContactService } from '../../../Services/contact.service';
import { ThanksComponent } from './thanks/thanks.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ThanksComponent,CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit {
  contactForm : FormGroup;
  contactService : ContactService = inject(ContactService);
  showThanks : boolean = false;
  ngOnInit(): void {

    this.contactForm = new FormGroup({
      name : new FormControl(null,Validators.required),
      email : new FormControl(null,[Validators.required,Validators.email]),
      message : new FormControl(null,Validators.required)
    });
  }
  onFormSubmitted(){
      const name = this.contactForm.value.name;
      const email = this.contactForm.value.email;
      const message = this.contactForm.value.message;
      const data = {
        name : name,
        email : email,
        message : message
      };
      this.contactService.InsertQueryDetails(data).subscribe(res =>{
        this.showThanks = true;
        setTimeout(()=>{
          this.contactForm.reset();
          this.showThanks = false
        },3000)
      })
  }
}
