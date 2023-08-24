import React from 'react';
import {Link} from "react-router-dom";

export function CompanyTodo(props) {
    const userTodo = props.userTodo;

    return (
        <div>
            <ul>
                {
                    userTodo.map((userTodo) => (
                        <ul className="company_list">
                            <li className="company_list__list_block" key={userTodo.id}>
                                <Link className="link__employees" to={'./profile/' + userTodo.id}>
                                    <span id="employee_name">{userTodo.name}</span>
                                    <div>
                                        <span>Должность: {userTodo.role}</span>
                                        <span> Статус: {userTodo.isArchive ? 'Резерв' : 'На работе'} </span>
                                        <span> Номер телефона: {userTodo.phone} </span>
                                    </div>
                                </Link>
                            </li>
                        </ul>
                    ))

                }
            </ul>
        </div>
    )
}
