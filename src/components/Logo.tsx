import { useTheme } from '@/hooks/ThemeProvider';
import Image from 'next/image';
import Link from 'next/link';

export default function Logo() {
  const { theme } = useTheme();
  return (
    <Link href='/'>
      <Image
        src={
          theme === 'light'
            ? '/images/krealogolight.png'
            : '/images/krealogodark.jpeg'
        }
        width={50}
        height={50}
        alt='Logo'
      />
    </Link>
  );
}
