import { LegalRenderer } from '../legal/LegalRenderer';
import { POLITICA_COOKIES } from '../legal/legalContent';

export function Cookies() {
  return <LegalRenderer doc={POLITICA_COOKIES} />;
}
