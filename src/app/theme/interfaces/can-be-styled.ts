import {Theme} from './theme.interface';

export interface CanBeStyled {
  applyStyles(theme?: Theme): void;
}
