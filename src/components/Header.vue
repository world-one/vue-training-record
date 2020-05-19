<template>
  <header class="header">
    <nav class="navbar is-fixed-top is-success" role="navigation" aria-label="main navigation">
      <div class="container">
        <div class="navbar-brand">
          <a class="navbar-item" href="/">My Record</a>

          <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample"
            @click="toggleMenu">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" class="navbar-menu">
          <div class="navbar-start">
            <a class="navbar-item"></a>
            <router-link  class="navbar-item"
              to="/record/list">목록</router-link>
            
          </div>

          <div class="navbar-end">
            <div class="navbar-item">
              <div class="buttons">
                <router-link class="button is-light"
                 :to="{name: 'join'}">로그인</router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Header extends Vue {

  public toggleMenu() {
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
    if ($navbarBurgers.length > 0) {
      $navbarBurgers.forEach( ( el ) => {
          const target = el.dataset.target;
          const $target: HTMLElement | null = document.getElementById(target);
          el.classList.toggle('is-active');
          if ( $target ) {
            $target.classList.toggle('is-active');
          }
      });
    }
  }

}
</script>