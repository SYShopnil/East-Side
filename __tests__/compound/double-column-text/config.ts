const longString = ` ## Overview

* @Follows@ [CommonMark](https://commonmark.org)
* Optionally follows [GitHub Flavored Markdown](https://github.github.com/gfm/)
* Renders actual React elements instead of using dangerouslySetInnerHTML
* Lets you define your own components (to render MyHeading instead of h1)
* Has a lot of plugins `;

const doubleColumnTextConfigs = [
  {
    bgType: 'gradient_blue',
    title: 'Need help with your app?',
    subText: 'SUPPORT',
    firstColumn: longString,
    secondColumn: longString,
    // cta-button
    ctaLink: {
      ctaLink:
        'https://gist.githubusercontent.com/asiful088/a997247cab192a58d236e3fe326cb444/raw/caa6ee76108c7b2ef960b351884691b25607ea08/audit.svg',
      ctaText: 'Let’s start planning',
      // ctaText: '',
      parentBgType: 'black',
    },
  },
];

export { doubleColumnTextConfigs };
