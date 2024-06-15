import type { OrganizationType } from '@/types/organization-type';
import type { Character } from './character';

export interface USerCharacter {
  id: number;
  name: string;
  level: number;
  character: Character;
  faction: OrganizationType;
}
