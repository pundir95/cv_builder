import React, { useState } from "react";
import { Row, Col, Button } from "react-bootstrap";

const ColorConfiguration = () => {
  const [hoveredColor, setHoveredColor] = useState(null);

  const colors = [
    "#6C757D", // Gray
    "#000000", // Black
    "#FFFFFF", // White
    "#0D6EFD", // Blue
    "#6610F2", // Purple
    "#6F42C1", // Indigo
    "#198754", // Green
    "#DC3545", // Red
    "#FFC107", // Yellow
    "#FD7E14", // Orange
  ];

  return (
    <div className="color-filter">
      <Row className="d-flex align-items-center">
        {colors.map((color, index) => (
          <Col
            key={index}
            xs={2}
            className="d-flex justify-content-center mb-2"
            onMouseEnter={() => setHoveredColor(color)}
            onMouseLeave={() => setHoveredColor(null)}
          >
            <div
              className="color-circle"
              style={{ backgroundColor: color }}
            ></div>
            {hoveredColor === color && (
              <div className="color-popup shadow">
                <div
                  className="popup-color"
                  style={{ backgroundColor: "#6C757D" }}
                ></div>
                <div
                  className="popup-color"
                  style={{ backgroundColor: "#000000" }}
                ></div>
                <div
                  className="popup-color"
                  style={{ backgroundColor: "#FFFFFF" }}
                ></div>
              </div>
            )}
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ColorConfiguration;
