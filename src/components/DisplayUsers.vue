<template>
  <div class="display-users">
    <el-row>
      <el-col
        :md="8"
        :lg="8"
        :xl="6"
        v-for="(user, index) in filteredUsers"
        :key="user.id"
      >
        <div class="display-users__card">
          <div class="user-info">
            <el-col :span="6">
              <el-avatar
                :src="
                  user.avatar
                    ? user.avatar
                    : require('../assets/images/default-avatar.png')
                "
                :size="55"
              />
            </el-col>

            <el-col class="user-info__user" :span="18">
              <h4 class="user-info__name">{{ user.name }}</h4>
              <div class="user-info__birth">
                <label>Data de nascimento</label>
                <p>{{ formatDate(new Date(user.birthDate)) }}</p>
              </div>
            </el-col>

            <el-col :span="24">
              <label>E-mail</label>
              <p>{{ user.email }}</p>

              <label>Localização</label>
              <p>
                {{ user.streetAddress }} - {{ user.secondaryAddress }},
                {{ user.city }} - {{ user.state }}. {{ user.country }}
              </p>

              <label>Profissão</label>
              <p>
                {{ user.occupation }}
              </p>
            </el-col>
          </div>
          <div class="actions">
            <el-button
              type="warning"
              plain
              class="edit-button"
              @click="emitEditUser(user)"
            >
              <i class="el-icon-edit"></i>
            </el-button>

            <el-button
              class="delete-button"
              type="danger"
              plain
              @click="removeUser(user.id, index)"
            >
              <i class="el-icon-delete"></i>
            </el-button>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { removeUser } from "../services/service.js";
import format from "date-fns/format";
import isValid from "date-fns/isValid";
import bus from "../bus";

export default {
  name: "DisplayUsers",
  props: ["users", "search"],
  computed: {
    filteredUsers() {
      if (this.search) {
        let filteredArray = [];
        this.users.filter((user) => {
          Object.values(user).forEach((value) => {
            if (
              value
                .toString()
                .toLowerCase()
                .includes(this.search.toLowerCase()) &&
              !filteredArray.includes(user)
            ) {
              filteredArray.push(user);
            }
          });
        });
        return filteredArray;
      } else {
        return this.users;
      }
    },
  },
  methods: {
    removeUser(id, index) {
      this.$confirm("Tem certeza que quer deletar o usuário?", "Atenção", {
        confirmButtonText: "Deletar",
      }).then(() => {
        removeUser(id)
          .then(() => {
            this.users.splice(index, 1);
          })
          .finally(() => {
            this.$message({
              message: "Usuário removido com sucesso",
              type: "success",
            });
            bus.$emit("updateList");
          });
      });
    },
    formatDate(date) {
      if (date && isValid(date)) {
        return format(date, "dd/MM/yyyy");
      } else {
        return date;
      }
    },
    emitEditUser(user) {
      bus.$emit("editUser", user);
    },
  },
};
</script>

<style lang="scss">
@import "../assets/scss/app.scss";

.display-users {
  height: 85vh;
  overflow-y: scroll;
  overflow-x: hidden;
  &__card {
    width: 305px;
    height: 200px;
    border-radius: 10px;
    box-shadow: $shadow;
    background-color: white;
    margin: 20px 0;
    padding: 10px;
    position: relative;
    @media only screen and (max-width: 1400px) {
      width: 250px;
    }
    .user-info {
      .el-avatar {
        margin-top: 0;
        margin-right: 10px;
      }
      &__name {
        color: $light-purple;
        font-size: 1.1rem;
      }
      label {
        font-size: 10px;
        color: $purple;
        margin: 0;
      }
      p {
        margin: 0;
        font-size: 12px;
      }
    }
    .actions {
      position: absolute;
      bottom: 10px;
      right: 10px;
      .el-button {
        border-radius: 50%;
        padding: 5px 6px;
        margin-left: 4px;
      }
    }
  }
}
</style>