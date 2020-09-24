import Axios from "axios";

const auth = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true;
    // fetch("/isAuth", {
    //   credentials: "include",
    // })
    //   .then((res) => {
    //     this.isAuthenticated = true;
    //     res
    //       .json()
    //       .then((data) => ({
    //         data: data,
    //         status: data.status,
    //       }))
    //       .then((response) => {
    //         // console.log(response);
    //         if (typeof cb === "function") {
    //           // cb(res.json().user);
    //           cb(response.data);
    //         }
    //       });
    //   })
    //   .catch((err) => {
    //     console.log("Error Fetching Authorised user " + err);
    //   });
    cb();
  },
  logout(cb) {
    // fetch("/logout", {
    //   method: "POST",
    //   credentials: "include",
    // })
    //   .then((res) => {
    this.isAuthenticated = false;
    cb();
    // })
    // .catch((err) => {
    //   console.log("ERROR LOGOUT");
    // });
  },
  isUserAuthenticated() {
    return this.isAuthenticated;
  },
};

export default auth;
