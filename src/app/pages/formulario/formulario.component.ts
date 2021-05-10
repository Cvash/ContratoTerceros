import { Component, OnInit } from '@angular/core';

import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  profileForm:FormGroup
  constructor(private formBuilder: FormBuilder){
      this.profileForm = this.formBuilder.group({
        firstName:[''],
        lastName:[''],
        address:[''],
        job:[''],
        gender:['']
      })
    }
  saveForm(values){
    console.log('reactiveForm',values)
  }


  ngOnInit(): void {
  }

}
