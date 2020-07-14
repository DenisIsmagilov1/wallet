<template>
  <header class="header">
    <div class="content">
      <div class="header__row">
        <div @click="onClick" :class="{active : isActive}" class="header__burger">
          <span></span>
        </div>
        <ul :class="{active: isActive}" class="header__nav">
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
        <router-link class="header__logout" to="/login">
          <b-button variant="success">Выйти</b-button>
        </router-link>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      isActive: false
    };
  },
  methods: {
    onClick() {
      this.isActive = !this.isActive;
    }
  }
};
</script>

<style scoped>
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

.header__burger {
  display: none;
  position: relative;
  width: 30px;
  height: 30px;
  z-index: 5;
}

.header__burger::before,
.header__burger::after,
.header__burger span {
  content: "";
  position: absolute;
  left: 0;
  width: 30px;
  height: 2px;
  background-color: #28a745;
  transition: 0.5s;
}

.header__burger::after {
  bottom: 0;
}
.header__burger span {
  top: 50%;
}

.header__burger.active span {
  transform: scale(0);
}

.header__burger.active::before {
  transform: rotate(45deg) translate(19px);
}

.header__burger.active::after {
  transform: rotate(-45deg) translate(20px);
}

.header__burger.active span {
  transform: scale(0);
}

.header__nav {
  margin: 0;
  padding: 0;
  z-index: 6;
  transition: 0.5s;
}

.header__logout {
  z-index: 5;
}

.header::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  background-color: #fff;
  border-bottom: 1px solid #28a745;
  width: 100%;
  height: 70px;
  z-index: 5;
}

@media (max-width: 576px) {
  .header__burger {
    display: inline;
  }

  .header__nav {
    position: absolute;
    min-height: 100%;
    width: 100%;
    background-color: #fff;
    top: -100%;
    margin: 0;
    padding: 0 20px;
    left: 0;
  }

  .header__nav.active {
    top: 0;
    margin: 71px 0 0 0;
  }

  .header__nav li {
    display: block;
    margin: 20px 0;
  }
}
</style>