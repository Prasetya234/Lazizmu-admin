import { mapActions } from "vuex";
import firebase from "firebase";
import Axios from "axios";

export default {
  name: "crudBerita",
  data() {
    return {
      property: {
        isLoading: false,
        loading: false,
        loading2: false,
      },
      kosong: false,
      pencarian: "",
      beritaSearch: [],
      kategori: [],
      berita: [],
      dataBerita: true,
      tambahBerita: false,
      editBerita: false,
      keterangan: 1,
      nene: 0,
      dataTambah: [],
      dataForm: {
        kategori: "",
        judul: "",
        date: "",
        keterangan: [],
        author: "",
        id: "",
      },
      // FIrebase
      imageData: null,
      uploadValue: 0,
      gambar: null,
      showEdit: [],
      aghahah: [],
    };
  },
  mounted() {
    this.getAll();
    window.scrollTo(0, 0);
  },
  methods: {
    deleteIni(v) {
      if (this.dataTambah[v] !== undefined) {
        this.dataTambah.splice(v, 1);
      }
      if (this.editBerita === true) {
        this.nene = this.dataTambah.length - 1;
        return;
      }
      if (this.editBerita === false) {
        const h = this.keterangan - 1;
        const k = this.nene - 1;
        this.nene = k;
        this.keterangan = h;
      }
    },
    tambahIni() {
      if (this.editBerita === true) {
        this.dataTambah.push("");
        this.nene = this.dataTambah.length - 1;
        return;
      }
      const h = this.keterangan + 1;
      this.keterangan = h;
      this.nene = this.keterangan - 1;
    },
    movePageTambahBerita() {
      this.tambahBerita = true;
      if (this.tambahBerita === true) {
        this.dataBerita = false;
        window.scrollTo(0, 0);
      } else {
        alert("{{ Internal Server Error to 1 }}, status:500;");
      }
    },
    movePageEditBerita(id) {
      let noIstant = this.berita[id];
      const now = new Date();
      this.dataForm.id = noIstant.id;
      this.dataForm.kategori = noIstant.kategoriId.kategoriId;
      this.dataForm.judul = noIstant.judul;
      this.dataForm.date =
        now.getFullYear() +
        "-" +
        ("0" + (now.getMonth() + 1)).slice(-2) +
        "-" +
        ("0" + now.getDate()).slice(-2);
      this.dataForm.keterangan = noIstant.keterangan;
      this.dataForm.author = noIstant.author;
      this.gambar = noIstant.image;
      for (var i = 1; i < noIstant.keteranganBerita.length; i++) {
        for (var j = 0; j < i; j++) {
          if (
            noIstant.keteranganBerita[i].sequenceNumber <
            noIstant.keteranganBerita[j].sequenceNumber
          ) {
            var x = noIstant.keteranganBerita[i];
            noIstant.keteranganBerita[i] = noIstant.keteranganBerita[j];
            noIstant.keteranganBerita[j] = x;
          }
        }
      }
      noIstant.keteranganBerita.forEach((element, index) => {
        this.dataTambah.push(element.keteranganBerita);
        this.nene = index;
      });
      this.dataTambah.push;
      this.editBerita = true;
      this.tambahBerita = null;
      window.scrollTo(0, 0);
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
    ...mapActions(["setBerita"]),
    async saveBerita() {
      if (
        this.dataForm.judul === "" ||
        this.dataForm.date === "" ||
        this.dataForm.author === "" ||
        this.dataTambah === [] ||
        this.gambar === null ||
        this.dataForm.kategori === ""
      ) {
        alert("Harap di isi semua");
        return;
      }
      this.property.loading2 = true;
      for (var i = 0; i < this.dataTambah.length; i++) {
        if (this.dataTambah[i] !== "") {
          var obj = {};
          obj["keteranganBerita"] = this.dataTambah[i];
          obj["sequenceNumber"] = i + 1;
          this.dataForm.keterangan.push(obj);
        }
      }
      const data = {
        judul: this.dataForm.judul,
        createdDate: this.dataForm.date,
        author: this.dataForm.author,
        keteranganBerita: this.dataForm.keterangan,
        image: this.gambar,
        kategori: this.dataForm.kategori,
      };
      const hasil = await this.setBerita({
        body: data,
      });
      if (hasil.body.content.message === "ERROR") {
        alert(hasil.body.content.content);
        return;
      }
      window.location.reload();
    },
    cancle() {
      window.location.reload();
    },
    ...mapActions(["getIsiBerita", "getIsiKategori"]),
    async deleteBerita(y) {
      this.property.loading = true;
      const id = this.berita[y].id;
      const data = await Axios({
        timeout: 1000 * 5, // Wait for 5 seconds
        url: `https://lazimu.herokuapp.com/berita/` + id,
        method: "DELETE",
      });
      if (!data) {
        alert("Lalu lintas sedang ramai. Coba lagi");
        return;
      }
      await this.getIsiBerita().then((data) => {
        this.berita = data.body.content;
      });
      await this.getIsiKategori().then((data) => {
        this.kategori = data.body.content;
      });
      this.property.loading = false;
    },
    ...mapActions(["deleteBerita", "postBerita"]),
    editDataBerita() {
      if (
        this.dataForm.judul === "" ||
        this.dataForm.date === "" ||
        this.dataForm.author === "" ||
        this.dataTambah === [] ||
        this.gambar === null ||
        this.dataForm.kategori === ""
      ) {
        alert("Harap di isi semua");
        return;
      }
      this.property.loading2 = true;
      for (var i = 0; i < this.dataTambah.length; i++) {
        if (this.dataTambah[i] !== "") {
          let date = {};
          date["keteranganBerita"] = this.dataTambah[i];
          date["sequenceNumber"] = i + 1;
          this.aghahah.push(date);
        }
      }
      this.deleteBerita({
        id: this.dataForm.id,
        success: () => {
          const data = {
            judul: this.dataForm.judul,
            createdDate: this.dataForm.date,
            author: this.dataForm.author,
            image: this.gambar,
            kategori: this.dataForm.kategori,
            keteranganBerita: this.aghahah,
          };
          this.postBerita({
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
        fail: () => {
          alert("Error Delete");
          this.property.loading2 = false;
        },
      });
    },
    cancle2() {
      window.location.reload();
    },
    ...mapActions(["getIsiBerita", "getIsiKategori"]),
    async getAll() {
      this.property.isLoading = true;
      await this.getIsiBerita().then((data) => {
        this.berita = data.body.content;
      });
      this.berita.forEach((element) => {
        this.beritaSearch.push(element);
      });
      await this.getIsiKategori().then((data) => {
        this.kategori = data.body.content;
      });
      this.property.isLoading = false;
    },
    searchData() {
      this.berita = [];
      this.beritaSearch.forEach((list) => {
        if (
          list.judul
            .toLocaleLowerCase()
            .search(this.pencarian.toLocaleLowerCase()) > -1
        ) {
          this.berita.push(list);
        }
      });
    },
  },
};
