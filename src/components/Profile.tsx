import Image from 'next/image';
import React from 'react';

export default function Profile() {
  return (
    <div className='rounded-full overflow-hidden bg-surface'>
      <Image
        src={'/images/defaultprofile.svg'}
        alt='profile image'
        width={30}
        height={30}
      />
    </div>
  );
}
