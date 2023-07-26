import http from '@/utils/http'

export const loginIn = () => {
  return {
    data: {
      token: '123456',
      refresh_token: '654321'
    }
  }
}

export const getUserInfo = () => {
  return {
    data: {
      menu: [
        {
          path: '/',
          name: '首页',
          route: 'Index',
          icon: 'Histogram'
        },
        {
          path: '/user',
          name: '用户管理',
          route: 'User',
          icon: 'User',
          children: [
            {
              path: '/user/list',
              name: '用户列表',
              route: 'UserList',
              icon: ''
            },
            {
              path: '/user/lock',
              name: '用户权限',
              route: 'UserLock',
              icon: ''
            },
            {
              path: '/user/aim',
              name: '用户角色',
              route: 'UserAim',
              icon: ''
            }
          ]
        },
        {
          path: '/more',
          name: '多级导航',
          route: 'More',
          icon: 'FolderOpened',
          children: [
            {
              path: '/more/list',
              name: '多级列表',
              route: 'MoreList',
              icon: ''
            },
            {
              path: '/more/two',
              name: '多级二层',
              route: 'MoreTwo',
              icon: '',
              children: [
                {
                  path: '/more/two/list',
                  name: '二层列表',
                  route: 'MoreTwoList',
                  icon: ''
                }
              ]
            }
          ]
        }
      ],
      name: '游荡de蝌蚪',
      avatar: '',
      buttons: [],
      roles: []
    }
  }
}

export const refreshToken = () => {}
