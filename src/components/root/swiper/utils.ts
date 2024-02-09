export const findSpaceBetween = (value: number | undefined) => {
  return {
    sm: value,
    md: value,
    lg: value,
    xl: value,
  };
};

export const findShowItems = (value: string | undefined) => {
  switch (value) {
    case 'sm_1_1_md_1_5_lg_2_25_xl_3_25':
      return {
        sm: 1.1,
        md: 1.5,
        lg: 2.25,
        xl: 3.25,
      };
    case 'sm_1_2_md_3_lg_4_xl_4':
      return {
        sm: 1.2,
        md: 3,
        lg: 4,
        xl: 4,
      };
    case 'sm_1_2_md_2_lg_2_7_xl_3_14':
      return {
        sm: 1.2,
        md: 2,
        lg: 2.7,
        xl: 3.14,
      };
    case 'sm_1_2_md_2_lg_2_5_xl_3':
      return {
        sm: 1.2,
        md: 2,
        lg: 2.5,
        xl: 3,
      };
    default:
      return {
        sm: 1.2,
        md: 2,
        lg: 4.5,
        xl: 5.5,
      };
  }
};
