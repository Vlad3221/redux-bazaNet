import React, {useState} from 'react';
import {CompanyTodo} from "../../features/company";
import {useSelector} from "react-redux";
import {SortSceleton} from "../../component/SortSceleton";


const HomePage = () => {
    const userTodo = useSelector((state) => state.CompanyTodo.todos);
    const [stateValues, setStateValue] = useState('id');

    function chengeValue(event) {
        setStateValue(event.target.value);
    }

    let userTodo_filtres = userTodo.filter((todo) => todo.id)

    if (stateValues === 'id') {
        userTodo_filtres = userTodo.filter((todo) => todo.id)
    }
    if (stateValues === 'isArchive') {
        userTodo_filtres = userTodo.filter((todo) => todo.isArchive)
    }
    if (stateValues === 'noIsArchive') {
        userTodo_filtres = userTodo.filter((todo) => todo.isArchive === false)
    }
    if (stateValues === 'driver') {
        userTodo_filtres = userTodo.filter((todo) => todo.role === 'driver')
    }
    if (stateValues === 'waiter') {
        userTodo_filtres = userTodo.filter((todo) => todo.role === 'waiter')
    }
    if (stateValues === 'cook') {
        userTodo_filtres = userTodo.filter((todo) => todo.role === 'cook')
    }
    // if (values === 'birthday') {
    //     todo = todos?.sort(function (a, b) {
    //         if (a.birthday > b.birthday) {
    //             return 1;
    //         }
    //         if (a.birthday < b.birthday) {
    //             return -1;
    //         }
    //         return 0;
    //     });
    // }

    return (
        <div>
            <h1>Сотрудники компании</h1>
            <h2>Настройки</h2>

            <SortSceleton stateVal={stateValues} change={chengeValue} />
            <hr/>

            <CompanyTodo userTodo={userTodo_filtres} />

        </div>
    )
}

export {HomePage}
