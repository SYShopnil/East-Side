// formFields
export const formFields = [
  {
    tagType: 'input',
    type: 'text',
    name: 'name',
    placeholder: 'Your name',
    isRequired: true,
  },
  {
    tagType: 'input',
    type: 'text',
    name: 'email',
    placeholder: 'Email address',
    isRequired: true,
  },
  {
    tagType: 'input',
    type: 'text',
    name: 'phone',
    placeholder: 'Phone number',
    isRequired: false,
  },
  {
    tagType: 'textarea',
    name: 'projectRequirement',
    placeholder: 'Your Project requirement',
    isRequired: true,
  },
];

// buttonInfo
export const buttonInfo = {
  buttonText: 'Let’s talk',
};
// linkInfo
export const linkInfo = {
  link: '/',
  linkText: 'Privacy policy',
};

// formTitle
export const formTitle = 'Getting in touch is easy...';

// placeholderTexts
export const placeholderTexts = formFields.map(
  ({ tagType, placeholder, isRequired }) => {
    return [tagType, placeholder, isRequired];
  }
);
