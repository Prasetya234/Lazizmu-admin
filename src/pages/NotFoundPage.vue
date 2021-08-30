<template>
  <div class="content">
    <div class="card">
      <div class="body">
        <p class="isi">404</p>
        <p class="isi2">Halaman Tidak Di Temukan</p>
        <p class="isi3"><a href="/#/"> Kembali ke halaman utama</a></p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "NotFoundPage",
    methods: {
      toPage() {
        this.$router.push("/");
      },
      toRegister() {
        this.$router.push("/register");
      },
    },
    mounted() {
      window.scrollTo(0, 0);
    },
  };
</script>

<style lang="scss" scoped>
  .content {
    max-width: 1440px;
    margin: auto;
  }
  .card {
    max-width: 500px;
    background: none;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
  }

  .body {
    margin-top: 45%;
    width: 100%;
    height: auto;
    font-family: roboto;
    border-radius: none;
  }

  .isi {
    text-align: center;
    font-size: 100px;
    line-height: 100px;
    font-weight: bold;
    color: rgba(52, 39, 230, 0.774);
  }

  .isi2 {
    line-height: 30px;
    text-align: center;
    font-size: 30px;
    font-weight: bold;
    color: gray;
  }

  .isi3 {
    text-align: center;
    font-size: 20px;
    color: blue;
  }
</style>
