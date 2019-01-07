import * as React from 'react'
import * as styles from './Workplace.scss'
import { Link } from 'react-router-dom'
import {
  Row,
  Col,
  Avatar,
  Card
} from 'antd'
import PageHeaderLayout from '../../layouts/PageHeaderLayout'

class Workplace extends React.PureComponent {
  public render() {
    const pageHeaderContent = (
      <div className={styles.pageHeaderContent}>
        <div className={styles.avatar}>
          <Avatar 
            size="large"
            src="https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png"
          />
        </div>
        <div className={styles.content}>
          <div className={styles.contentTitle}>早安，祝你开心每一天！</div>
          <div className={styles.contentCaption}>前端开发工程师 | 某某某事业群 - 某某平台部 - 某某技术部 - FED</div>
        </div>
      </div>
    )
    const extraContent = (
      <div className={styles.extraContent}>
        <div className={styles.statItem}>
          <p>项目数</p>
          <p>60</p>
        </div>
        <div className={styles.statItem}>
          <p>团队内排行</p>
          <p>8
            <span>/ 24</span>
          </p>
        </div>
        <div className={styles.statItem}>
          <p>项目访问</p>
          <p>2,223</p>
        </div>
      </div>
    )
    return (
      <PageHeaderLayout content={pageHeaderContent} extraContent={extraContent} >
        <Row gutter={24}>
          <Col xl={16} lg={24} md={24} sm={24} xs={24} >
            <Card title="进行中的项目" 
              bordered={false}
              style={{ marginBottom: 24 }}
              extra={<Link to="/">全部项目</Link>}
            >
              <span>1234</span>
            </Card>
          </Col>
        </Row>
      </PageHeaderLayout>
    )
  }
}

export default Workplace
