import React from 'react';
import { NOTHING_EVENT } from '~/constants/events';
import { NEWSPAPER_NAMES } from '~/constants/flavor-text';
import { FLAVOR_TEXT_HEADLINES } from '~/constants/flavor-text';
import { getRandomElement } from '~/lib/utils';

interface INewspaperHeadlinesProp {
  headline: string;
}

const NewspaperHeadline: React.FC<INewspaperHeadlinesProp> = (props: INewspaperHeadlinesProp) => {
  return (
    <>
      <div className="newsHeadline__wrapper text-slate-700">
        <div className="text-center text-xl">{getRandomElement(NEWSPAPER_NAMES)}</div>
        <div className="flex h-12 w-full items-center justify-center">
          <h1 className="text-xl font-bold">{props.headline}</h1>
        </div>

        <div className="eventSubhead break-words border-y-2 border-slate-700 py-1 text-center text-sm uppercase">
          {props.headline == NOTHING_EVENT.name ? "It's the end of history." : getRandomElement(FLAVOR_TEXT_HEADLINES)}
        </div>
      </div>
    </>
  );
};

export default NewspaperHeadline;
