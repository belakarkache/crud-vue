<template>
  <div class="add-user">
    <div class="add-user__wrapper">
      <el-form
        :model="userInfo"
        :rules="rules"
        ref="userInfo"
        label-position="top"
      >
        <el-row>
          <el-col :span="9">
            <el-form-item prop="avatar">
              <el-popover placement="right" trigger="click" width="440">
                <el-row :gutter="10">
                  <el-col :span="4.5" v-for="item in avatarList" :key="item.id">
                    <img
                      :src="item.image"
                      width="80"
                      height="80"
                      @click="setAvatarImage(item.image)"
                      style="cursor: pointer"
                    />
                  </el-col>
                </el-row>
                <!-- <div class="avatar" slot="reference"> -->
                <el-avatar
                  :src="
                    selectedAvatarImage
                      ? selectedAvatarImage
                      : require('../assets/images/default-avatar.png')
                  "
                  :size="100"
                  slot="reference"
                ></el-avatar>
                <!-- </div> -->
              </el-popover>
            </el-form-item></el-col
          >
          <el-col :span="15">
            <el-form-item label="Nome completo" prop="name">
              <el-input v-model="userInfo.name" size="small"></el-input>
            </el-form-item>
            <el-form-item label="Data de nascimento" prop="date">
              <el-date-picker
                type="date"
                v-model="userInfo.birthDate"
                style="width: 100%"
                format="dd/MM/yyyy"
                size="small"
              />
            </el-form-item>
          </el-col>
        </el-row>
        <el-form-item label="E-mail" prop="email">
          <el-input v-model="userInfo.email" size="small"></el-input>
        </el-form-item>

        <el-form-item label="País" prop="country">
          <el-select
            placeholder=""
            v-model="userInfo.country"
            style="width: 100%"
            size="small"
            filterable
          >
            <el-option
              v-for="country in countries"
              :key="country.id.M49"
              :label="country.nome"
              :value="country.nome"
            >
            </el-option>
          </el-select>
        </el-form-item>

        <el-form-item
          label="CEP"
          v-if="userInfo.country === 'Brasil'"
          prop="zipCode"
          size="small"
        >
          <el-input
            v-model="userInfo.zipCode"
            :suffix-icon="loadingIcon"
            @input="updateAddress"
            mask="##.###-###"
          />
        </el-form-item>

        <el-row :gutter="10">
          <el-col :span="6">
            <el-form-item label="UF">
              <el-input v-model="userInfo.state" size="small" />
            </el-form-item>
          </el-col>

          <el-col :span="18">
            <el-form-item label="Cidade" prop="city">
              <el-input v-model="userInfo.city" size="small" />
            </el-form-item>
          </el-col>
        </el-row>

        <el-form-item label="Endereço" prop="streetAddress">
          <el-input v-model="userInfo.streetAddress" size="small" />
        </el-form-item>

        <el-form-item label="Complemento" prop="secondaryAddress">
          <el-input v-model="userInfo.secondaryAddress" size="small" />
        </el-form-item>

        <el-form-item label="Profissão" prop="occupation">
          <el-input v-model="userInfo.occupation" size="small" />
        </el-form-item>

        <el-form-item class="el-form-item__buttons">
          <el-button
            size="medium"
            v-if="isEdit"
            @click="cancelEdit('userInfo')"
          >
            Cancelar
          </el-button>
          <el-button @click="resetForm('userInfo')" size="medium" v-else>
            Redefinir
          </el-button>
          <el-button
            v-if="isEdit"
            type="warning"
            @click="upUser('userInfo')"
            size="medium"
          >
            Atualizar usuário
          </el-button>
          <el-button
            type="primary"
            @click="addUser('userInfo')"
            size="medium"
            v-else
          >
            Adicionar usuário
          </el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import {
  getCountries,
  getAvatars,
  addUser,
  updateUser,
} from "../services/service.js";
import bus from "../bus";

