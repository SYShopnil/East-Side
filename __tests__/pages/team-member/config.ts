const heroProps = {
  bgType: 'gradient_blue',
  subTitle: 'Say hello to',
  memberName: 'Jason Stokes',
  designation: 'CEO & Founder',
  description:
    'With over a decade in the ecommerce industry and a wealth of knowledge, ESC Founder and CEO, Jason, has so far helped hundreds of businesses grow and thrive.',
  linkedInUrl: 'https://www.example.com/',
  memberImageUrl:
    'https://gist.githubusercontent.com/Salman-Badhon/4c473ac29654351e54bcb32e5165beea/raw/081a8ef71ca16929e59155e9d1f72a64022a371c/team-member-1.svg',
  memberImageAlt: 'CEO & Founder - Jason Stokes',
};

const heroTextConfig = [
  {
    elementName: 'Sub Title',
    testId: 'sub-title',
    expectedText: 'Say hello to',
  },
  {
    elementName: 'Member Name',
    testId: 'member-name',
    expectedText: 'Jason Stokes',
  },
  {
    elementName: 'Designation',
    testId: 'designation',
    expectedText: 'CEO & Founder',
  },
  {
    elementName: 'Description',
    testId: 'description',
    expectedText:
      'With over a decade in the ecommerce industry and a wealth of knowledge, ESC Founder and CEO, Jason, has so far helped hundreds of businesses grow and thrive.',
  },
];

export { heroProps, heroTextConfig };
