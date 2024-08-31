import { useEffect, useState } from "react"
import NewTask from "./components/NewTask";
import SearchBar from "./components/SearchBar";

function App() {
  const [toDoList, setToDoList] = useState<string[]>(() => {
    const localValue = localStorage.getItem("ITEMS");
    if (localValue == null) return []
    return JSON.parse(localValue)
  });

  // useState() -> x: variable, y: funcion // ITEMS: "["hola","hello"]", => ["hola","hello"]
  // if false == "false": true, if false === "false": false
  // toDoList[i] : taskName

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(toDoList))
  }, [toDoList])

  function onAddTask(taskName: string) {
    if (taskName === "") {
      console.log("cant add empty strings")
      return
    }
    setToDoList([taskName, ...toDoList])
  }

  function onDelete(taskName: string) {
    const newToDoList = toDoList.filter(taskNamef => taskName !== taskNamef);
    // ["hello", "pato", "hola"]
    // taskName = "hola"
    // ["hello", "pato"]

    setToDoList(newToDoList);
  }

  return (
    <div className="w-screen h-screen bg-gray-950">
      <div className="flex flex-col">
        <SearchBar onAddTask={onAddTask}></SearchBar>
        {toDoList.map((taskName: string, index) => <NewTask taskName={taskName} key={index} onDelete={() => onDelete(taskName)}/>)}
      </div>
   </div>
  )
}

export default App
