import { HeroService } from '@src/components/compound/hero-section/heroService';
import Loading from '@src/components/root/loading';
import dynamic from 'next/dynamic';
const BlockManagerComp = dynamic(
  () => import('@src/components/blockManager/block-manager-comp'),
  { loading: () => <Loading /> }
);
const ServicePage = ({ pageData }: { pageData: any }) => {
  return (
    <>
      <HeroService {...pageData.attributes.block[0]} />
      <div className="pt-[70px]">
        <BlockManagerComp blockData={pageData.attributes.block} />{' '}
      </div>
    </>
  );
};

export default ServicePage;
