// Internal Imports
import { IFormField } from '@src/types/root';

// FormField
export const FormField = ({
  id,
  tagType,
  type,
  name,
  value,
  onChange,
  isRequired,
  placeholder,
}: IFormField) => {
  // common attributes
  const attributes = {
    id,
    name,
    value,
    onChange,
    placeholder: isRequired ? placeholder + '*' : placeholder,
    autoComplete: 'Off',
  };

  //for input tag
  if (tagType === 'input') {
    return (
      <input
        className="block p-[24px_0] w-full focus:outline-0 focus:shadow-none focus-visible:outline-0 md:text-xs text-[10px] text-body placeholder:uppercase placeholder:tracking-[.2em] placeholder:text-body border-b-[1px] border-b-black/[.1]"
        type={type}
        {...attributes}
      />
    );
  }
  //for textarea tag
  else {
    return (
      <textarea
        className="block resize-none p-[24px_0] w-full min-h-[120px] md:min-h-[150px] focus:outline-0 focus:shadow-none md:text-xs text-[10px] text-body placeholder:uppercase placeholder:tracking-[.2em] placeholder:text-body border-b-[1px] border-b-black/[.1]"
        {...attributes}
      />
    );
  }
};
