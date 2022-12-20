import styles from './task.module.css';
import { AiFillCheckCircle } from 'react-icons/ai';
import { TbTrash } from 'react-icons/tb';

export function Task({ task, onComplete, onDelete }) {
    return (
        <div className={styles.task}>
            <button className={styles.checkContainer} onClick={() => onComplete(task.id)}>
                {task.isCompleted ? <AiFillCheckCircle /> : <div />}
            </button>

            <p className={task.isCompleted ? styles.textCompleted : ""}>
                {task.title}
            </p>

            <button className={styles.deleteButton} onClick={() => onDelete(task.id)}>
                <TbTrash size={20} />
            </button>
        </div>
    )
}