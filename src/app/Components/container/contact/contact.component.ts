import { Component, OnDestroy, OnInit , inject } from '@angular/core';
import { FormGroup, FormControl, Validators , ReactiveFormsModule } from '@angular/forms';
import { ContactService } from '../../../Services/contact.service';
import { ThanksComponent } from './thanks/thanks.component';
import { CommonModule } from '@angular/common';
import { SnackbarComponent } from '../../../Utility/snackbar/snackbar.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ThanksComponent,CommonModule,ReactiveFormsModule ,SnackbarComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit , OnDestroy {
  contactForm : FormGroup;
  contactService : ContactService = inject(ContactService);
  showThanks : boolean = false;
  snackbarMessage : string;
  showSnackbar : boolean = false;
  ngOnInit(): void {

    this.contactForm = new FormGroup({
      name : new FormControl(null,Validators.required),
      email : new FormControl(null,[Validators.required,Validators.email]),
      message : new FormControl(null,Validators.required)
    });
  }
  onFormSubmitted(){
    console.log("Contact Form" , this.contactForm);
      const name = this.contactForm.value.name;
      const email = this.contactForm.value.email;
      const message = this.contactForm.value.message;
      const data = {
        name : name,
        email : email,
        message : message
      };
      // this.contactService.InsertQueryDetails(data).subscribe(res =>{
      //   this.showThanks = true;
      //   setTimeout(()=>{
      //     this.showThanks = false;
      //   },5000);
      //   console.log("Response from server \n",res);
        
      // },err =>{
      //   this.handleErrorMessages(err);
        
      // })

      this.contactService.InsertQueryDetails(data).subscribe({
       next : (res) =>{
        this.showThanks = true;
          setTimeout(()=>{
            this.showThanks = false;
          },5000);
          console.log("Response from server \n",res);
       },
       error: (error)=>{
        this.handleErrorMessages(error);
       }
      })
        this.contactForm.reset();
      //  this.showThanks = false;
  }
  hideThanks(){
    this.showThanks = false;
  }
  handleErrorMessages(err){
  console.log(err.message);
  if(err.message == "Http failure response for http://localhost:5223/api/Contact/InsertQuery: 401 Unauthorized"){
    this.showSnackbar = true;
    this.snackbarMessage = "You have to login first";
  }
  }

  ngOnDestroy(): void {
    
  }

}
