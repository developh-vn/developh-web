import sectionStyles from './Section.module.css'
import styles from './ContactUsSection.module.css'
import cn from 'classnames'
import HomeSection from 'models/home/HomeSection'
import Link from 'next/link'
import { DetailedHTMLProps, AnchorHTMLAttributes, HTMLAttributes } from 'react'
import React from 'react'

type Props = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> & {
  innerRef: any
}
const ContactUsSection: React.FC<Props> = ({ innerRef, ...props }) => {
  return (
    <div className={styles['section-wrapper']} {...props} ref={innerRef}>
      <section
        id={HomeSection.ContactUs}
        className={cn(sectionStyles.section, styles.section, 'lg:container mx-auto')}
      >
        <h2 className={cn(sectionStyles.title, styles.title)}>We are here whenever you need!</h2>
        {/* Email */}
        <div className={styles['section-content']}>
          <ul className={styles.subsection}>
            <li className={styles['contact-item']}>
              <p className={styles.subtext}>Our Email</p>
              <p>
                <MailLink
                  className={styles['contact-detail']}
                  emailAddress="develophvietnam@gmail.com"
                />
              </p>
            </li>
            {/* Fan page */}
            <li className={styles['contact-item']}>
              <p className={styles.subtext}>Our Fanpage</p>
              <p>
                <RawLink
                  className={styles['contact-detail']}
                  href="https://www.facebook.com/develophvn"
                />
              </p>
            </li>
            {/* Hotline */}
            <li className={cn(styles['contact-item'])}>
              <p className={styles.subtext}>Hotline</p>
              <ul className="flex">
                <li className="flex-1">
                  <p>
                    <PhoneLink
                      className={styles['contact-detail']}
                      countryCode="84"
                      number="962212556"
                    />
                  </p>
                  <p className={cn(styles.subtext, 'pt-2')}>Ms. Linh D. Nguyen</p>
                </li>

                <li className="flex-1">
                  <p>
                    <PhoneLink
                      className={styles['contact-detail']}
                      countryCode="84"
                      number="915155525"
                    />
                  </p>
                  <p className={cn(styles.subtext, 'pt-2')}>Ms. My T. Nguyen</p>
                </li>
              </ul>
            </li>
          </ul>
          <div className={styles.divider} />
          <div className={cn(styles.subsection)}>
            <div className="lg:mx-24">
              <p className={styles.subtext}>Support Developh Vietnam</p>
              <p className="text-primary font-body mt-1">
                Join us in creating a brighter future for the people, the technology, and the world.
              </p>
              <Link href="#">
                <a className="button mt-3 lg:mt-4 text-primary border-primary hover:bg-primary hover:text-gray-300">
                  Donate to Us
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default React.forwardRef((props: Omit<Props, 'innerRef'>, ref) => {
  return <ContactUsSection {...props} innerRef={ref} />
})

// Utility types
type DefaultLinkProps = DetailedHTMLProps<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
>
type MailLinkProps = Omit<DefaultLinkProps, 'href'> & {
  emailAddress: string
}
const MailLink: React.FC<MailLinkProps> = ({ emailAddress, className, ...props }) => (
  <a className={cn('link', className)} href={`mailto:${emailAddress}`}>
    {emailAddress}
  </a>
)

type RawLinkProps = Omit<DefaultLinkProps, 'href'> & Required<Pick<DefaultLinkProps, 'href'>>
const RawLink: React.FC<RawLinkProps> = ({ className, href, ...props }) => (
  <a className={cn('link', className)} href={href} {...props}>
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
type PhoneLinkProps = Omit<DefaultLinkProps, 'href'> & {
  countryCode: string
  number: string
}
const PhoneLink: React.FC<PhoneLinkProps> = ({ className, countryCode, number, ...props }) => {
  let formattedNumber = sliceFromEnd(number, 3)
  return (
    <a
      className={cn('link', className)}
      href={`tel:${countryCode}-${sliceFromEnd(number, 3, '-')}`}
      {...props}
    >
      (+{countryCode}) {formattedNumber}
    </a>
  )
}
