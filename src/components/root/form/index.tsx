// External Imports
import { useState } from 'react';
import Link from 'next/link';

// Internal Imports
import { FormField } from './form-field';
import { IFormValues, IFormData } from '@src/types/root';
import { dataValidation } from '@src/utils';
import { useStateCurrent } from '@src/hooks/useStateCurrent';
import { TriggerButton } from '@src/components/root/button/trigger-button';

// Form
export const Form = ({
  formTitle,
  formFields,
  buttonInfo,
  privacyInfo,
}: IFormData) => {
  const fieldNamesObj: IFormValues = {};
  const requiredFieldNames: IFormValues = {};
  !!formFields &&
    !!formFields.length &&
    formFields.map(({ name, isRequired }) => {
      fieldNamesObj[name] = '';
      if (isRequired) {
        requiredFieldNames[name] = `${
          name[0].toUpperCase() + name.slice(1)
        } is required`;
      }
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

  // submitHandler
  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormErrors(dataValidation(requiredFieldNames, formValues));
    if (Object.keys(formErrorsRef.current).length == 0) {
      alert(JSON.stringify(formValues));
      setFormValues({});
    }
  };
  return (
    <form
      className="bg-white shadow-[0_4px_34px_rgba(0,0,0,.15)] rounded-[.25rem] py-[2.25rem] px-[1.875rem] md:p-[3.75rem] form grid gap-[.75rem]"
      onSubmit={submitHandler}
    >
      {formTitle && (
        <div>
          <h3 className="text-[1rem] leading-[1.5] font-normal text-center md:text-[1.25rem] md:text-left line-clamp line-clamp-1">
            {formTitle}
          </h3>
        </div>
      )}

      {formFields &&
        formFields.map((field, index) => (
          <div key={index}>
            {field?.label && (
              <label
                className="md:text-base text-sm  text-body"
                htmlFor={field?.name}
              >
                {field?.label}
              </label>
            )}
            <FormField
              id={field?.name}
              tagType={field?.tagType}
              type={field?.type}
              name={field?.name}
              value={formValues[field?.name] ? formValues[field?.name] : ''}
              placeholder={field?.placeholder}
              isRequired={field?.isRequired}
              onChange={handleFormChange}
            />
            {formErrors && (
              <p className="text-[red] md:text-[12px] text-[11px] mt-[8px]">
                {formErrors[field?.name]}
              </p>
            )}
          </div>
        ))}

      {privacyInfo && (
        <div className="mt-[15px]">
          <Link href={`${privacyInfo?.link}`} passHref>
            <a className="inline-flex focus:outline-0 focus:shadow-none focus-visible:outline-0 md:text-xs text-[10px] text-body underline uppercase transition-colors duration-300 hover:text-primary">
              {privacyInfo?.linkText}
            </a>
          </Link>
        </div>
      )}

      {!!buttonInfo && buttonInfo.buttonText && (
        <div className="mt-[18px] grid">
          <TriggerButton {...buttonInfo!} />
        </div>
      )}
    </form>
  );
};
