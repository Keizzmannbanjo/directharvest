// AuthService.js
const AuthService = {
  isAuthenticated: () => {
    const token = localStorage.getItem("jwtToken");
    return token ? true : false;
  },

  login: (data) => {
    localStorage.setItem("jwtToken", data.token);
    localStorage.setItem("userId", data.data.data._id);
  },

  logout: () => {
    localStorage.removeItem("jwtToken");
  },
};

export default AuthService;
