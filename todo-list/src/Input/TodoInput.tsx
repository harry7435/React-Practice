import { ChangeEvent } from 'react';
import { RiChatNewLine } from 'react-icons/ri';
import styles from './TodoInput.module.css';

interface TodoInputProps {
  text: string;
}

const TodoInput = (props: TodoInputProps) => {
  const handleInputChanged = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
  };

  return (
    <section className={styles.container}>
      <form className={styles.formContainer}>
        <input className={styles.input} placeholder={'해야할 Todo'} value={props.text} onChange={handleInputChanged} />
      </form>
      <button className={styles.enter}>
        <RiChatNewLine />
      </button>
    </section>
  );
};

export default TodoInput;
