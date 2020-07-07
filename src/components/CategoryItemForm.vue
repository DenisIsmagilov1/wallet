<template>
  <div class="category-item-new">
    <BIconPlusCircle v-if="!visibleForm" @click="visibleForm = true" />
    <form v-if="visibleForm" @submit.prevent="onSubmit" class="category-item-new__form" action>
      <label for="title">Название новой категории</label>
      <input name="title" type="text" v-model="categoryName" />
      <span
        v-if="($v.categoryName.$dirty && !$v.categoryName.required)"
        class="error"
      >Введите значение</span>
      <b-button variant="outline-success" type="submit">Добавить</b-button>
    </form>
  </div>
</template>

<script>
import { BIconPlusCircle } from "bootstrap-vue";
import { mapActions } from "vuex";
import { required } from "vuelidate/lib/validators";

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
  components: {
    BIconPlusCircle
  }
};
</script>

<style scoped>
.category-item-new {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 208px;
  flex: 0 0 222px;
  padding: 20px;
}

.category-item-new__form {
  display: flex;
  flex-direction: column;
  justify-content: center;
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