function TodoItem({ todo, toggleTodo, deleteTodo }: any) {
	return (
		<li className="flex items-center p-2 bg-gray-100 rounded-md mb-2" style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
			<div className="w-10/12 text-ellipsis overflow-hidden whitespace-nowrap pe-4 ps-2">{todo.text}</div>
			<button className="w-1/12" onClick={() => toggleTodo(todo.id)}>
				<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
				</svg>
			</button>
			<button className="w-1/12" onClick={() => deleteTodo(todo.id)}>
				<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
				</svg>
			</button>
		</li>
	);
}

export default TodoItem;
