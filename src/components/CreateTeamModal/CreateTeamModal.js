import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

// import './PostDeleteModal.css'

function CreateTeamModal (props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button id="start" variant="primary" onClick={handleShow}>
        Start
      </button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create Team</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="container mt-4">
            <div className="row">
              <div className="col-sm">
                <form onSubmit={props.createTeamSubmit}>
                    <div className="form-group">
                        <label htmlFor="location">Team Name</label>
                        <input onChange={props.handleChange} className="form-control form-control-lg" type="text" id="location" name="createName" value={props.createName} />
                    </div>
                  <button id="confirm-delete" onClick={handleClose} className="btn btn-primary" type="submit">Save</button>
                  <div id="cancel-button" onClick={handleClose} className="btn btn-primary">Cancel</div>
                </form>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default CreateTeamModal;