<template>
  <div class="container">
    <div class="column is-8 is-offset-2">
      <div class="content">
        <ul>
          <li>벤치프레스</li>
        </ul>
      </div>
      <div class="card m-top-1">
        <div class="card-header">
          <h1 class="card-header-title">최대중량</h1>
        </div>
        <div class="card-content">
          <div class="content">

            <div class="level">
              <div class="level-item has-text-centered">
                <div>
                  <p class="heading">스쿼트</p>
                  <p class="title">120kg x 5</p>
                </div>
              </div>
              <div class="level-item has-text-centered">
                <div>
                  <p class="heading">데드리프트</p>
                  <p class="title">120kg x 5</p>
                </div>
              </div>
              <div class="level-item has-text-centered">
                <div>
                  <p class="heading">벤치프레스</p>
                  <p class="title">90kg x 5</p>
                </div>
              </div>
            </div>
            
            <div class="level m-top-1">
              <div class="level-item has-text-centered">
                <div>
                  <p class="heading">바벨로우</p>
                  <p class="title">78kg x 10</p>
                </div>
              </div>
              <div class="level-item has-text-centered">
                <div>
                  <p class="heading">오베헤드프레스</p>
                  <p class="title">78kg x 10</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
      
    </div>
    
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Home extends Vue {}
</script>
