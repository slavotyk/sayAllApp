import React, {Component} from 'react';

class Menu extends Component {
    render() {

        // берем из props и к каждому элементу массива пихаем list items не забывая про key

        const items = this.props.items.map((item, index) => {
            return <li key={index}><a href={item.href}>{item.title}</a></li>
        });


        // возвращаем меню с заголовком и получившимися list items'ами
        return (
            <>
                <h1>{this.props.titleMenu}</h1>
                <ul>
                    {items}
                </ul>
            </>
        );
    }
}

export default Menu;