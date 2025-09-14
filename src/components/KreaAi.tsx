import { getRandomColor } from '@/utils/helpers';
import { BsPersonArmsUp } from 'react-icons/bs';
import { FaRegImage, FaVideo, FaWandMagicSparkles } from 'react-icons/fa6';
import { IoPencilOutline } from 'react-icons/io5';
import { LiaDraftingCompassSolid } from 'react-icons/lia';
import { PiBrainDuotone } from 'react-icons/pi';
import { RxCaretDown } from 'react-icons/rx';
import { TbMicrophone2 } from 'react-icons/tb';

const tools = [
  {
    name: 'Image',
    desc: 'Generate images with custom styles and prompts.',
    tag: 'Open',
    isNew: true,
    icon: FaRegImage,
    color: getRandomColor(),
  },
  {
    name: 'Video',
    desc: 'Generate videos from models like Hailuo and Pika.',
    tag: 'Open',
    isNew: false,
    icon: FaVideo,
    color: getRandomColor(),
  },
  {
    name: 'Realtime',
    desc: 'Realtime rendering on canvas.',
    tag: 'Open',
    isNew: false,
    icon: IoPencilOutline,
    color: getRandomColor(),
  },
  {
    name: 'Enhancer',
    desc: 'Upscale and enhance images up to 2K.',
    tag: 'Open',
    isNew: true,
    icon: FaWandMagicSparkles,
    color: getRandomColor(),
  },
  {
    name: 'Edit',
    desc: 'Edit images with inpainting & generative tools.',
    tag: 'Open',
    isNew: true,
    icon: LiaDraftingCompassSolid,
    color: getRandomColor(),
  },
  {
    name: 'Video LipSync',
    desc: 'Lip sync videos to audio.',
    tag: 'New',
    isNew: true,
    icon: TbMicrophone2,
    color: getRandomColor(),
  },
  {
    name: 'Motion Transfer',
    desc: 'Transfer motion to characters and images.',
    tag: 'Open',
    isNew: true,
    icon: BsPersonArmsUp,
    color: getRandomColor(),
  },
  {
    name: 'Train',
    desc: 'Teach Krea a new style or product look.',
    tag: 'Open',
    isNew: false,
    icon: PiBrainDuotone,
    color: getRandomColor(),
  },
];

export default function KreaClone() {
  return (
    <section>
      <div className='flex items-center justify-between'>
        <h4 className='text-lg font-semibold'>Generate</h4>
        <button className='text-sm text-blue-400 cursor-pointer flex gap-1 items-center'>
          <RxCaretDown /> <span>Show all</span>
        </button>
      </div>

      <div className='my-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
        {tools.map((t, i) => (
          <div
            key={i}
            className='flex items-start gap-4 bg-background rounded-xl py-4 px-2 shadow-sm'
          >
            <div
              className={`w-12 h-12 rounded-lg flex items-center justify-center`}
              style={{ backgroundColor: t.color }}
            >
              <t.icon />
            </div>
            <div className='flex-1'>
              <div className='font-medium flex gap-1 items-center'>
                <h1>{t.name}</h1>
                {t.isNew && (
                  <span className='bg-blue-400 text-white text-[8px] font-bold px-1 rounded-lg'>
                    New
                  </span>
                )}
              </div>
              <div className='text-xs text-slate-500 mt-1'>{t.desc}</div>
            </div>
            <div>
              <button
                className={`px-3 py-1 rounded-md text-xs cursor-pointer bg-surface`}
              >
                {t.tag}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
