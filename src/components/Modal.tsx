import { useAtom, useAtomValue } from 'jotai';
import {
  Credenza,
  CredenzaBody,
  CredenzaContent,
  CredenzaDescription,
  CredenzaHeader,
  CredenzaTitle,
} from '~/components/ui/credenza';
import { isModalOpenAtom, modalContentAtom } from '~/store/atoms';
import styles from '~/css/modal.module.css';
import { SoundNames, soundService } from '~/services/sound-service';

export default function Modal() {
  const [isModalOpen, setIsModalOpen] = useAtom(isModalOpenAtom);
  const modalContent = useAtomValue(modalContentAtom);

  const closeModal = (value: any | null) => {
    soundService.playSound(SoundNames.closeModal, soundService.globalVolume * 0.25);
    setIsModalOpen(false);
    if (modalContent.onClose) {
      modalContent.onClose(value);
    }
  };
  return (
    <>
      <Credenza open={isModalOpen} onOpenChange={() => closeModal(null)}>
        <CredenzaContent
          onEscapeKeyDown={modalContent.backgroundDismiss === false ? (e) => e.preventDefault() : (_) => {}}
          onInteractOutside={modalContent.backgroundDismiss === false ? (e) => e.preventDefault() : (_) => {}}
          className={`${styles.modalContent} ${modalContent.containerClasses}`}
        >
          {modalContent.title && (
            <CredenzaHeader>
              <CredenzaTitle>{modalContent.title}</CredenzaTitle>
              {modalContent.subtitle && <CredenzaDescription>{modalContent.subtitle}</CredenzaDescription>}
            </CredenzaHeader>
          )}
          <CredenzaBody className="overflow-auto ">
            {/* This component is built using shadcn/ui&apos;s dialog and drawer component, which is built on top of Vaul. */}
            {modalContent.content}
          </CredenzaBody>
        </CredenzaContent>
      </Credenza>
    </>
  );
}

// <CredenzaFooter>
//   {!modalContent.disableButtons && modalContent.buttons != null && modalContent.buttons.length > 0 ? (
//     modalContent.buttons.map((el, i) => (
//       <button key={i} onClick={() => closeModal(el.value)} className={`btn btn-neutral ${el.classes}`}>
//         {el.label}
//       </button>
//     ))
//   ) : (
//     <CredenzaClose asChild>
//       <button disabled={modalContent.disableButtons}>Close</button>
//     </CredenzaClose>
//   )}
// </CredenzaFooter>
