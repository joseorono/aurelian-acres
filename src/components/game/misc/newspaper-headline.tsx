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
      <div className="newsHeadline__wrapper mb-2 text-slate-700">
        <div className="p-2 text-center text-lg uppercase">{getRandomElement(NEWSPAPER_NAMES)}</div>

        {/* The Random title and separator */}
        <div className="eventSubhead text-xs mx-2 mb-2 mt-1 break-words border-y-2 border-slate-700 py-1 text-center uppercase">
          {props.headline == NOTHING_EVENT.name ? "It's the end of history." : getRandomElement(FLAVOR_TEXT_HEADLINES)}
        </div>
        {/* The Actual Title of the News */}
        <div className="eventHeadline flex w-full items-center justify-center">
          <h1 className="text-2xl font-bold">{props.headline}</h1>
        </div>
      </div>
    </>
  );
};

export default NewspaperHeadline;
