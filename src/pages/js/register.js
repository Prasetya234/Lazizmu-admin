import { mapActions } from "vuex";

export default {
  name: "Register",
  data() {
    return {
      loading: false,
      dataUser: [],
      reg: {
        username: "",
        emailAddress: "",
        passwordHash: "",
        mobilePhoneNumber: "",
      },
    };
  },
  mounted() {
    window.scrollTo(0, 0);
  },
  methods: {
    validEmail(email) {
      var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },
    ...mapActions(["getRegister"]),
    async createUser() {
      if (
        this.reg.username === "" ||
        this.reg.emailAddress === "" ||
        this.reg.passwordHash === "" ||
        this.reg.mobilePhoneNumber === ""
      ) {
        alert("Harap di isi semua");
        return;
      }
      this.loading = true;
      const dataUser = {
        username: this.reg.username,
        emailAddress: this.reg.emailAddress,
        passwordHash: this.reg.passwordHash.toString(),
        mobilePhoneNumber: this.reg.mobilePhoneNumber.toString(),
      };
      if (this.validEmail(this.reg.emailAddress)) {
        this.getRegister({
          body: dataUser,
          success: (res) => {
            let convertToString = JSON.stringify(res.body.content);
            sessionStorage.setItem("DATA", convertToString);
            this.$router.push("/dashboard");
          },
          fail: (res) => {
            alert(res.body.content);
            this.loading = false;
          },
        });
      } else {
        alert("Harus Mengisi Dengan Format Email");
        this.loading = false;
      }
    },
  },
};
