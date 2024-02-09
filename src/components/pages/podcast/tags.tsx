interface ITags {
  metaTags: {
    attributes: {
      tag: string;
    };
  }[];
}

const Tags = ({ metaTags }: ITags) => {
  return (
    <div className="flex  items-center flex-wrap gap-[0.625rem] mt-[1.5rem] md:mt-0">
      {metaTags.map((metaTag: any, index: number) => {
        return (
          <span
            key={index}
            className="p-[0.25rem_0.6875rem] min-h-[1.875rem] bg-[#f9f9f9] backdrop-blur-[0.125rem] rounded-[0.25rem] inline-flex items-center justify-center"
          >
            {metaTag?.attributes?.tag}
          </span>
        );
      })}
    </div>
  );
};

export default Tags;
