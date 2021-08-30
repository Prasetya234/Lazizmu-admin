import { mapActions } from "vuex";

export default {
  name: "login",
  data() {
    return {
      loading: false,
      payload: {
        email: null,
        password: null,
      },
      typeInput: "password",
    };
  },

  mounted() {
    this.auth();
    console.log(this.payload);
  },

  methods: {
    ...mapActions(["login"]),
    auth() {
        let regex = /^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/;
        if (!regex.test(this.payload.email)) {
          this.errors["email"] = "Your email format is invalid!";
        } else {
          const requestBody = {
            email: this.payload.email,
            password: this.payload.password,
          };
          this.login({
            reqBody: requestBody,
            success: (res) => {
              console.log(res);
            },
            failed: (res) => {
              console.log(res);
            },
          });
        }
    },
  },
};
