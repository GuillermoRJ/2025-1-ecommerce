import { Component } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-footer',
  imports: [ReactiveFormsModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

  userForm!:FormGroup;

  constructor(public formBuilder:FormBuilder){
    this.userForm=this.formBuilder.group({
      name:['', [Validators.required, Validators.minLength(3)]],
      email:['', [Validators.required, Validators.email]],
      password:['', [Validators.required, Validators.minLength(8)]],

    });
  }

  onSubmit(): void{
    if (this.userForm.valid){
      alert("Su ticket de compra se ha enviado a su correo")
    }
  }

}
