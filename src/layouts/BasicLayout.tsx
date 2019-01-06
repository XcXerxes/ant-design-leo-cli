import * as React from 'react'
import { Layout } from 'antd'
import { Switch, Route} from 'react-router-dom'
import { getMenuData } from '../common/menu'
import DocumentTitle from 'react-document-title'
import { ContainerQuery } from 'react-container-query'
import SiderMenu from '../components/SiderMenu/SiderMenu'
import * as classnames from 'classnames'
import { getRoutes } from '../utils'
import GlobalHeader from '../components/GlobalHeader'
import logo from '../assets/images/logo.svg'

const { Content, Header } = Layout

const query = {
  'screen-xs': {
    maxWidth: 575
  },
  'screen-sm': {
    minWidth: 576,
    maxWidth: 767
  },
  'screen-md': {
    minWidth: 768,
    maxWidth: 991
  },
  'screen-lg': {
    minWidth: 992,
    maxWidth: 1199
  },
  'screen-xl': {
    minWidth: 1200,
    maxWidth: 1599
  },
  'screen-xxl': {
    minWidth: 1600
  }
}
type Props = {
  match?: any;
  location?: any;
  routerData?: any;
  collapsed: boolean;
}
class BasicLayout extends React.PureComponent<Props> {
  public state = {
    collapsed: false
  }
  public handleMenuCollapse = (collapsed:boolean) => {
    this.setState({
      collapsed
    })
  }
  public handleMenuClick = (param:{key:string}) => {
    const { key } = param
    if (key === 'user') {
      console.log(key)
    } else if (key === 'setting') {
      console.log(key)
    } else if (key === 'logout') {
      console.log(key)
    }
  }
  public render() {
    const {location, match, routerData} = this.props
    const { collapsed } = this.state
    const layout = (
      <Layout>
        <SiderMenu 
          menusData={getMenuData()}
          location={location}
          collapsed={collapsed}
          onCollapse={this.handleMenuCollapse}
          logo={logo}
        />
        <Layout>
          <Header style={{ padding: 0 }}>
            <GlobalHeader 
              collapsed={collapsed}
              onCollapse={this.handleMenuCollapse}
              onMenuClick={this.handleMenuClick}
            />
          </Header>
          <Content style={{ margin: '24px 24px 24px', height: '100%' }}>
            <Switch>
              {getRoutes(match.path, routerData).map((item: any) => (
                <Route 
                  key={item.key}
                  path={item.path}
                  component={item.component}
                  exact={item.exact}
                  authority={item.authority}
                />
              ))}
            </Switch>
          </Content>
        </Layout>
      </Layout>
    )
    return (
      <DocumentTitle title="Ant-design">
        <ContainerQuery query={query} >
          {(params:any) => <div className={classnames(params)}>{layout}</div>}
        </ContainerQuery>
      </DocumentTitle>
    )
  }
}

export default BasicLayout
