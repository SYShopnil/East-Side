import BlockManager from '.';

const BlockManagerComp = ({ blockData }: { blockData: any }) => {
  return <div>{BlockManager(blockData)}</div>;
};
export default BlockManagerComp;
