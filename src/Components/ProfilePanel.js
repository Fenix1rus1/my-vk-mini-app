import React from 'react';
import { Group, Panel, PanelHeader, Cell, Button } from '@vkontakte/vkui';
import ExampleCardGrid from './CardGrid';
const ProfilePanel = () => {
  return (
    <Group>
      <Panel id="profile">
        <PanelHeader style={{ textAlign: 'center' }}>Профиль</PanelHeader>
        <Cell>Здесь будет содержимое профиля пользователя.</Cell>
      </Panel>
    </Group>
  );
};

export default ProfilePanel;
