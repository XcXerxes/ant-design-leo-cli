import * as React from 'react'
import classnames from 'classnames'
import * as styles from './index.scss'

type State = {
  breadcrumb: null | any;
}
type Props = {
  title?: string;
  logo?: string | React.ReactNode;
  action?: string | React.ReactNode;
  content?: string | React.ReactNode;
  extraContent?: string | React.ReactNode;
  className?: string;
}

export default class PageHeader extends React.PureComponent<Props,State> {
  public state = {
    breadcrumb: null
  }

  public render() {
    const {
      title,
      logo,
      action,
      content,
      extraContent,
      className
    } = this.props
    // const { breadcrumb } = this.state
    const clsString = classnames(styles.pageHeader, className)
    return (
      <div className={clsString}>
        <div className={styles.detail}>
          {logo && <div className={styles.logo}>{logo}</div>}
          <div className={styles.main}>
            <div className={styles.row}>
              {title && <h1 className={styles.title}>{title}</h1>}
              {action && <div className={styles.action}>{action}</div>}
            </div>
            <div className={styles.row}>
              {content && <div className={styles.content}>{content}</div>}
              {extraContent && <div className={styles.extraContent}>{extraContent}</div>}
            </div>
          </div>
        </div>
      </div>
    )
  }
}
