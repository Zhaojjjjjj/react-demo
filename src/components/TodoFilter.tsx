import { Button } from 'antd';
function TodoFilter({ setFilter }: any) {
	return (
		<div className="flex justify-center items-center gap-4 mt-4">
			<Button type="primary" onClick={() => setFilter('all')}>
				All
			</Button>
			<Button type="primary" onClick={() => setFilter('active')}>
				Active
			</Button>
			<Button type="primary" onClick={() => setFilter('completed')}>
				Completed
			</Button>
		</div>
	);
}

export default TodoFilter;
