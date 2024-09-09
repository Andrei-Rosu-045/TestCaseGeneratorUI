import React, { useState } from 'react';
import { Dropdown, Form, Button } from 'react-bootstrap';
import './UploadFileCard.css';
import { BsCloudUpload } from 'react-icons/bs';
import { FaWeight } from 'react-icons/fa';

interface UploadFileCardProps {
  className?: string;
}

const UploadFileCard: React.FC<UploadFileCardProps> = ({ className }) => {
  const [fileType, setFileType] = useState<string>('Select');
  const [file, setFile] = useState<File | null>(null);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setFile(event.target.files[0]);
    }
  };

  const handleSelect = (eventKey: string | null) => {
    if (eventKey) {
      setFileType(eventKey);
      setFile(null); // Clear file when changing file type
    }
  };

  const allowedFormats =
    fileType === 'Test Case' ? '.csv,.xlsx' :
    fileType === 'Process Document' ? '.docx' : '';

  const fileLimitText =
    fileType === 'Test Case' ? 'Limit 200MB .CSV or .XLSX' :
    fileType === 'Process Document' ? 'Limit 200MB .DOCX' : '';

  return (
    <div className={`card custom-card ${className}`}>
      <div className="card-header d-flex justify-content-between align-items-center">
        <h5 id='upload-title'> Upload File to Ingest</h5>
        <BsCloudUpload size={24} />
      </div>
      <div className="card-body">
        <Form>
          <Form.Group controlId="fileType">
            <Form.Label>Select the file type:</Form.Label>
            <Dropdown onSelect={handleSelect} className="custom-dropdown">
              <Dropdown.Toggle variant="outline-secondary" className="w-100 d-flex justify-content-between align-items-center">
                {fileType}
              </Dropdown.Toggle>
              <Dropdown.Menu className="w-100">
                <Dropdown.Item eventKey="Test Case" className="w-100">
                  Test Case
                </Dropdown.Item>
                <Dropdown.Item eventKey="Process Document" className="w-100">
                  Process Document
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Form.Group>
          <Form.Group controlId="fileUpload" className="text-center mt-4">
            <Form.Label>
              <BsCloudUpload size={40} className="mb-2" />
              <p>Drag and drop your file here or click to upload</p>
            </Form.Label>
            {fileLimitText && (
              <p className="file-limit-text">{fileLimitText}</p>
            )}
            <Form.Control
              type="file"
              accept={allowedFormats}
              onChange={handleFileUpload}
              className="d-none"
            />
            <div className="text-center">
              <Button
                id="upload-btn"
                variant="outline-primary"
                onClick={() => document.getElementById('fileUpload')?.click()}
              >
                Upload File
              </Button>
            </div>
            {file && (
              <div className="mt-3">
                <strong>Selected File:</strong> {file.name}
              </div>
            )}
          </Form.Group>
        </Form>
      </div>
    </div>
  );
};

export default UploadFileCard;
