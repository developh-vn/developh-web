import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="p-8 flex flex-col lg:flex-row lg:container lg:mx-auto">
      <figure className="h-5 lg:h-7 self-start lg:self-center lg:flex-1 lg:order-2 lg:flex">
        <Link href="/">
          <a className="flex-1 lg:flex lg:justify-center">
            <img className="max-h-full" src="/developh_logo_blue.png" />
          </a>
        </Link>
      </figure>
      <p className="text-body font-body text-xs self-start lg:self-center lg:flex-1 lg:order-1">
        <span>&copy;</span> 2020 Developh. All Rights Reserved
      </p>
      <div className="self-end lg:self-center absolute lg:static lg:flex lg:justify-end right-8 top-2 lg:right-auto lg:top-auto lg:flex-1 lg:order-3">
        <p className="hidden lg:block text-sm text-body font-body lg:mr-4">On Social Networks</p>
        <ul className="flex">
          <li className="flex-1">
            <a href="https://www.facebook.com/develophvn">
              <img src="/social_facebook.svg" alt="Facebook Page" />
            </a>
          </li>
          <li className="flex-1 ml-2 lg:ml-4">
            <a href="https://www.instagram.com/develophvietnam">
              <img src="/social_instagram.svg" alt="Instagram Page" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}
