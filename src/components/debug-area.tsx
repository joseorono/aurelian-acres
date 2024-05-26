import GenericLoader from '~/components/loader/generic-loader';
import DialogDemo from '~/components/demo/dialog-demo';
import DialogDemo2 from '~/components/demo/dialog-demo-2';
import AlertPixelIcon from '~/icons/AlertPixelIcon';
import SoundsDemo from '~/components/demo/sounds-demo';
import LoopingProgressBar from '~/components/game/misc/loopingProgressBar';
import StoreExample from '~/components/demo/store-demo';
import ToasterDemo from '~/components/demo/toaster-demo';
import { useSetAtom } from 'jotai';
import { eraserAtom } from '~/store/atoms';

export default function DebugArea() {
  console.log('check if this re-renders when the modal opens/closes');
  const eraseAll = useSetAtom(eraserAtom);

  return (
    <>
      <div className="p-8"></div>
      <div className="p-8">
        <StoreExample />
      </div>

      {/* <button
        onClick={() =>
          setIsModalOpen({
            title: 'NEW TITLE BABAAAAY',
            subtitle: 'NEW SUBTITLE YOOOOOO WTFFF',
            content: dialogContent,
          })
        }
        className="p-8"
      >
        OPEN MODAL HERE
      </button>

      <button
        onClick={() =>
          setIsModalOpen({
            title: 'this is the SECOND modal lets see whats up',
            content: dialogContent,
            buttons: [
              { label: 'cancel', value: false, classes: 'bg-red' },
              { label: 'accept', value: true },
            ],
            onClose: (val) => console.log(`modal closed. Here's the value we cooked up => ${val}`),
          })
        }
        className="p-8"
      >
        OPEN MODAL 2 HERE
      </button> */}

      {/* <SoundsDemo></SoundsDemo> */}

      <div id="app">
        {/*
        <TailwindDemo />
        */}
        <div className="w-32">
          <LoopingProgressBar durationInMs={1000} />
        </div>
        <ToasterDemo />
        <AlertPixelIcon size={48} fill="white" />
      </div>
      <div className="p-4">
        <DialogDemo />
        <DialogDemo2 />
        <SoundsDemo />
      </div>
      <div className="p-4">
        <button
          type="button"
          onClick={() => {
            eraseAll(null);
            window.alert('bro you just erased all of your progress good job!!!');
          }}
          className="btn btn-warning"
        >
          [debug] ERASE EVERYTHING. <strong>NOW!!!</strong>
        </button>
      </div>
      <GenericLoader />
    </>
  );
}

