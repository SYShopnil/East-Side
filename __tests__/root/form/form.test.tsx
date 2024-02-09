// External Imports
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';

// Internal Imports
import { Form } from '@src/components/root';
import { formTitle, formFields, buttonInfo } from './config';

// Form:Incomplete (submit, validation),only change event with static data
describe('Form', () => {
  // render form
  it('renders a form correctly', () => {
    render(
      <Form
        formTitle={formTitle}
        formFields={formFields}
        buttonInfo={buttonInfo}
      />
    );
    const HeadingElement = screen.getByRole('heading');
    expect(HeadingElement).toBeInTheDocument();
  });

  // name
  it('name value change event', () => {
    const { getByPlaceholderText } = render(
      <Form
        formTitle={formTitle}
        formFields={formFields}
        buttonInfo={buttonInfo}
      />
    );

    const name = getByPlaceholderText(/your name\*/i) as HTMLInputElement;
    fireEvent.change(name, { target: { value: 'name' } });
    expect(name.value).toBe('name');
  });

  //email
  it('email value change event', () => {
    const { getByPlaceholderText } = render(
      <Form
        formTitle={formTitle}
        formFields={formFields}
        buttonInfo={buttonInfo}
      />
    );

    const email = getByPlaceholderText(/email address\*/i) as HTMLInputElement;
    fireEvent.change(email, { target: { value: 'test@gmail.com' } });
    expect(email.value).toBe('test@gmail.com');
  });

  //phone number
  it('phone number value change event', () => {
    const { getByPlaceholderText } = render(
      <Form
        formTitle={formTitle}
        formFields={formFields}
        buttonInfo={buttonInfo}
      />
    );
    const phone = getByPlaceholderText(/phone number/i) as HTMLInputElement;
    fireEvent.change(phone, { target: { value: '123456789' } });
    expect(phone.value).toBe('123456789');
  });

  //project requirement
  it('project requirement value change event', () => {
    const { getByPlaceholderText } = render(
      <Form
        formTitle={formTitle}
        formFields={formFields}
        buttonInfo={buttonInfo}
      />
    );
    const projectReq = getByPlaceholderText(
      /your project requirement\*/i
    ) as HTMLInputElement;
    fireEvent.change(projectReq, {
      target: { value: 'project requirement' },
    });
    expect(projectReq.value).toBe('project requirement');
  });
});
