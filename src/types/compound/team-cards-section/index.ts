import { ITeamCard, ISearchFilter } from '@src/types/root';

export interface ITeamCardsSection {
  bgType: string;
  teamFilter: ISearchFilter;
  teamCards: ITeamCard[];
}
