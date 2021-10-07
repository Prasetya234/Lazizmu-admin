import { mapActions } from "vuex";
// import axios from "axios";

export default {
  name: "login",
  data() {
    return {
      loading: false,
      loadingAlert: false,
      codeRequired: false,
      forgotPassword: false,
      active: false,
      second: false,
      change: {
        newPassword: "",
        confirmPassword: "",
      },
      payload: {
        email: "",
        password: "",
      },
      codeKonfirmasi: "",
      requestEmail: "",
      typeInput: "password",
    };
  },
  methods: {
    validEmail(email) {
      var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },
    ...mapActions(["login"]),
    async auth() {
      if (this.payload.email === "" || this.payload.password === "") {
        alert("Form Must Be Filled");
        return;
      }
      if (this.validEmail(this.payload.email)) {
        this.loading = true;
        const headers = {
          email: this.payload.email,
          password: this.payload.password,
        };
        await this.login({
          headers: headers,
          success: (res) => {
            let convertToString = JSON.stringify(res.body.content);
            sessionStorage.setItem("DATA", convertToString);
            window.location.reload();
          },
          fail: (res) => {
            this.loading = false;
            alert(res.body.content);
          },
        });
      } else {
        alert("Email is invalid");
      }
    },
    ...mapActions(["code"]),
    confim() {
      this.loading = true;
      if (this.validEmail(this.requestEmail)) {
        this.loading = true;
        const headers = {
          email: this.requestEmail,
        };
        this.code({
          headers: headers,
          success: (res) => {
            setTimeout(() => {
              this.codeKonfirmasi = res.body.content.code;
              setTimeout(() => {
                this.done();
              }, 2000);
            }, 2000);
            this.loading = false;
            this.active = true;
          },
          fail: () => {
            this.loading = false;
            alert("Email Tidak Terdaftar");
          },
        });
      } else {
        alert("Email is invalid");
      }
    },
    ...mapActions(["validCode"]),
    done() {
      this.validCode({
        data: {
          code: this.codeKonfirmasi,
        },
        success: () => {
          this.forgotPassword = null;
          this.active = false;
        },
        fail: (res) => {
          alert(res.data.content);
        },
      });
    },
    ...mapActions(["changePAssword"]),
    changePassword() {
      if (this.change.newPassword !== this.change.confirmPassword) {
        alert("New Password Harus Sama Dengan Confirm Password ");
        return;
      }
      this.loading = true;
      this.changePAssword({
        data: {
          code: this.codeKonfirmasi,
          newPassword: this.change.newPassword,
          confirmPassword: this.change.confirmPassword,
        },
        success: (res) => {
          this.loading = false;
          this.loadingAlert = true;
          setTimeout(() => {
            let convertToString = JSON.stringify(res.body.content);
            sessionStorage.setItem("DATA", convertToString);
            window.location.reload();
          }, 2000);
        },
        fail: (res) => {
          this.loading = false;
          alert(res.data.content);
        },
      });
    },
  },
};
