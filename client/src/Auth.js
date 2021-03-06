const auth = {
  isAuthenticated: true,
  authenticate(cb) {
    this.isAuthenticated = true;
    cb();
  },
  logout(cb) {
    this.isAuthenticated = false;
    cb();
  },
  isUserAuthenticated() {
    return this.isAuthenticated;
  },
};

export default auth;
