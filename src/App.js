// src/App.js

import React, { useState, useEffect } from 'react';
import bridge from '@vkontakte/vk-bridge';
import { View, Panel, PanelHeader, Tabbar, TabbarItem, Calendar, Group, Cell, CardGrid, Card,Button,ButtonGroup,Spacing,Separator, Div} from '@vkontakte/vkui';
import { Icon28NewsfeedOutline, Icon28UserCircleOutline, Icon28MessageOutline, Icon28WaterDropOutline, Icon28NewsfeedLinesOutline, Icon28LikeOutline } from '@vkontakte/icons';
import ProfilePanel from './Components/ProfilePanel';
import ExampleCardGrid from './Components/CardGrid';

const App = () => {
  const [activePanel, setActivePanel] = useState('main');
  const [activeTab, setActiveTab] = useState('main');
  const [selectedDate, setSelectedDate] = useState(new Date());

  useEffect(() => {
    async function fetchData() {
      try {
        await bridge.send('VKWebAppInit');
      } catch (error) {
        console.error('Ошибка инициализации VK Mini App:', error);
      }
    }
    fetchData();
  }, []);

  const handleDateChange = (date) => {
    setSelectedDate(date);
    console.log('Выбранная дата:', date);
  };

  const renderMain = () => (
    <Group>
      <Panel id="main">
        
        <PanelHeader style={{ textAlign: 'center' }}>Главная</PanelHeader>
        <Panel id='calendar'style={{width:'100%', display:'block'}}>
          <Calendar style={{marginLeft:'auto', marginRight:'auto'}}
            onSelect={handleDateChange}
            weekStartsOn={1}
            size='undefined'
          />
        </Panel>
        <Spacing size={12} />
        <ExampleCardGrid />
        <ButtonGroup style={{paddingLeft:'16px', paddingRight:'16px'}}
        align='center'>
          <Button stretched gap="m" style={{ maxWidth:'312px'}}>
            Записать данные
          </Button>
        </ButtonGroup>

      </Panel>
    </Group>
  );

  const renderProfile = () => (
    <View activePanel="profile">
      <ProfilePanel id="profile" />
    </View>
  );

  const renderMessenger = () => (
    <Group>
      <Panel id="messenger">
        <PanelHeader style={{ textAlign: 'center' }}>Давление</PanelHeader>
        <Cell>Здесь будет содержимое Давление.</Cell>
      </Panel>
    </Group>
  );

  const renderGlukoz = () => (
    <Group>
      <Panel id="glukoz">
        <PanelHeader style={{ textAlign: 'center' }}>Глюкоза</PanelHeader>
        <Cell>Здесь будет содержимое Глюкозы.</Cell>
      </Panel>
    </Group>
  );
  return (
    <View activePanel={activePanel}>
      <Panel id="main">
      {activeTab === 'glukoz' && renderGlukoz()}
        {activeTab === 'main' && renderMain()}
        {activeTab === 'profile' && renderProfile()}
        {activeTab === 'messenger' && renderMessenger()}
        
        <Tabbar>
        <TabbarItem onClick={() => setActiveTab('glukoz')} selected={activeTab === 'glukoz'} text="Глюкоза">
          <Icon28WaterDropOutline />
          </TabbarItem>
          <TabbarItem onClick={() => setActiveTab('main')} selected={activeTab === 'main'} text="Главная">
            <Icon28NewsfeedLinesOutline />
          </TabbarItem>
          <TabbarItem onClick={() => setActiveTab('messenger')} selected={activeTab === 'messenger'} text="Давление">
            <Icon28LikeOutline />
          </TabbarItem>
          <TabbarItem onClick={() => setActiveTab('profile')} selected={activeTab === 'profile'} text="Профиль">
            <Icon28UserCircleOutline />
          </TabbarItem>
        </Tabbar>
      </Panel>
    </View>
  );
};

export default App;
