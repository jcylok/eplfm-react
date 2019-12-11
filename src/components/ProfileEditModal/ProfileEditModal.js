import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
// import Button from 'react-bootstrap/Button';
import './ProfileEditModal.css';

// import './PostDeleteModal.css'

function ProfileEditModal (props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button id="editpbtn"variant="primary" onClick={handleShow}>
        Edit Profile
      </button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit User Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="container mt-4">
            <div className="row">
              <div className="col-sm">
                <form onSubmit={props.handleSubmit}>
                  <span id="are-u-sure">Please remember to save changes</span>
                  {/* <div className="form-group">
                        <label htmlFor="firstName">First Name</label>
                        <input onChange={props.handleChange} className="form-control form-control-lg" type="text" id="firstName" name="firstName" value={props.firstName}  />
                    </div>
                    <div className="form-group">
                        <label htmlFor="lastName">Last Name</label>
                        <input onChange={props.handleChange} className="form-control form-control-lg" type="text" id="lastName" name="lastName" value={props.lastName}  />
                    </div> */}
                    <div className="form-group">
                        <label htmlFor="location">Location</label>
                        <input onChange={props.handleChange} className="form-control form-control-lg" type="text" id="location" name="location" value={props.location} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="profilePicture">Profile Picture {`(URL)`}</label>
                        <input onChange={props.handleChange} className="form-control form-control-lg" type="text" id="profilePicture" name="profilePicture" value={props.profilePicture} />
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

export default ProfileEditModal;