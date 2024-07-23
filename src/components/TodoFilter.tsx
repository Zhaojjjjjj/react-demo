import { Button, Flex } from 'antd';

function TodoFilter({ setFilter }: any) {
	return (
		<Flex gap="small" wrap>
			<Button type="primary" onClick={() => setFilter('all')}>
				All
			</Button>
			<Button type="primary" onClick={() => setFilter('Active')}>
				Active
			</Button>
			<Button type="primary" onClick={() => setFilter('Completed')}>
				Completed
			</Button>
		</Flex>
	);
}

export default TodoFilter;
