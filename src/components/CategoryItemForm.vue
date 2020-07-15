<template>
  <div class="category-item-new">
    <BIconPlusCircle v-if="!visibleForm" @click="visibleForm = true" />
    <form v-if="visibleForm" @submit.prevent="onSubmit" class="category-item-new__form" action>
      <label for="title">Название новой категории</label>
      <input name="title" type="text" v-model="categoryName" />
      <validationError :errorMessage="getErrorMessage" />
      <b-button variant="outline-success" type="submit">Добавить</b-button>
    </form>
  </div>
</template>

<script>
import { BIconPlusCircle } from "bootstrap-vue";
import { mapActions } from "vuex";
import { required } from "vuelidate/lib/validators";
import validationError from "./validationError";

export default {
  data() {
    return {
      visibleForm: false,
      categoryName: ""
    };
  },
  validations: {
    categoryName: { required }
  },
  methods: {
    ...mapActions(["addNewCategory"]),
    onSubmit() {
      if (this.$v.$invalid) {
        this.$v.$touch();
        return;
      }
      this.addNewCategory(this.categoryName);
      this.visibleForm = false;
      this.categoryName = "";
      this.$v.$reset();
    }
  },
  computed: {
    getErrorMessage() {
      if (this.$v.categoryName.$dirty && !this.$v.categoryName.required) {
        return "Введите значение";
      } else {
        return "";
      }
    }
  },
  components: {
    BIconPlusCircle,
    validationError
  }
};
</script>

<style scoped>
.category-item-new {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 224px;
  flex: 0 0 222px;
  padding: 20px;
  cursor: pointer;
}

.category-item-new__form {
  flex: 0 0 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
}

.category-item-new__form button {
  margin: 10px 0 0 0;
}
.category-item-new__form label {
  text-align: center;
}

.bi-plus-circle {
  flex: 0 0 50%;
  display: block;
  width: 50%;
  color: #28a745;
  border-radius: 50%;
}

.bi-plus-circle:hover {
  color: #178330;
}
</style>