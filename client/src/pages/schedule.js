import React from 'react';
import ScheduleEvent from '../components/ScheduleEvent/Schedule'
import Container from '@material-ui/core/Container';

function schedule(){

    return(
        <div>
        <Container maxWidth='md'>
            <ScheduleEvent/>

        </Container>
        
        </div>


    )
}

export default schedule;