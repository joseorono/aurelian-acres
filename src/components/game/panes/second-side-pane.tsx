import BuildingsShop from '../shop/buildings-shop';
import WorkersShop from '../shop/workers-shop';

export default function SecondSidePane({ className = '' }) {
  return (
    <div className={className}>
      <p className="text-center">SECOND SIDE PANE</p>
      <div className="store-wrapper">
        <div className="divider">BUILDINGS</div>
        <BuildingsShop />
        <div className="divider">WORKERS</div>
        <WorkersShop />
      </div>
    </div>
  );
}

