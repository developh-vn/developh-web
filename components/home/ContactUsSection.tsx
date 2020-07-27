import sectionStyles from './Section.module.css'
import styles from './ContactUsSection.module.css'
import cn from 'classnames'
import HomeSection from 'models/home/HomeSection'

export default function ContactUsSection() {
  return (
    <section id={HomeSection.ContactUs} className={cn(sectionStyles.section, styles.section)}>
      <h2 className={cn(sectionStyles.title, 'text-left text-3xl')}>
        We are here whenever you need!
      </h2>
      {/* Email */}
      <div className={styles.subsection}>
        <p className={styles.subtext}>Our Email</p>
        <p>
          <MailLink emailAddress="develophvietnam@gmail.com" />
        </p>
      </div>
      {/* Fan page */}
      <div className={styles.subsection}>
        <p className={styles.subtext}>Our Fanpage</p>
        <p>
          <RawLink href="https://www.facebook.com/develophvn" />
        </p>
      </div>
      {/* Hotline */}
      <div className={styles.subsection}>
        <p className={styles.subtext}>Hotline</p>
        <ul className="flex">
          <li className="flex-1">
            <p>
              <PhoneLink countryCode="84" number="962212556" />
            </p>
            <p className={cn(styles.subtext, 'pt-2')}>Ms. Linh D. Nguyen</p>
          </li>

          <li className="flex-1">
            <p>
              <PhoneLink countryCode="84" number="915155525" />
            </p>
            <p className={cn(styles.subtext, 'pt-2')}>Ms. My T. Nguyen</p>
          </li>
        </ul>
      </div>
    </section>
  )
}

// Utility types
const MailLink: React.FC<{ emailAddress: string }> = ({ emailAddress }) => (
  <a className="link" href={`mailto:${emailAddress}`}>
    {emailAddress}
  </a>
)

const RawLink: React.FC<{ href: string }> = ({ href }) => (
  <a className="link" href={href}>
    {href}
  </a>
)

const sliceFromEnd = (value: string, length: number, delim: string = ' '): string => {
  if (value.length <= length) {
    return value
  }
  const slicePosition = value.length - length
  return (
    sliceFromEnd(value.substr(0, slicePosition), length, delim) +
    delim +
    value.substr(slicePosition, length)
  )
}
const PhoneLink: React.FC<{ countryCode: string; number: string }> = ({ countryCode, number }) => {
  let formattedNumber = sliceFromEnd(number, 3)
  return (
    <a className="link" href={`tel:${countryCode}-${sliceFromEnd(number, 3, '-')}`}>
      (+{countryCode}) {formattedNumber}
    </a>
  )
}
