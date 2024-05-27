import coin from '/assets/resources/coin.png';
import stone from '/assets/resources/stone.png';
import wheat from '/assets/resources/wheat.png';

export function Coin({ size = 24, className = '' }) {
  return <img src={coin} alt="coin" width={size} height={size} className={className} />;
}

export function Stone({ size = 24, className = '' }) {
  return <img src={stone} alt="coin" width={size} height={size} className={className} />;
}

export function Wheat({ size = 24, className = '' }) {
  return <img src={wheat} alt="coin" width={size} height={size} className={className} />;
}
