const auth = {
  isAuthenticated: false,
  authenticate(cb) {
    // fetch('/user', {
    // 	credentials: 'include'
    // })
    // 	.then((res) => {
    this.isAuthenticated = true;
    // console.log(res.data.user);
    // if (typeof cb === 'function') {
    // 	cb(res.json().user);
    // }
    cb();
    // })
    // .catch((err) => {
    // 	console.log('Error Fetching Authorised user');
    // });
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
