<template>
  <div id="app">
    <HeaderComponent></HeaderComponent>
    <router-view class="p-top-1" />
    <ClockComponent v-if="record" />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';
import HeaderComponent from '@/components/Header.vue';
import ClockComponent from '@/components/Clock.vue';
@Component({
  components: {
    HeaderComponent,
    ClockComponent,
  },
})
export default class App extends Vue {
  public record: boolean = false;
  public mounted() {
    if ( this.$route.name === 'record' ) {
      this.record = true;
    }
  }
  @Watch('$route', { immediate: true, deep: true })
  private clockShow() {
    if ( this.$route.name === 'record' ) {
      this.record = true;
    } else {
      this.record = false;
    }
  }
}

</script>

<style lang="scss">
@import '@/assets/scss/app.scss';
</style>
