import { LegalRenderer } from '../legal/LegalRenderer';
import { POLITICA_IA } from '../legal/legalContent';

export function AiPolicy() {
  return <LegalRenderer doc={POLITICA_IA} />;
}
