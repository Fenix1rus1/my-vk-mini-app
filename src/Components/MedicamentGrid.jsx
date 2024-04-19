import React from 'react';
import { SimpleCell, InfoRow, CardGrid, Card, Group, Image  } from '@vkontakte/vkui';
import './MedicamentGrid.css';

const MedicamentGrid = () => {
  return (
    <>
        <Group mode="plain">
        <CardGrid style={{width:'350px', marginLeft:'auto',marginRight:'auto'}} size="l">
          <Card mode="inline">
            <div style={{display:'Flex'}}>
              <Image size={72} src={'https://cdn.eapteka.ru/upload/offer_photo/203/948/1_d6b24c54da843c01ca4a3d2aa41bcfec.png?t=1632978831&_cvc=1713284288'}/>
              <Group>
                <SimpleCell multiline>
                  Ваши лекарства:
                <InfoRow header="Глибомет 400 мг + 2,5 мг"></InfoRow>
                <InfoRow header="Прием лекарства: 12:00, 18.03"></InfoRow>
                </SimpleCell>
              </Group>
            </div>
          </Card>
        </CardGrid>
      </Group>
    </>
  );
};

export default MedicamentGrid;