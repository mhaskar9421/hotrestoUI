import { Injectable } from "@angular/core";


@Injectable()
export class notificationMessages {
    loginFailed = 'Incorrect username/password';
    addRoom = 'Room added successfully!';
    deleteRoom = 'Room deleted successfully!';
    addCustomer = 'Customer added successfully!';
}