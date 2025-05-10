// canvas.component.stories.ts
import type { Meta, StoryObj } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import {CanvasComponent} from '../../app/components/canvas/canvas.component';
import {GridComponent} from '../../app/components/grid/grid.component';

const meta: Meta<GridComponent> = {
  title: 'Layout/Grid',
  component: GridComponent,
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
type Story = StoryObj<GridComponent>;

export const Default: Story = {
  render: () => ({
    template: `
      <app-grid appGrid [columns]="4">

      </app-grid>
    `,
    props: {
      items: Array.from({ length: 5 }, (_, i) => i + 1),
    },
  }),
};
