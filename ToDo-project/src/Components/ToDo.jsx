import React,{useState} from 'react'
import '../ToDo.css'

const ToDo = () => {
const [task, setTask] = useState("");
const [tasks,setTasks]= useState([]);

function handleChange(e)
{
    setTask(e.target.value);
}


function handleSubmit(e){
    e.preventDefault();

    if(task !==""){
        const newTasks= tasks;
        newTasks.push(task);
        setTasks([...newTasks]);
        setTask("");
    }
}

function handleKeyDown(){
    if(e.key==="Enter"){
        handleSubmit(e);
    }
}

function deleteTask(index){
    const update= tasks.filter((_,i)=>i!==index);
    setTasks(update);

}

  return (
    <div className='container'>
        <h2>Ahmad's To-Do App</h2>
        <form onSubmit={handleSubmit} >
            <input 
            type="text"
            placeholder='Enter Your task' 
            value={task}
            onChange={handleChange}
            onKeyDown={handleKeyDown}/>
            <button type='submit'>Add</button>
        </form>
        <ul>{task.Length ===0 ? (
            <p>No tasks available</p>
        ):(
            tasks.map((t,i)=>(
                <li key={i}> {t} <button onClick={()=>deleteTask(i)} >Delete</button></li>
            ))
        )
    }

        </ul>
    </div>
  )
}

export default ToDo