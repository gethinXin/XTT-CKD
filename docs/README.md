<p align="center">
  <font size="70">
    XTT-CKD BY VUE3 的实现
  </font>
</p>






## 简介

- 


## 注意事项

1. axios API

   可以通过向 `axios` 传递相关配置来创建请求

   `axios(config)`

   ```
   // 发送 POST 请求
   axios({
     method: 'post',
     url: '/user/12345',
     data: {
       firstName: 'Fred',
       lastName: 'Flintstone'
     }
   });
   ```

   `axios(url[,config])`

2. 自定义请求方法别名

   只有`url`是必需的。

   ```js
   // post别名方法使用
   // 导入别名方法
   import _axios, { post, get } from '@/lin/plugin/axios'
   
   // 原生API及配置项示例
   _axios({
     method: 'post',
     url: '/user/12345',
     data: {
       firstName: 'Fred',
       lastName: 'Flintstone'
     }
   });
   // 别名方法 POST请求 
   // config 中可以指定axios API的配置以
   // 使用自定义配置:dataType为json格式或者FormData格式，默认格式为FormData
   post(url[,data[,config]])
   
   // 别名方法 GET请求
   get(url[,param])
   ```

3. 

## 文档资料
### axios插件位置

`lin > plugin > axios.js`

### axios请求数据格式

- FormData（默认）
- JSON

### 菜单权限验证

- 调用登录（Login）接口

- 调用权限（Permissions）接口

  ```json
  //数据结构
  {
      admin: true,
      avatar: null,
      email: null,
      id: 1,
      nickname: 'root',
      permissions: []
  }
  ```

- 菜单权限过滤

  `定义路由时指定权限配置（permission:['']）`

  ```js
  /**
   * 判断权限
   */
  Utils.hasPermission = (permissions, route, user) => {
    // 管理员角色直接显示全部菜单
    if (user?.admin) {
      return true
    }
    // 根据用户权限加载相应的菜单
    if (route.permission) {
      return permissions.some(permission => route.permission.indexOf(permission) > -1)
    }
    return true
  }
  ```

  ```js
  // router > index.js
  // 根据权限过滤需要显示菜单
  router.beforeEach((to, from, next) => {
    /* ... */
    // 权限验证
    if (store?.state && store?.getters) {
      const { permissions, user } = store.getters
      if (to.path !== '/about' && !Util.hasPermission(permissions, to.meta, user)) {
        ElMessage.error('您无此页面的权限哟')
        next({ path: '/about' })
        return
      }
    }
  
    /* ... */
  
    next()
  })
  ```

### 页面布局逻辑

`view > home > sidebar(component > sidebar > sidebar.vue > menu-tree.vue(递归组件)) `

### 路由菜单渲染配置

```js
const systemRouter = {
  route: null,
  name: null,
  title: '系统管理',
  type: 'tab', // folder 为左侧树菜单   tab为右侧上方导航菜单
  icon: 'iconfont icon-huiyuanguanli',
  filePath: 'view/system/',
  order: null,
  inNav: true,
  permission: ['超级管理员独有权限'],
  // 子级菜单
  children: [
    {
      route: '/system/temp/permis1',
      name: null,
      title: '临床权限',
      type: 'view', 
      filePath: 'view/system/system-list.vue',
      inNav: true,  // 标识是否为导航菜单
    },    
  ],
}

export default systemRouter
```

### 关于组件说明

表格的树形数据显示的选中/取消选中功能暂未实现，需要自形封装

#### 卡片组件使用

基于Element-plus的卡片组件进行了改造，修改了头部插槽的形式，改用[title]传入标题，对卡片头部进行扩展使用具名接插槽[header-extra]；进一步添加了头像的支持。使用示例：

```vue
<x-card>基本使用，这里是内容</x-card>
<!--指定标题-->
<x-card title="系统概要"></x-card>
<!--是否需要边框-->
<x-card :header-border="false"></x-card>
<!--头部扩展操作：示例1-->
<x-card title="测试CARD">
    <!--这里根据业务自定义内容-->
    <!--需要注意这里必须指定插槽名【header-extra】，这里使用了插槽的简写形式-->
    <template #header-extra>
		<el-button class="button" type="text">操作按钮</el-button>
    </template>
    <div v-for="o in 4" :key="o">list {{ o }}</div>
</x-card>
<!--头部扩展操作：示例2-->
<x-card title="测试CARD">
    <template #header-extra>
	<el-menu
         :default-active="activeIndex"
         class="el-menu-demo"
         mode="horizontal"
         @select="handleSelect"
         >
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
<!--头部扩展操作：示例3-->
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
        {{ activeIndex }}
        <div v-for="o in 3" :key="o">list {{ o }}</div>
    </div>
</x-card>
```





## 快速上手

```sh
# install dependency
npm i or npm install

# develop
npm run serve or yarn (run) serve
```
