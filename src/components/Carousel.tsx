'use client';
import React, { useEffect, useRef, useState } from 'react';

const Chevron = ({ dir = 'left' }) => (
  <svg
    width='14'
    height='14'
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    className='inline-block'
  >
    {dir === 'left' ? (
      <path
        d='M15 18L9 12l6-6'
        stroke='currentColor'
        strokeWidth='1.6'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    ) : (
      <path
        d='M9 6l6 6-6 6'
        stroke='currentColor'
        strokeWidth='1.6'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    )}
  </svg>
);

const slides = [
  {
    type: 'collage',
    title: 'WAN 2.2',
    subtitle: 'WAN 2.2 Image generation',
    images: [
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=700&q=60',
      'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1000&q=60',
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=700&q=60',
    ],
    cta: 'Try WAN 2.2',
    caption:
      'Generate complex images with the brand new and powerful WAN 2.2 model. Exceptional prompt adherence and ultra-realistic textures.',
  },
  {
    type: 'single',
    title: 'Open Source',
    subtitle: 'FLUX.1 Krea',
    image:
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1000&q=60',
    cta: 'Open',
    caption:
      'We’re making the weights for our FLUX.1 Krea model open-source. Download and run our model weights or generate with it in Krea Images.',
  },
  {
    type: 'collage',
    title: 'WAN 2.2',
    subtitle: 'WAN 2.2 Image generation',
    images: [
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=700&q=60',
      'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1000&q=60',
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=700&q=60',
    ],
    cta: 'Try WAN 2.2',
    caption:
      'Generate complex images with the brand new and powerful WAN 2.2 model. Exceptional prompt adherence and ultra-realistic textures.',
  },
  {
    type: 'single',
    title: 'Open Source',
    subtitle: 'FLUX.1 Krea',
    image:
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1000&q=60',
    cta: 'Open',
    caption:
      'We’re making the weights for our FLUX.1 Krea model open-source. Download and run our model weights or generate with it in Krea Images.',
  },
];

export default function Carousel() {
  const [idx, setIdx] = useState(0);
  const viewportRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // scroll to the active slide (center it)
    const el = viewportRef.current;
    if (!el) return;
    const slide = el.children[idx] as HTMLElement;
    if (!slide) return;
    const left = slide.offsetLeft - (el.clientWidth - slide.clientWidth) / 2;
    el.scrollTo({ left, behavior: 'smooth' });
  }, [idx]);

  return (
    <section className='relative mb-10'>
      <div className='overflow-hidden'>
        <div
          ref={viewportRef}
          className='flex gap-6 overflow-x-auto snap-x snap-mandatory py-4 no-scrollbar'
        >
          {slides.map((s, i) => (
            <article
              key={i}
              className='snap-center flex-shrink-0 w-[880px] rounded-2xl bg-white shadow-md relative overflow-hidden'
            >
              {/* slide content */}
              {s.type === 'collage' ? (
                <div className='grid grid-cols-3 h-64 md:h-[380px]'>
                  <div
                    className='bg-cover bg-center'
                    style={{
                      backgroundImage: `url(${
                        s.images && s.images[0]
                          ? s.images[0]
                          : '/images/placeholder.png'
                      })`,
                    }}
                  />
                  <div
                    className='bg-cover bg-center'
                    style={{
                      backgroundImage: `url(${
                        s.images && s.images[1]
                          ? s.images[1]
                          : '/images/placeholder.png'
                      })`,
                    }}
                  />
                  <div
                    className='bg-cover bg-center'
                    style={{
                      backgroundImage: `url(${
                        s.images && s.images[2]
                          ? s.images[2]
                          : '/images/placeholder.png'
                      })`,
                    }}
                  />
                </div>
              ) : (
                <div
                  className='h-64 md:h-[380px] bg-cover bg-center'
                  style={{ backgroundImage: `url(${s.image})` }}
                />
              )}

              {/* overlay text */}
              <div className='absolute left-6 bottom-6 max-w-[48%] bg-black/55 text-white p-6 rounded-lg'>
                <h3 className='text-3xl font-bold'>{s.title}</h3>
                <p className='mt-2 text-sm opacity-90'>{s.caption}</p>
                <div className='mt-4'>
                  <button className='px-3 py-2 bg-white text-black rounded-lg font-medium'>
                    {s.cta}
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* carousel footer */}

      <div className='flex items-center justify-between'>
        {/* dots */}
        <div className='flex  flex-1 justify-center gap-2'>
          {slides.map((_, i) => (
            <button
              aria-label='Slide'
              key={i}
              onClick={() => setIdx(i)}
              className={`w-2 h-2 rounded-full cursor-pointer ${
                i === idx ? 'bg-slate-800' : 'bg-slate-300'
              }`}
            />
          ))}
        </div>
        {/* nav arrows */}
        <div className='flex items-center justify-end pointer-events-none gap-4'>
          <button
            onClick={() => setIdx((p) => Math.max(0, p - 1))}
            className='pointer-events-auto bg-surface py-2 px-3 font-black rounded-full shadow-inner cursor-pointer'
            aria-label='Previous'
          >
            <Chevron dir='left' />
          </button>
          <button
            onClick={() => setIdx((p) => Math.min(slides.length - 1, p + 1))}
            className='pointer-events-auto bg-surface py-2 px-3 font-black rounded-full shadow-inner cursor-pointer'
            aria-label='Next'
          >
            <Chevron dir='right' />
          </button>
        </div>
      </div>
    </section>
  );
}
