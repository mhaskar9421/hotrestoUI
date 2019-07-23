// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
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
      loginUser: "http://hotresto/backend/AuthUser/loginUser",
      logout: "http://hotresto/backend/userController/logout"
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
