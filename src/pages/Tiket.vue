<template>
  <div class="all">
    <div v-if="property.isLoading === true" class="load">
      <md-progress-spinner
        :md-diameter="100"
        :md-stroke="10"
        md-mode="indeterminate"
      ></md-progress-spinner>
      <h2 style="margin-left: -45px">Loading data...</h2>
    </div>
    <div v-if="property.isLoading === false">
      <div class="content" v-if="dataTiket === true">
        <md-table md-card class="card">
          <md-table-toolbar>
            <div class="top">
              <div class="top-left">
                <input
                  type="text"
                  class="search"
                  @keyup="searchData"
                  v-model="pencarian"
                  placeholder="Search..."
                />
              </div>
              <div class="top-right">
                <button class="Tambah" @click="movePageTambahTiket">
                  Tambah
                </button>
              </div>
              <md-progress-bar
                md-mode="indeterminate"
                v-if="property.loading"
              ></md-progress-bar>
              <md-progress-bar
                md-mode="indeterminate"
                v-if="property.loading"
              ></md-progress-bar>
            </div>
          </md-table-toolbar>
          <md-table-row class="head">
            <md-table-head>Kategori</md-table-head>
            <md-table-head>Judul</md-table-head>
            <md-table-head>Donasi Terkumpul</md-table-head>
            <md-table-head>Donatur</md-table-head>
            <md-table-head></md-table-head>
          </md-table-row>
          <md-table-row
            v-for="(data, index) in tiket"
            :key="index"
            class="body"
          >
            <md-table-cell>{{ data.kategoriId.kategoriName }}</md-table-cell>
            <md-table-cell>{{ data.judul }}</md-table-cell>
            <md-table-cell>Rp. {{ data.donasi }}</md-table-cell>
            <md-table-cell>{{ data.donatur }}</md-table-cell>
            <md-table-cell class="action">
              <div class="button2">
                <button class="button1" @click="movePageEditTiket(index)">
                  Edit
                </button>
                <button class="button" @click="deleteTiket(index)">
                  Delete
                </button>
              </div>
            </md-table-cell>
          </md-table-row>
        </md-table>
        <p style="text-align: center;" v-if="tiket.length === 0">
          Data Not Found
        </p>
      </div>
      <div class="content2" v-if="tambahTiket === true">
        <div class="head">
          <span>Tambah</span>
        </div>
        <div class="card">
          <div class="body">
            <md-field>
              <label for="kategori">Kategori</label>
              <md-select v-model="dataForm.kategori" md-dense>
                <md-option
                  v-for="(data, index) in kategori"
                  :key="index"
                  :value="data.kategoriId"
                  >{{ data.kategoriName }}</md-option
                >
              </md-select>
            </md-field>
            <md-field>
              <label>Judul</label>
              <md-input v-model="dataForm.judul"></md-input>
            </md-field>
            <md-field>
              <label>Donasi Terkumpul</label>
              <md-input v-model="dataForm.donasiTerkumpul"></md-input>
            </md-field>
            <md-field>
              <label>Donatur</label>
              <md-input v-model="dataForm.donatur"></md-input>
            </md-field>
            <label>Image</label>
            <input
              type="file"
              @change="encodeImageFileAsURL"
              accept="image/*"
            />
            <div class="footer">
              <button class="save" @click="saveTiket">Save</button>
              <button class="cancle" @click="cancle">Cancle</button>
            </div>

            <br />
            <md-progress-bar
              md-mode="indeterminate"
              v-if="property.loading2"
            ></md-progress-bar>
          </div>
        </div>
      </div>

      <!-- screen edit berita -->
      <div class="content3" v-if="editTiket === true">
        <div class="head">
          <span>Edit Tiket</span>
        </div>
        <div class="card">
          <div class="body">
            <md-field>
              <label for="kategori">Kategori</label>
              <md-select v-model="dataForm.kategori" md-dense>
                <md-option
                  v-for="(data, index) in kategori"
                  :key="index"
                  :value="data.kategoriId"
                  >{{ data.kategoriName }}</md-option
                >
              </md-select>
            </md-field>
            <md-field>
              <label>Judul</label>
              <md-input v-model="dataForm.judul"></md-input>
            </md-field>
            <md-field>
              <label>Donasi Terkumpul</label>
              <md-input v-model="dataForm.donasiTerkumpul"></md-input>
            </md-field>
            <md-field>
              <label>Donatur</label>
              <md-input v-model="dataForm.donatur" type="donatur"></md-input>
            </md-field>
            <label>Image</label>
            <input
              type="file"
              @change="encodeImageFileAsURL"
              accept="image/*"
            />
          </div>
          <div class="footer">
            <button class="save" @click="editDataTiket">Save</button>
            <button class="cancle" @click="cancle2">Cancle</button>
          </div>
          <br />
          <md-progress-bar
            md-mode="indeterminate"
            v-if="property.loading2"
          ></md-progress-bar>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./js/tiket.js" />

