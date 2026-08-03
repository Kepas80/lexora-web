import { LegalRenderer } from '../legal/LegalRenderer';
import { TERMINOS } from '../legal/legalContent';

export function Terms() {
  return <LegalRenderer doc={TERMINOS} />;
}
