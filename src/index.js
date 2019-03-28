import React from 'react';
import ReactDom from 'react-dom';
import App from './App';
import Developer from './Class';

ReactDom.render(
<App />,
    // указываем куда будет вставляться React приложение на странице
    document.querySelector('#web-page')
);

let dich = new Developer('Вячеслав');
dich.sayHi();