<style lang="scss" scoped>
.load {
  position: fixed;
  top: 40%;
  left: 50%;
}
.search {
  max-width: 300px;
}

.content {
  width: 96.5%;
  margin: auto;
  padding: 0px 10px;
  font-family: poppins, sans-serif;
  .card {
    border-radius: 0px;
    background: white;
    box-shadow: 0px 2px 4px rgba(18, 18, 18, 0.16);
    height: auto;
  }
  .top {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    padding: 0px 0px 0px 0px;
    width: 100%;
    .top-left {
      padding: 20px 20px;
      width: 100%;
      .search {
        width: 200px;
        border: none;
        border-bottom: 1px solid #dfe0eb;
        outline: none;
        background: none;
        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 20px;
        letter-spacing: 0.2px;
      }
      .button {
        width: auto;
        height: 30px;
        color: #f76748;
        margin-left: 10px;
        cursor: pointer;
        background: #ffffff;
        border: 1px solid #dedede;
        box-sizing: border-box;
        border-radius: 8px;
      }
    }

    .top-right {
      width: 100%;
      padding: 20px 20px;
      text-align: right;
      .Tambah {
        width: auto;
        height: 35px;
        background: #ed8721;
        font-size: 20px;
        border-radius: 8px;
        border: none;
        cursor: pointer;
        color: white;
      }
    }

    @media screen and (max-width: 450px) {
      display: inline;
      padding: 0px 20px 20px 20px;
      .top-left {
        text-align: center;
        .search {
          width: auto;
        }
      }
      .top-right {
        width: 100%;
        padding: 0px 20px 10px 20px;
        text-align: center;
        .Tambah {
          width: 80%;
          height: auto;
        }
      }
    }
  }

  .action {
    width: 150px;
    .button2 {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 15px;
      .button1 {
        width: auto;
        height: 30px;
        color: blue;
        cursor: pointer;
        background: #ffffff;
        border: 1px solid blue;
        box-sizing: border-box;
        border-radius: 8px;
      }
      .button {
        border: 1px solid red;
        width: auto;
        height: 30px;
        color: red;
        cursor: pointer;
        background: #ffffff;
        border: 1px solid red;
        box-sizing: border-box;
        border-radius: 8px;
      }
    }
  }

  .head {
    width: 100%;
    font-size: 16px;
    width: auto;
    padding: 0px 10px;
    color: #9fa2b4;
    font-family: Roboto;
    font-weight: bold;
    line-height: 24px;
  }

  .body {
    height: auto;
    width: auto;
    padding: 0px 10px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 40px;
    color: #333333;
  }
}

.content2 {
  width: 100%;
  max-width: 500px;
  margin: 0px 30px;
  .head {
    font-size: 25px;
    font-weight: bold;
    padding: 0px 0px 20px 10px;
  }
  .card {
    background: white;
    box-shadow: 0px 2px 4px rgba(18, 18, 18, 0.16);
  }
  .body {
    padding: 10px 10px;
    .select {
      width: 100%;
      height: 38px;
    }
    .file {
      padding: 10px 10px;
    }
  }
  .footer {
    padding: 0px 10px 10px 10px;
    text-align: right;
    .save {
      border-radius: 7px;
      width: auto;
      height: 30px;
      color: white;
      font-size: 16px;
      border: none;
      background: blue;
      cursor: pointer;
      margin-right: 5px;
    }
    .cancle {
      border-radius: 7px;
      width: auto;
      color: white;
      font-size: 16px;
      height: 30px;
      border: none;
      border: none;
      background: red;
      cursor: pointer;
    }
  }

  @media screen and (max-width: 600px) {
    max-width: 400px;
    width: 100%;
    padding: 10px 10px;
    margin: auto;
  }
}

.content3 {
  width: 100%;
  max-width: 500px;
  margin: 0px 30px;
  .head {
    font-size: 25px;
    font-weight: bold;
    padding: 0px 0px 20px 10px;
  }
  .head {
    font-size: 25px;
    font-weight: bold;
    padding: 0px 0px 20px 10px;
  }
  .card {
    background: white;
    box-shadow: 0px 2px 4px rgba(18, 18, 18, 0.16);
  }
  .body {
    padding: 10px 10px;
    .select {
      width: 100%;
      height: 38px;
    }
    .file {
      padding: 10px 10px;
    }
  }
  .footer {
    padding: 0px 10px 10px 10px;
    text-align: right;
    .save {
      border-radius: 7px;
      width: auto;
      height: 30px;
      color: white;
      font-size: 16px;
      border: none;
      background: blue;
      cursor: pointer;
      margin-right: 5px;
    }
    .cancle {
      border-radius: 7px;
      width: auto;
      color: white;
      font-size: 16px;
      height: 30px;
      border: none;
      border: none;
      background: red;
      cursor: pointer;
    }
  }

  @media screen and (max-width: 600px) {
    max-width: 400px;
    width: 100%;
    padding: 10px 10px;
    margin: auto;
  }
}
</style>
