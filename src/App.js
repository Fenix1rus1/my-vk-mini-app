//-------------------------------------------------------------
import React, { useState, useEffect } from 'react';
//-------------------------------------------------------------
import bridge from '@vkontakte/vk-bridge';
import { View, Gallery, Panel, PanelHeader, Tabbar, TabbarItem, Group, Cell,Spacing,SplitLayout} from '@vkontakte/vkui';
import { Icon28UserCircleOutline, Icon28WaterDropOutline, Icon28NewsfeedLinesOutline, Icon28LikeOutline } from '@vkontakte/icons';
//-------------------------------------------------------------
import ProfilePanel from './Components/ProfilePanel';
import ExampleCardGrid from './Components/CardGrid';
import MedicamentGrid from './Components/MedicamentGrid';
import CalendarComp from './Components/Calendar';
//-------------------------------------------------------------
import './App.css';
//-------------------------------------------------------------


const App = () => {
  const [activePanel] = useState('main');
  const [activeTab, setActiveTab] = useState('main');

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
  //-------------------------------------------------------------
  const renderMain = () => (
    <Group>
      <Panel id="main">
        <PanelHeader style={{ textAlign: 'center' }}>Главная</PanelHeader>
        <Spacing />
        <CalendarComp />
        <Spacing size={12} />
        <ExampleCardGrid />
        <MedicamentGrid />
        <div className='empty_div' style={{width:'100%', height:'45px'}} />
      </Panel>
    </Group>
  );
  //-------------------------------------------------------------
  const renderProfile = () => (
    <View activePanel="profile">
      <ProfilePanel id="profile" />
    </View>
  );
  //-------------------------------------------------------------
  const renderMessenger = () => (
    <Group>
      <Panel id="messenger">
        <SplitLayout>
          <Cell>Здесь будет содержимое Давление.</Cell>
            <PanelHeader style={{ textAlign: 'center' }}>Давление</PanelHeader>
          </SplitLayout>
      </Panel>
    </Group>
  );
  //-------------------------------------------------------------
  const renderGlukoz = () => (
    <Group>
      <SplitLayout id="glukoz">
        <PanelHeader style={{ textAlign: 'center' }}>Глюкоза</PanelHeader>
        <Cell>Здесь будет содержимое Глюкозы.</Cell>
      </SplitLayout>
    </Group>
  );
  //-------------------------------------------------------------
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
//-------------------------------------------------------------
export default App;
