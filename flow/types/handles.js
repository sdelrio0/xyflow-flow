// @flow

import type { Position } from './utils';

export type HandleType = 'source' | 'target';

export type Handle = {
  id: string | null,
  position: Position,
  x: number,
  y: number,
  width: number,
  height: number,
  type?: HandleType,
};
