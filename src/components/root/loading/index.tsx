import Styles from './loading.module.css';
const Loading = () => {
  return (
    <div className="w-full p-20 flex flex-col gap-3 justify-center items-center">
      <p className={`${Styles['loader']}`}>.... loading ....</p>
    </div>
  );
};
export default Loading;
