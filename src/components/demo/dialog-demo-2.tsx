import {
  Credenza,
  CredenzaBody,
  CredenzaClose,
  CredenzaContent,
  CredenzaDescription,
  CredenzaFooter,
  CredenzaHeader,
  CredenzaTitle,
  CredenzaTrigger,
} from '~/components/ui/credenza';

export default function DialogDemo2() {
  return (
    <>
      <Credenza>
        <CredenzaTrigger asChild>
          <button>Open modal 2.</button>
        </CredenzaTrigger>
        <CredenzaContent>
          <CredenzaHeader>
            <CredenzaTitle>Example</CredenzaTitle>
            <CredenzaDescription>This is a different modal.</CredenzaDescription>
          </CredenzaHeader>
          <CredenzaBody>
            This component is built different using shadcn/ui&apos;s dialog and drawer component, which is built on top
            of Vaul.
          </CredenzaBody>
          <CredenzaFooter>
            <CredenzaClose asChild>
              <button>Close. Bye-Bye</button>
            </CredenzaClose>
          </CredenzaFooter>
        </CredenzaContent>
      </Credenza>
      ;
    </>
  );
}
