import { HeroQuaternary } from '@src/components/compound/hero-section/heroQuaternary';
import Loading from '@src/components/root/loading';
import dynamic from 'next/dynamic';
const BlockManagerComp = dynamic(
  () => import('@src/components/blockManager/block-manager-comp'),
  { loading: () => <Loading /> }
);
const CaseStudyPage = ({ pageData }: { pageData: any }) => {
  const { heroSection, block } = pageData?.attributes;
  return (
    <>
      <section>
        <HeroQuaternary
          {...heroSection}
          logoUrl={heroSection.logo}
          bgImageUrl={heroSection.bgImage}
          featuredImageUrl={heroSection.featuredImage}
        />
      </section>
      <BlockManagerComp blockData={block} />
    </>
  );
};
export default CaseStudyPage;
