function getRelation(str1:string, str2:string) {
  if (str1 === str2) {
    console.warn('Two path are equal!'); // eslint-disable-line
  }
  const arr1 = str1.split('/');
  const arr2 = str2.split('/');
  if (arr2.every((item, index) => item === arr1[index])) {
    return 1;
  } else if (arr1.every((item, index) => item === arr2[index])) {
    return 2;
  }
  return 3;
}

/**
 * 
 * @param routes Array<string>
 */
function getRenderArr(routes: Array<string>):Array<string> {
  let renderArr = []
  renderArr.push(routes[0])
  for (let i = 1; i < routes.length; i++) {
    // 去重
    renderArr = renderArr.filter(item => getRelation(item, routes[i]) !== 1)
    // 是否包含
    const isAdd = renderArr.every(item => getRelation(item, routes[i]) === 3)
    if (isAdd) {
      renderArr.push(routes[i])
    }
  }
  return renderArr
}

/**
 * 
 * @param path 
 * @param routerData 
 */
type routerDataProps = {
  name?: string;
  path?: string;
}
export function getRoutes(path:string, routerData: routerDataProps): Array<any> {
  // 过滤掉根路径
  let routes = Object.keys(routerData).filter(
    routePath => routePath.indexOf(path) === 0 && routePath !== path
  )
  // 替换 path 为 '' eg. path='user' /user/name => name
  routes = routes.map(item => item.replace(path, ''))
  // 获取要渲染的路径 同时 删除深层的渲染
  const renderArr = getRenderArr(routes)
  const renderRoutes = renderArr.map(item => {
    const exact = !routes.some(route => route !== item && getRelation(route, item) === 1)
    return {
      exact,
      ...routerData[`${path}${item}`],
      key: `${path}${item}`,
      path: `${path}${item}`
    }
  })
  return renderRoutes
}

const reg = /(((^https?:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+(?::\d+)?|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)$/

export function isUrl(path:string) {
  return reg.test(path)
}
