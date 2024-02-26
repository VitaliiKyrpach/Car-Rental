import svg from '../../img/sprite.svg';
import css from './MobileMenu.module.css'
import { UserNav } from "../UserNav/UserNav";

export const MobileMenu = ({open, setopen}) =>{
    return <div className={`${css.mobileMenu} ${open ? css.isOpen : ''}`}>
        <button type='button' className={css.close}>
            <svg className={css.closeSVG}
					onClick={setopen}
				>
					<use href={`${svg}#icon-x`}></use>
				</svg>
        </button>
        <UserNav page='menu' setOpen={setopen}/>
    </div>
}