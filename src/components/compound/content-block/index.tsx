import { IContentBlock } from '@src/types/compound';
import ContentBlockHead from './content-block-head';
import ContentBlockList from './content-block-list';

export const ContentBlock = (props: IContentBlock) => {
  const { blockType, ...rest } = props;

  return (
    <div>
      {blockType === 'list' ? (
        <ContentBlockList {...rest} />
      ) : (
        <ContentBlockHead {...rest} />
      )}
    </div>
  );
};
