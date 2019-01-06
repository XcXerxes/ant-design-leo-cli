import * as React from 'react'
import classnames from 'classnames'
import { Icon } from 'antd'
import * as styles from './index.scss'

interface INumberInfoProps {
  theme?: string;
  title?: string;
  subTitle?: string | React.ReactNode;
  total?:any;
  status?: string;
  subTotal?: any;
}

export default ({theme, title, subTitle, total, status, subTotal}:INumberInfoProps) => (
  <div className={
    classnames(styles.numberInfo, {
      [styles[`numberInfo${theme}`]]: theme
    })
  }>
    {title && <div className={styles.numberInfoTitle}>{title}</div>}
    {subTitle && <div className={styles.numberInfoSubTitle}>{subTitle}</div>}
    <div className={styles.numberInfoValue}>
      <span>
        {total}
      </span>
      {(status || subTotal) && (
        <span className={styles.subTotal}>
          {subTotal}
          {status && <Icon type={`caret-${status}`} />}
        </span>
      )}
    </div>
  </div>
)

