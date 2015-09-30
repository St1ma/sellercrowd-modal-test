'use strict';

import React from 'react';
import Modal from 'react-bootstrap/lib/Modal';

import Button   from './Button.jsx';

import './ModalDialog.less';

const USER_LOGO = require("./ModalDialog/user-img.png");

const ModalDialog = React.createClass({
    handleClick() {
        if (this.props.handleClick) {
            this.props.handleClick();
        }
    },

    render() {
        return (
            <Modal show   = { this.props.showModal }
                   onHide = { this.handleClick } >
                <Modal.Header closeButton />
                <Modal.Body>
                    <div className="row">
                        <div className="col-md-1 left-container">
                            <i className="glyphicon glyphicon-share-alt"></i>
                        </div>
                        <div className="col-md-10 main-content">
                            <h2>COMPOSE A MESSAGE</h2>

                            <div className="user-title">
                                <img src={USER_LOGO} className="user-photo inline-block"/>
                                <span className="user-name inline-block">Rosita Heyward, Recruiting Manager Factual</span>
                                <div className="user-edit inline-block">
                                    <i className="glyphicon glyphicon-pencil"></i>
                                    <span>Edit</span>
                                </div>
                            </div>

                            <form className="modal-form job-message">
                                <div className="send-to">
                                    <label className="small" for="addressee">Send To</label>
                                    <p id="addressee">Regional Sales Manager, Chicago</p>
                                </div>

                                <div className="form-group">
                                    <label className="small" for="messageToCandidate">Personal message to candidate</label>
                                    <textarea className="form-control" id="messageToCandidate" rows="3" placeholder="Type your message...">
                                        Hi there - I saw your profile and it looks perfect for our Account Executive role for CPG Category in Los Angeles. I’d love to chat when you have some time.
                                    </textarea>
                                </div>

                                <div className="checkbox">
                                    <label className="small">
                                        <input type="checkbox" checked id="includeJobDescription"/> I’d like to include a job description with my message.
                                    </label>
                                </div>

                                <div className="form-group job-including">
                                    <label className="radio small">
                                        <input type="radio" id="existingJob" value="existingJob" /> Use an existing job description
                                    </label>
                                    <select className="form-control" id="selectJob">
                                        <option selected>Senior Sales Executive</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </select>

                                    <label className="radio small">
                                        <input type="radio" id="newJob" checked value="newJob" /> Create a new job description
                                    </label>

                                    <div className="form-group new-job-group">
                                        <label className="small" for="jobTitle">Job Title</label>
                                        <input type="text" className="form-control" id="jobTitle" value="Account Executive" />

                                        <label className="small" for="jobDescription">Job Description</label>
                                        <textarea className="form-control" id="jobDescription" rows="11" placeholder="Type job description...">
                                            Factual is in need of a Demand Specialist to focus on supporting the demand needs of Agency and Strategic Accounts. Candidate must have experience with supporting Ad Sales teams within a mobile advertising environment, as well as working directly with agencies brand clients & channel partners on advertising and marketing programs. The ideal candidate is well versed in mobile and ad tech products and understands the difference between various platforms and products. This candidate will drive location strategy & ideas for strategic accounts & partners, will own developing location based concepts and plans and leverage Factual’s location data and Tool Set to assist our clients in designing and launching Factual targeted campaigns.
                                        </textarea>
                                    </div>
                                </div>

                                <div className="form-group left-spacing">
                                    <label className="small" for="compensation">Compensation</label>
                                    <div id="compensation">
                                        <span>$</span>
                                        <input type="text" className="form-control inline-block" id="minCompensation" value="200" />
                                        <span className="compenstation-separate">,000</span>
                                        <span className="compenstation-separate">-</span>
                                        <span>$</span>
                                        <input type="text" className="form-control inline-block" id="maxCompensation" value="250" />
                                        <span>,000</span>
                                    </div>
                                </div>

                                <div className="checkbox left-spacing bottom-align">
                                    <label className="small">
                                        <input type="checkbox" checked id="saveJobDescription" /> Save this job description
                                    </label>
                                </div>

                                <div className="checkbox left-spacing bottom-align">
                                    <label className="small">
                                        <input type="checkbox" id="postJob" /> I’d like to post this job on SellerCrowd
                                    </label>
                                </div>

                            </form>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button handleClick = { this.handleClick }
                            type        = 'primary'
                            value       = 'Send' />
                </Modal.Footer>
            </Modal>
        );
    }
});

export default ModalDialog;
