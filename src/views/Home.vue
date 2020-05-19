<template>
  <div class="container p-bottom-1">
    <div class="columns">
      <div class="column is-desktop is-8 is-offset-2 p-bottom-1">
        <div class="card m-top-1">
            <div id="max-chart"></div>  
        </div>
        <div class="card m-top-1">
          <div class="card-content">
            <div id="volume-chart"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
// @ts-ignore
import { GoogleCharts } from 'google-charts';

@Component
export default class Home extends Vue {
  public google = GoogleCharts;
  constructor() {
    super();
  }
  public mounted() {
    this.loadChart();
  }
  public loadChart() {
    this.google.load('current', { packages: ['corechart']} );
    setTimeout(() => {
      this.google.api.setOnLoadCallback(this.maxWeightDraw());
      this.google.api.setOnLoadCallback(this.volumeDraw());
    }, 1000);
  }
  public maxWeightDraw() {
    const data = this.google.api.visualization.arrayToDataTable([
        ['month', '벤치프레스', '스쿼트', '데드리프트'],
        ['1월', 80, 80, 90],
        ['2월', 100, 80, 90],
        ['3월', 120, 120, 100],
        ['4월', 80, 130, 125],
        ['5월', 100, 120, 114],
        ['6월', 120, 110, 110],
        ['7월', 80, 90, 99],
        ['8월', 100, 80, 99],
        ['9월', 120, 120, 130],
    ]);
    const options = {
      title: '최대 중량',
      curveType: 'function',
      legend: { position: 'bottom' },
      chartArea: { right: 0, top: 30, width: '88%', height: '60%' },
      height: 350,
    };
    const pieChart = new GoogleCharts.api.visualization.LineChart(document.getElementById('max-chart'));
    pieChart.draw(data, options);
  }
  public volumeDraw() {
    const data = this.google.api.visualization.arrayToDataTable([
        ['month', '벤치프레스', '스쿼트', '데드리프트'],
        ['1월', 800, 800, 900],
        ['2월', 1000, 800, 900],
        ['3월', 1200, 1200, 1000],
        ['4월', 800, 1300, 1250],
        ['5월', 1000, 1200, 1140],
        ['6월', 1200, 1100, 1100],
        ['7월', 800, 900, 990],
        ['8월', 1000, 800, 990],
        ['9월', 1200, 1200, 1300],
    ]);
    const options = {
      title: '볼륨',
      curveType: 'function',
      legend: { position: 'bottom' },
      chartArea: { right: 0, top: 30, width: '88%', height: '60%' },
      height: 350,
    };
    const pieChart = new GoogleCharts.api.visualization.LineChart(document.getElementById('volume-chart'));
    pieChart.draw(data, options);
  }
}
</script>
