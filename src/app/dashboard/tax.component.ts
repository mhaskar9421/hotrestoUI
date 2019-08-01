import { Component, OnInit, OnDestroy, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material';
import { DashboardService } from './dashboard.service';
import { notificationMessages } from '../../notificationMessages';
import { TaxModel } from './tax.model';
import { MatSnackBar } from '@angular/material';

export interface DialogData {
}

@Component({
    selector: 'addtax',
    templateUrl: './addTax.html',
    providers: [DashboardService, notificationMessages]
})

export class AddTaxDialog {
    public taxModel: TaxModel;
    IsmodelShow = false;
    taxDetails: {};

    constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData, public constants: notificationMessages, private _snackBar: MatSnackBar, public dialog: MatDialog, private dashboardService: DashboardService, ) {
        this.taxModel = new TaxModel();
        this.viewTax();
    }

    viewTax() {
        this.dashboardService.viewTax()
            .subscribe(
                data => {
                    if (data) {
                        this.taxDetails = data;
                    } else {
                        this.taxDetails = null;
                    }
                },
                error => {
                    console.log(error);
                });
    }

    addTax() {
        this.dashboardService.addTax(this.taxModel.taxType, this.taxModel.taxAmount)
            .subscribe(
                data => {
                    if (data) {
                        this._snackBar.open(this.constants.addTax, '', {
                            duration: 3000,
                            horizontalPosition: 'right',
                            verticalPosition: 'top'
                        });
                    }
                },
                error => {
                    console.log(error);
                });
    }

    close() {
        this.IsmodelShow = true;// set false while you need open your model popup
        // do your more code
    }
}