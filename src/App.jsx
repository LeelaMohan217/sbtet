import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Jobs from "./pages/Jobs";
import Updates from "./pages/Updates";
import Syllabus from "./pages/Syllabus";
import Materials from "./pages/Materials";
import StudentList from "./pages/StudentList";
import JobDetails from "./components/jobsComponents/JobDetails";
import UpdateDetails from "./components/updatesPagesComponents/updateDetails";



function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/jobs" element={<Jobs/>}/>
        <Route path="/updates" element={<Updates/>}/>
        <Route path="/syllabus" element={<Syllabus/>}/>
        <Route path="/materials" element={<Materials/>}/>
        <Route path="/studentlist" element={<StudentList/>}/>
        <Route path="/jobdetails/:id" element={<JobDetails />} />
        <Route path="/updatedetails/:id" element={<UpdateDetails />} />

       
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
