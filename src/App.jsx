import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import './style.css';
// import './Class.jsx';

import Menu from './Menu';
import SignIn from './SignIn';

class App extends Component {
    render() {

        // элементы меню которые идут в props
        const menuItems = [
            {href:"/", title:"Главная"},
            {href:"/about", title:"О нас"},
            {href:"/service", title:"Услуги"},
            {href:"/contacts", title:"Контакты"},
        ];

        return (
            <>
                <h1>Урок №3</h1>
                <p>Делаем форму авторизации и менюшку</p>
                <hr/>
                <SignIn/>
                <hr/>
                <Menu titleMenu="Менюшка" items={menuItems}/>
            </>
        );
    }
}

export default App;
