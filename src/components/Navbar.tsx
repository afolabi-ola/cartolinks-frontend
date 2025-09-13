'use client';
import { useTheme } from '@/hooks/ThemeProvider';
import Logo from './Logo';
import { IconType } from 'react-icons';
import {
  MdDarkMode,
  MdHeadsetMic,
  MdHomeFilled,
  MdSunny,
} from 'react-icons/md';
import {
  FaBell,
  FaFolder,
  FaRegImage,
  FaVideo,
  FaWandMagicSparkles,
} from 'react-icons/fa6';
import { IoPencilOutline } from 'react-icons/io5';
import { LiaDraftingCompassSolid } from 'react-icons/lia';
import Profile from './Profile';
import { RiGalleryFill } from 'react-icons/ri';
import { useState } from 'react';

interface NavIcons {
  label: string;
  icon: IconType;
}

const icons: NavIcons[] = [
  {
    label: 'Home',
    icon: MdHomeFilled,
  },
  {
    label: 'Image',
    icon: FaRegImage,
  },
  {
    label: 'Video',
    icon: FaVideo,
  },
  {
    label: 'Enhancer',
    icon: FaWandMagicSparkles,
  },
  {
    label: 'Realtime',
    icon: IoPencilOutline,
  },
  {
    label: 'Edit',
    icon: LiaDraftingCompassSolid,
  },
  {
    label: 'Assets',
    icon: FaFolder,
  },
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [activeTab, setActiveTab] = useState<string>('Home');

  return (
    <nav className='w-full px-6 py-4 flex justify-between items-center bg-transparent text-text'>
      <Logo />

      <div className='hidden md:flex gap-6 shadow-inner px-4 py-2 rounded-2xl bg-surface'>
        {icons.map(({ icon, label }) => {
          const Icon = icon;
          return (
            <button
              onClick={() => setActiveTab(label)}
              aria-label={label}
              key={label}
              className={`text-lg cursor-pointer p-2 px-4 ${
                activeTab === label && 'bg-background   rounded-lg shadow-xl'
              }`}
            >
              <Icon />
            </button>
          );
        })}
      </div>

      <div className='flex gap-4 items-center'>
        <button className='flex gap-2 px-2 py-1 items-center rounded-md bg-surface opacity-80 shadow cursor-pointer transition'>
          <RiGalleryFill />
          <span className='text-xs'>Gallery</span>
        </button>
        <button className='flex gap-2 items-center px-2 py-1 rounded-md bg-surface opacity-80 shadow cursor-pointer transition'>
          <MdHeadsetMic />
          <span className='text-xs'>Support</span>
        </button>

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
      </div>
    </nav>
  );
}
