'use client';

import { Disclosure, Menu, Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { signIn, signOut } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Fragment, useEffect, useState } from 'react';

import googleSignIn from '../public/google.png';
import logo from '../public/logo.png';
import profile from '../public/profile-img.png';

const navigation = [];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function Navbar({ user }: { user: any }) {
  const pathname = usePathname();
  const [scrolling, setScrolling] = useState(false);
  const [show, setShow] = useState(null);
  const [showSm, setShowSm] = useState(null);
  function handleShow() {
    setShow((e) => !e);
  }
  function handleShowSm() {
    setShowSm((e) => !e);
  }
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 20) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  /* className={`w-full fixed top-0 left-0 z-[99999] shadow-sm ${
        scrolling ? 'bg-[#fff]' : 'bg-[#fff0]'
      }`} */
  return (
    <Disclosure
      as="nav"
      className="bg-[#fff0] w-full fixed top-0 left-0 z-[99999] shadow-sm"
    >
      {({ open }) => (
        <>
          <div
            className={`mx-auto px-4 sm:px-6 lg:px-8 bg-[#1C1D1F] duration-200 ${
              scrolling
                ? 'border-solid border-t-0 rounded-tl-none rounded-tr-none rounded-br-xl rounded-bl-xl border-b border-l border-r'
                : 'max-w-7xl mt-9 border rounded-xl border-solid'
            }  backdrop-blur-lg backdrop-saturate-[180%] bg-[rgba(17,25,40,0.75)]  border-[rgba(255,255,255,0.125)]`}
          >
            <div className="flex h-24 justify-between items-center">
              {/* <div className="flex"> */}
              <div className="">
                <Link href="/">
                  <Image
                    src={logo}
                    alt="PaperPlainer.com"
                    className="w-[160px]"
                  />
                </Link>
              </div>
              <div className="sm:hidden md:block sm:-my-px sm:ml-6  sm:space-x-8">
                {/* <a className="ml-3 text-xs leading-5 font-medium text-sky-600 dark:text-sky-400 bg-sky-950/10 rounded-full py-1 px-3 hidden xl:flex items-center hover:bg-sky-400/20 notice">
                    <strong className="font-semibold">
                      Connect with the contact below to enhance this tool
                      further
                    </strong>
                  </a> */}
                <div className="flex gap-10 ">
                  <a
                    key="/"
                    href="/"
                    className=" border-slate-500 text-white mt-0 text-[18px]"
                  >
                    Home
                  </a>
                  <a
                    key="/"
                    href="/"
                    className=" border-slate-500 text-white mt-0 text-[18px]"
                  >
                    About
                  </a>
                  <a
                    key="/"
                    href="/"
                    className=" border-slate-500 text-white mt-0 text-[18px]"
                  >
                    Service
                  </a>
                </div>
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={classNames(
                      pathname === item.href
                        ? 'border-slate-500 text-gray-900'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300',
                      'inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium'
                    )}
                    aria-current={pathname === item.href ? 'page' : undefined}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              {/* </div> */}
              <div className="sm:hidden md:block sm:ml-6  sm:items-center">
                <Menu as="div" className="relative ml-3">
                  <div className="flex gap-2 items-center">
                    <span className="text-white text-[18px]">Joy Sarkar</span>
                    <Image
                      src={profile}
                      alt="PaperPlainer.com"
                      className="w-[40px] h-[40px] rounded-md cursor-pointer"
                      onClick={handleShow}
                    />
                    {show && (
                      <button className="absolute bottom-[-43px] left-[35px] from-neutral-100 flex rounded-lg px-4 py-2 bg-opacity-100 text-[18px] focus:outline-none focus:ring-none focus:ring-slate-500 focus:ring-offset-2 bg-slate-700 text-white">
                        {/* <span className="sr-only">Open user menu</span> */}
                        Sign Out
                      </button>
                    )}
                    <Menu.Button className="from-neutral-100 flex rounded-lg px-4 py-2 bg-opacity-100 text-[18px] focus:outline-none focus:ring-none focus:ring-slate-500 focus:ring-offset-2 bg-slate-700 text-white">
                      <span className="sr-only">Open user menu</span>
                      Sign In
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 w-48 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      {user ? (
                        <Menu.Item>
                          {({ active }) => (
                            <button
                              className={classNames(
                                active ? 'bg-gray-100' : '',
                                'flex w-full px-4 py-2 text-sm text-gray-700'
                              )}
                              onClick={() => signOut()}
                            >
                              Sign out
                            </button>
                          )}
                        </Menu.Item>
                      ) : (
                        <Menu.Item>
                          {({ active }) => (
                            <button
                              className={classNames(
                                active ? 'bg-gray-100' : '',
                                'flex w-full text-sm text-gray-700 focus:outline-none'
                              )}
                              onClick={() => signIn('google')}
                            >
                              <div className="w-full flex items-center h-[60px] bg-[#1C1D1F] px-4 ">
                                <Image
                                  src={googleSignIn}
                                  alt="Google Sign in"
                                  className="w-[25px] h-[25px]"
                                />
                                <span className="text-white pl-3 text-[16px]">
                                  sign in google
                                </span>
                              </div>
                            </button>
                          )}
                        </Menu.Item>
                      )}
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
              <div className="-mr-2 flex items-center md:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="md:hidden bg-[#1C1D1F]">
            <div className="space-y-1 pt-2 pb-3">
              <div className="flex justify-center	items-center gap-3 py-[11px] border-b border-gray-200 pt-[11px]">
                <div className="relative">
                  <Image
                    src={profile}
                    alt="PaperPlainer.com"
                    className="w-[40px] h-[40px] rounded-md cursor-pointer "
                    onClick={handleShowSm}
                  />
                  {showSm && (
                    <button className="w-[104px] absolute bottom-[-43px] left-[35px] from-neutral-100 flex rounded-lg px-4 py-2 bg-opacity-100 text-[18px] focus:outline-none focus:ring-none focus:ring-slate-500 focus:ring-offset-2 bg-slate-700 text-white">
                      <span className="sr-only">Open user menu</span>
                      Sign Out
                    </button>
                  )}
                </div>

                <span className="text-white text-[18px]">Joy Sarkar</span>
              </div>
              {/* {show && (
                <button className="absolute bottom-[-43px] left-[35px] from-neutral-100 flex rounded-lg px-4 py-2 bg-opacity-100 text-[18px] focus:outline-none focus:ring-none focus:ring-slate-500 focus:ring-offset-2 bg-slate-700 text-white">
                  <span className="sr-only">Open user menu</span>
                  Sign Out
                </button>
              )} */}
              <div className="flex gap-4 flex-col	text-center">
                <a
                  key="/"
                  href="/"
                  className="text-white text-[18px] mt-[7px]"
                >
                  Home
                </a>
                <a
                  key="/"
                  href="/"
                  className=" text-white mt-0 text-[18px] border-t border-gray-200 pt-[11px]"
                >
                  About
                </a>
                <a
                  key="/"
                  href="/"
                  className=" text-white mt-0 text-[18px] border-t border-gray-200 pt-[11px]"
                >
                  Service
                </a>
              </div>
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    pathname === item.href
                      ? 'bg-slate-50 border-slate-500 text-slate-700'
                      : 'border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800',
                    'block pl-3 pr-4 py-2 border-l-4 text-base font-medium'
                  )}
                  aria-current={pathname === item.href ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
            <div className="border-t border-gray-200 ">
              {user ? (
                <>
                  <div className="flex items-center px-4">
                    <div className="flex-shrink-0">
                      <Image
                        className="h-8 w-8 rounded-full"
                        src={user.image}
                        height={32}
                        width={32}
                        alt={`${user.name} avatar`}
                      />
                    </div>
                    <div className="ml-3">
                      <div className="text-base font-medium text-gray-800">
                        {user.name}
                      </div>
                      <div className="text-sm font-medium text-gray-500">
                        {user.email}
                      </div>
                    </div>
                  </div>
                  <div className="mt-3 space-y-1">
                    <button
                      onClick={() => signOut()}
                      className="block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800"
                    >
                      Sign out
                    </button>
                  </div>
                </>
              ) : (
                <div className="space-y-1 py-[11px]">
                  <button
                    onClick={() => signIn('google')}
                    className="from-neutral-100 flex rounded-lg px-4 py-2 bg-opacity-100 text-[18px] focus:outline-none focus:ring-none focus:ring-slate-500 focus:ring-offset-2 bg-slate-700 text-white m-auto"
                  >
                    Sign In
                  </button>
                </div>
              )}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
