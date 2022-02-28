import Mock from "mockjs" 

const menuList = [
  {
      id: '1',
      pid: '-1',
      text: '首页',
      icon: 'dashboard',
      name: 'dashboard'
    },
    {
      id: '2',
      pid: '-1',
      text: '产品列表',
      icon: 'table',
      name: 'product'
    }, 
    {
      id: '99',
      pid: '-1',
      text: '公司官网',
      icon: 'table',
      name: 'external-link'
    }
];

Mock.mock('http://localhost:2000/api/getMuen','get',()=>{
  return {
    resultCode: 200,
    message: "success",
    data: menuList
  }


})
export default[
    {
        url: "api/getMenu",
        method: "post",
        respolse: ()=>{
            return {
                resultCode: 200,
                message: "success",
                data: [
                    {
                        id: '1',
                        pid: '-1',
                        text: '首页',
                        icon: 'dashboard',
                        name: 'dashboard'
                      },
                      {
                        id: '2',
                        pid: '-1',
                        text: '产品列表',
                        icon: 'table',
                        name: 'product'
                      },
                      {
                        id: '3',
                        pid: '-1',
                        text: '一级菜单',
                        icon: 'example',
                        children: [
                          {
                            id: '3-1',
                            pid: '3',
                            text: '二级菜单1',
                            name: 'icon',
                            icon: 'example'
                          },
                          {
                            id: '3-2',
                            pid: '3',
                            text: '二级菜单2',
                            icon: 'tree',
                            children: [
                              {
                                id: '3-2-1',
                                pid: '3-2',
                                text: '三级菜单1',
                                name: 'form',
                                icon: 'form'
                              },
                              {
                                id: '3-2-2',
                                pid: '3-2',
                                text: '三级菜单2',
                                name: 'menu1-1',
                                icon: 'form'
                              },
                              {
                                id: '3-2-3',
                                pid: '3-2',
                                text: '三级菜单3',
                                name: 'menu1-2',
                                icon: 'form'
                              },
                              {
                                id: '3-2-4',
                                pid: '3-2',
                                text: '三级菜单4',
                                name: 'menu1-3',
                                icon: 'form'
                              }
                            ]
                          }
                        ]
                      },
                      {
                        id: '99',
                        pid: '-1',
                        text: '公司官网',
                        icon: 'table',
                        name: 'external-link'
                      }
                ]
            }
        }
    }
]