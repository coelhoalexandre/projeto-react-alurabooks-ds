import { ComponentMeta, ComponentStory } from '@storybook/react';
import { AbBotao, AbBotaoProps } from '../src';
import React from 'react';

export default {
  title: 'Componentes/AbBotao',
  component: AbBotao,
} as ComponentMeta<typeof AbBotao>;

const Template: ComponentStory<typeof AbBotao> = (args) => (
  <AbBotao {...args} />
);

export const Primario = Template.bind({});

Primario.args = {
  texto: 'Ab Botão Primário',
  tipo: 'primario',
} as AbBotaoProps;

export const Secundario = Template.bind({});

Secundario.args = {
  texto: 'Ab Botão Secundário',
  tipo: 'secundario',
} as AbBotaoProps;
