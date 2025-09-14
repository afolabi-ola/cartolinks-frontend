import { IconType } from 'react-icons';
import {
  FaFolder,
  FaRegImage,
  FaVideo,
  FaWandMagicSparkles,
} from 'react-icons/fa6';
import { IoPencilOutline } from 'react-icons/io5';
import { LiaDraftingCompassSolid } from 'react-icons/lia';
import { MdHomeFilled } from 'react-icons/md';

interface NavIcons {
  label: string;
  icon: IconType;
}

export const navIcons: NavIcons[] = [
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
