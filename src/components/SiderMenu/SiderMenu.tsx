import React, { PureComponent } from 'react'
import { Layout, Menu, Icon } from 'antd'
import {Link} from 'react-router-dom'
import * as styles from  './SiderMenu.scss'

const { Sider } = Layout
const { SubMenu } = Menu

type Props = {
  menusData?: any;
  location?: any;
}
export default class SideMenu extends PureComponent<Props> {
  public getIcon = (icon:any) => {
    if (typeof icon === 'string') {
      if (icon.indexOf('http') === 0) {
        return <img src={icon} alt="icon" className="sider-menu-item-img" />
      }
      return <Icon type={icon} />
    }
    return icon
  }
  // conversion Path
  // 转化路径
  public conversionPath = (path:string) => {
    if (path && path.indexOf('http') === 0) {
      return path;
    } else {
      return `/${path || ''}`.replace(/\/+/g, '/');
    }
  }
  /**
   * 判断是否是http链接，返回Link 或者a
   */
  public getMenuItemPath = (item:any) => {
    const itemPath = this.conversionPath(item.path)
    const icon = this.getIcon(item.icon)
    const { target, name } = item
    // 如果是 http link
    if (/^https?:\/\//.test(itemPath)) {
      return (
        <a href={item.path} target={target}>
          {icon}
          <span>{name}</span>
        </a>
      )
    }
    const { location } = this.props
    return (
      <Link
        to={item.path}
        target={target}
        replace={itemPath === location.pathname}
      >
        {icon}
        <span>{name}</span>
      </Link>
    )
  }
  /**
   * 获取二级菜单
   */
  public getSubMenuOrItem = (item:any) => {
    if (item.children && item.children.some((child: any) => child.name)) {
      const childrenItems = this.getMenuItems(item.children)
      // 当无子菜单就不展示菜单
      if (childrenItems && childrenItems.length > 0) {
        return (
          <SubMenu
            key={item.path}
            title={
              item.icon ? (
                <span>
                  {this.getIcon(item.icon)}
                  <span>{item.name}</span>
                </span>
              ) : (item.name)
            }
          >
            {childrenItems}
          </SubMenu>
        )
      }
      return null
    } else {
      return <Menu.Item key={item.path}>{this.getMenuItemPath(item)}</Menu.Item>
    }
  }
  /**
   * 获取菜单子节点
   */
  public getMenuItems = (menusData:any) => {
    if (!menusData) {
      return []
    }
    return menusData.filter((item: any) => item.name && !item.hideInMenu)
      .map((item: any) => {
        const ItemDOm = this.getSubMenuOrItem(item)
        return this.checkPremissionItem(item.authority, ItemDOm)
      })
  }
  /**
   * 返回带权限的 菜单
   */
  public checkPremissionItem = (authority: string, ItemDOm: any) => {
    return ItemDOm 
  }
  public render() {
    const { menusData } = this.props
    console.log(styles)
    return (
      <Sider
        trigger={null}
        collapsible={true}
        breakpoint="lg"
        width={256}
        className={styles.container}
      >
        <div>
          <p>logo</p>
        </div>
        <Menu
          key="Menu"
          theme="dark"
          mode="inline"
          style={{ padding: '16px 0', width: '100%' }}
        >
          {this.getMenuItems(menusData)}
        </Menu>
      </Sider>
    )
  }
}
