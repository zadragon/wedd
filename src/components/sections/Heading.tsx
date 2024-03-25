import { format, parseISO, getDay } from 'date-fns'

import classNames from 'classnames'
import styles from './Heading.module.scss'

import Section from '@shared/Section'

const cx = classNames.bind(styles)

const days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
]

const Heading = ({ date }: { date: string }) => {
  const weddingDate = parseISO(date)

  const title = format(weddingDate, 'yy.MM.dd')
  const subTitle = days[getDay(weddingDate)]

  return (
    <Section className={cx()}>
      <div className={cx('txt-date')}>{title}</div>
      <div className={cx('txt-day')}>{subTitle}</div>
    </Section>
  )
}

export default Heading
