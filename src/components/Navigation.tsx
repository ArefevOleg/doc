import React from 'react';
import {navigation} from "../data/data"

type navPropsType = {
    title: string
}

export const Navigation = ({title}: navPropsType) => {
    return (
        <div>
            <h3>{title}</h3>
            {navigation.map(el => {
                return (
                    <ul>
                        <li><a href="">{el}</a></li>
                    </ul>
                )
            })}
        </div>
    );
};
