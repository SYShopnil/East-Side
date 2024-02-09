const numToMonth = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'Semtember',
  'October',
  'November',
  'December',
];

export const formatDate = (t: string, showYear: boolean = false) => {
  const [y, m, d] = t.split('T')[0].split('-');
  if (showYear) return `${d} ${numToMonth[parseInt(m) - 1]} ${y}`;
  return `${numToMonth[parseInt(m) - 1]} ${d}`;
};

export const formatTime = (time: string) => {
  const w: any = time.split(':');
  if (w[0] === '00') {
    return `12:${w[1]} AM`;
  } else if (w[0] === '12') {
    return `12:${w[1]} PM`;
  } else if (w[0] - 12 < 0) {
    return `${w[0]}:${w[1]} AM`;
  } else {
    return `${w[0] - 12}:${w[1]} PM`;
  }
};
