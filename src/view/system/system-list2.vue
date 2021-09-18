<template>
  <div class="container">
    <div class="container-body">
      <x-chart :options="options">
        <el-table :data="tableData">
          <el-table-column label="名称" prop="name"></el-table-column>
          <el-table-column label="地址" prop="address"></el-table-column>
        </el-table>
      </x-chart>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import xChart from '@/component/echarts/index.vue'

export default {
  components: {
    xChart,
  },
  setup() {
    const role = ref(null)
    const tableData = ref([
      {
        id: 1,
        date: '2016-05-02',
        name: '用户管理',
        address: '上海市普陀区金沙江路 1518 弄',
      },
      {
        id: 2,
        date: '2016-05-04',
        name: '系统管理',
        address: '上海市普陀区金沙江路 1517 弄',
      },
      {
        id: 31,
        date: '2016-05-01',
        name: '医护管理',
        address: '上海市普陀区金沙江路 1519 弄',
        children: [
          {
            id: 41,
            date: '2016-05-01',
            name: '医护管理列表数据',
            address: '上海市普陀区金沙江路 1519 弄',
          },
        ],
      },
      {
        id: 32,
        date: '2016-05-01',
        name: '慢病中心用户',
        address: '上海市普陀区金沙江路 1519 弄',
      },
      {
        id: 31,
        date: '2016-05-01',
        name: '腹透转归',
        address: '上海市普陀区金沙江路 1519 弄',
      },
      {
        id: 32,
        date: '2016-05-01',
        name: '医护端权限 ',
        address: '上海市普陀区金沙江路 1519 弄',
      },
    ])

    const options = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
          crossStyle: {
            color: '#999',
          },
        },
      },
      toolbox: {
        feature: {
          dataView: { show: true, readOnly: false },
          magicType: { show: true, type: ['line', 'bar'] },
          restore: { show: true },
          saveAsImage: { show: true },
        },
      },
      legend: {
        data: ['蒸发量', '降水量', '平均温度'],
      },
      xAxis: [
        {
          type: 'category',
          data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
          axisPointer: {
            type: 'shadow',
          },
        },
      ],
      yAxis: [
        {
          type: 'value',
          name: '水量',
          min: 0,
          max: 250,
          interval: 50,
          axisLabel: {
            formatter: '{value} ml',
          },
        },
        {
          type: 'value',
          name: '温度',
          min: 0,
          max: 25,
          interval: 5,
          axisLabel: {
            formatter: '{value} °C',
          },
        },
      ],
      series: [
        {
          name: '蒸发量',
          type: 'bar',
          data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3],
        },
        {
          name: '降水量',
          type: 'bar',
          data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3],
        },
        {
          name: '平均温度',
          type: 'line',
          yAxisIndex: 1,
          data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2],
        },
      ],
    }
    const multipleSelection = ref([])
    const handleSelectionChange = val => {
      multipleSelection.value = val
    }
    return {
      role,
      options,
      tableData,
      multipleSelection,
      handleSelectionChange,
    }
  },
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  padding: 0 30px;
  .container-body,
  .list-content {
    flex: 1;
    margin-top: 24px;
  }
  label {
    font-weight: bold;
  }

  .header {
    justify-content: space-evenly;
    flex-direction: column;
    display: flex;
    height: 74px;
    border-bottom: 1px dotted rgba(0, 0, 0, 0.2);
  }
}
</style>
