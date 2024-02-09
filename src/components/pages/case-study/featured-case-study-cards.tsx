import { IFeaturedCards } from '@src/types/pages';
import { CaseStudyCard } from '@src/components/root/case-study-card';
import { sectionPaddingClassSelector } from '@src/utils';

export const FeaturedCaseStudyCards = ({
  sectionPadding,
  isOverlappedWithHero,
  cardList,
}: IFeaturedCards) => {
  return (
    <section
      className={`${sectionPaddingClassSelector(
        sectionPadding?.paddingY
      )} ${sectionPaddingClassSelector(sectionPadding?.paddingOff)}`}
    >
      <div
        className={`${
          isOverlappedWithHero
            ? 'translate-y-[-7.5rem] md:translate-y-[-17.5rem] mb-[-7.5rem] md:mb-[-17.5rem]'
            : 'mt-[7.5rem]'
        } `}
      >
        <div className="container">
          <div
            className={`grid grid-cols-1 md:grid-cols-2 md:gap-x-[0.5rem] gap-y-[1rem] md:gap-y-[0.5rem]`}
          >
            {cardList &&
              !!cardList.length &&
              cardList.map((cardInfo, ind) => {
                const cardTag = cardInfo.attributes.case_study_tags?.data;
                return (
                  <div key={ind}>
                    <CaseStudyCard
                      {...cardInfo.attributes}
                      imageUrl={cardInfo.attributes.caseStudyImage.image}
                      subTitle={
                        !!cardTag && !!cardTag.length
                          ? cardTag[0].attributes.tag
                          : ''
                      }
                      redirectLink={cardInfo.attributes.slug}
                      fullHeight={true}
                    />
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </section>
  );
};
