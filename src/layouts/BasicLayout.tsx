import * as React from 'react'
import { Layout } from 'antd'
import { getMenuData } from '../common/menu'
import DocumentTitle from 'react-document-title'
import { ContainerQuery } from 'react-container-query'
import SiderMenu from '../components/SiderMenu/SiderMenu'
import * as classnames from 'classnames'

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
}
class BasicLayout extends React.PureComponent<Props> {
  public render() {
    const {location} = this.props
    const layout = (
      <Layout>
        <SiderMenu 
          menusData={getMenuData()}
          location={location}
        />
        <Layout>
          <Header style={{ padding: 0 }}>
            <p>header</p>
          </Header>
          <Content style={{ margin: '24px 24px 0', height: '100%' }}>
            <p>body</p>
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
