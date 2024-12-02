// @flow

import type { CSSProperties, MouseEvent as ReactMouseEvent } from 'react';
import type { XYPosition, Position } from './utils';
import type { Handle } from './handles';
import type { NodeTypes } from './general';

export type CoordinateExtent = [[number, number], [number, number]];
export type NodeOrigin = [number, number];

export type NodeBase<
  NodeData: { [key: string]: any } = { [key: string]: any },
  NodeType: string = string
> = {
  id: string,
  position: XYPosition,
  data: NodeData,
  type?: NodeType,
  sourcePosition?: Position,
  targetPosition?: Position,
  hidden?: boolean,
  selected?: boolean,
  dragging?: boolean,
  draggable?: boolean,
  selectable?: boolean,
  connectable?: boolean,
  deletable?: boolean,
  dragHandle?: string,
  width?: number,
  height?: number,
  initialWidth?: number,
  initialHeight?: number,
  parentId?: string,
  zIndex?: number,
  extent?: 'parent' | CoordinateExtent,
  expandParent?: boolean,
  ariaLabel?: string,
  origin?: NodeOrigin,
  handles?: Array<NodeHandle>,
  measured?: {
    width?: number,
    height?: number,
  },
};

export type Node<
  NodeData: { [key: string]: any } = { [key: string]: any },
  NodeType: string = string
> = NodeBase<NodeData, NodeType> & {
  style?: CSSProperties,
  className?: string,
  resizing?: boolean,
  focusable?: boolean,
};

export type InternalNodeBase<NodeType: NodeBase> = NodeType & {
  measured: {
    width?: number,
    height?: number,
  },
  internals: {
    positionAbsolute: XYPosition,
    z: number,
    userNode: NodeType,
    handleBounds?: NodeHandleBounds,
    bounds?: NodeBounds,
  },
};

export type InternalNode<NodeType: Node = Node> = InternalNodeBase<NodeType>;

export type NodeMouseHandler<NodeType: Node = Node> = (event: ReactMouseEvent, node: NodeType) => void;
export type SelectionDragHandler<NodeType: Node = Node> = (event: ReactMouseEvent, nodes: Array<NodeType>) => void;
export type OnNodeDrag<NodeType: Node = Node> = (
  event: ReactMouseEvent,
  node: NodeType,
  nodes: Array<NodeType>
) => void;

export type NodeWrapperProps<NodeType: Node> = {
  id: string,
  nodesConnectable: boolean,
  elementsSelectable: boolean,
  nodesDraggable: boolean,
  nodesFocusable: boolean,
  onClick?: NodeMouseHandler<NodeType>,
  onDoubleClick?: NodeMouseHandler<NodeType>,
  onMouseEnter?: NodeMouseHandler<NodeType>,
  onMouseMove?: NodeMouseHandler<NodeType>,
  onMouseLeave?: NodeMouseHandler<NodeType>,
  onContextMenu?: NodeMouseHandler<NodeType>,
  resizeObserver: ResizeObserver | null,
  noDragClassName: string,
  noPanClassName: string,
  rfId: string,
  disableKeyboardA11y: boolean,
  nodeTypes?: NodeTypes,
  nodeExtent?: CoordinateExtent,
  onError?: (error: Error) => void,
  nodeClickDistance?: number,
};

export type NodeHandleBounds = {
  source: Array<Handle> | null,
  target: Array<Handle> | null,
};

export type NodeBounds = {
  width: number | null,
  height: number | null,
};

export type NodeHandle = {
  id: string,
  position: Position,
  x: number,
  y: number,
};

export type NodeDragItem = {
  id: string,
  position: XYPosition,
  distance: XYPosition,
  measured: {
    width: number,
    height: number,
  },
  width: number,
  height: number,
  internals: {
    positionAbsolute: XYPosition,
  },
  positionAbsolute: XYPosition,
  extent?: 'parent' | CoordinateExtent,
  parentId?: string,
  dragging?: boolean,
  origin?: NodeOrigin,
  expandParent?: boolean,
};

export type BuiltInNode = Node<{ label: string }, 'input' | 'output' | 'default'>;

export type NodeProps<NodeType: Node = Node> = $ReadOnly<{
  id: string,
  data: $PropertyType<NodeType, 'data'>,
  width?: number,
  height?: number,
  sourcePosition?: Position,
  targetPosition?: Position,
  selected?: boolean,
  dragHandle?: string,
  selectable?: boolean,
  deletable?: boolean,
  draggable?: boolean,
}>;
