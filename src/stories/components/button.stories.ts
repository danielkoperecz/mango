import { Meta, StoryObj } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import {ButtonComponent} from '../../app/components/button/button.component';
import {ButtonDirective} from '../../app/directives/functional/button.directive';

const meta: Meta<ButtonComponent> = {
  title: 'Components/Button',
  component: ButtonComponent,
  tags: ['autodocs'],
  decorators: [
    (story) => ({
      moduleMetadata: {
        imports: [CommonModule, ButtonComponent, ButtonDirective],
      },
      template: story().template,
      props: story().props,
    }),
  ],
  argTypes: {
    text: { control: 'text' },
    rounded: { control: 'boolean' },
    success: { control: 'boolean' },
    error: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<ButtonComponent>;

export const Default: Story = {
  args: {
    text: 'Default Button',
    rounded: false,
    success: false,
    error: false,
  },
};

export const Rounded: Story = {
  args: {
    text: 'Rounded Button',
    rounded: true,
  },
};

export const Success: Story = {
  args: {
    text: 'Success Button',
    success: true,
  },
};

export const Error: Story = {
  args: {
    text: 'Error Button',
    error: true,
  },
};

