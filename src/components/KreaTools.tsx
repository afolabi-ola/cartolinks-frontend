import { tools } from '@/constants/tools';
import { RxCaretDown } from 'react-icons/rx';

export default function KreaTools() {
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
              className={`w-12 h-12 rounded-lg flex items-center justify-center text-white`}
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
                Open
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
