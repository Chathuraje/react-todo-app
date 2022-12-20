import styles from './task.module.css';
import { AiFillCheckCircle } from 'react-icons/ai';
import { TbTrash } from 'react-icons/tb';

export function Task({ task, onComplete, onDelete }) {
    return (
        <>
            <div className={styles.task}>
                <div className={styles.taskText} onClick={() => onComplete(task.id)}>
                    <button className={styles.checkContainer}>
                        {task.isCompleted ? <AiFillCheckCircle /> : <div />}
                    </button>

                    <p className={task.isCompleted ? styles.textCompleted : ""}>
                        {task.title}
                    </p>
                </div>

                <button className={styles.deleteButton} onClick={() => onDelete(task.id)}>
                    <TbTrash size={20} />
                </button>
            
            </div>
        </>
    )
}