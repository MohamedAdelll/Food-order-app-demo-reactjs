import Card from '../UI/Card'
// import style from './Menu.module.css'
// import MenuItemForm from './MenuItem/MenuItemForm'
import MenuList from './MenuList'
import MenuSummary from './MenuSummary'

export default function Menu(props) {

    return (
        <Card>
            <MenuSummary />
            <MenuList />
        </Card>
    )
}