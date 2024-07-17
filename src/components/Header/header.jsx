//UI
import 'bootstrap/dist/css/bootstrap.min.css';

//Components
import Icon from '../Header/Icon/icon';
import Nav from './Nav/nav';

export default function Header(){
    return(
    <header className="p-5 d-flex align-items-center justify-content-between">
        <Icon />
        <Nav />
  </header>
    )
}