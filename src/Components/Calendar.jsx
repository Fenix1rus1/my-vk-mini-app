
import React from 'react';
import { Spacing, Button, ButtonGroup, Calendar } from '@vkontakte/vkui';
import './Calendar.css';

const CalendarComp = () => {

    
  return (
    <>
        <Calendar style={{marginLeft:'auto', marginRight:'auto'}} />
        <Spacing size={12} />
        <ButtonGroup style={{paddingLeft:'16px', paddingRight:'16px'}}
        align='center'>
          <Button size='m' stretched gap="m" style={{ maxWidth:'312px'}}>
            Записать данные
          </Button>
        </ButtonGroup>
    </>
  );
};

export default CalendarComp;
