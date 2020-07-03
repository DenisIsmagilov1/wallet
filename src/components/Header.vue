<template>
  <header>
    <div class="content">
      <div class="header__row">
        <ul>
          <li>
            <router-link to="/">Главная</router-link>
          </li>
          <li>
            <router-link to="/bills">Счета</router-link>
          </li>
          <li>
            <router-link to="/operations">Операции</router-link>
          </li>
          <li>
            <router-link to="/statistics">Статистика</router-link>
          </li>
        </ul>
        <router-link to="/login">
          <b-button variant="success">Выйти</b-button>
        </router-link>
      </div>
    </div>
  </header>
</template>

<style scoped>
header {
  border-bottom: 1px solid #28a745;
}

ul {
  margin: 0;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

.header__row {
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

a {
  color: #28a745;
}

a:hover {
  color: #1e7432;
}
</style>