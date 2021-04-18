<template>
  <div>
    <el-row>
      <el-col :md="7" :lg="7" :xl="5">
        <AddUser />
      </el-col>
      <el-col :md="17" :lg="17" :xl="19">
        <Header />
        <DisplayUsers :users="users" :key="update" />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import AddUser from "./components/AddUser.vue";
import DisplayUsers from "./components/DisplayUsers.vue";
import { getUsers } from "./services/service.js";
import bus from "./bus";
import axios from "axios";

export default {
  name: "App",
  components: {
    Header,
    AddUser,
    DisplayUsers,
  },
  data() {
    return {
      users: [],
      loading: false,
      update: 0,
    };
  },
  methods: {
    loadUsers() {
      getUsers.then((resp) => {
        this.users = resp;
      });
    },
  },
  mounted() {
    this.loadUsers();
    bus.$on("updateList", () => {
      axios
        .get("https://607b6bf967e6530017573145.mockapi.io/api/v1/users")
        .then((resp) => {
          this.users = resp.data;
        });
    });
  },
};
</script>

<style lang="scss">
@import "./assets/scss/app.scss";
</style>