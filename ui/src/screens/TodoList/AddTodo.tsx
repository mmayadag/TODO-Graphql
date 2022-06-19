import { FC, useState, useRef } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_TODO } from '@/graphql/todo/createTodo';
import { TextInput } from '@/components';

const AddTodo: FC = () => {
    const InputRef = useRef<HTMLInputElement>();

    const [addTodo, { data, loading, error, reset }] = useMutation(ADD_TODO);
    const [title, setTitle] = useState("");

    const sendTodo = () => {
        addTodo({ variables: { title } });
    }
    const onSubmit = (e: any) => {
        e.preventDefault();
        sendTodo();
    }
    const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>): void => {
        if (e.key === 'Enter') {
            e.preventDefault();
            e.stopPropagation();
            sendTodo();
        }
    }
    const onChange = (e: any) => {
        setTitle(e.target.value);
        error && reset();
    }
    const clear = () => {
        if (title) { setTitle("") }
        error && reset();
        InputRef.current?.focus();
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <TextInput
                    placeholder="Add a new todo"
                    value={title}
                    onChange={onChange}
                    onKeyDown={onKeyDown}
                    ref={InputRef}
                    autoFocus={true}
                />
                {loading && <>Submitting...</>}
                {error && <div onClick={clear}>Submission error! ${error.message}</div>}
            </form>
        </div >
    );
}
export default AddTodo;