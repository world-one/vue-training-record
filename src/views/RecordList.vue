<template>
  <div class="column is-12 list__wrap">

    <div class="columns">
      <section class="p-top-1 column is-4 is-hidden-mobile">
      </section>
      <section class="p-top-1 column is-4" v-for="i in arr" :key="i">
        <div class="wrap">
          <h1 class="section__title">오늘의 운동</h1>

          <table class="table is-fullwidth">
            <thead>
              <tr>
                <th>종목</th>
                <th>세트수</th>
                <th>볼륨</th>
                <th>최대무게</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><router-link :to="{ name: 'record', params: { day: '20200517', exercise: 'bench' }}">벤치프레스</router-link></td>
                <td>12</td>
                <td>2400kg</td>
                <td>70kg x 1</td>
              </tr>
              <tr>
                <td>벤치프레스</td>
                <td>12</td>
                <td>2400kg</td>
                <td>70kg x 1</td>
              </tr>
              <tr>
                <td>벤치프레스</td>
                <td>12</td>
                <td>2400kg</td>
                <td>70kg x 1</td>
              </tr>
              <tr>
                <td>벤치프레스</td>
                <td>12</td>
                <td>2400kg</td>
                <td>70kg x 1</td>
              </tr>
            </tbody>
          </table>
          <button type="button" class="button is-primary is-fullwidth">추가하기</button>
        </div>
      </section>
    </div>

  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class RecordList extends Vue {
  public arr: number[] = [ 1, 2, 3, 4, 5 ];
  constructor() {
    super();
  }
}
</script>

<style lang="scss">
  @import '@scss/pages/record';
</style>