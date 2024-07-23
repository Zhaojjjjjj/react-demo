function TodoItem({ todo, toggleTodo, deleteTodo }: any) {
	return (
		<li className="flex items-center justify-between p-2 bg-gray-100 rounded-md" style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
			{todo.text}
			<button onClick={() => toggleTodo(todo.id)}>
				<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
				</svg>
			</button>
			<button onClick={() => deleteTodo(todo.id)}>
				<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
				</svg>
			</button>
		</li>
	);
}

export default TodoItem;
