<template>
  <div ref="xttCharts" :style="{ width: '100%', height: '550px' }"></div>
</template>

<script>
import * as echarts from 'echarts'
import { onMounted, ref } from 'vue'

export default {
  props: {
    options: {
      type: Object,
      default: () => {},
    },
  },
  setup(ctx) {
    const xttCharts = ref(null)
    const initEcharts = () => {
      const myChart = echarts.init(xttCharts.value)
      if (myChart) {
        myChart.setOption(ctx.options)
      }
      window.onresize = () => {
        myChart.resize()
      }
    }

    onMounted(() => {
      initEcharts()
    })

    return {
      xttCharts,
    }
  },
}
</script>

<style lang="scss" scoped></style>
