import type { Meta, StoryObj } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import {FlexComponent} from '../../app/components/flex/flex.component';

const meta: Meta<FlexComponent> = {
  title: 'Layout/FlexBox',
  component: FlexComponent,
  tags: ['autodocs'],
  decorators: [
    // Import CommonModule for ngFor and structural directives
    (story) => ({
      moduleMetadata: {
        imports: [CommonModule],
      },
      template: story().template,
      props: story().props,
    }),
  ],
};

export default meta;
type Story = StoryObj<FlexComponent>;

export const Default: Story = {
  render: () => ({
    template: `
      <app-flex>

      </app-flex>
    `,
    props: {
      items: Array.from({ length: 5 }, (_, i) => i + 1),
    },
  }),
};
