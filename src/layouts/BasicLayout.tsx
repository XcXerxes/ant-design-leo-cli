import * as React from 'react'
import { Layout } from 'antd'
import { Switch, Route} from 'react-router-dom'
import { getMenuData } from '../common/menu'
import DocumentTitle from 'react-document-title'
import { ContainerQuery } from 'react-container-query'
import SiderMenu from '../components/SiderMenu/SiderMenu'
import * as classnames from 'classnames'
import { getRoutes } from '../utils'

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
  public handleMenuCollapse = () => {
    console.log('..')
  }
  public handleMenuClick = () => {
    console.log('..')
  }
  public render() {
    const {location, match, routerData, collapsed} = this.props
    const layout = (
      <Layout>
        <SiderMenu 
          menusData={getMenuData()}
          location={location}
          collapsed={collapsed}
          onCollapse={this.handleMenuCollapse}
        />
        <Layout>
          <Header style={{ padding: 0 }}>
            <p>header</p>
          </Header>
          <Content style={{ margin: '24px 24px 0', height: '100%' }}>
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
