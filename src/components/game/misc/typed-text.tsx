// react-type-animation

import { useState } from 'react';
import { SoundNames, soundService } from '~/services/sound-service';

import { TypeAnimation } from 'react-type-animation';
import { auxSleepFor, cn } from '~/lib/utils';
import { TextSequence } from '~/types/component-props';

// Define the interface for the props
interface TypedTextProps {
  textSequence: TextSequence;
  delay?: number;
  soundName?: Nullable<SoundNames>;
  className?: string;
}

const TextSequenceToString = (element: TextSequenceElement): string => {
  if (typeof element === 'string') {
    return element;
  } else if (typeof element === 'number') {
    return element.toString();
  } else {
    return ' ';
  }
};

export default function TypedText({ textSequence, className, delay = 0, soundName = null }: TypedTextProps) {
  // State for whether the text was clicked
  const [clicked, setClicked] = useState<boolean>(false);

  const classes = cn('cursor-pointer', className);

  const handleDone = (_: Nullable<Event> = null) => {
    // Play the sound
    if (soundName) {
      soundService.playSound(soundName);
    }
  };

  if (clicked) {
    handleDone();
    return <span className={classes}>{textSequence.map(TextSequenceToString)}</span>;
  } else {
    // use the delay to call my Sleep function, and inside its callback, do the rendering
    //auxSleepFor(delay).then(() => {});

    // Add element to the textSequence with a arrow function that runs handleDone
    textSequence.push(() => handleDone());

    // Then pass it to the TypeAnimation component
    return (
      <div
        onClick={() => {
          //handleDone();
          setClicked(true);
        }}
      >
        <TypeAnimation
          sequence={textSequence}
          speed={50}
          className={classes}
          cursor={false}
          splitter={(str) => str.split(/(?= )/)} // Split by space, resulting in word-by-word typing
        />
      </div>
    );
  }
}
