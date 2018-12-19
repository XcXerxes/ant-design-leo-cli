import * as React from 'react'
import { Layout, Icon, message } from 'antd'
import { getMenuData } from '../common/menu'
import * as DocumentTitle from 'react-document-title'
import { ContainerQuery } from 'react-container-query'

const { Content, Header, Footer } = Layout

type Props = {
  match?: any;
  location?: any;
}

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

class BasicLayout extends React.PureComponent<Props> {
  public render() {
    const {match, location} = this.props
    const layout = (
      <Layout>
        <Layout>
          <Header style={{ padding: 0 }}>

          </Header>
          <Content style={{ margin: '24px 24px 0', height: '100%' }}>
            
          </Content>
        </Layout>
      </Layout>
    )
    return (
      <DocumentTitle title="Ant-design">
        <ContainerQuery query={query} >
          {params => <div>{layout}</div>}
        </ContainerQuery>
      </DocumentTitle>
    )
  }
}

export default BasicLayout
