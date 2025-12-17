'use client';

import Image from 'next/image';

const fakeLeaders = [
  {
    id: 1,
    name: 'james',
    handle: '@voidmax',
    amount: '£ 11.00',
    items: '0 assets',
    avatar: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=200',
    note: 'enjoy the suit',
  },
  {
    id: 2,
    name: 'lee',
    handle: '@heirless',
    amount: '£ 7.50',
    items: '0 collectibles',
    avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=200',
    note: 'ts is so pointless',
  },
  {
    id: 3,
    name: 'key bum',
    handle: '@expense_report',
    amount: '£ 1.00',
    items: '0 line items',
    avatar: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=200',
    note: 'what am i doing with my life',
  },
  {
    id: 4,
    name: 'john money',
    handle: '@offline',
    amount: '£ 0.01',
    items: '0 followers',
    avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=200',
    note: '',
  },
];

export default function LeaderboardPage() {
  return (
    <div className="fixed inset-0 z-10 flex items-center justify-center px-4 sm:px-6 py-10 sm:py-14 overflow-y-auto select-none">
      <div className="w-full max-w-5xl border border-white/40 bg-black/80 backdrop-blur-sm shadow-[10px_10px_0_0_rgba(255,255,255,0.5)] p-5 sm:p-8 md:p-10">
        <header className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 border-b border-dashed border-white/30 pb-4 sm:pb-5 mb-5 sm:mb-6">
          <div>
            <p className="text-[0.65rem] sm:text-xs uppercase tracking-[0.3em] text-white/60 mb-1">Nothing Index™</p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight uppercase text-white">
              Leaderboard
            </h1>
          </div>
          <div className="text-right text-[0.65rem] sm:text-xs text-white/60 space-y-1">
            <p>Ranking the most committed buyers of absolutely nothing.</p>
            <p className="uppercase tracking-[0.25em]">Top balances // Zero assets</p>
          </div>
        </header>

        <div className="grid grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)_80px] sm:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)_120px] gap-2 sm:gap-3 text-[0.7rem] sm:text-xs md:text-sm text-white/60 border-b border-white/20 pb-2 mb-3">
          <div className="uppercase tracking-[0.2em]">Holder</div>
          <div className="uppercase tracking-[0.2em]">Statement</div>
          <div className="uppercase tracking-[0.2em] text-right">Total spent</div>
        </div>

        <div className="space-y-2 sm:space-y-3">
          {fakeLeaders.map((leader, index) => (
            <div
              key={leader.id}
              className="cursor-target group grid grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)_80px] sm:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)_120px] items-center gap-3 sm:gap-4 border border-white/20 bg-white/5 text-white hover:bg-white hover:text-black transition-colors px-3 sm:px-4 py-3 sm:py-3.5"
            >
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="relative h-9 w-9 sm:h-11 sm:w-11 overflow-hidden bg-white text-black flex items-center justify-center text-xs font-bold uppercase border border-black/60">
                  <Image
                    src={leader.avatar}
                    alt={leader.name}
                    fill
                    sizes="44px"
                    className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-300"
                  />
                  <span className="absolute inset-0 flex items-center justify-center mix-blend-multiply text-[0.55rem] sm:text-[0.6rem]">
                    #{String(index + 1).padStart(2, '0')}
                  </span>
                </div>

                <div className="space-y-0.5 sm:space-y-1">
                  <p className="text-xs sm:text-sm md:text-base font-semibold tracking-tight text-white group-hover:text-black">
                    {leader.name}
                  </p>
                  <p className="text-[0.65rem] sm:text-[0.7rem] uppercase tracking-[0.25em] text-white/50 group-hover:text-black/60">
                    {leader.handle}
                  </p>
                  <p className="hidden sm:block text-[0.65rem] text-white/50 group-hover:text-black/60">
                    {leader.items}
                  </p>
                </div>
              </div>

              <div className="text-[0.7rem] sm:text-xs md:text-sm leading-relaxed text-white/80 group-hover:text-black/80">
                {leader.note}
              </div>

              <div className="text-right">
                <p className="text-sm sm:text-base md:text-lg font-semibold tracking-tight text-white group-hover:text-black">
                  {leader.amount}
                </p>
                <p className="text-[0.6rem] sm:text-[0.65rem] uppercase tracking-[0.25em] text-white/40 group-hover:text-black/60">
                  invested in nothing
                </p>
              </div>
            </div>
          ))}
        </div>

        <footer className="mt-6 sm:mt-8 flex flex-col sm:flex-row justify-between gap-3 sm:gap-4 text-[0.65rem] sm:text-xs text-white/50 uppercase tracking-[0.25em]">
          <p>Scroll to inspect the damage.</p>
          <p className="text-right">Fill the Void</p>
        </footer>
      </div>
    </div>
  );
}
