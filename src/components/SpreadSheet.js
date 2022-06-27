import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './SpreadSheet.css'

const SpreadSheet = () => {
    const [infos, setInfos] = useState([])
    useEffect(() => {
        axios.get('/mock_data.json').then(function (response) {
            console.log(response.data)
            setInfos(response.data)
        })
    }, [])

    const onChangeInput = (event, id) => {
        const { name, value } = event.target
        console.log('name', name)
        console.log('value', value)
        console.log('id', id)

        const updatedInfo = infos.map(info =>
            info.id === id && name ? { ...info, [name]: value } : info
        )

        setInfos(updatedInfo)
    }

    return (
        <div className='table-container'>
            <table>
                <thead>
                    <tr>
                        <th>Person Location</th>
                        <th>match_count</th>
                        <th>time_taken(s)</th>
                        <th>miles_travelled</th>
                        <th>fuel_used</th>
                        <th>number_vehicles</th>
                        <th>registration_id</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        infos.map(info => (
                            <tr key={info.id}>
                                <td>
                                    <input
                                        type="text"
                                        name='person_location'
                                        value={info.person_location}
                                        onChange={event => onChangeInput(event, info.id)}
                                    />
                                </td>
                                <td>
                                    <input
                                        type="text"
                                        name='match_count'
                                        value={info.match_count}
                                        onChange={event => onChangeInput(event, info.id)}
                                    />
                                </td>
                                <td>
                                    <input
                                        type="text"
                                        name='time_taken'
                                        value={info.time_taken}
                                        onChange={event => onChangeInput(event, info.id)}
                                    />
                                </td>
                                <td>
                                    <input
                                        type="text"
                                        name='miles_travelled'
                                        value={info.miles_travelled}
                                        onChange={event => onChangeInput(event, info.id)}
                                    />
                                </td>
                                <td>
                                    <input
                                        type="text"
                                        name='fuel_used'
                                        value={info.fuel_used}
                                        onChange={event => onChangeInput(event, info.id)}
                                    />
                                </td>
                                <td>
                                    <input
                                        type="text"
                                        name='number_vehicles'
                                        value={info.number_vehicles}
                                        onChange={event => onChangeInput(event, info.id)}
                                    />
                                </td>
                                <td>
                                    <input
                                        type="text"
                                        name='registration_id'
                                        value={info.registration_id}
                                        onChange={event => onChangeInput(event, info.id)}
                                    />
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
};

export default SpreadSheet;