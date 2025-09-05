import type { ReactNode } from 'react';

export interface TooltipProps{
  text: string;
  icon?: ReactNode;
  additionalClassName?: string;
}