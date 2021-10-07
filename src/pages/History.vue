<template>
  <div>
    <div class="content">
      <md-table md-card class="card">
        <md-table-toolbar class="top">
          <div class="md-toolbar-section-start ">
            <h1 class="md-title" style="font-weight:bold">History Infaq</h1>
          </div>

          <md-field class="search">
            <md-input placeholder="Search by Username..." />
          </md-field>
        </md-table-toolbar>

        <md-table-row class="head">
          <md-table-head>Kategori</md-table-head>
          <md-table-head>Username</md-table-head>
          <md-table-head>No.Tlpn</md-table-head>
          <md-table-head>Donasi</md-table-head>
          <md-table-head>Date</md-table-head>
          <!-- <md-table-head></md-table-head> -->
        </md-table-row>
        <md-table-row
          v-for="(data, index) in dataHistory"
          :key="index"
          class="body"
        >
          <md-table-cell>{{ data.kategori }}</md-table-cell>
          <md-table-cell>{{ data.username }}</md-table-cell>
          <md-table-cell>{{ data.noTelp }}</md-table-cell>
          <md-table-cell>{{ data.donasi }}</md-table-cell>
          <md-table-cell>{{ data.date }}</md-table-cell>
          <!-- <md-table-cell class="action">
            <div class="button2">
              <button class="button" @click="deleteHistory(index)">
                Delete
              </button>
            </div>
          </md-table-cell> -->
        </md-table-row>
      </md-table>
    </div>
  </div>
</template>

<script src="./js/history.js" />
<style lang="scss" scoped>
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
      color: white;
      .Tambah {
        max-width: 100px;
        height: 35px;
        background: #ed8721;
        border-radius: 8px;
        border: none;
        cursor: pointer;
        justify-content: center;
        p {
          font-size: 20px;
          color: white;
          padding-top: 10px;
        }
      }
    }

    .action {
      width: 50px;
      .button2 {
        display: flex;
        align-items: center;
        justify-content: center;
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
</style>
