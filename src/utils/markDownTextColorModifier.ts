import showdown from 'showdown';
export function markDownTextColorModifier(longString: string, color: string) {
  const isServer = typeof window === 'undefined';
  if (isServer) return null;
  let converter = new showdown.Converter();
  let html: string = converter.makeHtml(longString);
  var wrapper = document.createElement('div');
  wrapper.setAttribute('id', 'wrapper');
  wrapper.innerHTML = html;
  // var code = document.('language-javascript');
  let style = document.createElement('style');
  let codeStyle = document.createElement('codeStyle');
  style.innerHTML = `
    #wrapper *{
    margin-top: 0;
    color: ${color};
    }
    #wrapper [class^="language"] {
      color: #fff;
    }
`;
  wrapper.prepend(style);
  return wrapper.outerHTML;
}
