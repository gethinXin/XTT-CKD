<template>
  <div class="container">
    <x-card title="系统概要" :header-border="false">
      <div class="dashboard">
        <el-row>
          <el-col :span="24">
            <ul>
              <li>
                <div class="module">患者总数</div>
                <div class="num">30</div>
                <div class="statics">环比上月</div>
              </li>
              <li>
                <div class="module">患者总数</div>
                <div class="num">30</div>
                <div class="statics">环比上月</div>
              </li>
              <li>
                <div class="module">患者总数</div>
                <div class="num">30</div>
                <div class="statics">环比上月</div>
              </li>
              <li>
                <div class="module">患者总数</div>
                <div class="num">30</div>
                <div class="statics">环比上月</div>
              </li>
            </ul>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <ul>
              <li>
                <div class="module">患者总数</div>
                <div class="num">30</div>
                <div class="statics">环比上月</div>
              </li>
              <li>
                <div class="module">患者总数</div>
                <div class="num">30</div>
                <div class="statics">环比上月</div>
              </li>
              <li>
                <div class="module">患者总数</div>
                <div class="num">30</div>
                <div class="statics">环比上月</div>
              </li>
              <li>
                <div class="module">患者总数</div>
                <div class="num">30</div>
                <div class="statics">
                  环比上月
                  <i class="el-icon-bottom"></i>
                </div>
              </li>
            </ul>
          </el-col>
        </el-row>
      </div>
    </x-card>
    <el-divider></el-divider>
    <el-space fill wrap :fillRatio="40" direction="horizontal" style=" width: 100%">
      <x-card title="测试CARD">
        <template #header-extra>
          <el-button class="button" type="text">操作按钮</el-button>
        </template>
        <div v-for="o in 4" :key="o">list {{ o }}</div>
      </x-card>
      <x-card title="测试CARD">
        <template #header-extra>
          <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
            <el-menu-item index="1">处理中心</el-menu-item>
            <el-menu-item index="2">我的工作台</el-menu-item>
            <el-menu-item index="3">消息中心</el-menu-item>
            <el-menu-item index="4">订单管理</el-menu-item>
          </el-menu>
        </template>
        <div>
          {{ activeIndex }}
          <div v-for="o in 3" :key="o">list {{ o }}</div>
        </div>
      </x-card>
      <x-card title="显示头像" header-avatar shape="circle">
        <div v-for="o in 3" :key="o">list {{ o }}</div>
      </x-card>
      <x-card title="测试CARD">
        <template #header-extra>
          <el-dropdown trigger="click" @command="handleCommand">
            <i class="el-icon-more"></i>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item command="电子病历">电子病历</el-dropdown-item>
                <el-dropdown-item command="住院登记">住院登记</el-dropdown-item>
                <el-dropdown-item command="健康宣教">健康宣教</el-dropdown-item>
                <el-dropdown-item disabled command="标签管理">标签管理</el-dropdown-item>
                <el-dropdown-item divided command="随访">随访</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </template>
        <div>
          <x-chart :options="options"></x-chart>
        </div>
      </x-card>
      <x-card title="今日已随访患者（人）" :header-border="false">
        <div>
          <x-chart :options="options"></x-chart>
        </div>
        <div>
          <el-table :data="tableData">
            <el-table-column label="姓名"></el-table-column>
            <el-table-column label="性别"></el-table-column>
            <el-table-column label="年龄"></el-table-column>
            <el-table-column label="随访类别"></el-table-column>
            <el-table-column label="下次随访日期"></el-table-column>
            <el-table-column label="主管医生"></el-table-column>
            <el-table-column label="责任护士"></el-table-column>
          </el-table>
        </div>
      </x-card>
    </el-space>
  </div>
</template>

<script>
import { ElMessage } from 'element-plus'
import { ref } from 'vue'
import xCard from '@/component/card/index.vue'
import xChart from '@/component/echarts/index.vue'

export default {
  components: {
    xCard,
    xChart,
  },
  setup() {
    const handleClick = (tab, event) => {
      console.log(tab, event)
    }
    const activeName = ref(null)
    const handleCommand = command => {
      ElMessage(`选择执行 ${command} 按钮事件`)
    }
    const activeIndex = ref('1')
    const handleSelect = (key, keyPath) => {
      activeIndex.value = key
      console.log(key, keyPath)
    }
    const tableData = ref([])

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

    return {
      activeName,
      activeIndex,
      tableData,
      options,
      handleClick,
      handleCommand,
      handleSelect,
    }
  },
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  padding: 0 30px;
  overflow: hidden;
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

  .el-card {
    margin: 20px 0;
    height: 300px;
  }

  .el-tab-pane {
    height: 200px;
  }
  .dashboard {
    ul {
      display: flex;
      justify-content: space-between;
      align-items: center;
      li {
        padding: 0 20px 20px 0;
        div {
          padding: 5px 0;
        }
        .num {
          font-size: 20px;
          font-weight: bold;
        }
        .statics {
          color: gray;
          font-size: 10px;
          i {
            font-weight: bold;
            color: green;
          }
        }
      }
    }
  }
}
</style>
