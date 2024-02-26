import css from './UserNav.module.css'
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectFavorites } from "../../redux/catalogSelectors";

export const UserNav = ({page, setOpen}) =>{
    const classNameFunc = ({ isActive }) =>
            `${css.link} ${isActive && css.linkActive}`;
    const favorites = useSelector(selectFavorites);
    return <div className={`${css.navBar} ${page === 'wide' && css.wide}`}>
						<NavLink className={classNameFunc}  onClick={page==='menu' && setOpen} to="/">
							Home
						</NavLink>
						<NavLink className={classNameFunc}  onClick={page==='menu' && setOpen} to="/catalog">
							Catalog
						</NavLink>
						<NavLink
							className={
								favorites.length ? classNameFunc : css.disabled
							}  onClick={page==='menu' && setOpen}
							to="/favorites"
						>
							Favorites
						</NavLink>
					</div>
}