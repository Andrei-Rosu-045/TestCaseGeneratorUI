// src/components/ProjectNameCard.tsx
import React from 'react';
import { Form } from 'react-bootstrap';
import './ProjectNameCard.css';
import { FaBook } from "react-icons/fa";
import './Card.css';

interface ProjectNameCardProps {
  className?: string;
  projectName: string;
  setProjectName: React.Dispatch<React.SetStateAction<string>>;
}

const ProjectNameCard: React.FC<ProjectNameCardProps> = ({ projectName, setProjectName }) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setProjectName(event.target.value);
  };

  return (
    <div className="card custom-card">
      <div className="card-header d-flex justify-content-between align-items-center">
        <h5>Your Project Name</h5>
        <FaBook size={24} />
      </div>
      <div className="card-body">
        <Form.Group controlId="projectName">
          <Form.Control
            type="text"
            placeholder="Enter project name"
            value={projectName}
            onChange={handleInputChange}
          />
        </Form.Group>
      </div>
    </div>
  );
};

export default ProjectNameCard;
