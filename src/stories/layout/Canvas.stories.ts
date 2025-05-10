// canvas.component.stories.ts
import type { Meta, StoryObj } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import {CanvasComponent} from '../../app/components/canvas/canvas.component';

const meta: Meta<CanvasComponent> = {
  title: 'Layout/Canvas',
  component: CanvasComponent,
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
type Story = StoryObj<CanvasComponent>;

export const Default: Story = {
  render: () => ({
    template: `
      <app-canvas></app-canvas>
    `,
  }),
};
