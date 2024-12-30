import React from "react";
import { IoMdCloudUpload } from "react-icons/io";
import { IoDocument } from "react-icons/io5";
import { IoSettings } from "react-icons/io5";
import { IoIosAddCircle } from "react-icons/io";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-item">
        <div className="icon">
          <IoMdCloudUpload size={24} />
        </div>
        <span>Uploads</span>
      </div>
      <div className="sidebar-item">
        <div className="icon">
          <IoDocument size={24} />
        </div>
        <span>Templates</span>
      </div>
      <div className="sidebar-item">
        <div className="icon">
          <IoSettings size={24} />
        </div>
        <span>
            Design & <br/> Formatting</span>
      </div>
      <div className="sidebar-item">
        <div className="icon">
          <IoIosAddCircle size={24} />
        </div>
        <span>Add Section</span>
      </div>
    </div>
  );
};

export default Sidebar;
