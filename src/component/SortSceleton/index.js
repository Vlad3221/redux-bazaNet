import React from 'react';

export function SortSceleton(props) {
    const stateValues = props.stateVal;
    const chengeValue = props.change;

    return (
        <div className="sort__sceleton">
            <div className='sort_sceleton__tems'>
                <span>Стандартные</span>
                <label>
                    <input type="radio" name="radio" value="id"
                           checked={stateValues === 'id'}
                           onChange={chengeValue}/>
                    Все
                </label>
            </div>

            <div className='sort_sceleton__tems'>
                <span>Расширенные</span>
                <select onChange={chengeValue}>
                    <option disabled>Статус</option>
                    <option value="isArchive">В резерве</option>
                    <option value="noIsArchive">Работает</option>
                    <option disabled>Должность</option>
                    <option value="driver">Водитель</option>
                    <option value="waiter">Официант</option>
                    <option value="cook">Повар</option>
                </select>
            </div>

            {/*<div className='sort_sceleton__tems'>*/}
            {/*    <span>Дата</span>*/}
            {/*    <label>*/}
            {/*        <input type="radio" name="radio" value="birthday"*/}
            {/*               checked={valueses === 'birthday'}*/}
            {/*               onChange={chengeValue} />*/}
            {/*        Дата рождения*/}
            {/*    </label>*/}
            {/*</div>*/}
        </div>
    )
}
