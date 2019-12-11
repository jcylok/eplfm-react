import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import './CreateTeamModal.css';

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
        <Modal.Header className="createteam-header" closeButton>
          <Modal.Title >Create Team</Modal.Title>
        </Modal.Header>
        <Modal.Body className="createteam-body">
          <div className="container mt-4">
            <div className="row">
              <div className="col-sm">
                <form onSubmit={props.createTeamSubmit}>
                    <div className="form-group">
                        <label htmlFor="location"><span id="createteam-teamname">Team Name: </span></label>
                        <input onChange={props.createTeamChange} className="form-control form-control-lg" type="text" id="createName" name="createName" value={props.createName} />
                    </div>
                  {/* <div id="cancel-button" onClick={handleClose} className="btn">Cancel</div> */}
                  <button id="confirm-create" onClick={handleClose} className="btn" type="submit">Save</button>
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