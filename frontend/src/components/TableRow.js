import Button from 'react-bootstrap/esm/Button';

export default function TableRow(props) {
  const { i, task } = props;
  // console.log(task, 'ssss');

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
          <Button type="submit" className="btn-danger">
            Delete
          </Button>

          {task.isDone == true ? (
            ''
          ) : (
            <Button type="submit" className="ms-1 btn-success">
              Finished
            </Button>
          )}
        </td>
      </tr>
    </>
  );
}
