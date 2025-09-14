'use client';

import React, { useEffect, useRef, useState } from 'react';
import { RxCaretLeft, RxCaretRight } from 'react-icons/rx';
import { slides } from '@/constants/heroCarousel';

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
          className='flex gap-6 overflow-x-hidden snap-x snap-mandatory py-4'
        >
          {slides.map((s, i) => (
            <article
              key={i}
              className='snap-center flex-shrink-0 w-full md:w-4/5 rounded-2xl bg-white shadow-md relative overflow-hidden'
            >
              {/* slide content */}
              {s.type === 'collage' ? (
                <div className='relative h-64 md:h-[380px]'>
                  {/* Collage grid */}
                  <div className='grid grid-cols-3 h-full'>
                    {s.images?.map((image, i) => (
                      <div
                        key={i}
                        className='bg-cover bg-center'
                        style={{
                          backgroundImage: `url(${
                            image || '/images/placeholder.png'
                          })`,
                        }}
                      />
                    ))}
                  </div>

                  <div className='absolute inset-0 flex flex-col justify-between text-white p-3 md:p-6 rounded-lg'>
                    <span className='text-xs uppercase'>{s.modelType}</span>
                    <h3 className='text-2xl md:text-7xl w-full flex justify-center font-bold'>
                      {s.title}
                    </h3>
                    <div className='mt-4 flex flex-col md:flex-row gap-4 justify-between items-start'>
                      <div>
                        <h1 className='md:text-2xl font-black'>{s.subtitle}</h1>
                        <p className='mt-2 text-xs md:text-sm opacity-90 max-w-md'>
                          {s.caption}
                        </p>
                      </div>
                      <button className='px-3 py-2 bg-background text-text rounded-lg font-medium cursor-pointer text-xs md:text-sm shadow-md'>
                        {s.cta}
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <div
                  className='h-64 md:h-[380px] bg-cover bg-center'
                  style={{ backgroundImage: `url(${s.image})` }}
                >
                  <div className='flex flex-col justify-between w-full h-full text-white p-3 md:p-6 rounded-lg'>
                    <span className='text-xs uppercase'>{s.modelType}</span>
                    <h3 className='text-2xl md:text-7xl w-full flex justify-center font-bold'>
                      {s.title}
                    </h3>
                    <div className='mt-4 flex flex-col md:flex-row gap-4 justify-between items-start'>
                      <div>
                        <h1 className='md:text-2xl font-black'>{s.subtitle}</h1>
                        <p className='mt-2 text-xs md:text-sm opacity-90 max-w-md'>
                          {s.caption}
                        </p>
                      </div>
                      <button className='px-3 py-2 bg-white text-black rounded-lg font-medium cursor-pointer'>
                        {s.cta}
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </article>
          ))}
        </div>
      </div>

      {/* carousel footer */}

      <div className='flex items-center justify-between'>
        {/* dots */}
        <div className='flex md:flex-1 md:justify-center gap-2'>
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
        {/*carousel controls */}
        <div className='flex items-center justify-end pointer-events-none gap-4'>
          <button
            onClick={() => setIdx((p) => Math.max(0, p - 1))}
            className='pointer-events-auto bg-surface p-2 font-black rounded-full shadow-inner cursor-pointer'
            aria-label='Previous'
          >
            <RxCaretLeft />
          </button>
          <button
            onClick={() => setIdx((p) => Math.min(slides.length - 1, p + 1))}
            className='pointer-events-auto bg-surface p-2 font-black rounded-full shadow-inner cursor-pointer'
            aria-label='Next'
          >
            <RxCaretRight />
          </button>
        </div>
      </div>
    </section>
  );
}
