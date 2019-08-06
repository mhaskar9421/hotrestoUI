// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: true,
  BACKEND: {
    URL: {
      login: "http://www.ebenezerssschool.org/hotresto/backend/AuthController/login",
      logout: "http://www.ebenezerssschool.org/hotresto/backend/AuthController/logout",
      addTax: "http://www.ebenezerssschool.org/hotresto/backend/TaxController/addTax",
      viewTax: "http://www.ebenezerssschool.org/hotresto/backend/TaxController/viewTax",
      addRoom: "http://www.ebenezerssschool.org/hotresto/backend/RoomController/addRoom",
      viewRoom: "http://www.ebenezerssschool.org/hotresto/backend/RoomController/viewRoom",
      deleteTax: "http://www.ebenezerssschool.org/hotresto/backend/TaxController/deleteTax/",
      deleteRoom: "http://www.ebenezerssschool.org/hotresto/backend/RoomController/deleteRoom/",
      totalRooms: "http://www.ebenezerssschool.org/hotresto/backend/RoomController/totalRooms",
      addCustomer: "http://www.ebenezerssschool.org/hotresto/backend/CustomerController/addCustomer",
      viewCustomer: "http://www.ebenezerssschool.org/hotresto/backend/CustomerController/viewCustomer",
      deleteCustomer: "http://www.ebenezerssschool.org/hotresto/backend/CustomerController/deleteCustomer/",
      totalCustomers: "http://www.ebenezerssschool.org/hotresto/backend/CustomerController/totalCustomers"
    }
  }
};
