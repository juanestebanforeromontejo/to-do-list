import { useState } from "react"

interface Props {
  taskName: string,
  onDelete: (taskName: string) => void,
}

const NewTask = (props: Props) => {
  const [change, setChange] = useState(true);
  const properties = change ? "bg-gray-800 text-white m-3 p-3 w-9/12" : "bg-gray-800 text-white m-3 p-3 w-9/12 border border-green-500 rounded";

  function handleProperties() {
    if (change === true) {
      setChange(false);
      return
    }
    setChange(true);
  }

  return (
    <>
      <ul>
        <li className="flex flex-row">
          <button className={properties} onClick={handleProperties}>{props.taskName}</button>
          <button className="bg-gray-800 text-white m-3 p-3 w-1/4 border border-red-500 rounded" onClick={() => props.onDelete(props.taskName)}>Delete</button>
        </li>
      </ul>
    </>
  )
}

export default NewTask
