import { CustomCardList } from '@src/components/compound';
import { buttonInfo, formFields } from '@src/components/root/form/data';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Components/Compound/Custom Card List',
  component: CustomCardList,
  argTypes: {
    title: {
      control: 'text',
      description: 'Section title',
    },
    cardLogoPosition: {
      control: 'select',
      options: ['left', 'top'],
    },
    subTitle: {
      control: 'text',
      description: 'Section sub - title',
    },
    showItemsCount: {
      control: 'boolean',
    },
    differentLastItem: {
      control: 'boolean',
    },
  },
} as ComponentMeta<typeof CustomCardList>;

const Template: ComponentStory<typeof CustomCardList> = (args) => (
  <CustomCardList {...args} />
);

export const OpenPositions = Template.bind({});
OpenPositions.args = {
  bgType: 'default',
  subTitle: 'OPEN positions',
  title: 'Join our amazing team!',
  jobCards: [
    {
      bgType: 'gradient_green',
      title: 'FRONT END DEVELOPER',
      subTitle: 'FRONT END | WEBSITE | DEVELOPER',
    },
    {
      bgType: 'gradient_green',
      title: 'BACK END DEVELOPER',
      subTitle: 'BACK END | DEVELOPMENT | APPS',
    },
    {
      bgType: 'gradient_green',
      title: 'MARKETING EXECUTIVE',
      subTitle: 'MARKETING | COMMERCIAL',
    },
  ],
};

export const AppList = Template.bind({});
AppList.args = {
  bgType: 'default',
  title: 'Our Apps',
  showItemsCount: true,
  cardLogoPosition: 'left',
  differentLastItem: true,
  items: [
    {
      subTitle: 'Size Matters',
      description:
        'If your store sells products in different sizes, this app is for you. Whether it’s clothes or curtains, posters or pendants. Size Matters allows you to create and manage size guides for all of your products.',
      isSlider: false,
      ctaLink: {
        ctaText: 'discover more',
        ctaLink: 'https://www.example.com/',
      },
      logo: 'https://gist.githubusercontent.com/Salman-Badhon/bb6c2d491f5076c95dbe35dadcf1eb05/raw/ad082f680472ff02f817e14d90af3fb4be16efc0/size.svg',
    },
    {
      subTitle: 'Wishlist + Save for Later',
      description:
        'Customers can create and share multiple wishlists on social media to increase visibility of your brand and products, and you’ll have data insights about which products are being saved and shared. ',
      isSlider: false,
      ctaLink: {
        ctaText: 'discover more',
        ctaLink: 'https://www.example.com/',
      },
      logo: 'https://gist.githubusercontent.com/Salman-Badhon/bb6c2d491f5076c95dbe35dadcf1eb05/raw/ad082f680472ff02f817e14d90af3fb4be16efc0/wishlist.svg',
    },
    {
      subTitle: 'Turbo SEO',
      description:
        'Instantly make your store stand out from the competition with one click. TurboSEO adds JSON-LD compliant markup to your store which enriches your search engine results.',
      isSlider: false,
      ctaLink: {
        ctaText: 'discover more',
        ctaLink: 'https://www.example.com/',
      },
      logo: 'https://gist.githubusercontent.com/Salman-Badhon/bb6c2d491f5076c95dbe35dadcf1eb05/raw/ad082f680472ff02f817e14d90af3fb4be16efc0/turbo-seo.svg',
    },
    {
      subTitle: 'Contact Form Builder',
      description:
        'Create contact forms exactly as you want them! Choose text fields, file uploads, dropdowns, checkboxes and radio buttons. ',
      isSlider: false,
      ctaLink: {
        ctaText: 'discover more',
        ctaLink: 'https://www.example.com/',
      },
      logo: 'https://gist.githubusercontent.com/Salman-Badhon/bb6c2d491f5076c95dbe35dadcf1eb05/raw/ad082f680472ff02f817e14d90af3fb4be16efc0/contact-form-builder.svg',
    },
    {
      subTitle: 'Easy Redirects',
      description:
        'Increase productivity by creating 301 redirects in bulk. Automatically detect and fix 404s to protect your SEO performance.',
      isSlider: false,
      ctaLink: {
        ctaText: 'discover more',
        ctaLink: 'https://www.example.com/',
      },
      logo: 'https://gist.githubusercontent.com/Salman-Badhon/bb6c2d491f5076c95dbe35dadcf1eb05/raw/ad082f680472ff02f817e14d90af3fb4be16efc0/redirects.svg',
    },
    {
      subTitle: 'Cart Convert',
      description:
        'Cart Convert enables you to increase average order values by providing intelligent context-based cross sell and upsell product recommendations.',
      isSlider: false,
      ctaLink: {
        ctaText: 'discover more',
        ctaLink: 'https://www.example.com/',
      },
      logo: 'https://gist.githubusercontent.com/Salman-Badhon/bb6c2d491f5076c95dbe35dadcf1eb05/raw/ad082f680472ff02f817e14d90af3fb4be16efc0/cart.svg',
    },
    {
      subTitle: 'Back in Stock & Restock Alerts',
      description:
        'Reduce lost sales by enabling customers to get email and SMS alerts when out of stock items are back in your store.',
      isSlider: false,
      ctaLink: {
        ctaText: 'discover more',
        ctaLink: 'https://www.example.com/',
      },
      logo: 'https://gist.githubusercontent.com/Salman-Badhon/bb6c2d491f5076c95dbe35dadcf1eb05/raw/ad082f680472ff02f817e14d90af3fb4be16efc0/alert.svg',
    },
    {
      subTitle: 'Visit our app store',
      description: 'Lorem ipsum dolar sit amet consectetur adispicing elit.',
      isSlider: false,
      ctaLink: {
        ctaText: 'visit app store',
        ctaLink: 'https://www.example.com/',
      },
    },
  ],
};

