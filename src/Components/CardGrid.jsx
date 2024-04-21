import React from 'react';
import { Spacing, Separator, CardGrid, Card } from '@vkontakte/vkui';
import './CardGrid.css';

const ExampleCardGrid = () => {
  return (
    <>
      <Separator />
      <Spacing size={12} />
      <CardGrid className='CardGrid'>
        <Card id='card_1' className='Card SFPro' size="l">
          <div className='textdiv SFPro'>Как успокоить свою тревожность?</div>
        </Card>
        <Card id='card_2' className='Card SFPro' size="l">
          <div className='textdiv SFPro'>Как часто надо проверять свое здоровье?</div>
        </Card>
        <Card id='card_3' className='Card SFPro' size="l">
          <div className='textdiv SFPro'>Что помогает для нормализации давления</div>
        </Card>
      </CardGrid>
      <Spacing size={12} />
      <Separator />
    </>
  );
};

export default ExampleCardGrid;
