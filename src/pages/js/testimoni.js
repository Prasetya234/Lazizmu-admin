export default {
  name: "testimoni",
  data() {
    return {
      testimoniBerita: [
        {
          imageProfil: "https://i.pinimg.com/736x/d5/21/fb/d521fba5412e1f7b4806aa3f7b078cac.jpg",
          username: "Azizi",
          keterangan: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea nostrum.",
          date : "2020-10-21"
        },
        {
          imageProfil: "https://i.pinimg.com/736x/d5/21/fb/d521fba5412e1f7b4806aa3f7b078cac.jpg",
          username: "Prass",
          keterangan: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea nostrum.",
          date : "2020-10-21"
        },
        {
          imageProfil: "https://asset-a.grid.id/crop/0x0:0x0/360x240/photo/2020/04/09/663219154.png",
          username: "Salma",
          keterangan: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea nostrum.",
          date : "2020-10-21"
        },
        {
          imageProfil: "https://asset-a.grid.id/crop/0x0:0x0/360x240/photo/2020/04/09/663219154.png",
          username: "Dodi",
          keterangan: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea nostrum.",
          date : "2020-10-21"
        },
        {
          imageProfil: "https://i.pinimg.com/736x/d5/21/fb/d521fba5412e1f7b4806aa3f7b078cac.jpg",
          username: "yayan",
          keterangan: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea nostrum.",
          date : "2020-10-21"
        },
        {
          imageProfil: "https://i.pinimg.com/736x/d5/21/fb/d521fba5412e1f7b4806aa3f7b078cac.jpg",
          username: "Bobi",
          keterangan: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea nostrum.",
          date : "2020-10-21"
        },
      ],
      dataBerita: true,
      tambahBerita: false,
      editBerita: false,
      dataForm: {
        username: "",
        keterangan: "",
        date: "",
        id: "",
      },
    };
  },
  methods: {
    movePageTambahBerita() {
      this.tambahBerita = true;
      if (this.tambahBerita === true) {
        this.dataBerita = false;
        window.scrollTo(0, 0);
      } else {
        alert("{{ Internal Server Error to 1 }}, status:500;");
      }
    },
    movePageEditBerita(j) {
      var jsjjs = this.testimoniBerita[j];
      this.dataForm.username = jsjjs.username;
      this.dataForm.keterangan = jsjjs.keterangan;
      this.dataForm.date = jsjjs.date;
      this.dataForm.id = j;
      this.editBerita = true;
      if (this.editBerita === true) {
        this.tambahBerita = null;
        window.scrollTo(0, 0);
      } else {
        alert("{{ Internal Server Error to 2 }}, status:500;");
      }
    },
    encodemageFileAsURL(element) {
      var file = element.files[0];
      var reader = new FileReader();
      this.reader.onloadend = function() {
        console.log("RESULT", reader.result);
      };
      this.reader.readAsDataURL(file);
    },
    saveBerita() {
      var obj = {
        imageProfil: "",
        username: this.dataForm.username,
        keterangan: this.dataForm.keterangan,
        date : this.dataForm.date,
      };
      this.testimoniBerita.push(obj);
        (this.dataForm.username = ""),
        (this.dataForm.keterangan = ""),
        (this.dataForm.date = ""),
        (this.tambahBerita = false);
    },
    cancle() {
        (this.dataForm.username = ""),
        (this.dataForm.keterangan = ""),
        (this.dataForm.date = ""),
        (this.tambahBerita = false);
    },
    deleteBerita(y) {
      this.testimoniBerita.splice(y, 1);
    },
    editDataBerita() {
      this.testimoniBerita[this.dataForm.id] = {
        imageProfil: "",
        username: this.dataForm.username,
        keterangan: this.dataForm.keterangan,
        date : this.dataForm.date,
      };
      this.editBerita = false;
      this.tambahBerita = false;
        (this.dataForm.username = ""),
        (this.dataForm.keterangan = ""),
        (this.dataForm.date = "")
    },
    cancle2() {
        (this.dataForm.username = ""),
        (this.dataForm.keterangan = ""),
        (this.dataForm.date = ""),
        (this.editBerita = false);
      this.tambahBerita = false;
    },
  },
  mounted() {
    window.scrollTo(0, 0);
  },
};
