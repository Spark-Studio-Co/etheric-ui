import type { Meta, StoryObj } from "@storybook/react";
import { Selector } from "./index";

const meta: Meta<typeof Selector> = {
  title: "Selector/Selector",
  component: Selector,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Selector_Component: Story = {};

export const Testing: Story = {
   args: {
    items: ['Red', 'Blue', 'Green','a','s','v'],
    selectedValue: 'Select',
    placeholder: 'Choose a color',
    onChange: value => console.log(value),
    selectorStyle: {
      backgroundColor: 'lightgray',
      padding: '10px',
      borderRadius: '5px',
      borderColor: 'gray'
    },
    optionStyle: {
      padding: '10px',
      color: 'darkblue'
    },
    optionsContainerStyle: {
      backgroundColor: 'white',
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
    }
}
};
