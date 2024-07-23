import { useState } from 'react';
import { Button, Input, Select, Space } from 'antd';

interface addTodoProps {
	addTodo: (text: string) => void;
}

function AddTodo({ addTodo }: addTodoProps) {
	const [text, setText] = useState('');

	const handleSubmit = (e: any) => {
		e.preventDefault();
		if (text.trim() === '') return;

		addTodo(text);
		setText('');
	};
	return (
		<div className="mb-2 flex">
			<Space.Compact style={{ width: '100%' }}>
				<Input defaultValue="Combine input and button" value={text} onChange={(e) => setText(e.target.value)} placeholder="Add todo" required />
				<Button type="primary" onClick={handleSubmit}>
					Add Todo
				</Button>
			</Space.Compact>
		</div>
	);
}

export default AddTodo;
