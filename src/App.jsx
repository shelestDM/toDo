import Header from "./components/Header";
import FilterBar from "./components/toDo/FilterBar";
import ToDoForm from "./components/toDo/ToDoForm";
import ToDoList from "./components/toDo/ToDoList";

const App = () => {

  return (
    <>
      <Header/>
      <main className="mt-16 px-3 py-5 w-1/3 min-w-[320px] mx-auto">
        <ToDoForm />
        <hr className="mt-5 mb-10"/>
        <FilterBar/>
        <hr className="mt-5 mb-10"/>
        <ToDoList/>
      </main>
    </> 
   );
}
 
export default App;