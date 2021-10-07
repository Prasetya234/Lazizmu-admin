<template>
  <div class="all">
    <!-- screen data berita -->
    <div class="content" v-if="tambahBerita === false">
      <md-table md-card>
        <md-table-toolbar>
          <div class="top">
            <div class="top-left">
              <input type="text" class="search" placeholder="Search..." />
              <!-- <button class="button">Search</button> -->
            </div>
            <div class="top-right">
              <button class="Tambah" @click="movePageTambahBerita">
                Tambah
              </button>
            </div>
          </div>
        </md-table-toolbar>

        <md-table-row class="head">
          <md-table-head>Username</md-table-head>
          <md-table-head>Keterangan</md-table-head>
          <md-table-head>Date</md-table-head>
          <md-table-head></md-table-head>
        </md-table-row>

        <md-table-row
          class="body"
          v-for="(data, index) in testimoniBerita"
          :key="index"
        >
          <md-table-cell>{{ data.username }}</md-table-cell>
          <md-table-cell>{{ data.keterangan }}</md-table-cell>
          <md-table-cell>{{ data.date }}</md-table-cell>
          <md-table-cell class="action">
            <div class="button2">
              <button class="button1" @click="movePageEditBerita(index)">
                Edit
              </button>
              <button class="button" @click="deleteBerita(index)">
                Delete
              </button>
            </div>
          </md-table-cell>
        </md-table-row>
      </md-table>
    </div>

    <!-- screen tambah berita -->
    <div class="content2" v-if="tambahBerita === true">
      <div class="head">
        <span>Tambah</span>
      </div>
      <div class="card">
        <div class="body">
          <md-field>
            <label>Username</label>
            <md-input v-model="dataForm.username"></md-input>
          </md-field>
          <md-field>
            <label>Keterangan</label>
            <md-input v-model="dataForm.keterangan"></md-input>
          </md-field>
          <md-field>
            <md-input v-model="dataForm.date" type="date"></md-input>
          </md-field>
          <label>Image</label>
          <md-input
            type="file"
            onchange="encodeImageFileAsURL(this)"
            class="file"
          ></md-input>
        </div>
        <div class="footer">
          <button class="save" @click="saveBerita">Save</button>
          <button class="cancle" @click="cancle">Cancle</button>
        </div>
      </div>
    </div>

    <!-- screen edit berita -->
    <div class="content3" v-if="editBerita === true">
      <div class="head">
        <span>Edit Berita</span>
      </div>
      <div class="card">
        <div class="body">
          <md-field>
            <label>Username</label>
            <md-input v-model="dataForm.username"></md-input>
          </md-field>
          <md-field>
            <label>Keterangan</label>
            <md-input v-model="dataForm.keterangan"></md-input>
          </md-field>
          <md-field>
            <md-input v-model="dataForm.date" type="date"></md-input>
          </md-field>
          <label>Image</label>
          <md-input
            type="file"
            onchange="encodeImageFileAsURL(this)"
            class="file"
          ></md-input>
        </div>
        <div class="footer">
          <button class="save" @click="editDataBerita">Save</button>
          <button class="cancle" @click="cancle2">Cancle</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./js/testimoni.js" />

<style lang="scss" scoped>
  .all {
    max-width: 1440px;
    margin: auto;
  }

  .content {
    width: 96.5%;
    margin: auto;
    padding: 0px 10px;
    font-family: poppins, sans-serif;

    .judul {
      font-style: normal;
      font-weight: normal;
      font-size: 30px;
      padding: 0px 0px 20px 0px;
    }
    .card {
      border-radius: 0px;
      background: white;
      box-shadow: 0px 2px 4px rgba(18, 18, 18, 0.16);
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
