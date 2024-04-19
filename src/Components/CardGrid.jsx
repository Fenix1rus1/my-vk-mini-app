import React from 'react';
import { Spacing, Separator, CardGrid, Card } from '@vkontakte/vkui';
import './CardGrid.css';

const ExampleCardGrid = () => {
  return (
    <>
      <Spacing size={12} />
      <Separator />
      <Spacing size={12} />
      <CardGrid className='CardGrid'>
        <Card className='Card SFPro' size="l">
          <div className='textdiv'>Как успокоить свою тревожность?</div>
        </Card>
        <Card className='Card SFPro' size="l">
          <div className='textdiv'>Card 2 C869ontent</div>
        </Card>
        <Card className='Card SFPro' size="l">
          <div className='textdiv SFPro'>Card 3 Content</div>
        </Card>
      </CardGrid>
      <Spacing size={12} />
      <Separator />
    </>
  );
};

export default ExampleCardGrid;
