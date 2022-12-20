import { Task } from '../Task';
import styles from './tasks.module.css';


export function Tasks({ tasks, onComplete, onDelete }) {
    const taskQuantity = tasks.length;
    const completedTasks = tasks.filter(task => task.isCompleted).length;

    const taskListView = () => {
        if(taskQuantity <= 0){
            return (
                <>
                    <div className={styles.task}>
                        <div className={styles.taskText}>
                            <p>
                                Add a new task to this task list
                            </p>
                        </div>

                    
                    </div>
                </>
            )
        } else {
            return (
                <>
                    {tasks.map((task) => (
                        <Task key={task.id} task={task} onComplete={onComplete} onDelete={onDelete}/>
                    ))}
                </>
            ) 
        }
       
      }

    return (
        <section className={styles.tasks}>
            <header className={styles.header}>
                <div>
                    <p> Create Task</p>
                    <span>{ taskQuantity }</span>
                </div>

                <div>
                    <p className={styles.textPurple}>Completed</p>
                    <span>{ completedTasks } of { taskQuantity }</span>
                </div>
            </header>

            <div className={styles.list}>
                {taskListView()}
            </div>
        </section>
    )
}