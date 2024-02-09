import { RedirectButton } from '@src/components/root/button/redirect-button';
import { IContentBlock } from '@src/types/compound';
import { fontColorSelector } from '@src/utils';

const ContentBlockHead = (props: IContentBlock) => {
  const {
    sectionBgType = 'default',
    title,
    subTitle,
    description,
    button,
  } = props;

  return (
    <div
      className="flex flex-col"
      style={{
        color: fontColorSelector(sectionBgType),
        transition: '500ms ease',
      }}
    >
      <span
        className="text-sm leading-4 tracking-[0.1em] uppercase"
        data-testid="content-block-subtitle"
        style={{
          color: fontColorSelector(sectionBgType),
          transition: '500ms ease',
        }}
      >
        {subTitle}
      </span>
      <h2
        style={{
          color: fontColorSelector(sectionBgType),
          transition: '500ms ease',
        }}
        className="text-[24px] leading-[36px] lg:text-[36px] lg:leading-[54px]  mt-[12px] lg:mt-[4px] "
        data-testid="content-block-title"
      >
        {title}
      </h2>
      <p
        className="text-[16px] leading-[28px]  mt-[11px] lg:mt-[17px]"
        data-testid="content-block-description"
        style={{
          color: fontColorSelector(sectionBgType),
          transition: '500ms ease',
        }}
      >
        {description}
      </p>
      {!!button && button.buttonText && (
        <div
          className="mt-[33px] mx-auto lg:mx-0"
          data-testid="content-block-button"
        >
          <RedirectButton {...button} />
        </div>
      )}
    </div>
  );
};

export default ContentBlockHead;
