import {
  fontColorSelector,
  highlightedTextStyleSelector,
  textGradientGenerator,
} from '@src/utils';
import { markDownTextColorModifier } from '@src/utils/markDownTextColorModifier';
import gfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import dynamic from 'next/dynamic';
const ReactMarkdown = dynamic<any>(
  import('react-markdown').then((module) => module.default)
);

const MarkdownComp = ({ bgType, content }: { bgType: any; content: any }) => {
  const highlightedTextStyle = highlightedTextStyleSelector(bgType);
  return (
    <ReactMarkdown
      remarkPlugins={[gfm] as any}
      rehypePlugins={[rehypeRaw] as any}
      className="prose max-w-full text-justify"
    >
      {textGradientGenerator(
        markDownTextColorModifier(content!, fontColorSelector(bgType!)!)!,
        highlightedTextStyle!
      )}
    </ReactMarkdown>
  );
};
export default MarkdownComp;
