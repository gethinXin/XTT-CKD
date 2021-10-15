<template>
  <div class="container">
    <div class="container-body">
      <el-table
        :data="tableData"
        row-key="id"
        :tree-props="{ children: 'children', hasChildren: 'hasChildren' }"
        style="width: 100%"
      >
        <el-table-column type="expand">
          <template #default="props">
            <p>State: {{ props.row.state }}</p>
            <p>City: {{ props.row.city }}</p>
            <p>Address: {{ props.row.address }}</p>
            <p>Zip: {{ props.row.zip }}</p>
          </template>
        </el-table-column>
        <el-table-column label="Date" prop="date" />
        <el-table-column label="Name" prop="name" />
      </el-table>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const role = ref(null)
    const tableData = ref([
      {
        id: 1,
        date: '2016-05-02',
        name: '用户管理',
        address: '上海市普陀区金沙江路 1518 弄',
        children: [
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
        ],
      },
      {
        id: 2,
        date: '2016-05-04',
        name: '系统管理',
        address: '上海市普陀区金沙江路 1517 弄',
        children: [
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
        ],
      },
    ])
    const multipleSelection = ref([])
    const handleSelectionChange = val => {
      multipleSelection.value = val
    }
    return {
      role,
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
