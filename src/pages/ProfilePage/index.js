import React from 'react';
import {Link, useParams} from "react-router-dom";
import test from "../../employees.json";
import "./index.scss"
const ProfilePage = () => {

    const todos = test;
    const params = useParams();
    const ids = params.id - 1;

    return (
        <div className="personal_page">
            <h1>{ todos[ids].name } ({ todos[ids].role })</h1>
            <ul>
                <li>
                    <span>
                        День рождения:
                        <span id="personal_page__text"> {todos[ids].birthday && todos[ids].birthday}</span>
                    </span>
                </li>
                <li>
                    <span>
                        В данный момент находится:
                        <span id="personal_page__text"> {todos[ids].isArchive ? 'в архиве' : 'на работе'}</span>
                    </span>
                </li>
                <li>
                    {/*<span>{todos[ids].phone && 'Номер телефона:' + todos[ids].phone }</span>*/}
                    <span>
                        Номер телефона:
                        <span id="personal_page__text"> {todos[ids].phone ? todos[ids].phone : 'Отсутствует'}</span>
                    </span>
                </li>
            </ul>
            <li>
                <Link className="link_back" to="/">На главную</Link>
            </li>
        </div>
    )
}
export default ProfilePage;
