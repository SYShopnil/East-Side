/**
 * @method gradientGenerator
 * @param {string} txt
 * @returns {string}
 * @description this function will receive markdown txt and return gradient text style
 */


function gradientGenerator(txt: string, grnt: string) {
  return `<span style="background-image:${grnt};   -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;">
${txt}
</span>`;
}

export function textGradientGenerator(longString: string, grnt: string) {

  const txt: string[] = longString ? longString.split('&lt;tg&gt;') : [''];
  txt.map((item, i) => {
    if (i % 2 == 1) {
      txt[i] = gradientGenerator(item, grnt);
    }
  });

  return txt.join('');
}
