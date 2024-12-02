// @flow

import type { Node as ReactNode } from 'react';
import type { HTMLAttributes } from 'react';
import type { PanelPosition } from '../../types';

export type PanelProps = {
  ...HTMLAttributes<HTMLDivElement>,
  /** Set position of the panel */
  position?: PanelPosition,
  children: ReactNode,
};
