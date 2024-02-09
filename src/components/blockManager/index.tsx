import { manageBlock } from './block-manager';

const BlockManager = (blocks: any) => {
  let allBlocks = !!blocks && !!blocks.length && blocks.map(manageBlock);
  return allBlocks;
};
export default BlockManager;
