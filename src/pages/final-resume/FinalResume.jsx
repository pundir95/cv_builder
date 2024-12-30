import React from "react";
import Header from "../../components/final-resume/header/Header";
import Sidebar from "../../components/final-resume/sidebar/SideBar";
import ResumeWithDragDrop from "../../components/final-resume/main/ResumeWithDragDrop";

const FinalResume = () => {
  return (
    <div className="final-resume">
      <Header />
      <div className="content">
        <Sidebar />
        <main className="main-content">
         <ResumeWithDragDrop/>
        </main>
      </div>
    </div>
  );
};

export default FinalResume;
