import {Link} from 'react-router-dom';

import './navigation.css';

function Navigation() {
  return (
    <ul className="header__nav">
      <li>
        <Link to='/redux-local-storage/newpage/1'>Грузоотправителям</Link>
      </li>
      <li>
        <Link to='/redux-local-storage/newpage/2'>Грузоперевозчикам</Link>
      </li>
      <li>
        <Link to='/redux-local-storage/newpage/3'>Отслеживание</Link>
      </li>
      <li>
        <Link to='/redux-local-storage/newpage/4'>Помощь</Link>
      </li>
      <li>
        <Link to='/redux-local-storage/newpage/5'>Информационный центр</Link>
      </li>
    </ul>
  )
}

export default Navigation;