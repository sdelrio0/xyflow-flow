// @flow

import type { CSSProperties, HTMLAttributes, Node as ReactNode, MouseEvent as ReactMouseEvent, ComponentType } from 'react';
import type { Position } from './utils';
import type { Handle, HandleType } from './handles';
import type { EdgeTypes, InternalNode, Node } from './index';

export type EdgePosition = {
  sourceX: number,
  sourceY: number,
  targetX: number,
  targetY: number,
};

export type BezierPathOptions = {
  curvature?: number,
};

export type SmoothStepPathOptions = {
  offset?: number,
  borderRadius?: number,
};

export type StepPathOptions = {
  offset?: number,
};

export type DefaultEdgeOptionsBase<EdgeType> = {
  type?: $PropertyType<EdgeType, 'type'>,
};

export type EdgeBase<
  EdgeData: { [key: string]: any } = { [key: string]: any },
  EdgeType: string | void = string | void
> = {
  id: string,
  source: string,
  target: string,
  sourceHandle?: string | null,
  targetHandle?: string | null,
  type?: EdgeType,
  animated?: boolean,
  hidden?: boolean,
  deletable?: boolean,
  selected?: boolean,
  data?: EdgeData,
  style?: CSSProperties,
  zIndex?: number,
  ariaLabel?: string,
  interactionWidth?: number,
};

export type EdgeLabelOptions = {
  label?: string | ReactNode,
  labelStyle?: CSSProperties,
  labelShowBg?: boolean,
  labelBgStyle?: CSSProperties,
  labelBgPadding?: [number, number],
  labelBgBorderRadius?: number,
};

export type Edge<
  EdgeData: { [key: string]: any } = { [key: string]: any },
  EdgeType: string | void = string | void
> = EdgeBase<EdgeData, EdgeType> &
  EdgeLabelOptions & {
    style?: CSSProperties,
    className?: string,
    reconnectable?: boolean | HandleType,
    focusable?: boolean,
  };

export type SmoothStepEdge<EdgeData: { [key: string]: any } = { [key: string]: any }> = Edge<
  EdgeData,
  'smoothstep'
> & {
  pathOptions?: SmoothStepPathOptions,
};

export type BezierEdge<EdgeData: { [key: string]: any } = { [key: string]: any }> = Edge<EdgeData, 'default'> & {
  pathOptions?: BezierPathOptions,
};

export type StepEdge<EdgeData: { [key: string]: any } = { [key: string]: any }> = Edge<EdgeData, 'step'> & {
  pathOptions?: StepPathOptions,
};

export type StraightEdge<EdgeData: { [key: string]: any } = { [key: string]: any }> = Edge<EdgeData, 'straight'>;

export type BuiltInEdge = SmoothStepEdge | BezierEdge | StepEdge | StraightEdge;

export type EdgeMouseHandler<EdgeType: Edge = Edge> = (event: ReactMouseEvent, edge: EdgeType) => void;

export type EdgeWrapperProps<EdgeType: Edge = Edge> = {
  id: string,
  edgesFocusable: boolean,
  edgesReconnectable: boolean,
  elementsSelectable: boolean,
  noPanClassName: string,
  onClick?: EdgeMouseHandler<EdgeType>,
  onDoubleClick?: EdgeMouseHandler<EdgeType>,
  onReconnect?: OnReconnect<EdgeType>,
  onContextMenu?: EdgeMouseHandler<EdgeType>,
  onMouseEnter?: EdgeMouseHandler<EdgeType>,
  onMouseMove?: EdgeMouseHandler<EdgeType>,
  onMouseLeave?: EdgeMouseHandler<EdgeType>,
  reconnectRadius?: number,
  onReconnectStart?: (event: ReactMouseEvent, edge: EdgeType, handleType: HandleType) => void,
  onReconnectEnd?: (
    event: MouseEvent | TouchEvent,
    edge: EdgeType,
    handleType: HandleType,
    connectionState: FinalConnectionState
  ) => void,
  rfId?: string,
  edgeTypes?: EdgeTypes,
  onError?: (error: Error) => void,
  disableKeyboardA11y?: boolean,
};

export type DefaultEdgeOptions = DefaultEdgeOptionsBase<Edge>;

export type EdgeTextProps = HTMLAttributes<SVGElement> &
  EdgeLabelOptions & {
    x: number,
    y: number,
  };

export type EdgeProps = {
  sourceHandleId?: string | null,
  targetHandleId?: string | null,
  markerStart?: string,
  markerEnd?: string,
  pathOptions?: any,
  interactionWidth?: number,
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
  id?: $PropertyType<EdgeProps, 'id'>,
  markerStart?: $PropertyType<EdgeProps, 'markerStart'>,
  markerEnd?: $PropertyType<EdgeProps, 'markerEnd'>,
  interactionWidth?: $PropertyType<EdgeProps, 'interactionWidth'>,
  style?: $PropertyType<EdgeProps, 'style'>,
  sourceHandleId?: $PropertyType<EdgeProps, 'sourceHandleId'>,
  targetHandleId?: $PropertyType<EdgeProps, 'targetHandleId'>,
};

export type ConnectionLineComponentProps<NodeType: Node = Node> = {
  connectionLineStyle?: CSSProperties,
  connectionLineType: string,
  fromNode: InternalNode<NodeType>,
  fromHandle: Handle,
  fromX: number,
  fromY: number,
  toX: number,
  toY: number,
  fromPosition: Position,
  toPosition: Position,
  connectionStatus: 'valid' | 'invalid' | null,
  toNode: InternalNode<NodeType> | null,
  toHandle: Handle | null,
};
