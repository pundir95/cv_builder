import React, { useState } from "react";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import image from "../../../assets/images/demo-img.jpg";
import { RESUME_DATA } from "../constant";

const Section = ({
  section,
  moveSection,
  updateColumn,
  side,
  setHovered,
  isHovered,
}) => {
  const [, dragRef] = useDrag({
    type: "section",
    item: { id: section?.id, currentColumn: section.side },
  });

  const [, dropRef] = useDrop({
    accept: "section",
    drop: (draggedItem) => {
      if (draggedItem.currentColumn !== side) {
        updateColumn(draggedItem.id, side); // Update side when dropped
      }
    },
    hover: (draggedItem) => {
      if (draggedItem.currentColumn === side && draggedItem.id !== section.id) {
        moveSection(draggedItem.id, section.id); // Reorder within the same side
      }
    },
  });

  return (
    <div
      ref={(node) => dragRef(dropRef(node))}
      onMouseEnter={() => setHovered(section.id)}
      onMouseLeave={() => setHovered(null)}
      style={{
        padding: "10px",
        marginBottom: "10px",
        // background: "#ffffff",
        border: "1px solid #ddd",
        borderRadius: "5px",
        position: "relative",
      }}
    >
      <h3>{section.title}</h3>
      <div dangerouslySetInnerHTML={{ __html: section.content }} />
      {isHovered && (
        <div
          style={{
            position: "absolute",
            top: "10px",
            right: "10px",
            display: "flex",
            gap: "5px",
          }}
        >
          <button style={{ padding: "5px", background: "#007bff", color: "#fff" }}>
            Edit
          </button>
          <button style={{ padding: "5px", background: "#dc3545", color: "#fff" }}>
            Delete
          </button>
        </div>
      )}
    </div>
  );
};

const EmptyColumnDropZone = ({ side, updateColumn }) => {
  const [, dropRef] = useDrop({
    accept: "section",
    drop: (draggedItem) => {
      if (draggedItem.currentColumn !== side) {
        updateColumn(draggedItem.id, side); // Update side when dropped into an empty side
      }
    },
  });

  return (
    <div
      ref={dropRef}
      style={{
        minHeight: "100px",
        padding: "10px",
        background: "#f9f9f9",
        border: "1px dashed #ddd",
        borderRadius: "5px",
        textAlign: "center",
      }}
    >
      Drop here
    </div>
  );
};

const ResumeWithDragDrop = () => {
  const [sections, setSections] = useState(RESUME_DATA);

  const [hoveredSection, setHoveredSection] = useState(null);

  const moveSection = (draggedId, targetId) => {
    setSections((prevSections) => {
      const draggedIndex = prevSections.resumeData.findIndex(
        (section) => section.id === draggedId
      );
      const targetIndex = prevSections.resumeData.findIndex(
        (section) => section.id === targetId
      );

      const updatedResumeData = [...prevSections.resumeData];
      const [draggedItem] = updatedResumeData.splice(draggedIndex, 1);
      updatedResumeData.splice(targetIndex, 0, draggedItem);

      return {
        ...prevSections,
        resumeData: updatedResumeData,
      };
    });
  };

  const updateColumn = (id, newColumn) => {
    setSections((prevSections) => ({
      ...prevSections,
      resumeData: prevSections.resumeData.map((section) =>
        section.id === id ? { ...section, side: newColumn } : section
      ),
    }));
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="resume_container">
        <div style={{ display: "flex", gap: "20px" }}>
          <div className="left" style={{ flex: 1 }}>
            <div style={{width:"100px",height:"100px"}}>
            <img src={sections?.image?.profile_pic}/>

            </div>
            {sections.resumeData.filter((section) => section.side === "left").length >
            0 ? (
              sections.resumeData
                .filter((section) => section.side === "left")
                .map((section) => (
                  <Section
                    key={section.id}
                    section={section}
                    side="left"
                    moveSection={moveSection}
                    updateColumn={updateColumn}
                    setHovered={setHoveredSection}
                    isHovered={hoveredSection === section.id}
                  />
                ))
            ) : (
              <EmptyColumnDropZone side="left" updateColumn={updateColumn} />
            )}
          </div>

          <div   className="right" style={{ flex: 1 }}>
            {sections.resumeData.filter((section) => section.side === "right").length >
            0 ? (
              sections.resumeData
                .filter((section) => section.side === "right")
                .map((section) => (
                  <Section
                    key={section.id}
                    section={section}
                    side="right"
                    moveSection={moveSection}
                    updateColumn={updateColumn}
                    setHovered={setHoveredSection}
                    isHovered={hoveredSection === section.id}
                  />
                ))
            ) : (
              <EmptyColumnDropZone side="right" updateColumn={updateColumn} />
            )}
          </div>
        </div>
      </div>
    </DndProvider>
  );
};

export default ResumeWithDragDrop;
