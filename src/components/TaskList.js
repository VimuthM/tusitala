import { Container } from 'react-bootstrap';
import Item from './Item';

const TaskList = ({tasks, handleRemove, handleToggle}) => {
    return (
        <div>
            <Container>                
                {tasks.map((t, i) => <Item id={t.id} key={t.id} task={t}
                    handleRemove={handleRemove} handleToggle={handleToggle}/>)}
            </Container>
        </div>
    )
}

export default TaskList;