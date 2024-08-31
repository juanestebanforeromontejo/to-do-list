import { useState } from "react"

interface Props {
  onAddTask: (TaskName: string) => void,
}

const SearchBar = (props: Props) => {
  const [taskName, setTaskName] = useState("");

  function handleTaskName(e: React.ChangeEvent<HTMLInputElement>) {
    setTaskName(e.target.value)
  }

  return (
    <>
      <div className="flex flex-col">
          <h1 className="text-3xl text-white m-3">New item</h1>
        <div className="flex flex-row">
          <input type="text" className="border-white hover:accent-neutral-700 bg-gray-800 h-8 w-9/12 rounded m-3 outline-none text-white p-3"
            onChange={(e) => handleTaskName(e)}/>
          <button className="rounded bg-gray-800 text-white font-bold m-3 w-1/4 place-content-center h-8" onClick={() => props.onAddTask(taskName)}>Add</button>
        </div>
      </div>
    </>
  )
}

export default SearchBar
