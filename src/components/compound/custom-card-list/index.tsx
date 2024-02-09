import { JobCard } from '@src/components/root/job-card';
import { ContentBlock } from '../content-block';
import { IContentBlock, ICustomCardList } from '@src/types/compound';
import { getStrapiMediaUrl, sectionPaddingClassSelector } from '@src/utils';
export const CustomCardList = ({
  bgType = 'default',
  sectionPadding,
  title,
  subTitle,
  cardLogoPosition,
  showItemsCount = false,
  differentLastItem = false,
  items,
  jobCards,
  jobCardBgType,
  apps,
}: ICustomCardList) => {
  /* Decorate App Data to Match with Item Data */
  const appData =
    !!apps && apps.length > 0
      ? apps.map((ele, ind) => {
          const { appName, slug, shortDescription, appLogo } = ele.attributes;
          const appInfo: IContentBlock = {
            subTitle: appName,
            slug: slug,
            description: shortDescription,
            logo: appLogo.logo,
            logoAlt: appLogo.logoAlt,
            isSlider: true,
          };
          return appInfo;
        })
      : [];

  const data = !!apps && !!apps.length ? appData : items;
  return (
    <div
      className={`container ${sectionPaddingClassSelector(
        sectionPadding?.paddingY
      )} ${sectionPaddingClassSelector(sectionPadding?.paddingOff)} `}
    >
      {subTitle && (
        <p className="hidden md:block text-[14px] leading-[21px] tracking-[0.2em] uppercase">
          {subTitle}
        </p>
      )}
      {title && (
        <div className="flex flex-row">
          <h2
            className={`block text-[1.625rem] md:text-[1.875rem] leading-[2.4375rem] md:leading-[2.8125rem] ${
              cardLogoPosition === 'left' ? 'md:ml-[3.25rem]' : 'ml-0'
            } `}
          >
            {title}
          </h2>
          {showItemsCount && !!data.length && (
            <span
              style={{
                background:
                  'linear-gradient(54.17deg, #2BB8E4 21.35%, #00D855 72.02%)',
              }}
              className="hidden md:block text-[0.8125rem] leading-[1.25rem] py-[0.1875rem] px-[0.625rem] rounded-full translate-y-[-1rem] font-semibold text-[#FFFFFF] self-center "
            >
              {differentLastItem ? data.length - 1 : data.length}
            </span>
          )}
        </div>
      )}
      {!!data && !!data.length && (
        <div className="md:grid justify-between md:grid-cols-2 mt-[1.875rem] md:mt-[2.75rem] ">
          {data.map((item, ind) => {
            const logoData = getStrapiMediaUrl(item.logo);
            return (
              <div
                key={ind}
                className={`mb-[2.5rem] md:mb-[3.5rem] md:max-w-[80%] ${
                  differentLastItem
                    ? 'last:bg-white last:text-[#212121] last:pl-[2.375rem] last:py-[1.5625rem] last:rounded-[0.25rem]'
                    : ''
                }`}
              >
                <ContentBlock
                  {...item}
                  sectionBgType={bgType}
                  blockType="list"
                  logoPosition={cardLogoPosition}
                  logo={logoData.url}
                  logoAlt={
                    item.logoAlt ? item.logoAlt : logoData.alternativeText
                  }
                  isSlider={true}
                  isNumber={false}
                  ctaLink={
                    item.ctaLink?.ctaText
                      ? item.ctaLink
                      : {
                          ctaLink: item.contentCtaLink,
                          ctaText: item.contentCtaText,
                        }
                  }
                />
              </div>
            );
          })}
        </div>
      )}
      {!!jobCards && !!jobCards.length && (
        <div className="grid gap-[10px] md:grid-cols-2 mt-[30px]">
          {jobCards.map((card, i) => (
            <div key={i}>
              <JobCard attributes={card.attributes} bgType={jobCardBgType!} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
