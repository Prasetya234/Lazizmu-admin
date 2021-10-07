export default {
  name: "history",
  data() {
    return {
      dataHistory : [
        {
         username : "Jon",
         noTelp : "083723821124",
         kategori : "Ekonomi",
         donasi : "1.000.000",
         date : "2000-01-20",
        },
        {
          username : "Dev",
          noTelp : "091883738291",
          kategori : "Pendidikan",
          donasi : "50.000.000",
          date : "1999-09-02",
         },
         {
          username : "Willi",
          noTelp : "091827387913",
          kategori : "Sosial",
          donasi : "10.000.000",
          date : "2010-01-19",
         },
      ]
    };
  },
  methods : {
    deleteHistory(y) {
      this.dataHistory.splice(y, 1);
    },
  },
  mounted() {
    window.scrollTo(0, 0);
  },
};
