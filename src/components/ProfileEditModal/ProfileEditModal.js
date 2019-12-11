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
        <Modal.Header className="user-edit-header" closeButton>
          <Modal.Title >Edit User Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body className="user-edit-body">
          <div className="container mt-4">
            <div className="row">
              <div className="col-sm">
                <form onSubmit={props.handleSubmit}>
                  {/* <span id="are-u-sure">Please remember to save changes</span> */}
                  {/* <div className="form-group">
                        <label htmlFor="firstName">First Name</label>
                        <input onChange={props.handleChange} className="form-control form-control-lg" type="text" id="firstName" name="firstName" value={props.firstName}  />
                    </div>
                    <div className="form-group">
                        <label htmlFor="lastName">Last Name</label>
                        <input onChange={props.handleChange} className="form-control form-control-lg" type="text" id="lastName" name="lastName" value={props.lastName}  />
                    </div> */}
                    <div className="form-group">
                        <label htmlFor="location"><span className="useredit-label">Location</span></label>
                        <input onChange={props.handleChange} className="form-control form-control-lg" type="text" id="location" name="location" value={props.location} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="profilePicture"><span className="useredit-label">Profile Picture {`(URL)`}</span></label>
                        <input onChange={props.handleChange} className="form-control form-control-lg" type="text" id="profilePicture" name="profilePicture" value={props.profilePicture} />
                    </div>
                  <button id="useredit-save" onClick={handleClose} className="btn" type="submit">Save</button>
                  {/* <div id="cancel-button" onClick={handleClose} className="btn">Cancel</div> */}
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