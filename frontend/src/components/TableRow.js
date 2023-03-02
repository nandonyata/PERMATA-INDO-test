import Button from 'react-bootstrap/esm/Button';
import { useDispatch } from 'react-redux';
import { deleteTask, finishTask } from '../store/actionCreator';

export default function TableRow(props) {
  const { i, task } = props;
  const dispatch = useDispatch();

  const onDelete = () => {
    dispatch(deleteTask(task._id));
  };

  const onFinished = () => {
    console.log(task._id);
    dispatch(finishTask(task._id));
  };

  return (
    <>
      <tr>
        <th scope="row">{i + 1}</th>
        {/* <td>Sign up for online course</td> */}
        {task.isDone == true ? (
          <td>
            <del>{task.name}</del>
          </td>
        ) : (
          <td>{task.name}</td>
        )}
        <td>{task.categoryName}</td>
        <td>
          <Button onClick={() => onDelete()} type="submit" className="btn-danger">
            Delete
          </Button>

          {task.isDone == true ? (
            ''
          ) : (
            <Button onClick={() => onFinished()} className="ms-1 btn-success">
              Finished
            </Button>
          )}
        </td>
      </tr>
    </>
  );
}
