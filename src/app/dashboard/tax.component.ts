import { Component, OnInit, OnDestroy, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material';

export interface DialogData {
}

@Component({
    selector: 'addtax',
    templateUrl: './addTax.html',
})

export class AddTaxDialog {
    constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData, public dialog: MatDialog, ) { }
    IsmodelShow = false;

    addTax() {
        console.log("Add tax");
    }
    close() {
        this.IsmodelShow = true;// set false while you need open your model popup
        // do your more code
    }
}