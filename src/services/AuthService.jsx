// AuthService.js
const AuthService = {
  isAuthenticated: () => {
    const token = localStorage.getItem("jwtToken");
    return token ? true : false;
  },

  login: (token) => {
    localStorage.setItem("jwtToken", token);
  },

  logout: () => {
    localStorage.removeItem("jwtToken");
  },
};

export default AuthService;
