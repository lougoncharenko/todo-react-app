import { toUnicode } from 'punycode';
import React, { useRef } from 'react'
import { isDefaultClause } from 'typescript';
import "./styles.css";
import TodoList from './TodoList';

interface Props {
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>
    handleAdd: (e:React.FormEvent) => void;
  }

const InputField = ( {todo, setTodo, handleAdd}: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <form className = 'input' onSubmit={ (e) => {
       handleAdd(e)
    }}>
        <input 
        ref = {inputRef}
        type ='input' 
        value={todo}
        onChange = {
            (e) => setTodo(e.target.value)
        }
        placeholder = 'enter a task' className='input_box'/>
        <button className='input_submit' type='submit'>Add</button>    
    </form>
  )
}

export default InputField