import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "react-toastify/dist/ReactToastify.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer } from 'react-toastify';
import ExperienceLevel from './pages/experienceLevel/ExperienceLevel';
import ChooseTemplate from './pages/choose-template/ChooseTemplate';
import ResumeSection from './pages/resume-section/ResumeSection';
import CreateResume from './pages/create-resume/CreateResume';
import SelectResume from './pages/select-resume/SelectResume';
import FinalResume from './pages/final-resume/FinalResume';
function App() {

  return (
    <>
      <ToastContainer
        className="custom-toast-container"
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    <div>
      <Router>
        <Routes>
          <Route path="resume/experience-level" element={<ExperienceLevel/>}/>
          <Route path="resume/choose-template" element={<ChooseTemplate/>}/>
          <Route path="resume/section/cntc" element={<ResumeSection/>}/>
          <Route path="resume/create-resume" element={<CreateResume/>}/>
          <Route path="resume/select-resume" element={<SelectResume/>}/>
          <Route path="resume/final-resume" element={<FinalResume/>}/>
        </Routes>
      </Router>
    </div>
  
    </>
  )
}

export default App
