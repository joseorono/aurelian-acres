import { shuffleArray } from '~/lib/utils';
import { FLAVOR_TEXT_HEADLINES } from '../../../constants/flavor-text';

import Marquee from 'react-fast-marquee';

function HeadlinesMarquee() {
  let arrHeadlines = shuffleArray(FLAVOR_TEXT_HEADLINES);
  //console.log(arrHeadlines);
  return (
    <Marquee
      className="bg-img-noise bg-img-noise-gray border-scroll-groove select-none bg-red-800 p-1"
      gradient={false}
      speed={40}
      delay={1}
    >
      {arrHeadlines.map((headline, index) => (
        <div key={index} className="mr-24 text-2xl font-bold">
          {headline}
        </div>
      ))}
    </Marquee>
  );
}

export default HeadlinesMarquee;
