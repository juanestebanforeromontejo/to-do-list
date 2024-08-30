import { useState } from "react"
import NewTask from "./components/NewTask";
import SearchBar from "./components/SearchBar";

function App() {
  const [toDoList, setToDoList] = useState<string[]>([]);

  function onAddTask(taskName: string) {
    if (taskName === "") {
      console.log("cant add empty strings")
      return
    }
    setToDoList([taskName, ...toDoList])
  }

  console.log("The to do list is " + toDoList)
  
  return (
    <form className="w-screen h-screen bg-gray-950">
      <div className="flex flex-col">
        <h1 className="text-3xl text-white">New item</h1>
        <SearchBar onAddTask={onAddTask}></SearchBar>
        {toDoList.map((taskName: string, index) => <NewTask TaskName={taskName} key={index}/>)}
      </div>
   </form>
  )
}

export default App
