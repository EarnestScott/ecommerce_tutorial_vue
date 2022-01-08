<template>
  <div id="wrapper">
    <nav class="navbar is-dark">
      <div class="navbar-brand">
        <router-link to="/" class="navbar-item"
          ><strong>Djackets</strong></router-link
        >
        <a
          class="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbar-menu"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div class="navbar-menu" id="navbar-menu">
        <div class="navbar-end">
          <router-link to="/summer" class="navbar-item">Summer</router-link>
          <router-link to="/winter" class="navbar-item">Winter</router-link>
          <div class="navbar-item">
            <!-- class buttons leaves space between buttons -->
            <div class="buttons">
              <router-link to="/log-in" class="button is-light"
                >Log in</router-link
              >
              <router-link to="/cart" class="button is-success">
                <span class="icon"><i class="fas fa-shopping-cart"></i></span>
                <span>Cart</span>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <!-- class section to create space between navbar and body -->
    <!-- router-view is where the routed pages get rendered, 
    so here they get rendered between the navbar and footer-->
    <section class="section">
      <router-view />
    </section>
    <footer class="footer">
      <p class="has-text-centered">Copyright (c) 2021</p>
    </footer>
  </div>
</template>
<script>
export default {
  data() {
    return {
      showMobileMenu: false,
      cart: {
        items: [],
      },
    };
  },
  // hook executed before template created
  // here we want to initialize store
  beforeCreate() {
    // commit is how we call mutations on vuex store
    this.$store.commit("initializeStore");
  },
};
</script>

<style lang="scss">
@import "../node_modules/bulma";
</style>
