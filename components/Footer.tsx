import { useRef } from 'react'
import Link from 'next/link'
import { ArrowIcon } from 'components/icons/ArrowIcon'
import { LetterIcon } from 'components/icons/LetterIcon'
import { FacebookIcon } from 'components/icons/FacebookIcon'
import { PhoneIcon } from 'components/icons/PhoneIcon'

function Footer() {
  const emailRef = useRef<HTMLInputElement>(null)

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    console.log('email:', emailRef.current?.value)
  }

  return (
    <footer className="bg-[#3a3a3a] pt-12 pb-10 text-white">
      <div className="my-container">
        <div className="flex flex-col md:flex-row-reverse">
          <div className="md:ml-10 lg:ml-20">
            <h3 className="font-Belleza text-xl">
              Get notified about all our upcoming events and special offers!
            </h3>
            <form onSubmit={onSubmit} className="mt-6 flex border-b pb-4">
              <input
                ref={emailRef}
                type="email"
                className="h-full w-full bg-transparent focus:outline-none"
                placeholder="your.email@example.com"
              />
              <button type="submit" className="w-10">
                <ArrowIcon />
              </button>
            </form>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
              className="mt-4 flex items-center space-x-2"
            >
              <FacebookIcon />
              <div className="font-Belleza">Follow us on Facebook!</div>
            </a>
          </div>
          <div className="mt-8 w-full md:mt-0">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12094.000085303365!2d-73.98363565565495!3d40.72902176701176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2599f73100bf7%3A0x1e491fafbfbceda2!2sUnion%20Square%20Greenmarket!5e0!3m2!1spt-BR!2sbr!4v1650144605216!5m2!1spt-BR!2sbr"
              width="100%"
              height="200px"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <div className="mt-8 flex flex-col items-start gap-4 lg:flex-row lg:gap-36">
              <div className="grid grid-cols-2 gap-8 font-Belleza md:grid-cols-1 md:gap-4">
                <div className="flex items-center space-x-4">
                  <PhoneIcon className="text-white text-opacity-30" />
                  <span>(717) 620-8171</span>
                </div>
                <div className="flex items-center space-x-4">
                  <LetterIcon className="text-white text-opacity-30" />
                  <span>info@email.com</span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-8 font-Belleza">
                <div className="space-y-4">
                  <div className="flex space-x-3">
                    <div className="w-9 text-white text-opacity-30">SUN</div>
                    <div>Closed</div>
                  </div>
                  <div className="flex space-x-3">
                    <div className="w-9 text-white text-opacity-30">TUE</div>
                    <div>10 AM - 6 PM</div>
                  </div>
                  <div className="flex space-x-3">
                    <div className="w-9 text-white text-opacity-30">THU</div>
                    <div>10 AM - 7 PM</div>
                  </div>
                  <div className="flex space-x-3">
                    <div className="w-9 text-white text-opacity-30">SAT</div>
                    <div>10 AM - 7 PM</div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex space-x-3">
                    <div className="w-9 text-white text-opacity-30">MON</div>
                    <div>Closed</div>
                  </div>
                  <div className="flex space-x-3">
                    <div className="w-9 text-white text-opacity-30">WED</div>
                    <div>10 AM - 6 PM</div>
                  </div>
                  <div className="flex space-x-3">
                    <div className="w-9 text-white text-opacity-30">FRI</div>
                    <div className="ml-2">10 AM - 7 PM</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className="mt-8 border-white border-opacity-30" />
        <div className="mt-6 flex flex-col items-center justify-between md:flex-row">
          <nav>
            <ul className="flex justify-center space-x-10 font-Belleza">
              <Link href="/" passHref>
                <li>Home</li>
              </Link>
              <Link href="/about" passHref>
                <li>About</li>
              </Link>
              <Link href="/recipes" passHref>
                <li>Recipes</li>
              </Link>
              <Link href="/shop" passHref>
                <li>Shop</li>
              </Link>
            </ul>
          </nav>
          <span className="mt-5 text-center text-xs text-white text-opacity-50 md:mt-0">
            © Copyright 2022 - Simply Flavorful
          </span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
