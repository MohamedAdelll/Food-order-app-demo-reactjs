import style from './MenuList.module.css'

import MenuItem from "./MenuItem/MenuItem";
import Card from '../UI/Card';

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Sushi',
    description: 'Finest fish and veggies',
    price: 22.99,
  },
  {
    id: 'm2',
    name: 'Schnitzel',
    description: 'A german specialty!',
    price: 16.5,
  },
  {
    id: 'm3',
    name: 'Barbecue Burger',
    description: 'American, raw, meaty',
    price: 12.99,
  },
  {
    id: 'm4',
    name: 'Green Bowl',
    description: 'Healthy...and green...',
    price: 18.99,
  },
];

export default function MenuList() {
  const menuList = DUMMY_MEALS.map(item => <MenuItem key={item.id} id={item.id} name={item.name} price={item.price} desc={item.description} />)
  return (
    <section className={style.meals}>
      <Card>
        <ul>
          {menuList.length > 0 && menuList}
        </ul>
      </Card>
    </section>
  )
}