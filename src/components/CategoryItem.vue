<template>
  <div class="category-item">
    <h2>{{item.title}}</h2>
    <span>{{item.current}}</span>
    <form class="category-item__form" action>
      <input type="text" v-model="value" />
      <span v-if="($v.value.$dirty && !$v.value.required)" class="category-item__error">Пустое поле</span>
      <span v-if="($v.value.$dirty && !$v.value.numeric)" class="category-item__error">Введите число</span>
      <b-button @click.prevent="onSubmit" type="submit" variant="outline-success">Потрачено</b-button>
    </form>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { numeric, required } from "vuelidate/lib/validators";

export default {
  props: ["item"],
  data() {
    return {
      value: ""
    };
  },
  validations: {
    value: { numeric, required }
  },
  methods: {
    ...mapActions(["addCategoriesCost"]),
    onSubmit() {
      if (this.$v.$invalid) {
        this.$v.$touch();
        return;
      }
      const numValue = Number(this.value);
      this.addCategoriesCost({ id: this.item.id, value: numValue });
      this.value = "";
      this.$v.$reset();
    }
  }
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

.category-item__error {
  color: #dc3545;
}
</style>