import { ITeamCardsSection } from '@src/types/compound';
import { SearchFilter } from '@src/components/root/search-filter';
import { CarouselBlock } from '../carousel-block';
import { backgroundClassSelector, fontColorSelector } from '@src/utils';
import dynamic from 'next/dynamic';
import { ITeamCard } from '@src/types/root';
const TeamCard = dynamic<ITeamCard>(
  import('@src/components/root/card/TeamCard').then((module) => module.TeamCard)
);
export const TeamCardsSection = ({
  bgType,
  teamFilter,
  teamCards,
}: ITeamCardsSection) => {
  return (
    <section
      style={{
        background: backgroundClassSelector(bgType),
        color: fontColorSelector(bgType),
      }}
    >
      <div className="container">
        <div className="flex flex-col">
          <div>
            <SearchFilter {...teamFilter} />
          </div>
          <div className="hidden lg:grid lg:grid-cols-4 gap-[0.5rem] lg:mt-[3.75rem]">
            {teamCards.map((card, ind) => {
              return (
                <div key={ind}>
                  <TeamCard {...card} />
                </div>
              );
            })}
          </div>
          <div className="lg:hidden mt-[1.875rem]">
            <CarouselBlock cardType="TEAM_CARD" slidersInfo={teamCards} />
          </div>
        </div>
      </div>
    </section>
  );
};
