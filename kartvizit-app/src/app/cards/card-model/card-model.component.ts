import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CardService } from '../../services/card.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Card } from '../../models/card';

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
    private _snackBar : MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public data:Card
  ) { }

  ngOnInit(): void {
    this.cardForm = this.fb.group( {
    name:[this.data?.name || '', Validators.maxLength(50)],
    title:[this.data?.title||'', [Validators.required, Validators.maxLength(255)]],
    phone:[this.data?.phone ||'', [Validators.required, Validators.maxLength(20)]],
    email:[this.data?.email ||'', [Validators.email, Validators.maxLength(50)]],
    address:[this.data?.address ||'', Validators.maxLength(255)], 
   });
 }

 addCard(): void {
  console.log(this.cardForm.value);
  this.cardService.addCard(this.cardForm.value)
  .subscribe((res: any) => { 
    this._snackBar.open('Bravoo... Es ist hier::))', '', {
      duration: 4000, 
    });
    this.cardService.getCards();
    this.dialogRef.close(true);
  });
}

updateCard(): void {
  this.cardService.updateCard(this.cardForm.value, this.data.id)
    .subscribe((res: any) => {
      console.log(res);
      this._snackBar.open('Bravoo... Es ist bearbeitet::))', '', {
        duration: 4000,
      });
      this.cardService.getCards();
      this.dialogRef.close(true);
    });
}
deleteCard(): void {
  this.cardService.deleteCard( this.data.id)
    .subscribe((res: any) => {
      console.log(res);
      this._snackBar.open('Bravoo... Es ist weg::))', '', {
        duration: 4000,
      });
      this.cardService.getCards();
      this.dialogRef.close(true);
    });
}
}


 