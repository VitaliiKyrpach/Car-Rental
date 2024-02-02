import css from './CatalogItem.module.css'
import svg from '../../img/sprite.svg'
export const CatalogItem = ({data}) =>{
    const address = data.address.split(', ')
    return <li className={css.card}>
        <svg className={css.cardHeart}>
            <use href={`${svg}#icon-heart`}></use>
        </svg>
        <div className={css.imgWrapper}>
        <img className={css.cardImg} src={data.img} alt="car" />
        </div>
        <div className={css.titleWrapper}>
            <h2 className={css.cardTitle}>{data.make} <span className={css.colorAccent}>{data.model},</span> {data.year}</h2>
            <p>{data.rentalPrice}</p>
        </div>
        <div className={css.infoWrapper}>
        <ul className={css.infoList}>
            <li className={css.infoItem}>{address[1]}</li>
            <li className={css.infoItem}>{address[2]}</li>
            <li className={css.infoItem}>{data.rentalCompany}</li>
            <li className={css.infoItem}>Premium</li>
            
        </ul>
        <ul className={css.infoList}>
        <li className={css.infoItem}>{data.type}</li>
            <li className={css.infoItem}>{data.make}</li>
            <li className={css.infoItem}>{data.mileage}</li>
            <li className={`${css.infoItem} ${css.accessories}`}>{data.accessories[0]}</li>
        </ul>
        </div>
        <button type="button" className={css.cardBtn}>Learn more</button>
    </li>
}