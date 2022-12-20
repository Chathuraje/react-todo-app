import { Task } from '../Task';
import styles from './footer.module.css';
import { TbTrash } from 'react-icons/tb';

export function Footer({ deleteAll }) {
   return (
        <section className={styles.container}>
            <footer className={styles.footer}>
                <div></div>

                <div>
                    <p className={styles.deleteAll} onClick={() => deleteAll()}>Delete All Tasks</p>
                </div>
            </footer>
        </section>
    )
}