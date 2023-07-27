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
          path: '/dashboard',
          name: '首页',
          routeName: 'Dashboard',
          icon: 'Histogram'
        },
        {
          path: '/user',
          name: '用户管理',
          routeName: 'User',
          icon: 'User',
          children: [
            {
              path: '/user/list',
              name: '用户列表',
              routeName: 'UserList',
              icon: ''
            },
            {
              path: '/user/lock',
              name: '用户权限',
              routeName: 'UserLock',
              icon: ''
            },
            {
              path: '/user/aim',
              name: '用户角色',
              routeName: 'UserAim',
              icon: ''
            }
          ]
        },
        {
          path: '/more',
          name: '多级导航',
          routeName: 'More',
          icon: 'FolderOpened',
          children: [
            {
              path: '/more/list',
              name: '多级列表',
              routeName: 'MoreList',
              icon: ''
            },
            {
              path: '/more/two',
              name: '多级二层',
              routeName: 'MoreTwo',
              icon: '',
              children: [
                {
                  path: '/more/two/list',
                  name: '二层列表',
                  routeName: 'MoreTwoList',
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
