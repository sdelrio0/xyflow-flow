// @flow

import type { CSSProperties, Node as ReactNode } from 'react';
import type { HTMLAttributes } from 'react';
import type { EdgeLabelOptions } from '../../types';

export type EdgeTextProps = {
  ...HTMLAttributes<SVGElement>,
  ...EdgeLabelOptions,
  x: number,
  y: number,
};

export type BaseEdgeProps = {
  id?: string,
  interactionWidth?: number,
  className?: string,
  labelX?: number,
  labelY?: number,
  markerStart?: string,
  markerEnd?: string,
  path: string,
  style?: CSSProperties,
};

export type EdgeComponentProps = {
  id?: string,
  markerStart?: string,
  markerEnd?: string,
  interactionWidth?: number,
  style?: CSSProperties,
  sourceHandleId?: string,
  targetHandleId?: string,
};
