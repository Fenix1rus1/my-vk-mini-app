import React, { useState } from 'react';
import { View, Panel, Tabbar, TabbarItem } from '@vkontakte/vkui'; // Подставьте правильные импорты из VKUI
import { Icon28MessageOutline, Icon28NewsfeedOutline, Icon28UserCircleOutline } from '@vkontakte/icons'; // Подставьте правильные импорты иконок из VKUI

const TabbarC = () => {
  const [activeTab, setActiveTab] = useState('main'); // Используем хук useState для отслеживания активной вкладки
  const [activePanel, setActivePanel] = useState('main'); // Предполагаем, что у вас есть активная панель, которая меняется в зависимости от выбранной вкладки

  const renderMain = () => {
    // Здесь рендерите содержимое основной вкладки (main)
    return <div>Main Content</div>;
  };

  const renderProfile = () => {
    // Здесь рендерите содержимое вкладки профиля (profile)
    return <div>Profile Content</div>;
  };

  const renderMessenger = () => {
    // Здесь рендерите содержимое вкладки мессенджера (messenger)
    return <div>Messenger Content</div>;
  };

  const renderGlukoz = () => {
    // Здесь рендерите содержимое вкладки глюкозы (glukoz)
    return <div>Glukoz Content</div>;
  };

  return (
    <View activePanel={activePanel}>
      <Panel id="main">
        {activeTab === 'main' && renderMain()}
        {activeTab === 'profile' && renderProfile()}
        {activeTab === 'messenger' && renderMessenger()}
        {activeTab === 'glukoz' && renderGlukoz()}
        <Tabbar>
          <TabbarItem onClick={() => setActiveTab('messenger')} selected={activeTab === 'messenger'} text="Давление">
            <Icon28NewsfeedOutline />
          </TabbarItem>
          <TabbarItem onClick={() => setActiveTab('main')} selected={activeTab === 'main'} text="Главная">
            <Icon28NewsfeedOutline />
          </TabbarItem>
          <TabbarItem onClick={() => setActiveTab('glukoz')} selected={activeTab === 'glukoz'} text="Глюкоза">
            <Icon28UserCircleOutline />
          </TabbarItem>
          <TabbarItem onClick={() => setActiveTab('profile')} selected={activeTab === 'profile'} text="Профиль">
            <Icon28UserCircleOutline />
          </TabbarItem>
        </Tabbar>
      </Panel>
    </View>
  );
};

export default TabbarC;