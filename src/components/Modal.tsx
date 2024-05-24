import { useAtom, useAtomValue } from 'jotai';
import {
  Credenza,
  CredenzaBody,
  CredenzaClose,
  CredenzaContent,
  CredenzaDescription,
  CredenzaFooter,
  CredenzaHeader,
  CredenzaTitle,
} from '~/components/ui/credenza';
import { isModalOpenAtom, modalContentAtom } from '~/store/atoms';
import styles from '~/css/modal.module.css';

export default function Modal() {
  const [isModalOpen, setIsModalOpen] = useAtom(isModalOpenAtom);
  const modalContent = useAtomValue(modalContentAtom);

  const closeModal = (value: any | null) => {
    console.log('call close');
    setIsModalOpen(false);
    if (modalContent.onClose) {
      modalContent.onClose(value);
    }
  };
  return (
    <>
      <Credenza open={isModalOpen} onOpenChange={setIsModalOpen}>
        <CredenzaContent
          onEscapeKeyDown={modalContent.backgroundDismiss === false ? (e) => e.preventDefault() : (e) => {}}
          onInteractOutside={modalContent.backgroundDismiss === false ? (e) => e.preventDefault() : (e) => {}}
          className={styles.modalContent}
        >
          <CredenzaHeader>
            <CredenzaTitle>{modalContent.title}</CredenzaTitle>
            {modalContent.subtitle && <CredenzaDescription>{modalContent.subtitle}</CredenzaDescription>}
          </CredenzaHeader>
          <CredenzaBody>
            {/* This component is built using shadcn/ui&apos;s dialog and drawer component, which is built on top of Vaul. */}
            {modalContent.content}
          </CredenzaBody>
          <CredenzaFooter>
            {modalContent.buttons != null && modalContent.buttons.length > 0 ? (
              modalContent.buttons.map((el, i) => (
                <button key={i} onClick={() => closeModal(el.value)} className={el.classes}>
                  {el.label}
                </button>
              ))
            ) : (
              <CredenzaClose asChild>
                <button>Close</button>
              </CredenzaClose>
            )}
          </CredenzaFooter>
        </CredenzaContent>
      </Credenza>
      ;
    </>
  );
}
