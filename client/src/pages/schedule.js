import React from 'react';
import ScheduleEvent from '../components/ScheduleEvent/Schedule'
import Container from '@material-ui/core/Container';

function schedule(props){
    const { addEvent } = props;
     return(
        <div>
        <Container maxWidth='md'>
            <ScheduleEvent addEvent={addEvent}/>

        </Container>
        
        </div>


    )
}

export default schedule;