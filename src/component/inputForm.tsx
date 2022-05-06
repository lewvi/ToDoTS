import React, { useRef } from "react";
import "./styles.css";

interface props {
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (e: React.FormEvent) => void;
}


const InputForm: React.FC<props> = ({ todo, setTodo, handleAdd }) => {

    const inputRef = useRef<HTMLInputElement>(null);

    return (
        <form
            className="input"
            onSubmit={(e) => {
                handleAdd(e);
                inputRef.current?.blur();
            }}>
            <input
                type="text"
                placeholder="Enter...."
                value={todo}
                ref={inputRef}
                onChange={(e) => setTodo(e.target.value)}
                className="input-box"
            />
            <button type="submit" className="submit-button">
                Save
            </button>
        </form>
    )
}

export default InputForm