import { HamburgerIcon } from '../icons/hamburger';
import { HamburgerClose } from '../icons/hamburger-close';
import Styles from './index.module.scss';

interface IProps {
  onClick: () => void;
  isOpen: boolean;
  isWhite: boolean;
}
/**
 *
 * @param {object}
 * @returns IProps
 */
export const MenuToggler = ({ onClick, isOpen, isWhite }: IProps) => {
  return (
    <div
      className={`${
        isWhite ? '' : Styles['blue']
      } inline-flex items-center justify-center leading-[1] w-[40px] h-[40px]  rounded-[100vmax] text-black bg-white backdrop-blur-[5px] cursor-pointer`}
      onClick={onClick}
    >
      {isOpen ? <HamburgerIcon /> : <HamburgerClose />}
    </div>
  );
};
