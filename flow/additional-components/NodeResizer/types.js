// @flow

import type { CSSProperties, Node as ReactNode } from 'react';
import type { Node } from '../../types/nodes';

export type ControlPosition = 'top' | 'top-right' | 'right' | 'bottom-right' | 'bottom' | 'bottom-left' | 'left' | 'top-left';
export type ControlLinePosition = 'top' | 'right' | 'bottom' | 'left';
export type ResizeControlVariant = 'handle' | 'line';

export type ShouldResize = (event: MouseEvent | TouchEvent, params: { nodeId: string }) => boolean;
export type OnResizeStart = (event: MouseEvent | TouchEvent, params: { nodeId: string }) => void;
export type OnResize = (event: MouseEvent | TouchEvent, params: { nodeId: string, width: number, height: number }) => void;
export type OnResizeEnd = (event: MouseEvent | TouchEvent, params: { nodeId: string, width: number, height: number }) => void;

export type NodeResizerProps = {
  /** Id of the node it is resizing */
  nodeId?: string,
  /** Color of the resize handle */
  color?: string,
  /** ClassName applied to handle */
  handleClassName?: string,
  /** Style applied to handle */
  handleStyle?: CSSProperties,
  /** ClassName applied to line */
  lineClassName?: string,
  /** Style applied to line */
  lineStyle?: CSSProperties,
  /** Are the controls visible */
  isVisible?: boolean,
  /** Minimum width of node */
  minWidth?: number,
  /** Minimum height of node */
  minHeight?: number,
  /** Maximum width of node */
  maxWidth?: number,
  /** Maximum height of node */
  maxHeight?: number,
  /** Keep aspect ratio when resizing */
  keepAspectRatio?: boolean,
  /** Callback to determine if node should resize */
  shouldResize?: ShouldResize,
  /** Callback called when resizing starts */
  onResizeStart?: OnResizeStart,
  /** Callback called when resizing */
  onResize?: OnResize,
  /** Callback called when resizing ends */
  onResizeEnd?: OnResizeEnd,
};

export type ResizeControlProps = {
  nodeId?: $PropertyType<NodeResizerProps, 'nodeId'>,
  color?: $PropertyType<NodeResizerProps, 'color'>,
  handleClassName?: $PropertyType<NodeResizerProps, 'handleClassName'>,
  handleStyle?: $PropertyType<NodeResizerProps, 'handleStyle'>,
  lineClassName?: $PropertyType<NodeResizerProps, 'lineClassName'>,
  lineStyle?: $PropertyType<NodeResizerProps, 'lineStyle'>,
  minWidth?: $PropertyType<NodeResizerProps, 'minWidth'>,
  minHeight?: $PropertyType<NodeResizerProps, 'minHeight'>,
  maxWidth?: $PropertyType<NodeResizerProps, 'maxWidth'>,
  maxHeight?: $PropertyType<NodeResizerProps, 'maxHeight'>,
  keepAspectRatio?: $PropertyType<NodeResizerProps, 'keepAspectRatio'>,
  shouldResize?: $PropertyType<NodeResizerProps, 'shouldResize'>,
  onResizeStart?: $PropertyType<NodeResizerProps, 'onResizeStart'>,
  onResize?: $PropertyType<NodeResizerProps, 'onResize'>,
  onResizeEnd?: $PropertyType<NodeResizerProps, 'onResizeEnd'>,
  position: ControlPosition,
  variant?: ResizeControlVariant,
};

export type ResizeControlLineProps = {
  position?: ControlLinePosition,
};
