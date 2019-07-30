export const environment = {
  production: true,
  AUTHENTICATION: {
    TOKENNAME: 'session-id'
  },
  FRONTEND: {
    TITLE: "Angular Starter kit",
    POLLING_TIMEOUT: 1000,
    PAGE_SIZE: 20,
    BASIC_ROUTES: {
      LOGIN_ROUTE: '/login',
      HOME: '/home'
    }
  },
  BACKEND: {
    URL: {
      login: "http://hotresto/backend/AuthController/login",
      logout: "http://hotresto/backend/AuthController/logout",
      addRoom: "http://hotresto/backend/RoomController/addRoom",
      viewRoom: "http://hotresto/backend/RoomController/viewRoom",
      addCustomer: "http://hotresto/backend/CustomerController/addCustomer",
      viewCustomer: "http://hotresto/backend/CustomerController/viewCustomer"
    },
    WS: "ws://localhost:5500",
    ENTRY_POINTS: {
      SIGNIN: "/login",
      SIGNOUT: "/logout",
      DASHBOARD: "/statistics",
      STATUS: "/status",
      USERS: "/users"
    }
  }
};