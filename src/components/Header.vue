<template>
  <div class="header">
    <div class="header__info">
      <h1 class="header__info-title">Users Dashboard</h1>
      <small class="header__info-subtitle">
        Adicione novos usuários e visualize, edite e remova usuários cadastrados
      </small>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style lang="scss">
@import "../assets/scss/app.scss";

.header {
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
  padding: 5px;
  padding-right: 20px;
  align-items: flex-end;
  &__info {
    border-left: 2px solid $light-purple;
    padding-left: 10px;
    &-title {
      color: $light-purple;
    }
  }
}
</style>