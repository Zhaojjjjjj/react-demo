'use client';
import AddTodo from '@/components/AddTodo';
import TodoFilter from '@/components/TodoFilter';
import TodoList from '@/components/TodoList';
import { Todo } from '@/static/types';
import { useState } from 'react';
import Doodle from './doodle';

export default function Home() {
	const [todos, setTodos] = useState<Todo[]>([]);
	const [filter, setFilter] = useState('all');

	const addTodo = (text: string) => {
		const newTodo: Todo = {
			id: Date.now(),
			text,
			completed: false,
		};
		setTodos([...todos, newTodo]);
	};

	const deleteTodo = (id: number) => {
		setTodos(todos.filter((todo) => todo.id !== id));
	};
	const toggleTodo = (id: number) => {
		setTodos(todos.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)));
	};

	const getFilteredTodos = () => {
		switch (filter) {
			case 'active':
				return todos.filter((todo) => !todo.completed);
			case 'completed':
				return todos.filter((todo) => todo.completed);
			default:
				return todos;
		}
	};

	return (
		<>
			{/* <div className="doodle">
				<Doodle />
			</div> */}

			<div className="py-3 flex justify-center items-center w-full h-screen">
				<div className="w-2/5 relative p-10 bg-[#fff] opacity-100 rounded-lg shadow-lg z-50 h-[800px] max-h-[800px] border">
					<h1 className="text-3xl text-center mb-10">TodoList</h1>
					<AddTodo addTodo={addTodo} />
					<div className=" relative h-[calc(80%)] overflow-y-auto">
						<TodoList todos={getFilteredTodos()} deleteTodo={deleteTodo} toggleTodo={toggleTodo} />
					</div>
					<div className="absolute bottom-0 left-0 w-full p-4">
						<TodoFilter setFilter={setFilter} filter={filter} />
					</div>
				</div>
			</div>
		</>
	);
}
