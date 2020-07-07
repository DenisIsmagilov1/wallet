<template>
  <div class="login-form">
    <EmptyLayout>
      <Login />
    </EmptyLayout>
  </div>
</template>

<script>
import EmptyLayout from "../layouts/EmptyLayout";
import Login from "../components/Login";

export default {
  components: {
    EmptyLayout,
    Login
  }
};
</script>