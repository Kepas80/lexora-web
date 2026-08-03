import { LegalRenderer } from '../legal/LegalRenderer';
import { PRIVACIDAD } from '../legal/legalContent';

export function Privacy() {
  return <LegalRenderer doc={PRIVACIDAD} />;
}
