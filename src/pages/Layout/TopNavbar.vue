<template>
  <div class="all">
    <div class="md-toolbar-section-start">
      <h3 class="md-title">{{ $route.name }}</h3>
    </div>
    <div>
      <md-menu md-size="small" md-align-trigger>
        <a md-menu-trigger><md-icon class="">account_circle</md-icon></a>

        <md-menu-content>
          <a class="dropdown" href=""><md-menu-item>Profile</md-menu-item></a>
          <a class="dropdown" @click="logout"
            ><md-menu-item>Logout</md-menu-item></a
          >
        </md-menu-content>
      </md-menu>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedEmployee: null,
      employees: [
        "Jim Halpert",
        "Dwight Schrute",
        "Michael Scott",
        "Pam Beesly",
        "Angela Martin",
        "Kelly Kapoor",
        "Ryan Howard",
        "Kevin Malone",
      ],
    };
  },
  methods: {
    toggleSidebar() {
      this.$sidebar.displaySidebar(!this.$sidebar.showSidebar);
    },
    logout() {
      sessionStorage.removeItem("DATA");
      window.location.reload();
    },
  },
};
</script>

<style lang="scss" scoped>
.all {
  display: flex;
}
h3 {
  padding-left: 10px;
}
.md-menu {
  margin-top: 20px;
  margin-right: 20px;
}
a {
  cursor: pointer;
}
.dropdown {
  background-color: #fff;
}
.dropdown:hover {
  background-color: #aeaeae;
}
</style>
