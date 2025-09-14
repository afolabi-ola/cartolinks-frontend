'use client';
import { useTheme } from '@/hooks/ThemeProvider';
import Logo from './Logo';
import { MdDarkMode, MdHeadsetMic, MdSunny } from 'react-icons/md';
import { FaBell } from 'react-icons/fa6';
import Profile from './Profile';
import { RiGalleryFill } from 'react-icons/ri';
import { useState } from 'react';
import { navIcons } from '@/constants/navIcons';
import { RxHamburgerMenu, RxCross2 } from 'react-icons/rx';

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [activeTab, setActiveTab] = useState<string>('Home');
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className='w-full px-6 py-4 flex justify-between items-center bg-transparent text-text'>
      {/* Logo */}
      <div className='lg:w-full'>
        <Logo />
      </div>

      {/* Center Nav (desktop) */}
      <div className='hidden md:flex shadow-inner px-4 py-2 rounded-2xl bg-surface lg:w-full justify-between'>
        {navIcons.map(({ icon, label }) => {
          const Icon = icon;
          return (
            <button
              onClick={() => setActiveTab(label)}
              aria-label={label}
              key={label}
              className={`text-lg cursor-pointer p-2 px-4 rounded-lg ${
                activeTab === label
                  ? 'bg-background shadow-xl'
                  : 'hover:bg-gray-400'
              }`}
            >
              <Icon />
            </button>
          );
        })}
      </div>

      {/* Right side */}
      <div className='flex gap-4 items-center lg:w-full justify-end'>
        <div className='hidden md:flex'>
          <button className='flex gap-2 px-2 py-1 items-center rounded-md bg-surface opacity-80 shadow cursor-pointer transition'>
            <RiGalleryFill />
            <span className='text-xs'>Gallery</span>
          </button>
          <button className='flex gap-2 items-center px-2 py-1 rounded-md bg-surface opacity-80 shadow cursor-pointer transition'>
            <MdHeadsetMic />
            <span className='text-xs'>Support</span>
          </button>
        </div>

        <button
          aria-label='notification'
          className='p-2 rounded-md bg-surface opacity-80 shadow cursor-pointer transition'
        >
          <FaBell />
        </button>
        <button
          onClick={toggleTheme}
          className='p-2 rounded-md bg-surface opacity-80 shadow cursor-pointer transition'
        >
          {theme === 'light' ? <MdSunny /> : <MdDarkMode />}
        </button>
        <Profile />

        {/* Hamburger (mobile only) */}
        <button
          onClick={() => setIsOpen(true)}
          aria-label='Open Menu'
          className='md:hidden p-1 rounded-md bg-surface shadow cursor-pointer transition'
        >
          <RxHamburgerMenu />
        </button>
      </div>

      {/* Mobile Slide-over Menu */}
      {isOpen && (
        <div className='fixed inset-0 z-50 flex'>
          {/* Overlay */}
          <div
            className='absolute inset-0 bg-black/40'
            onClick={() => setIsOpen(false)}
          />

          {/* Drawer */}
          <div className='relative bg-surface w-64 h-full shadow-lg p-6 flex flex-col gap-6 overflow-y-auto'>
            {/* Close button */}
            <button
              aria-label='Close Menu'
              onClick={() => setIsOpen(false)}
              className='absolute top-4 right-4 p-2 rounded-md bg-background shadow cursor-pointer'
            >
              <RxCross2 size={20} />
            </button>

            {/* Logo */}
            <Logo />

            {/* Nav list */}
            <div className='flex flex-col gap-3 mt-8'>
              {navIcons.map(({ icon, label }) => {
                const Icon = icon;
                return (
                  <button
                    onClick={() => {
                      setActiveTab(label);
                      setIsOpen(false);
                    }}
                    key={label}
                    className={`flex items-center gap-3 px-3 py-2 rounded-lg text-left ${
                      activeTab === label
                        ? 'bg-background shadow'
                        : 'hover:bg-gray-400'
                    }`}
                  >
                    <Icon className='text-lg' />
                    <span>{label}</span>
                  </button>
                );
              })}
            </div>

            {/* Extra actions */}
            <div className='mt-auto flex flex-col gap-3'>
              <button className='flex gap-2 items-center px-3 py-2 rounded-md shadow cursor-pointer'>
                <RiGalleryFill />
                <span>Gallery</span>
              </button>
              <button className='flex gap-2 items-center px-3 py-2 rounded-md shadow cursor-pointer'>
                <MdHeadsetMic />
                <span>Support</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