export const BenefitsList = Template.bind({});
BenefitsList.args = {
  bgType: 'default',
  title: 'Benefits',
  cardLogoPosition: 'top',
  items: [
    {
      subTitle: 'Holiday',
      description:
        'We provide 25 days of holiday as a baseline for all employees, plus bank holidays and Christmas week off.',
      isSlider: false,
      logo: 'https://gist.githubusercontent.com/Salman-Badhon/bb6c2d491f5076c95dbe35dadcf1eb05/raw/bec6975afa6a09258ea183a02edf7d46d8f43152/holiday.svg',
    },
    {
      subTitle: 'Pension',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus cursus posuere arcu elementum elementum. Maecenas fringilla magna',
      isSlider: false,
      logo: 'https://gist.githubusercontent.com/Salman-Badhon/bb6c2d491f5076c95dbe35dadcf1eb05/raw/bec6975afa6a09258ea183a02edf7d46d8f43152/pension.svg',
    },
    {
      subTitle: 'Private Health Insurance',
      description:
        'Private health insurance offering after 6 months. Includes counselling sessions, mental health treatment, therapies and much more.',
      isSlider: false,
      logo: 'https://gist.githubusercontent.com/Salman-Badhon/bb6c2d491f5076c95dbe35dadcf1eb05/raw/bec6975afa6a09258ea183a02edf7d46d8f43152/insurance.svg',
    },
    {
      subTitle: 'Flexible and Remote working',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus cursus posuere arcu elementum elementum. Maecenas fringilla magna',
      isSlider: false,
      logo: 'https://gist.githubusercontent.com/Salman-Badhon/bb6c2d491f5076c95dbe35dadcf1eb05/raw/bec6975afa6a09258ea183a02edf7d46d8f43152/remote-working.svg',
    },
    {
      subTitle: 'Progression plans',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus cursus posuere arcu elementum elementum. Maecenas fringilla magna',
      isSlider: false,
      logo: 'https://gist.githubusercontent.com/Salman-Badhon/bb6c2d491f5076c95dbe35dadcf1eb05/raw/bec6975afa6a09258ea183a02edf7d46d8f43152/progression-plan.svg',
    },
    {
      subTitle: 'Maternity and Paternity Leave',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus cursus posuere arcu elementum elementum. Maecenas fringilla magna',
      isSlider: false,
      logo: 'https://gist.githubusercontent.com/Salman-Badhon/bb6c2d491f5076c95dbe35dadcf1eb05/raw/bec6975afa6a09258ea183a02edf7d46d8f43152/maternity-leave.svg',
    },
    {
      subTitle: 'Gym discount',
      description: '40% off at Nuffield Health and Hussle gym memberships,',
      isSlider: false,
      logo: 'https://gist.githubusercontent.com/Salman-Badhon/bb6c2d491f5076c95dbe35dadcf1eb05/raw/bec6975afa6a09258ea183a02edf7d46d8f43152/gym.svg',
    },
    {
      subTitle: 'Social events',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus cursus posuere arcu elementum elementum. Maecenas fringilla magna',
      isSlider: false,
      logo: 'https://gist.githubusercontent.com/Salman-Badhon/bb6c2d491f5076c95dbe35dadcf1eb05/raw/bec6975afa6a09258ea183a02edf7d46d8f43152/events.svg',
    },
  ],
};

