// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  BACKEND: {
    URL: {
      login: "http://hotresto/backend/AuthController/login",
      addTax: "http://hotresto/backend/TaxController/addTax",
      viewTax: "http://hotresto/backend/TaxController/viewTax",
      addRoom: "http://hotresto/backend/RoomController/addRoom",
      viewRoom: "http://hotresto/backend/RoomController/viewRoom",
      deleteTax: "http://hotresto/backend/TaxController/deleteTax/",
      deleteRoom: "http://hotresto/backend/RoomController/deleteRoom/",
      totalRooms: "http://hotresto/backend/RoomController/totalRooms",
      bookRoom: "http://hotresto/backend/RoomController/bookRoom",
      getRoomsList: "http://hotresto/backend/RoomController/getAvaliableRooms",
      addCustomer: "http://hotresto/backend/CustomerController/addCustomer",
      viewCustomer: "http://hotresto/backend/CustomerController/viewCustomer",
      deleteCustomer: "http://hotresto/backend/CustomerController/deleteCustomer/",
      editBooking: "http://hotresto/backend/RoomController/updateBookingInfo",
      totalCustomers: "http://hotresto/backend/CustomerController/totalCustomers",
      viewBookedCustomers: "http://hotresto/backend/CustomerController/viewBookedCustomers",
      getRoomCustomerDetails: "http://hotresto/backend/CustomerController/getRoomCustomerDetails"
    }
  }
};
