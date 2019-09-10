// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: true,
  BACKEND: {
    URL: {
      login: "http://www.swatikinkar.com/hotresto/backend/AuthController/login",
      addTax: "http://www.swatikinkar.com/hotresto/backend/TaxController/addTax",
      viewTax: "http://www.swatikinkar.com/hotresto/backend/TaxController/viewTax",
      addRoom: "http://www.swatikinkar.com/hotresto/backend/RoomController/addRoom",
      viewRoom: "http://www.swatikinkar.com/hotresto/backend/RoomController/viewRoom",
      deleteTax: "http://www.swatikinkar.com/hotresto/backend/TaxController/deleteTax/",
      deleteRoom: "http://www.swatikinkar.com/hotresto/backend/RoomController/deleteRoom/",
      totalRooms: "http://www.swatikinkar.com/hotresto/backend/RoomController/totalRooms",
      bookRoom: "http://www.swatikinkar.com/hotresto/backend/RoomController/bookRoom",
      getRoomsList: "http://www.swatikinkar.com/hotresto/backend/RoomController/getAvaliableRooms",
      addCustomer: "http://www.swatikinkar.com/hotresto/backend/CustomerController/addCustomer",
      viewCustomer: "http://www.swatikinkar.com/hotresto/backend/CustomerController/viewCustomer",
      deleteCustomer: "http://www.swatikinkar.com/hotresto/backend/CustomerController/deleteCustomer/",
      editBooking: "http://www.swatikinkar.com/hotresto/backend/RoomController/updateBookingInfo",
      totalCustomers: "http://www.swatikinkar.com/hotresto/backend/CustomerController/totalCustomers",
      viewBookedCustomers: "http://www.swatikinkar.com/hotresto/backend/CustomerController/viewBookedCustomers",
      getRoomCustomerDetails: "http://www.swatikinkar.com/hotresto/backend/CustomerController/getRoomCustomerDetails"
    }
  }
};
