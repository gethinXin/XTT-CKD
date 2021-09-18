const systemRouter = [
  {
    route: null,
    name: null,
    title: '系统管理',
    type: 'tab',
    icon: 'iconfont icon-huiyuanguanli',
    filePath: 'view/system/',
    order: null,
    inNav: true,
    permission: ['超级管理员独有权限'],
    children: [
      {
        route: '/system/temp/permis1',
        name: null,
        title: '临床权限',
        type: 'view', // 取 route 为默认加载页
        filePath: 'view/system/system-list.vue',
        inNav: true,
      },
      {
        route: '/system/temp/permis2',
        name: null,
        title: '管理中心权限',
        type: 'view', // 取 route 为默认加载页
        filePath: 'view/system/system-list2.vue',
        inNav: true,
      },
      {
        route: '/system/temp/permis3',
        name: null,
        title: '患者端权限',
        type: 'view', // 取 route 为默认加载页
        filePath: 'view/system/system-list3.vue',
        inNav: true,
      },
      {
        route: '/system/temp/permis4',
        name: null,
        title: '字典维护',
        type: 'view', // 取 route 为默认加载页
        filePath: 'view/system/system-list4.vue',
        inNav: true,
      },
    ],
  },
  {
    route: null,
    name: null,
    title: '系统总览',
    type: 'tab',
    icon: 'iconfont icon-huiyuanguanli',
    filePath: 'view/system/',
    order: null,
    inNav: true,
    permission: ['超级管理员独有权限'],
    children: [
      {
        route: '/system/dashboard',
        name: null,
        title: '系统总览',
        type: 'view', // 取 route 为默认加载页
        filePath: 'view/system/system-dashboard.vue',
        inNav: true,
      },
    ],
  },
]

export default systemRouter
