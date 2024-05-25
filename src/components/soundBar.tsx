import { useAtom } from 'jotai';
import { isMutedAtom, volumeAtom } from '~/store/atoms';
import { VolumeHigh, VolumeLow, VolumeMed, VolumeMute, VolumeNone } from '~/icons/sound/volume';
import * as Tooltip from '@radix-ui/react-tooltip';
import { soundService } from '~/services/sound-service';
import { useEffect } from 'react';
export default function SoundBar() {
  const [isMuted, setIsMuted] = useAtom(isMutedAtom);
  const [volume, setVolume] = useAtom(volumeAtom);

  useEffect(() => {
    if (isMuted === true) {
      soundService.muteAll();
    } else {
      soundService.unmuteAll();
    }
  }, [isMuted]);

  useEffect(() => {
    soundService.setGlobalVolume(volume);
  }, [volume]);

  const onVolumeChange = (val: number) => {
    setVolume(val / 100);
  };

  const handleMute = () => {
    setIsMuted(!isMuted);
  };

  const VolumeToShow = () => {
    if (isMuted) {
      return <VolumeMute />;
    }
    if (volume >= 1) {
      return <VolumeHigh />;
    }
    if (volume < 1 && volume >= 0.5) {
      return <VolumeMed />;
    }
    if (volume < 0.5 && volume >= 0.1) {
      return <VolumeLow />;
    }
    if (volume < 0.1 && volume >= 0) {
      return <VolumeNone />;
    }
  };

  return (
    <>
      <div className="flex flex-row items-center justify-start gap-4">
        <div className="slider-wrapper">
          <input
            type="range"
            id="volume-range"
            min={0}
            max={100}
            step={10}
            value={volume * 100}
            onChange={(event) => {
              onVolumeChange(parseInt(event.target.value));
            }}
            className="range"
          />
        </div>
        <div className="mute-wrapper">
          <Tooltip.Provider delayDuration={250}>
            <Tooltip.Root>
              <Tooltip.Trigger asChild>
                <button className="IconButton btn btn-primary btn-neutral" onClick={handleMute}>
                  {VolumeToShow()}
                </button>
              </Tooltip.Trigger>
              <Tooltip.Portal>
                <Tooltip.Content className="TooltipContent">
                  {isMuted ? 'unmute' : 'mute'}
                  <Tooltip.Arrow className="TooltipArrow" />
                </Tooltip.Content>
              </Tooltip.Portal>
            </Tooltip.Root>
          </Tooltip.Provider>
        </div>
      </div>
    </>
  );
}
