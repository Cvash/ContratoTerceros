import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  profileForm: FormGroup;
  profileForm2: FormGroup;
  profileForm3: FormGroup;
  profileForm4: FormGroup;
  profileForm5: FormGroup;


  constructor(private formBuilder: FormBuilder) {
    this.profileForm = this.formBuilder.group({
      FullName: [''],
      Email: [''],
      Telefono: [''],



    })
    this.profileForm2 = this.formBuilder.group({
      FullName: [''],
      IDdirection: [''],


    })
    this.profileForm3 = this.formBuilder.group({
      FullName: [''],



    })
    this.profileForm4 = this.formBuilder.group({
      TrimestreUno: [''],
      TrimestreDos: [''],
      TrimestreTres: [''],
      TrimestreCuatro: [''],
      IDcontract: [''],


    })
    this.profileForm5 = this.formBuilder.group({
      FullName: [''],
      TrimestreUno: [''],
      TrimestreDos: [''],
      TrimestreTres: [''],
      TrimestreCuatro: [''],
      


    })
  }
  saveForm(values) {
    console.log('reactiveForm', values)
  }




  ngOnInit(): void {
  }


}
