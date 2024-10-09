import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CardService } from '../../services/card.service';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-card-model',
  templateUrl: './card-model.component.html',
  styleUrls: ['./card-model.component.scss']
})
export class CardModelComponent implements OnInit {

  cardForm!: FormGroup;

  constructor(
    private dialogRef: MatDialogRef<CardModelComponent>,
    private fb: FormBuilder,
    private cardService: CardService,
    private _snackBar : MatSnackBar
  ) { }

  ngOnInit(): void {
    this.cardForm = this.fb.group( {
    name:['', Validators.maxLength(50)],
    title:['', [Validators.required, Validators.maxLength(255)]],
    phone:['', [Validators.required, Validators.maxLength(20)]],
    email:['', [Validators.email, Validators.maxLength(50)]],
    address:['', Validators.maxLength(255)], 
   });
 }

 addCard(): void {
  console.log(this.cardForm.value);
  this.cardService.addCard(this.cardForm.value).subscribe((res: any) => { 
    this.cardForm.reset();
    this._snackBar.open('Bravoo... Es ist hier::))', '', {
      duration: 4000, 
    });
    this.dialogRef.close(true);
  });
}
}

