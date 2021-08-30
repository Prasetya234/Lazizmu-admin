<template>
  <div class="wrapper" :class="{ 'nav-open': $sidebar.showSidebar }">
    <notifications></notifications>

    <side-bar
      :sidebar-item-color="sidebarBackground"
      :sidebar-background-image="sidebarBackgroundImage"
    >
      <mobile-menu slot="content"></mobile-menu>
      <sidebar-link to="/dashboard">
        <md-icon>dashboard</md-icon>
        <p>Dashboard</p>
      </sidebar-link>
      <sidebar-link to="/berita">
        <md-icon>auto_stories</md-icon>
        <p>Berita</p>
      </sidebar-link>

      <sidebar-link to="/testimoni">
        <md-icon>tips_and_updates</md-icon>
        <p>Testimoni</p>
      </sidebar-link>

      <sidebar-link to="/tiket">
        <md-icon>airplane_ticket</md-icon>
        <p>Tiket</p>
      </sidebar-link>

      <sidebar-link to="/history">
        <md-icon>history</md-icon>
        <p>History</p>
      </sidebar-link>
    </side-bar>

    <div class="main-panel">
      <top-navbar></top-navbar>

      <fixed-plugin
        :color.sync="sidebarBackground"
        :image.sync="sidebarBackgroundImage"
      >
      </fixed-plugin>

      <dashboard-content> </dashboard-content>

      <content-footer v-if="!$route.meta.hideFooter"></content-footer>
    </div>
  </div>
</template>

<script>
  import TopNavbar from "./TopNavbar.vue";
  import ContentFooter from "./ContentFooter.vue";
  import DashboardContent from "./Content.vue";
  import MobileMenu from "@/pages/Layout/MobileMenu.vue";

  export default {
    components: {
      TopNavbar,
      DashboardContent,
      ContentFooter,
      MobileMenu,
    },
    data() {
      return {
        sidebarBackground: "green",
        sidebarBackgroundImage: require("@/assets/img/sidebar-2.jpg"),
      };
    },
  };
</script>
