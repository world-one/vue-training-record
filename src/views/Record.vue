<template>
  <div class="container">
    <section class="p-top-1 column is-5 is-offset-3">
      <div class="wrap">
        <h1 class="section__title">벤치프레스</h1>

        <ul class="records" id="records-list">
          <li class="record level is-mobile init__record" id="init-record" 
            v-for="(item,index) in recordArr" :key="index">
            <input class="d-none is-primary" type="checkbox" :id="'record-'+index+1">
            <label class="record__checkbox" :for="'record-'+index+1">
              <i class="fas fa-check"></i>
            </label>
            <div class="record__data level is-mobile">
              <h2 class="record__order is-size-5 is-size-6-mobile">{{index+1}}세트</h2>
              <input class="record__input m-left-10 is-size-6-mobile" type="number" 
                :value="recordArr[index].weight"
                @keyup="addRecordValue('weight', index, recordArr[index].weight)"
              ><span>kg</span>
              <input class="record__input m-left-10 is-size-6-mobile" type="number" 
                :value="recordArr[index].count"
                @keyup="addRecordValue('count', index, recordArr[index].count)"
              ><span>회</span>
            </div>
            <button class="record__delete__btn button is-small is-danger" v-if="index != 0" @click="removeRecord(index)" type="button"><i class="fas fa-times"></i></button>
          </li>
        </ul>
        <button @click="addRecord" id="add-record-btn" type="button" class="button is-primary is-fullwidth is-medium is-mobile-small">추가하기</button>  
      </div>
    </section>
    <section class="column is-5 is-offset-3">
      <div class="wrap">
        <div class="level is-mobile">
          <div class="level-item has-text-centered"
            v-for="( item, index ) in totalArr" :key="index">
            <div>
              <p class="heading">{{item.title}}</p>
              <p class="title">{{item.count}}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Record extends Vue {
  public setNo: number = 1;
  public recordArr: { weight: number, count: number, complete: boolean }[] = [
    {
      weight: 40,
      count: 10,
      complete: false,
     },
  ];
  public totalArr: { title: string, count: number }[] = [
    { title: '총세트수', count: 0 },
    { title: '최대무게', count: 0 },
    { title: '총 볼륨', count: 0 },
    { title: '1RM(예상)', count: 0 },
  ];
  constructor() {
    super();
  }
  public addRecord() {
    this.recordArr.push(this.recordArr[ this.recordArr.length - 1 ]);
    this.totalCalc();
  }
  public removeRecord(index: number) {
    this.recordArr.splice(index, 1);
    this.totalCalc();
  }
  public addRecordValue( target: string = 'weight', index: number, value: number) {
    const data: { weight: number, count: number } = {
      weight: this.recordArr[index].weight,
      count: this.recordArr[index].count,
    };
    if ( event && event.target ) {
      // @ts-ignore
      data[target] =  event.target.value;
    }
    Vue.set(this.recordArr, index, data);
    this.totalCalc();
  }
  public totalCalc() {
    let volume: number = 0;
    let max: number = 0;
    let maxCount: number = 0;
    this.recordArr.forEach( (el) => {
      volume += el.count * el.weight;
      if ( el.weight > max ) {
        max = el.weight;
        maxCount = el.count;
      }
    });
    this.totalArr[0].count = this.recordArr.length;
    this.totalArr[1].count = max;
    this.totalArr[2].count = volume;
    this.totalArr[3].count = +max + +Math.round( max * maxCount * 0.025 );
  }
}
</script>

<style lang="scss">
  @import '@scss/pages/record';
</style>