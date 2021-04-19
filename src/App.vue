<template>
  <div>
    <el-row>
      <el-col :md="7" :lg="7" :xl="5">
        <AddUser />
      </el-col>
      <el-col :md="17" :lg="17" :xl="19">
        <el-row class="pb">
          <el-col :span="12">
            <Header />
          </el-col>
          <el-col :span="12" class="search-col">
            <div class="search">
              <el-input
                placeholder="Busca"
                prefix-icon="el-icon-search"
                v-model="search"
              >
              </el-input>
            </div>
          </el-col>
        </el-row>
        <DisplayUsers :users="users" :search="search" />
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
      search: "",
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

.pb {
  padding-bottom: 10px;
}
.search-col {
  height: 100px;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  .search {
    width: 100%;
    display: block;
    height: 40px;
    margin-bottom: 5px;
    .el-input {
      width: 300px;
      float: right;
      margin-right: 65px;
    }
  }
}
</style>