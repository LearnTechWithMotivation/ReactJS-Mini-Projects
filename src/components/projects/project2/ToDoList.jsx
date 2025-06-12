import Header from '../../Header'
import Footer from '../../Footer'
import AddTask from './AddTask'
import { useEffect, useState } from 'react'
import Task from './Task'
import TaskContainer from './TaskContainer'



const ToDoList = () => {
    const [tasks, setTasks] = useState([]);



    
    
  return (
    <div 
    // style={{
    //    backgroundImage: "url('/b4.jpg')",
    //     backgroundSize: "cover",
    //     backgroundRepeat: "no-repeat",
    //     backgroundPosition: "center center",
    //     backgroundAttachment: "fixed",
    // }}
    className='bg-penguin-black min-h-[100vh] flex justify-between items-center  flex-col '>
        {/* Photo by <a href="https://unsplash.com/@vingtcent?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Vincent Guth</a> on <a href="https://unsplash.com/photos/silhouette-of-trees-near-aurora-borealis-at-night-62V7ntlKgL8?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a> */}
      {/* Photo by <a href="https://unsplash.com/@scottrockphoto?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Scott Rock</a> on <a href="https://unsplash.com/photos/aurora-borealis-mfSY12Au5o4?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a> */}
      {/* Photo by <a href="https://unsplash.com/@timotheeduran?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Timothée Duran</a> on <a href="https://unsplash.com/photos/photo-of-clear-sky-full-of-stars-ilfsT5p_qvA?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a> */}
      {/* Photo by <a href="https://unsplash.com/@gabe_motter?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Gabriele Motter</a> on <a href="https://unsplash.com/photos/pine-trees-under-starry-sky-q3rUTmpZB-Q?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a> */}
      
        <Header name="TODO List"/>
        <AddTask tasks={tasks} setTasks={setTasks}/>

        {tasks.length!=0 && <TaskContainer tasks={tasks} setTasks={setTasks} />}
       

        <Footer />

    </div>
  )
}

export default ToDoList
