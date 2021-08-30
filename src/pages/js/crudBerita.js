export default {
  name: "crudBerita",
  data() {
    return {
      berita: [
        {
          image:
            "https://media.suara.com/pictures/970x544/2021/06/10/21097-ilustrasi-pemulihan-ekonomi-nasional-shutterstock.jpg",
          judul: "Sumbangan Sekolahan",
          kategori: "Pendidikan",
          keterangan:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea nostrum.",
          author: "Maulana",
          date: "2021-08-24",
        },
        {
          image:
            "https://media.suara.com/pictures/970x544/2021/06/10/21097-ilustrasi-pemulihan-ekonomi-nasional-shutterstock.jpg",
          judul: "Infaq Untuk Kaum Dhuafa",
          kategori: "Sosial",
          keterangan:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea nostrum.",
          author: "Zaki",
          date: "2021-11-12",
        },
        {
          image:
            "https://media.suara.com/pictures/970x544/2021/06/10/21097-ilustrasi-pemulihan-ekonomi-nasional-shutterstock.jpg",
          judul: "Zakat Fitrah",
          kategori: "Ekonomi",
          keterangan:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea nostrum.",
          author: "Bimo",
          date: "2021-02-14",
        },
      ],
      dataBerita: true,
      tambahBerita: false,
      editBerita: false,
      dataForm: {
        kategori: "",
        judul: "",
        date: "",
        keterangan: "",
        author: "",
        id: "",
      },
    };
  },
  mounted() {
    window.scrollTo(0, 0);
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
      var jsjjs = this.berita[j];
      this.dataForm.kategori = jsjjs.kategori;
      this.dataForm.judul = jsjjs.judul;
      this.dataForm.date = jsjjs.date;
      this.dataForm.keterangan = jsjjs.keterangan;
      this.dataForm.author = jsjjs.author;
      this.dataForm.id = j;
      this.editBerita = true;
      if (this.editBerita === true) {
        this.tambahBerita = null;
        window.scrollTo(0, 0);
      } else {
        alert("{{ Internal Server Error to 2 }}, status:500;");
      }
    },
    encodeImageFileAsURL(element) {
      var file = element.files[0];
      var reader = new FileReader();
      this.reader.onloadend = function() {
        console.log("RESULT", reader.result);
      };
      this.reader.readAsDataURL(file);
    },
    saveBerita() {
      var obj = {
        image: "",
        judul: this.dataForm.judul,
        kategori: this.dataForm.kategori,
        date: this.dataForm.date,
        author: this.dataForm.author,
        keterangan: this.dataForm.keterangan,
      };
      this.berita.push(obj);
      (this.dataForm.kategori = ""),
        (this.dataForm.judul = ""),
        (this.dataForm.date = ""),
        (this.dataForm.author = ""),
        (this.dataForm.keterangan = ""),
        (this.tambahBerita = false);
    },
    cancle() {
      (this.dataForm.kategori = ""),
        (this.dataForm.judul = ""),
        (this.dataForm.date = ""),
        (this.dataForm.author = ""),
        (this.dataForm.keterangan = ""),
        (this.tambahBerita = false);
    },
    deleteBerita(y) {
      this.berita.splice(y, 1);
    },
    editDataBerita() {
      this.berita[this.dataForm.id] = {
        image: "",
        judul: this.dataForm.judul,
        kategori: this.dataForm.kategori,
        date: this.dataForm.date,
        author: this.dataForm.author,
        keterangan: this.dataForm.keterangan,
      };
      this.editBerita = false;
      this.tambahBerita = false;
      (this.dataForm.kategori = ""),
        (this.dataForm.judul = ""),
        (this.dataForm.date = ""),
        (this.dataForm.author = ""),
        (this.dataForm.keterangan = "");
    },
    cancle2() {
      (this.dataForm.kategori = ""),
        (this.dataForm.judul = ""),
        (this.dataForm.date = ""),
        (this.dataForm.author = ""),
        (this.dataForm.keterangan = ""),
        (this.editBerita = false);
      this.tambahBerita = false;
    },
  },
};
