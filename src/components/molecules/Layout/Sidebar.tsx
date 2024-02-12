/* eslint-disable react/no-array-index-key */
import React from 'react';
import {
  BellAlertIcon, ChartPieIcon, ChatBubbleLeftIcon, ClipboardDocumentIcon, CogIcon, CursorArrowRippleIcon, EnvelopeIcon, FaceFrownIcon, HomeModernIcon, PowerIcon, UsersIcon,
} from '@heroicons/react/16/solid';
import { useRouter } from 'next/router';
import Link from 'next/link';

interface IMenu {
  menu: any,
  title: any,
}
function Menus({ menu, title }: IMenu) {
  const { pathname } = useRouter();
  return (
    <div className="py-5">
      <h6 className="mb-4 text-[10px] sm:text-sm text-center sm:text-left sm:px-5 ">
        <span className="sm:hidden">{title.xs}</span>
        <span className="hidden sm:block">{title.sm}</span>
      </h6>
      <ul>
        {menu.map((val: any, index: number) => {
          const menuActive = val.link === pathname
            ? 'bg-blue-300 bg-opacity-10 px-3 border border-blue-100 py-2 rounded-md text-blue-400 flex'
            : 'px-3 py-2 flex';

          const textActive = val.link === pathname ? 'text-blue-500' : 'text-gray-700';
          return (
            <Link href={val.link}>
              <li key={index} className={`${menuActive} cursor-pointer mx-5`}>
                {val.icon}
                <div className={`ml-2 ${textActive} hidden sm:block`}>
                  {val.name}
                </div>
              </li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
}

const Sidebar = () => {
  const { pathname } = useRouter();
  const menu1 = [
    {
      name: 'Dashboard',
      icon: <HomeModernIcon width={18} className={pathname === '/' ? 'text-blue-500' : 'text-gray-600'} />,
      link: '/',
    },
    {
      name: 'Analytics',
      link: '/analytics',
      icon: <ChartPieIcon width={18} className={pathname === '/analytics' ? 'text-blue-500' : 'text-gray-600'} />,
    },
    {
      name: 'Notification',
      link: '/notification',
      icon: <BellAlertIcon width={18} className={pathname === '/notification' ? 'text-blue-500' : 'text-gray-600'} />,
    },
  ];

  const menu2 = [
    {
      name: 'Chat',
      icon: <ChatBubbleLeftIcon width={18} className={pathname === '/chat' ? 'text-blue-500' : 'text-gray-600'} />,
      link: '/chat',
    },
    {
      name: 'Notes',
      link: '/notes',
      icon: <ClipboardDocumentIcon width={18} className={pathname === '/notes' ? 'text-blue-500' : 'text-gray-600'} />,
    },
    {
      name: 'Customers',
      link: '/customers',
      icon: <UsersIcon width={18} className={pathname === '/customers' ? 'text-blue-500' : 'text-gray-600'} />,
    },
    {
      name: 'Mail',
      link: '/mail',
      icon: <EnvelopeIcon width={18} className={pathname === '/mail' ? 'text-blue-500' : 'text-gray-600'} />,
    },
  ];

  const menu3 = [
    {
      name: 'Login',
      icon: <PowerIcon width={18} className={pathname === '/login' ? 'text-blue-500' : 'text-gray-600'} />,
      link: '/login',
    },
    {
      name: 'Register',
      link: '/register',
      icon: <CursorArrowRippleIcon width={18} className={pathname === '/register' ? 'text-blue-500' : 'text-gray-600'} />,
    },
    {
      name: 'Error',
      link: '/error',
      icon: <FaceFrownIcon width={18} className={pathname === '/error' ? 'text-blue-500' : 'text-gray-600'} />,
    },
  ];
  return (
    <div className="App">
      <section className="w-20 sm:w-64 bg-slate-100 h-screen">
        <div className="border-b p-5 text-center sm:text-left">
          <Link href="/">
            <span className="hidden sm:block">Dashboard UI</span>
          </Link>
          <span className="sm:hidden">DUI</span>
        </div>
        <div className=" border-b text-sm">
          <Menus menu={menu1} title={{ sm: 'BUSINESS', xs: 'BUSINESS' }} />
        </div>
        <div className="border-b text-sm">
          <Menus menu={menu2} title={{ sm: 'APPLICATION', xs: 'APP' }} />
        </div>
        <div className="border-b text-sm">
          <Menus menu={menu3} title={{ sm: 'AUTHENTICATION', xs: 'AUTH' }} />
        </div>
        <div className="flex  mx-5 mt-8 bg-blue-300 bg-opacity-10 border border-blue-100 rounded-md p-1 sm:p-2">
          {/* <img
            src="https://images.pexels.com/photos/3778966/pexels-photo-3778966.jpeg?auto=compress&cs=tinysrgb&w=640&h=458&dpr=1"
            alt="img-profile"
            className="object-cover w-8 h-8 sm:w-10 sm:h-10 rounded-full"
          /> */}
          <div className="flex-1 ml-3 items-center text-gray-700 hidden sm:block">
            <div className="text-md">Hari Irawan</div>
            <div className="text-xs">Administrator</div>
          </div>
          <CogIcon width={18} />
        </div>
      </section>
    </div>
  );
};

export default Sidebar;
