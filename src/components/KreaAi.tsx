'use client';

import { FaRegImage, FaVideo, FaWandMagicSparkles } from 'react-icons/fa6';
import { IoPencilOutline } from 'react-icons/io5';
import { LiaDraftingCompassSolid } from 'react-icons/lia';

const HomeIcon = () => (
  <svg
    width='18'
    height='18'
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M3 10.5L12 4l9 6.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1V10.5z'
      stroke='currentColor'
      strokeWidth='1.2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const ImageIcon = () => (
  <svg
    width='18'
    height='18'
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <rect
      x='3'
      y='4'
      width='18'
      height='16'
      rx='2'
      stroke='currentColor'
      strokeWidth='1.2'
    />
    <path
      d='M8 11l2 2 3-3 5 5'
      stroke='currentColor'
      strokeWidth='1.2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const BrushIcon = () => (
  <svg
    width='18'
    height='18'
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M3 21l3-1 2-2 9-9 1-3-3 1-9 9-2 2-1 3z'
      stroke='currentColor'
      strokeWidth='1'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const tools = [
  {
    name: 'Image',
    desc: 'Generate images with custom styles and prompts.',
    tag: 'Open',
    icon: FaRegImage,
  },
  {
    name: 'Video',
    desc: 'Generate videos from models like Hailuo and Pika.',
    tag: 'Open',
    icon: FaVideo,
  },
  {
    name: 'Realtime',
    desc: 'Realtime rendering on canvas.',
    tag: 'Open',
    icon: IoPencilOutline,
  },
  {
    name: 'Enhancer',
    desc: 'Upscale and enhance images up to 2K.',
    tag: 'Open',
    icon: FaWandMagicSparkles,
  },
  {
    name: 'Edit',
    desc: 'Edit images with inpainting & generative tools.',
    tag: 'Open',
    icon: LiaDraftingCompassSolid,
  },
  {
    name: 'LipSync',
    desc: 'Lip sync videos to audio.',
    tag: 'New',
    icon: HomeIcon,
  },
  {
    name: 'Motion',
    desc: 'Transfer motion to characters and images.',
    tag: 'Open',
    icon: ImageIcon,
  },
  {
    name: 'Train',
    desc: 'Teach Krea a new style or product look.',
    tag: 'Open',
    icon: BrushIcon,
  },
];

export default function KreaClone() {
  return (
    <main className='max-w-7xl mx-auto px-6 pt-6 pb-32'>
      {/* Generate tools */}
      <section className='mt-10'>
        <div className='flex items-center justify-between'>
          <h4 className='text-lg font-semibold'>Generate</h4>
          <a className='text-sm text-slate-500'>Show all</a>
        </div>

        <div className='mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
          {tools.map((t, i) => (
            <div
              key={i}
              className='flex items-center gap-4 bg-background rounded-xl p-4 shadow-sm'
            >
              <div className='w-12 h-12 bg-surface rounded-lg flex items-center justify-center'>
                <t.icon />
              </div>
              <div className='flex-1'>
                <div className='font-medium'>{t.name}</div>
                <div className='text-xs text-slate-500 mt-1'>{t.desc}</div>
              </div>
              <div>
                <button
                  className={`px-3 py-1 rounded-md text-sm ${
                    t.tag === 'New'
                      ? 'bg-amber-100 text-amber-800'
                      : 'bg-slate-100'
                  }`}
                >
                  {t.tag}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
