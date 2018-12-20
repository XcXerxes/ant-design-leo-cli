import * as React from 'react'
import { Spin } from 'antd'
import { getMenuData } from './menu'
import * as Loadable from 'react-loadable'

let routerDataCache:any

const getRouterDataCache = (app: any) => {
  if (!routerDataCache) {
    routerDataCache = getRouterData(app)
  }
  return routerDataCache
}

function dynamicWrapper (app:any, component:any) {
  return Loadable({
    loader: () => {
      return component().then((raw: any) => {
        const Component = raw.default || raw
        return (props: any) => 
          React.createElement(Component, {
            ...props,
            routerData: getRouterDataCache(app)
          })
      })
    },
    loading: () => {
      return <Spin />
    }
  })
}

export const getRouterData = (app:any) => {
  const routerConfig = {
    '/': {
      component: dynamicWrapper(app, () => import('../layouts/BasicLayout'))
    },
    '/user': {
      component: dynamicWrapper(app, () => import('../layouts/UserLayout'))
    },
    '/user/login': {
      component: dynamicWrapper(app, () => import('../views/User/Login'))
    }
  }
}