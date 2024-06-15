import type { USerCharacter } from './user-character';

export interface User {
  id: number;
  name: string;
  userCharacters: USerCharacter[];
}
