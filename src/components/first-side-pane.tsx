import TownDisplay from '~/components/town-display';

interface IFirstSidePaneProps {
  className?: string;
}

const FirstSidePane: React.FC<IFirstSidePaneProps> = ({ className = '' }) => {
  return (
    <section className={className}>
      <div>
        <div className="p-4 text-center text-white"></div>
        <TownDisplay />
      </div>
      <div className="flex flex-auto flex-col items-center justify-center bg-gray-800">
        <h1 className="text-3xl text-white">The SidePane</h1>
      </div>
    </section>
  );
};

export default FirstSidePane;
