import dynamic from 'next/dynamic';
import Loading from '@src/components/root/loading';
import { ICtaLink } from '@src/types/root/cta-link';

export default function Custom500() {
  const CtaLink = dynamic<ICtaLink>(
    import('@src/components/root/cta-link').then((module) => module.CtaLink),
    { loading: () => <Loading /> }
  );
  return (
    <section className="container flex flex-col items-center h-screen justify-center text-center">
      <h1 className={`text-xl md:text-4xl font-semibold mt-[2.5rem]`}>
        500 | Server-side error occured
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
