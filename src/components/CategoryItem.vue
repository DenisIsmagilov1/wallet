<template>
  <div class="category-item">
    <h2>{{item.title}}</h2>
    <span>{{item.current}}</span>
    <form class="category-item__form" action>
      <input type="text" />
      <b-button type="submit" variant="outline-success">Потрачено</b-button>
    </form>
  </div>
</template>

<script>
export default {
  props: ["item"]
};
</script>

<style scoped>
.category-item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 0 0 20%;
  padding: 20px;
}

.category-item__form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 20px 0 0 0;
}

.category-item__form button {
  margin: 10px 0 0 0;
}
</style>