export default {
  name: "AddUser",
  props: ["editInfo"],
  data() {
    return {
      userInfo: {
        avatar: "",
        name: "",
        birthDate: "",
        email: "",
        zipCode: "",
        city: "",
        state: "",
        country: "",
        streetAddress: "",
        secondaryAddress: "",
        occupation: "",
        brazilianResident: false,
      },
      rules: {
        name: [
          {
            required: true,
            message: "Por favor, insira seu nome completo",
            trigger: "blur",
          },
        ],
        email: [
          {
            type: "email",
            message: "Por favor, insira um e-mail válido",
            trigger: ["blur", "change"],
          },
        ],
      },
      countries: [],
      states: [],
      avatarList: [],
      loading: false,
      selectedAvatarImage: "",
      isEdit: false,
    };
  },
  computed: {
    loadingIcon() {
      if (this.loading) {
        return "el-icon-loading";
      } else {
        return null;
      }
    },
  },
  mounted() {
    getCountries.then((resp) => (this.countries = resp));
    getAvatars.then((resp) => (this.avatarList = resp.results.slice(0, 5)));
    bus.$on("editUser", (user) => {
      this.userInfo = user;
      this.selectedAvatarImage = user.avatar;
      this.isEdit = true;
    });
  },
  methods: {
    updateAddress() {
      const validateCep = /^[0-9]{8}$/;
      if (
        this.userInfo.zipCode.match(validateCep) &&
        this.userInfo.country === "Brasil"
      ) {
        this.loading = true;
        axios
          .get(`https://viacep.com.br/ws/${this.userInfo.zipCode}/json/`)
          .then((resp) => {
            this.userInfo.city = resp.data.localidade;
            this.userInfo.state = resp.data.uf;
            this.userInfo.streetAddress = resp.data.logradouro;
          })
          .finally(() => (this.loading = false));
      }
    },
    addUser(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.userInfo.avatar = this.selectedAvatarImage;
          addUser(this.userInfo)
            .then(() => bus.$emit("updateList"))
            .finally(() => {
              this.$message({
                message: "Usuário adicionado com sucesso",
                type: "success",
              });
              this.resetForm("userInfo");
            });
        } else {
          return false;
        }
      });
    },
    resetForm(formName) {
      this.selectedAvatarImage = "";
      this.userInfo.birthDate = null;
      this.$refs[formName].resetFields();
    },
    setAvatarImage(image) {
      this.selectedAvatarImage = image;
    },
    cancelEdit(formName) {
      this.userInfo = {
        avatar: "",
        name: "",
        birthDate: "",
        email: "",
        zipCode: "",
        city: "",
        state: "",
        country: "",
        streetAddress: "",
        secondaryAddress: "",
        occupation: "",
        brazilianResident: false,
      };
      this.isEdit = false;
      this.selectedAvatarImage = null;
      this.$refs[formName].resetFields();
      bus.$emit("updateList");
    },
    upUser(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.userInfo.avatar = this.selectedAvatarImage;
          updateUser(this.userInfo.id, this.userInfo)
            .then(() => bus.$emit("updateList"))
            .finally(() => {
              this.$message({
                message: "Usuário atualizado com sucesso",
                type: "success",
              });
              this.resetForm("userInfo");
              this.isEdit = false;
            });
        } else {
          return false;
        }
      });
    },
  },
};
</script>

<style lang="scss">
@import "../assets/scss/app.scss";

.add-user {
  &__wrapper {
    width: 300px;
    background-color: white;
    border-radius: 20px;
    margin: 30px auto;
    box-shadow: $shadow;
    padding: 20px;
    .el-form {
      &-item {
        margin-bottom: 15px;
        &__label {
          padding: 0 !important;
          line-height: 25px;
        }
        &__error {
          line-height: 0.9;
          right: 0;
          left: unset;
          font-size: 10px;
        }
        &__buttons {
          .el-form-item__content {
            display: flex;
            justify-content: space-between;
            .el-button--medium {
              width: 100%;
            }
          }
        }
      }
    }
  }
}
</style>