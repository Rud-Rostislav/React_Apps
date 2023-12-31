import {useState} from "react";

export default function Form({onAddItems, itemsLength, onCLearItems}) {
    const [list, setList] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        if (!list) return;
        const newTodo = {
            id: itemsLength + 1,
            text: list,
            done: false
        }
        onAddItems(newTodo);
        setList("");
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input className='margin_25 input_border' type="text" placeholder="Додати справу"
                       value={list}
                       onChange={(e) => setList(e.target.value)}/>
                <button className='margin_25'>Add</button>
            </form>
            <button onClick={onCLearItems} className='margin_25'>Clear All</button>
        </div>
    );
}