import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CardService } from '../../services/card.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Card } from '../../models/card';
import { SnackbarService } from '../../services/snackbar.service';

@Component({
  selector: 'app-card-model',
  templateUrl: './card-model.component.html',
  styleUrls: ['./card-model.component.scss']
})
export class CardModelComponent implements OnInit {

  cardForm!: FormGroup;
  showSpinner: boolean = false;

  constructor(
    private dialogRef: MatDialogRef<CardModelComponent>,
    private fb: FormBuilder,
    private cardService: CardService,
    private _snackBar: MatSnackBar,
    private snackbarService : SnackbarService,
    @Inject(MAT_DIALOG_DATA) public data: Card
  ) { }

  ngOnInit(): void {
    this.cardForm = this.fb.group({
      name: [this.data?.name || '', Validators.maxLength(50)],
      title: [this.data?.title || '', [Validators.required, Validators.maxLength(255)]],
      phone: [this.data?.phone || '', [Validators.required, Validators.maxLength(20)]],
      email: [this.data?.email || '', [Validators.email, Validators.maxLength(50)]],
      address: [this.data?.address || '', Validators.maxLength(255)],
    });
  }

  addCard(): void {
    this.showSpinner = true;
    console.log(this.cardForm.value);
    this.cardService.addCard(this.cardForm.value)
      .subscribe(() => { 
        this.getSuccess('Bravoo... Es ist hier::))'); 
      },()=>{
        this.getError('Upsss...es gibt eine Fehler')
      });
  }

  updateCard(): void {
    this.showSpinner = true;
    this.cardService.updateCard(this.cardForm.value, this.data.id)
      .subscribe(() => {
        this.getSuccess('Bravoo... Es ist bearbeitet::))'); 
      },()=>{
        this.getError('Upsss...es gibt eine Fehler')
      });
  }

  deleteCard(): void {
    this.showSpinner = true;
    this.cardService.deleteCard(this.data.id)
      .subscribe(() => {
        this.getSuccess('Bravoo... Es ist weg::))'); 
      },()=>{
        this.getError('Upsss...es gibt eine Fehler')
      });
  }

  getSuccess(message: string): void {
    this.snackbarService.createSnackbar(message);
    this.cardService.getCards(); // Kartları yeniden yükler
    this.showSpinner = false;
    this.dialogRef.close(true); // Dialogu kapatır
  }

  getError(message: string): void {
    this.snackbarService.createSnackbar(message);
    this.showSpinner = false;
  }
}
