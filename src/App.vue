<template>
  <div id="app">
    <HeaderComponent></HeaderComponent>
    <router-view class="p-top-1" />
    <ClockComponent />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HeaderComponent from '@/components/Header.vue';
import ClockComponent from '@/components/Clock.vue';
@Component({
  components: {
    HeaderComponent,
    ClockComponent,
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
@import '@/assets/scss/app.scss';
</style>
