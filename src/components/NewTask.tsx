interface Props {
  TaskName: string,
}

const NewTask = (props: Props) => {
  return (
    <>
      <ul>
        <li className="flex flex-row">
          <button className="bg-gray-800 text-white m-3 p-3 w-9/12">{props.TaskName}</button>
          <button className="bg-gray-800 text-white m-3 p-3 w-1/4">Delete</button>
        </li>
      </ul>
    </>
  )
}

export default NewTask
