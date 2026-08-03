import { LegalRenderer } from '../legal/LegalRenderer';
import { AVISO_LEGAL } from '../legal/legalContent';

export function Legal() {
  return <LegalRenderer doc={AVISO_LEGAL} />;
}
