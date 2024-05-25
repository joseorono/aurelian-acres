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
      <div className="text-center text-xl">{getRandomElement(NEWSPAPER_NAMES)}</div>
      <div className="flex h-12 w-full items-center justify-center bg-gray-800 text-white">
        <h1 className="text-xl font-bold">{props.headline}</h1>
      </div>

      <div className="border-y-1 items-center border-gray-700 bg-white p-2 text-gray-700">
        <h2 className="text-sm">
          {props.headline == NOTHING_EVENT.name ? "It's the end of history." : getRandomElement(FLAVOR_TEXT_HEADLINES)}
        </h2>
      </div>
    </>
  );
};

export default NewspaperHeadline;
