import React from 'react';
import CreateTeamModal from '../../components/CreateTeamModal/CreateTeamModal';
import './CreateTeam.css'

const CreateTeam = (props) => {

        return (
            <section id='teamname'>
                <h1>Create Your Dream Team Today</h1>
                <div>
                <CreateTeamModal createTeamSubmit={props.createTeamSubmit} createName={props.createName} createTeamChange={props.createTeamChange}/>
                </div>

            </section>
        )
    
};

export default CreateTeam;