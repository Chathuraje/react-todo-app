import todoLogo from '../../assets/Logo.svg';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import styles from './header.module.css';
import { useState } from 'react';

export function Header({ onAddTask  }) {
    const [title, setTitle] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        onAddTask(title);
        setTitle('');
    }


    function onChnageTitle(event) {
        setTitle(event.target.value);
    }


    return (
        <header className={styles.header}>
            <img src={todoLogo} />

            <form onSubmit={ handleSubmit } className={styles.newTaskForm}>
                <input placeholder='Add a new Task' type='text' value={title} onChange={onChnageTitle} required/>
                <button>
                    Create
                    <AiOutlinePlusCircle size={20} />
                </button>
            </form>
        </header>
    )
}