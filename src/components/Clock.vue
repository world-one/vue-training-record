<template>
  <div class="clock has-background-dark">
      <div class="container">
        <div class="columns is-mobile">
          <div class="column is-6">
            <div class="clock__area">
              <i class="fas fa-clock has-text-white is-size-2 is-size-3-mobile"></i>
              <div>
                <p class="subtitle is-marginless is-size-6 is-size-7-mobile has-text-white">{{today}}</p>
                <p class="subtitle is-size-6-mobile has-text-white">{{time}}</p>
              </div>
            </div>
          </div>
          
          <div class="timer__wrap column is-6">
            <i class="fas fa-stopwatch-20 has-text-white is-size-2 is-size-3-mobile"></i>
            <input class="timer input is-size-7-mobile" type="number" v-model="timer">
            <button type="button" class="button is-primary is-size-7-mobile"
              @click ="timerActive"
            >시작</button>
          </div>
          </div>
      </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Clock extends Vue {
  public timer: number = 30;
  public today: string = '';
  public time: string = '';
  public activeInterval: number = 0;
  constructor() {
    super();
  }
  public mounted() {
    this.getDate();
  }
  public getDate() {
    let date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    let hours: number | string;
    let min: number | string;
    let sec: number | string;
    this.today =
      year + '년 ' +
      month + '월 ' +
      day + '일 ';
    setInterval(() => {
      date = new Date();
      hours = date.getHours();
      min = date.getMinutes();
      sec = date.getSeconds();
      if ( hours.toString().length < 2 ) { hours = '0' + hours; }
      if ( min.toString().length < 2 ) { min = '0' + min; }
      if ( sec.toString().length < 2 ) { sec = '0' + sec; }
      this.time =
        hours + ' : ' +
        min + ' : ' +
        sec;
    }, 1000 );
  }
  public timerActive() {
    if ( this.activeInterval > 0 ) {
      clearInterval(this.activeInterval);
      this.activeInterval = 0;
      return;
    }
    const no = this.timer;
    this.activeInterval = setInterval(() => {
      this.timer--;
      if ( this.timer === 0 ) {
        clearInterval(this.activeInterval);
        this.timer = no;
      }
    }, 1000 );
  }
}
</script>

<style lang="scss">
  .clock{
    position: fixed;
    bottom: 0;
    padding: 1rem 0;
    width: 100%;
  }
  .clock__area{
    display: flex;
    i {
      margin-right: 0.5rem;
      margin-top: 3px;
    }
  }
  .timer.input{
    text-align: center;
    width: 50%;
    max-width: 80px;
    padding-left: 24px;
    margin: 0 0.25rem 0 0.5rem;
    font-weight: bold;
  }
</style>