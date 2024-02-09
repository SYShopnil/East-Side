import { formatDate } from '@src/utils';

interface IPublishedDate {
  publishedDate: string;
  videoDuration: string;
}
const PublishedDate = ({ publishedDate, videoDuration }: IPublishedDate) => {
  return (
    <div className="text-body/[.6] inline-flex items-center flex-row gap-[.375rem] mt-[0.9375rem] md:mt-0">
      <span>{formatDate(publishedDate, true)}</span>
      <span className="w-[3px] h-[3px] rounded-[100vmax] bg-body/[.6]"></span>
      <span>{videoDuration} min view</span>
    </div>
  );
};

export default PublishedDate;
