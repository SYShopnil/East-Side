import React, { useState } from 'react';
import { IFooter } from '@src/types/compound';
import { IFormValues } from '@src/types/root';
import { HighlightTextWrapper, TriggerButton } from '@src/components/root';
import { useStateCurrent } from '@src/hooks/useStateCurrent';
import { fontColorSelector, dataValidation } from '@src/utils';

export const SubscriptionForm = ({
  bgType,
  footerSubTitle,
  footerTitle,
  subscriberNamePlaceholder,
  subscriberEmailAddressPlaceholder,
  subscriptionButtonText,
  subscriptionButtonSubmitUrl,
}: Pick<
  IFooter,
  | 'bgType'
  | 'footerTitle'
  | 'footerSubTitle'
  | 'subscriberNamePlaceholder'
  | 'subscriberEmailAddressPlaceholder'
  | 'subscriptionButtonText'
  | 'subscriptionButtonSubmitUrl'
>) => {
  const fontColor = fontColorSelector(bgType);

  const fieldNamesObj: IFormValues = {};
  const requiredFieldNames: IFormValues = {};
  const formFields = [{ name: `name` }, { name: `email` }];
  formFields.map(({ name }) => {
    fieldNamesObj[name] = '';
    requiredFieldNames[name] = `${
      name[0].toUpperCase() + name.slice(1)
    } is required`;
  });

  const [formValues, setFormValues] = useState<IFormValues>(fieldNamesObj);
  const [formErrors, setFormErrors, formErrorsRef] =
    useStateCurrent<IFormValues>({});

  const handleFormChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    const updatedForm = {
      ...formValues,
      [name]: value,
    };
    setFormValues(updatedForm);
  };

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormErrors(dataValidation(requiredFieldNames, formValues));
    if (Object.keys(formErrorsRef.current).length == 0) {
      alert(JSON.stringify(formValues));
      setFormValues({});
    }
  };

  const titleString: string[] = footerTitle ? footerTitle.split('<tg>') : [''];

  return (
    <form
      onSubmit={submitHandler}
      action={subscriptionButtonSubmitUrl}
      className="flex flex-col lg:flex-row justify-between"
      style={{ color: fontColor }}
      data-testid="footer-subscription-form"
    >
      <div className="mb-[3.25rem] lg:mb-0 flex flex-col lg:w-[50%]">
        <span
          className="text-[0.75rem] leading-[1rem] tracking-[0.2em] mb-[0.75rem] lg:mb-[0.3125rem] "
          data-testid="subscription-form-subTitle"
        >
          {footerSubTitle}
        </span>
        <h3 data-testid="subscription-form-title">
          {!!titleString &&
            !!titleString.length &&
            titleString.map((ele, ind) => {
              if (ind % 2 === 1) {
                return (
                  <span
                    key={ind}
                    className={`text-[1.75rem] lg:text-[3rem] leading-[2.5rem] lg:leading-[3.125rem] `}
                  >
                    <HighlightTextWrapper
                      ind={ind}
                      titleString={titleString}
                      bgType={bgType}
                    />
                  </span>
                );
              } else {
                return (
                  <span
                    key={ind}
                    className="text-[1.75rem] lg:text-[3rem] leading-[2.5rem] lg:leading-[3.125rem] font-medium"
                  >
                    {titleString[ind]}
                  </span>
                );
              }
            })}
        </h3>
      </div>
      <div className="w-full lg:w-[43.5%]">
        <div className="flex flex-col pb-[1.5625rem]">
          <input
            type={'text'}
            id={'name'}
            name={'name'}
            value={formValues['name'] ? formValues['name'] : ''}
            placeholder={subscriberNamePlaceholder}
            autoComplete="off"
            className="bg-transparent text-[0.75rem] leading-[1rem] tracking-[0.2em] pb-[1rem] border-solid border-b-[1px] border-white/[0.1] focus:outline-0 focus:shadow-none focus-visible:outline-0"
            data-testid="subscriber-name"
            onChange={handleFormChange}
          />
          {formErrors.name && (
            <span className="text-[red] md:text-[12px] text-[11px] mt-[8px]">
              {formErrors['name']}
            </span>
          )}
          <input
            type={'text'}
            id={'email'}
            name={'email'}
            value={formValues['email'] ? formValues['email'] : ''}
            placeholder={subscriberEmailAddressPlaceholder}
            autoComplete="off"
            className="bg-transparent text-[0.75rem] leading-[1rem] tracking-[0.2em] pb-[1rem] mt-[1.25rem] border-solid border-b-[1px] border-white/[0.1] focus:outline-0 focus:shadow-none focus-visible:outline-0"
            data-testid="subscriber-email"
            onChange={handleFormChange}
          />
          {formErrors.email && (
            <span className="text-[red] md:text-[12px] text-[11px] mt-[8px]">
              {formErrors['email']}
            </span>
          )}
        </div>
        <div className="text-center md:text-right md:block grid">
          <TriggerButton
            buttonText={subscriptionButtonText}
            colorScheme={'white_over_green'}
            data-testid="subscribe-button"
          />
        </div>
      </div>
    </form>
  );
};
