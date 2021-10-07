import { mapActions } from "vuex";
import firebase from "firebase";
export default {
  name: "tiket",
  data() {
    return {
      search: null,
      searched: [],
      tiket: [],
      kategori: [],
      beritaSearch: [],
      dataTiket: true,
      tambahTiket: false,
      editTiket: false,
      gambar: "",
      pencarian: "",
      // FIrebase
      imageData: null,
      uploadValue: 0,
      property: {
        isLoading: false,
        loading2: false,
        loading: false,
      },
      dataForm: {
        kategori: "",
        judul: "",
        donasiTerkumpul: "",
        donatur: "",
        id: "",
      },
    };
  },
  methods: {
    ...mapActions(["getInfaq", "getIsiKategori"]),
    async getAll() {
      this.property.isLoading = true;
      await this.getInfaq().then((data) => {
        this.tiket = data.body.content;
      });
      this.tiket.forEach((element) => {
        this.beritaSearch.push(element);
      });
      await this.getIsiKategori().then((data) => {
        this.kategori = data.body.content;
      });
      this.property.isLoading = false;
    },
    encodeImageFileAsURL(event) {
      this.property.loading2 = true;
      this.imageData = event.target.files[0];
      const storageRef = firebase
        .storage()
        .ref(`${this.imageData.name}`)
        .put(this.imageData);
      storageRef.on(
        `state_changed`,
        (snapshot) => {
          this.uploadValue =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        },
        (error) => {
          console.log(error.message);
        },
        () => {
          this.uploadValue = 100;
          storageRef.snapshot.ref.getDownloadURL().then((url) => {
            this.gambar = url;
          });
        }
      );
      this.property.loading2 = false;
    },
    searchOnTable() {
      this.searched = searchByJudul(this.tiket, this.search);
    },
    ...mapActions(["deleteInfaq"]),
    deleteTiket(y) {
      this.property.loading = true;
      const id = this.tiket[y].id;
      this.deleteInfaq({
        body: id,
        success: () => {
          this.getInfaq().then((data) => {
            this.tiket = data.body.content;
            this.property.loading = false;
          });
        },
        fail: (res) => {
          alert(res.body.content);
          this.property.loading = false;
        },
      });
    },
    movePageTambahTiket() {
      this.tambahTiket = true;
      if (this.tambahTiket === true) {
        this.dataTiket = false;
        window.scrollTo(0, 0);
      } else {
        alert("{{ Internal Server Error to 1 }}, status:500;");
      }
    },
    movePageEditTiket(j) {
      var edit = this.tiket[j];
      this.dataForm.kategori = edit.kategoriId.kategoriId;
      this.dataForm.judul = edit.judul;
      this.dataForm.donasiTerkumpul = edit.donasi;
      this.dataForm.donatur = edit.donatur;
      this.dataForm.id = edit.id;
      this.gambar = edit.image;
      this.editTiket = true;
      if (this.editTiket === true) {
        this.dataTiket = false;
        this.tambahTiket = null;
        window.scrollTo(0, 0);
      } else {
        alert("{{ Internal Server Error to 2 }}, status:500;");
      }
    },
    ...mapActions(["createInfaq"]),
    saveTiket() {
      if (
        this.dataForm.kategori === "" ||
        this.dataForm.judul === "" ||
        this.dataForm.donasiTerkumpul === "" ||
        this.dataForm.donatur === ""
      ) {
        alert("Form Tidak Boleh Ada Yang Kosong");
        return;
      }
      if (this.gambar === "") {
        alert("Gambar Tidak Boleh Kosong");
        return;
      }
      this.property.loading2 = true;
      const obj = {
        judul: this.dataForm.judul,
        image: this.gambar,
        donasi: this.dataForm.donasiTerkumpul,
        donatur: this.dataForm.donatur,
        kategori: this.dataForm.kategori,
      };
      this.createInfaq({
        body: obj,
        success: () => {
          window.location.reload();
        },
        fail: (res) => {
          alert(res.body.content);
          this.property.loading2 = false;
        },
      });
    },
    cancle() {
      window.location.reload();
    },
    deleteBerita(y) {
      this.tiket.splice(y, 1);
    },
    ...mapActions(["putInfaq"]),
    editDataTiket() {
      if (
        this.dataForm.kategori === "" ||
        this.dataForm.judul === "" ||
        this.dataForm.donasiTerkumpul === "" ||
        this.dataForm.donatur === ""
      ) {
        alert("Form Tidak Boleh Ada Yang Kosong");
        return;
      }
      if (this.gambar === "") {
        alert("Gambar Tidak Boleh Kosong");
        return;
      }
      this.property.loading2 = true;
      const data = {
        id: this.dataForm.id,
        body: {
          judul: this.dataForm.judul,
          image: this.gambar,
          donasi: this.dataForm.donasiTerkumpul + "",
          donatur: this.dataForm.donatur + "",
          kategori: this.dataForm.kategori,
        },
      };
      this.putInfaq({
        body: data,
        success: () => {
          window.location.reload();
        },
        fail: (res) => {
          alert(res.body.content);
          this.property.loading2 = false;
        },
      });
    },
    cancle2() {
      window.location.reload();
    },
    searchData() {
      this.tiket = [];
      this.beritaSearch.forEach((list) => {
        if (
          list.judul
            .toLocaleLowerCase()
            .search(this.pencarian.toLocaleLowerCase()) > -1
        ) {
          this.tiket.push(list);
        }
      });
    },
  },
  created() {
    this.searched = this.tiket;
    window.scrollTo(0, 0);
  },
  mounted() {
    this.getAll();
  },
};
