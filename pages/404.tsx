import dynamic from 'next/dynamic';
import Loading from '@src/components/root/loading';
import { ICtaLink } from '@src/types/root/cta-link';

export default function Custom404() {
  const CtaLink = dynamic<ICtaLink>(
    import('@src/components/root/cta-link').then((module) => module.CtaLink),
    { loading: () => <Loading /> }
  );
  return (
    <section className="container flex flex-col items-center h-screen justify-center  text-center">
      <h1 className={`text-xl md:text-4xl font-semibold mt-[2.5rem]`}>
        404 | Page Not Found
      </h1>
      <div className={`mt-[2.5rem]`}>
        <CtaLink
          ctaText={'Back to Home Page'}
          ctaLink={'/'}
          parentBgType={'white'}
        />
      </div>
    </section>
  );
}
