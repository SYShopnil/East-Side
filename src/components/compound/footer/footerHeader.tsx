import { Form } from '@src/components/root/form';
import { IFooterHeader } from '@src/types/compound';

export const FooterHeader = ({
  footerHeadTitle,
  footerHeadSubtitle,
  footerHeadDescription,
  formTitle,
  formFields,
  formButtonText,
  formButtonLink,
}: IFooterHeader) => {
  const titleString: string[] = footerHeadTitle
    ? footerHeadTitle.split('<tb>')
    : [''];

  return (
    <div>
      <div className="lg:container">
        <div className="flex flex-col gap-[30px] lg:flex-row lg:items-center">
          {/*  top  */}
          <div className="container">
            <span className="text-[14px] leading-[21px] tracking-[0.2em] lg:leading-[16px] uppercase">
              {footerHeadSubtitle}
            </span>

            <h2>
              {!!titleString &&
                titleString.length &&
                titleString.map((ele, ind) => {
                  if (ind % 2 === 1) {
                    return (
                      <span
                        key={ind}
                        className="mt-[10px] text-[36px] leading-[39px] lg:text-[70px] lg:leading-[74px] font-bold"
                      >
                        {' ' + titleString[ind] + ' '}
                      </span>
                    );
                  } else {
                    return (
                      <span
                        key={ind}
                        className="mt-[10px] text-[36px] leading-[39px] lg:text-[70px] lg:leading-[74px]"
                      >
                        {titleString[ind]}
                      </span>
                    );
                  }
                })}
            </h2>

            <p className="mt-[30px] text-[16px] leading-[24px] lg:text-[20px] lg:leading-[30px]">
              {footerHeadDescription}
            </p>
          </div>

          {/*  bottom */}
          <div className="lg:w-[60%] lg:translate-y-[150px]">
            <Form
              formTitle={formTitle}
              formFields={formFields}
              buttonInfo={{ buttonText: formButtonText }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
