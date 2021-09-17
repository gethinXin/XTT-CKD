<template>
  <div class="container">
    <div class="container-body">
      <div class="header">
        <label>选择角色</label>
        <el-radio-group v-model="role">
          <el-radio :label="1">大佬</el-radio>
          <el-radio :label="2">主任</el-radio>
          <el-radio :label="3">管理员</el-radio>
          <el-radio :label="4">管理中心主任</el-radio>
        </el-radio-group>
      </div>
      <div class="list-content">
        <label>权限列表</label>
        <el-table
          :data="tableData"
          :show-header="false"
          style="width: 100%;margin-bottom: 20px;"
          row-key="id"
          border
          default-expand-all
          :tree-props="{ children: 'children', hasChildren: 'hasChildren' }"
          @selection-change="handleSelectionChange"
        >
          <el-table-column type="selection" width="55"></el-table-column>
          <el-table-column prop="name"></el-table-column>
        </el-table>
      </div>
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
              }
            ]
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
      handleSelectionChange
    }
  }
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
