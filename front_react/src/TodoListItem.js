import {
    MdCheckBoxOutlineBlank,
    MdCheckBox,
    MdRemoveCircleOutline,
} from 'react-icons/md';
import cn from 'classnames';
import './TodoListItem.scss';

const TodoListItem = ({todo, onRemove, onToggle}) => {
    const {id, name, status } = todo;

    return (
        <div className='TodoListItem'>
            <div className={cn('checkbox', {status})} onClick={()=> onToggle(id)}>
                {status ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
                <div className='text'>{name}</div>
                <div className='remove' onClick={()=> onRemove(id)}>
                    <MdRemoveCircleOutline />
                </div>
            </div>
        </div>
    )
}

export default TodoListItem;