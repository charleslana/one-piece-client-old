import type { OrganizationType } from '@/types/organization-type';

export interface CrewRanking {
  name: string;
  leaderName: string;
  level: number;
  memberQuantity: number;
  organization: OrganizationType;
}

export interface UserRanking {
  name: string;
  crewName: string;
  level: number;
  reputation: number;
  organization: OrganizationType;
}
