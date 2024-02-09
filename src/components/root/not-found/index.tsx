import Image from 'next/image';

const NotFoundData = () => {
  return (
    <div className="w-full p-20 flex flex-col gap-3 justify-center items-center">
      <Image src="/assets/box-50.png" alt="No Data" height={50} width={50} />
      <p className="text-[18px]">No Data Found</p>
    </div>
  );
};
export default NotFoundData;
