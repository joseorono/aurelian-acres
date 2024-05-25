import BuildingsShop from '../shop/worker-shop';

export default function SecondSidePane({ className = '' }) {
  return (
    <div className={className}>
      <p className="text-center">SECOND SIDE PANE</p>
      <div className="store-wrapper">
        <h3>BUILDINGS</h3>
        <BuildingsShop />
      </div>
    </div>
  );
}

