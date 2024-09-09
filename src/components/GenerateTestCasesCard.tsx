import React, { useState } from 'react';
import { Dropdown, Form, Button } from 'react-bootstrap';
import './GenerateTestCasesCard.css';
import { RiAiGenerate } from "react-icons/ri";
 
interface GenerateTestCasesCardProps {
  projectName: string;
  className?: string;
}
 
const GenerateTestCasesCard: React.FC<GenerateTestCasesCardProps> = ({ className, projectName }) => {
  const [fileType, setFileType] = useState<string>('DOCX');
  const [file, setFile] = useState<File | null>(null);
  const [isFileUploaded, setIsFileUploaded] = useState<boolean>(false);
  const [testCaseMethod, setTestCaseMethod] = useState<string>('Select');
  const [businessArea, setBusinessArea] = useState<string>('');
  const [summarizeRequirements, setSummarizeRequirements] = useState<string>('Select');
  const [selectedModel, setSelectedModel] = useState<string>('Select Model');
 
  const handleSelect = (eventKey: string | null, field: string) => {
    if (eventKey) {
      switch (field) {
        case 'fileType':
          setFileType(eventKey);
          break;
        case 'testCaseMethod':
          setTestCaseMethod(eventKey);
          break;
        case 'summarizeRequirements':
          setSummarizeRequirements(eventKey);
          break;
        case 'selectedModel':
          setSelectedModel(eventKey);
          break;
        default:
          break;
      }
    }
  };
 
  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setFile(event.target.files[0]);
      setIsFileUploaded(true); // Enable the rest of the form once a file is uploaded
    }
  };
 
  const fileLimitText =
    fileType === 'Image'
      ? 'Limit 200MB .PNG, .JPEG, .JPGA'
      : ['DOCX', 'PDF', 'CSV', 'TXT'].includes(fileType)
      ? 'Limit 200MB .DOCX, .PDF, .CSV, .TXT'
      : '';
 
  const allowedFormats =
    fileType === 'DOCX' ? '.docx' :
    fileType === 'TXT' ? '.txt' :
    fileType === 'CSV' ? '.csv' :
    fileType === 'PDF' ? '.pdf' :
    fileType === 'Image' ? '.png, .jpeg, .jpg, .jpga' :
    '';
 
  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };
 
  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    if (event.dataTransfer.files && event.dataTransfer.files[0]) {
      setFile(event.dataTransfer.files[0]);
      setIsFileUploaded(true);
    }
  };
 
  return (
    <div className={`card custom-card ${className}`}>
      <div className="card-header d-flex justify-content-between align-items-center">
        <h5>Generate Test Cases</h5>
        <RiAiGenerate size={24} />
      </div>
      <div className="card-body">
        <p>Test Cases Generation for Project: <strong>{projectName || 'Not Set'}</strong></p>
 
        {/* First grid container for file type selection and file upload */}
        <div className="grid-container first-row">
          <Form.Group controlId="fileTypeGenerateTestCases" className="grid-item file-type">
            <Form.Label>Select the file type:</Form.Label>
            <Dropdown onSelect={(eventKey) => handleSelect(eventKey, 'fileType')} className="custom-dropdown short-dropdown">
              <Dropdown.Toggle variant="outline-secondary" className="w-100 d-flex justify-content-between align-items-center">
                {fileType}
              </Dropdown.Toggle>
              <Dropdown.Menu className="w-100">
                <Dropdown.Item eventKey="Image" className="w-100">
                  Image
                </Dropdown.Item>
                <Dropdown.Item eventKey="DOCX" className="w-100">
                  DOCX
                </Dropdown.Item>
                <Dropdown.Item eventKey="TXT" className="w-100">
                  TXT
                </Dropdown.Item>
                <Dropdown.Item eventKey="PDF" className="w-100">
                  PDF
                </Dropdown.Item>
                <Dropdown.Item eventKey="CSV" className="w-100">
                  CSV
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Form.Group>
 
          <div
            className="grid-item file-upload drop-zone"
            onDragOver={handleDragOver}
            onDrop={handleDrop}
          >
            <Form.Label>
              Drag and drop your file here or click to upload
              <br />
              {fileLimitText}
            </Form.Label>
            <Form.Control
              type="file"
              accept={allowedFormats}
              onChange={handleFileUpload}
              className="file-input"
            />
            {file && (
              <div className="mt-3">
                <strong className="selected-file">Selected File:</strong> {file.name}
              </div>
            )}
          </div>
        </div>
 
        {/* Second grid container for the questions */}
        <div className="grid-container second-row">
          <Form.Group controlId="summarizeRequirementsGenerateTestCases" className="grid-item question">
            <Form.Label>Do you want to summarize requirements as topics?</Form.Label>
            <Dropdown onSelect={(eventKey) => handleSelect(eventKey, 'summarizeRequirements')} className="custom-dropdown">
              <Dropdown.Toggle variant="outline-secondary" className="w-100">
                {summarizeRequirements}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item eventKey="Yes">Yes</Dropdown.Item>
                <Dropdown.Item eventKey="No">No</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Form.Group>
 
          <Form.Group controlId="selectModelGenerateTestCases" className="grid-item question">
            <Form.Label>Select Model for test case generation:</Form.Label>
            <Dropdown onSelect={(eventKey) => handleSelect(eventKey, 'selectedModel')} className="custom-dropdown">
              <Dropdown.Toggle variant="outline-secondary" className="w-100">
                {selectedModel}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item eventKey="Claude v2">Claude v2</Dropdown.Item>
                <Dropdown.Item eventKey="Mistral 7B Instruct">Mistral 7B Instruct</Dropdown.Item>
                <Dropdown.Item eventKey="Claude Sonnet 3">Claude Sonnet 3</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Form.Group>
 
          <Form.Group controlId="selectMethodGenerateTestCases" className="grid-item question">
            <Form.Label>Choose the Test Case generation method:</Form.Label>
            <Dropdown onSelect={(eventKey) => handleSelect(eventKey, 'testCaseMethod')} className="custom-dropdown">
              <Dropdown.Toggle variant="outline-secondary" className="w-100">
                {testCaseMethod}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item eventKey="Generate Test Cases with Historical Test Cases">
                  Generate Test Cases with Historical Test Cases
                </Dropdown.Item>
                <Dropdown.Item eventKey="Generate Test Cases with Process Docs">
                  Generate Test Cases with Process Docs
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Form.Group>
        </div>
 
        {/* Notes */}
        <Form.Group controlId="notesGenerateTestCases" className="grid-item span-2">
          <Form.Label>Notes</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
 
        {/* Generate button */}
        <div className='generate-btn'>
        <Button
          variant="success"
          className="mt-3 grid-item span-2 generate-button"
        >
          Generate Test Cases
        </Button>
        </div>
      </div>
    </div>
  );
};
 
export default GenerateTestCasesCard;