export const AppInfo = Template.bind({});
AppInfo.args = {
  bgType: 'default',
  items: [
    {
      subTitle: 'Easy to Install',
      description:
        'We’ve made the installation process for Cart Convert as easy as possible. Follow the step by step instructions to add the snippet to your store code. Our marketing team managed to do this successfully and unsupervised, and they really don’t like code… \nBut if you’d rather not tinker with your website’s internal workings, email us and we’ll get Cart Convert up and running for you.',
      isSlider: false,
    },
    {
      subTitle: 'Sell more, sell higher',
      description:
        'Customers with items in their cart are showing strong buying signals, so maximise this opportunity to cross-sell and upsell related products relevant to their purchase. For example, a customer buys a wool jumper, so you might upsell to a more expensive item by recommending a cashmere jumper, or cross sell them a matching scarf.',
      isSlider: false,
    },
    {
      subTitle: 'Spend threshold offers',
      description:
        'Everyone likes to get good value, and paying for shipping can be a turn off for customers, particularly if merchants have to pass on high delivery costs. But if you offer free shipping based on a minimum spend, Cart Convert can present recommended products that will help them meet the free delivery requirements. It almost feels like something for nothing, and customers get a tangible item for their spend rather than a simple shipping charge.',
      isSlider: false,
    },
    {
      subTitle: 'Performance and analytics',
      description:
        'You get useful performance analytics with Cart Convert, to give you a clear overview of the additional revenue the app is generating. You can see how many product recommendations the app has presented to customers, your earnings from Cart Convert, and the conversion rate of those offers. You also get a summary of the number of products added to cart from Cart Convert recommendations, as well as the potential earnings of those products.',
      isSlider: false,
    },
    {
      subTitle: 'Choose where to present your offers',
      description:
        'You can present your Cart Convert offers on product pages, so you’re showing related upsell or cross sell products at the point of selection, or you can put the Cart Convert offer on the cart page, so customers can see their cart total and then choose to add another product or upgrade to a better version.',
      isSlider: false,
    },
    {
      subTitle: 'Unlimited cart offers',
      description:
        'Cart Convert gives you the flexibility to create as many offers as you like - great if you have an extensive or complex product range, or want a variety of spend threshold offers to present to customers.',
      isSlider: false,
    },
    {
      subTitle: 'Offer Simulator',
      description:
        'Test your offers against different customers and other variables to see what products Cart Convert will recommend. It’s easy to see if any changes need to be made before you go live with new offers, or to see what products your current offers are recommending.',
      isSlider: false,
    },
    {
      subTitle: 'Customise your offer text',
      description:
        'We include standard default text for your pop ups and onpage product recommendations, but you can change these in the settings quickly and easily to suit your brand and how you prefer to speak to your customers.',
      isSlider: false,
    },
  ],
};
