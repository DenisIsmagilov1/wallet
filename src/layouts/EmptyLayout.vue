<template>
  <div class="empty-layout">
    <slot>Oops...</slot>
  </div>
</template>

<style>
.empty-layout {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(59, 59, 59);
}
</style>