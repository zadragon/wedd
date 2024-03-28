import classNames from 'classnames/bind'
import styles from './Video.module.scss'

import Section from '@shared/Section'

const cx = classNames.bind(styles)

const Video = () => {
  return (
    <Section className={cx('container')}>
      <video
        autoPlay={true}
        muted={true}
        loop={true}
        poster="assets/poster.jpg"
      >
        {/* 웹엠을 먼서 사용 */}
        <source src="/assets/main.webm" type="video/webm"></source>
        <source src="/assets/main.mp4" type="video/mp4"></source>
      </video>
    </Section>
  )
}

export default Video
