import Link from 'next/link'
import { HomeSection } from '..'

export default function ContactUsSection() {
  return (
    <section id={HomeSection.ContactUs}>
      <h2>We are here whenever you need!</h2>
      {/* Email */}
      <div>
        <p>Our Email</p>
        <p>
          <MailLink emailAddress="develophvietnam@gmail.com" />
        </p>
      </div>
      {/* Fan page */}
      <div>
        <p>Our Fanpage</p>
        <p>
          <RawLink href="https://www.facebook.com/develophvn" />
        </p>
      </div>
      {/* Hotline */}
      <div>
        <ul>
          <li>
            <p>
              <PhoneLink countryCode="84" number="962212556" />
            </p>
            <p>Ms. Linh D. Nguyen</p>
          </li>

          <li>
            <p>
              <PhoneLink countryCode="84" number="915155525" />
            </p>
            <p>Ms. My T. Nguyen</p>
          </li>
        </ul>
      </div>
    </section>
  )
}

// Utility types
const MailLink: React.FC<{ emailAddress: string }> = ({ emailAddress }) => (
  <a href={`mailto:${emailAddress}`}>{emailAddress}</a>
)

const RawLink: React.FC<{ href: string }> = ({ href }) => <a href={href}>{href}</a>

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
    <a href={`tel:${countryCode}-${sliceFromEnd(number, 3, '-')}`}>
      (+{countryCode}) {formattedNumber}
    </a>
  )
}
