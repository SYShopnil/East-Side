// External Imports
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';

// Internal Imports
import { Header } from '@src/components/compound';
import { menuItems, menuLinkColors } from './config';

// next/router mock
jest.mock('next/router', () => ({
  useRouter() {
    return {
      route: '/',
      pathname: '',
      query: '',
      asPath: '',
      push: jest.fn(),
    };
  },
}));

// Header
describe('Header', () => {
  // render Header
  it('renders a Header correctly', () => {
    render(<Header menuItems={menuItems} />);
    const menuLinkElement = screen.getAllByTestId('esc-menu-link');
    expect(menuLinkElement).toHaveLength(4);
  });

  // menu item color
  describe.each(menuLinkColors)('Header Menu Link color', (menuItemColor) => {
    it(`applies menu link correct color:${menuItemColor}`, () => {
      render(<Header menuItems={menuItems} menuItemColor={menuItemColor} />);
      const ulElement = screen.getByTestId('esc-menu');
      expect(ulElement).toHaveStyle(`--color:${menuItemColor}`);
    });
  });

  // Language Switch Radio Button Toggle
  describe('Language Switch Component', () => {
    it('Language Switch Toggle', () => {
      const { getByLabelText } = render(<Header menuItems={menuItems} />);
      const secondRadio = getByLabelText('DE');
      fireEvent.click(secondRadio);
      expect(secondRadio).toBeChecked();

      const firstRadio = getByLabelText('UK');
      fireEvent.click(firstRadio);
      expect(firstRadio).toBeChecked();
      expect(secondRadio).not.toBeChecked();
    });
  });

  // core service hover
  describe('Core Service Hover', () => {
    it('core service link mouseover pass active class', () => {
      const { getAllByTestId } = render(<Header menuItems={menuItems} />);
      const serviceLink = getAllByTestId('service-link')[1];
      const serviceTabPane = getAllByTestId('service-tab-pane')[1];
      fireEvent.mouseOver(serviceLink);
      expect(serviceLink).toHaveClass('active');
      expect(serviceTabPane).toHaveClass('active');
    });
  });
});
