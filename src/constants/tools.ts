import { getRandomColor } from '@/utils/helpers';
import { IconType } from 'react-icons';
import { BsPersonArmsUp } from 'react-icons/bs';
import { FaRegImage, FaVideo, FaWandMagicSparkles } from 'react-icons/fa6';
import { IoPencilOutline } from 'react-icons/io5';
import { LiaDraftingCompassSolid } from 'react-icons/lia';
import { PiBrainDuotone } from 'react-icons/pi';
import { TbMicrophone2 } from 'react-icons/tb';

interface Tool {
  name: string;
  desc: string;
  isNew: boolean;
  icon: IconType;
  color: string;
}

export const tools: Tool[] = [
  {
    name: 'Image',
    desc: 'Generate images with custom styles and prompts.',
    isNew: true,
    icon: FaRegImage,
    color: getRandomColor(),
  },
  {
    name: 'Video',
    desc: 'Generate videos from models like Hailuo and Pika.',
    isNew: false,
    icon: FaVideo,
    color: getRandomColor(),
  },
  {
    name: 'Realtime',
    desc: 'Realtime rendering on canvas.',
    isNew: false,
    icon: IoPencilOutline,
    color: getRandomColor(),
  },
  {
    name: 'Enhancer',
    desc: 'Upscale and enhance images up to 2K.',
    isNew: true,
    icon: FaWandMagicSparkles,
    color: getRandomColor(),
  },
  {
    name: 'Edit',
    desc: 'Edit images with inpainting & generative tools.',
    isNew: true,
    icon: LiaDraftingCompassSolid,
    color: getRandomColor(),
  },
  {
    name: 'Video LipSync',
    desc: 'Lip sync videos to audio.',
    isNew: true,
    icon: TbMicrophone2,
    color: getRandomColor(),
  },
  {
    name: 'Motion Transfer',
    desc: 'Transfer motion to characters and images.',
    isNew: true,
    icon: BsPersonArmsUp,
    color: getRandomColor(),
  },
  {
    name: 'Train',
    desc: 'Teach Krea a new style or product look.',
    isNew: false,
    icon: PiBrainDuotone,
    color: getRandomColor(),
  },
];
