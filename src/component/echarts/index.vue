<template>
  <div ref="xttCharts" :style="{ width: '100%', height: '350px' }"></div>
  <div><slot></slot></div>
</template>

<script>
import * as echarts from 'echarts'
import { onBeforeUnmount, onMounted, ref } from 'vue'

export default {
  props: {
    options: {
      type: Object,
      default: () => {},
    },
  },
  setup(ctx) {
    const xttCharts = ref(null)
    let myChart = null
    const initEcharts = () => {
      myChart = echarts.init(xttCharts.value)
      if (myChart) {
        myChart.setOption(ctx.options)
      }
    }
    const eventListener = () => {
      if (myChart) {
        myChart.resize()
      }
    }

    onMounted(() => {
      initEcharts()
      window.addEventListener('resize', eventListener)
    })

    onBeforeUnmount(() => {
      window.removeEventListener('resize', eventListener)
    })

    return {
      xttCharts,
    }
  },
}
</script>

<style lang="scss" scoped></style>
