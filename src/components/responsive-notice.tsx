import { useState } from 'react';
import { cn } from '~/lib/utils';

export default function ResponsiveNotice() {
  // isHidden state
  const [isHidden, setIsHidden] = useState(false);

  return (
    <div
      className={cn(
        'h-svh w-full items-center justify-center bg-slate-800 text-white md:hidden',
        isHidden ? ' hidden' : 'flex',
      )}
      onDoubleClick={() => setIsHidden(true)}
    >
      <p className="text-center text-3xl">
        This Game is not yet optimized for mobile.
        <br />
        Please view on a computer screen or large tablet.
        <br />
        <div className="my-4 text-red-500">Double Click to Play Anyway</div>
      </p>
    </div>
  );
}
