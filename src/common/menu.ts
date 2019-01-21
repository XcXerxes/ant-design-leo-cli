import { isUrl } from '../utils'

const menuData = [
  {
    name: 'dashboard',
    icon: 'dashboard',
    path: 'dashboard',
    children: [
      {
        name: '分析页',
        path: 'analysis'
      },
      {
        name: '监控页',
        path: 'monitor',
        authority: 'user'
      },
      {
        name: '工作台',
        path: 'workplace'
        // hideInBreadcrumb: true,
        // hideInMenu: true,
      },
    ]
  },
  {
    name: '表单页',
    icon: 'form',
    path: 'form',
    children: [
      {
        name: '基础表单',
        path: 'basic-form'
      }
    ]
  },
  {
    name: '异常页',
    icon: 'warning',
    path: 'exception',
    children: [
      {
        name: '403',
        path: '403'
      },
      {
        name: '404',
        path: '404'
      },
      {
        name: '500',
        path: '500'
      },
    ]
  }
]
type MenuProps = {
  path: string;
  children?: Array<any>;
  name: string;
  icon?: string;
  authority?: any;
}

function formatter(data: Array<MenuProps>, parentPath = '/', parentAuthority?: string) {
  return data.map(item => {
    let { path } = item
    if (!isUrl(path)) {
      path = parentPath + item.path
    }
    const result = {
      ...item,
      path,
      authority: item.authority || parentAuthority
    }
    if (item.children) {
      result.children = formatter(item.children, `${parentPath}${item.path}/`, item.authority)
    }
    return result
  })
}

export const getMenuData = ():Array<MenuProps> => formatter(menuData)
