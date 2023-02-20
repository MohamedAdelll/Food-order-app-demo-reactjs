import style from './Header.module.css'
import HeaderCartButton from './HeaderCartButton'
import mealsImage from '../../assets/meals.jpg'
export default function Header(){
    return (<>
        <header className={style.header}>
          <h1>ReactMeals</h1>
          <HeaderCartButton />
        </header>
        <div className={style['main-image']}>
          <img src={mealsImage} alt='A table full of delicious food!' />
        </div>
      </>)
    }