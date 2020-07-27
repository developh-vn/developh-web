export default function Footer() {
  return (
    <footer className="p-8 flex justify-between">
      <div className="flex-1">
        <figure className="h-5">
          <img className="max-h-full" src="/developh_logo_blue.png" />
        </figure>
        <p className="text-body font-body text-xs">
          <span>&copy;</span> 2020 Developh. All Rights Reserved
        </p>
      </div>
      <ul className="flex">
        <li className="flex-1">
          <a href="https://www.facebook.com/develophvn">
            <img src="/social_facebook.svg" alt="Facebook Page" />
          </a>
        </li>
        <li className="flex-1 ml-2">
          <a href="https://www.instagram.com/develophvietnam">
            <img src="/social_instagram.svg" alt="Instagram Page" />
          </a>
        </li>
      </ul>
    </footer>
  )
}
