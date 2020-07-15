<template>
  <div class="category-item">
    <h2>{{item.title}}</h2>
    <span @click="deleteCategory(item.id)" class="category-item__close">X</span>
    <span>{{item.current}}</span>
    <form @submit.prevent="onSubmit" class="category-item__form" action>
      <input type="text" v-model="value" />
      <validationError :errorMessage="getErrorMessage" />
      <b-button type="submit" variant="outline-success">Потрачено</b-button>
    </form>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { numeric, required } from "vuelidate/lib/validators";
import validationError from "./validationError";

export default {
  props: ["item"],
  data() {
    return {
      value: ""
    };
  },
  components: {
    validationError
  },
  validations: {
    value: { numeric, required }
  },
  methods: {
    ...mapActions(["addCategoriesCost", "newSpendOperation", "deleteCategory"]),
    onSubmit() {
      if (this.$v.$invalid) {
        this.$v.$touch();
        return;
      }
      const numValue = Number(this.value);
      this.addCategoriesCost({ id: this.item.id, value: numValue });
      this.newSpendOperation({ category: this.item.title, value: numValue });
      this.value = "";
      this.$v.$reset();
    }
  },
  computed: {
    getErrorMessage() {
      if (this.$v.value.$dirty && !this.$v.value.required) {
        return "Пустое поле";
      } else if (this.$v.value.$dirty && !this.$v.value.numeric) {
        return "Введите число";
      } else {
        return "";
      }
    }
  }
};
</script>

<style scoped>
.category-item {
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 0 0 20%;
  height: 224px;
  padding: 20px;
}

.category-item__close {
  color: red;
  cursor: pointer;
  position: absolute;
  top: 10px;
  right: 10px;
  display: none;
}

.category-item:hover .category-item__close {
  display: inline;
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