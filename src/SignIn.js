import React, {Component} from 'react';

class SignIn extends Component {
    render() {

        // возвращаем форму авторизации
        return (
            <>
                <h1>Форма авторизации</h1>
                <form>
                    <legend>Логин</legend>
                    <input type="text" />
                    <legend>Пароль</legend>
                    <input type="password" />
                </form>
            </>
        );
    }
}

export default SignIn;