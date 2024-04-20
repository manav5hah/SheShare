import { useState } from 'react'
import { Link } from 'react-router-dom'
import AirbnbLogo from './airbnb-logo.svg';
import { Dialog, Disclosure } from '@headlessui/react'
import {
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline'

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link to="/" className="-m-1.5 p-1.5 flex text-xl text-[#FFB6C1] font-bold">
            <span className="sr-only">SheShare</span>
            <img className="h-8 w-auto mx-2" src={AirbnbLogo} alt="" /> SheShare
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6 text-[#Add8e6]" aria-hidden="true" />
          </button>
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
        <Link to="/login" className="text-md font-semibold leading-6 text-[#FFB6C1] mx-4 hover:border-b-2 border-[#FFB6C1]">
            Login <span aria-hidden="true">&rarr;</span>
          </Link>
          <Link to="/signup" className="text-md font-semibold leading-6 text-[#Add8e6] mx-4 hover:border-b-2 border-[#Add8e6]">
            SignUp <span aria-hidden="true">&rarr;</span>
          </Link>
          <Link to="/register" className="text-md font-semibold leading-6 text-[#FFB6C1] mx-4 hover:border-b-2 border-[#FFB6C1]">
            SheShare your place 
          </Link>
        </div>
      </nav>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link to="/" className="-m-1.5 p-1.5 text-xl text-[#FFB6C1] font-bold flex">
              <span className="sr-only">SheShare</span>
              <img
                className="h-8 w-auto mx-2"
                src={AirbnbLogo}
                alt=""
              />
              SheShare
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6 text-[#Add8e6]" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      
                    </>
                  )}
                </Disclosure>
              </div>
              <div className="py-6">
                <Link
                  to="/register"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-[#FFB6C1] hover:bg-gray-50"
                >
                  SheShare your place
                </Link>
                <Link
                  to="/login"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-[#Add8e6] hover:bg-gray-50"
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-[#FFB6C1] hover:bg-gray-50"
                >
                  SignUp
                </Link>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}
