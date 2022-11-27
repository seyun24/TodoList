import { MdAdd } from 'react-icons/md';
import React, { useState, useCallback} from 'react';
import './TodoInsert.scss';

const TodoInsert = ({onInsert})=> {
    const [value, setValue] = useState('');

    const onChange = useCallback(e => {
        setValue(e.target.value);
    }, []);

    const onSubmit = useCallback(
        e => {
            onInsert(value);
            setValue('');
            e.preventDefault();
        },
        [onInsert, value],
    )

    const onClick =useCallback(
        () => {
            onInsert(value);
            setValue('');
        },
        [onInsert, value],
    )
    return (
        <from className="TodoInsert">
            <input 
                placeholder='할 일을 입력하세요' 
                value={value}
                onChange={onChange}
            />
            <button onClick={onClick}>
                <MdAdd />
            </button>
        </from>
    );
};

export default TodoInsert;