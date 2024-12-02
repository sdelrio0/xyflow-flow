// @flow

import type { Selection } from 'd3-selection';
import type { D3DragEvent, SubjectPosition } from 'd3-drag';
import type { ZoomBehavior } from 'd3-zoom';

import type { XYPosition, Rect, Position } from './utils';
import type { InternalNodeBase, NodeBase, NodeDragItem } from './nodes';
import type { Handle, HandleType } from './handles';
import type { PanZoomInstance } from './panzoom';
import type { EdgeBase } from './edges';

export type Project = (position: XYPosition) => XYPosition;

export type OnMove = (event: MouseEvent | TouchEvent | null, viewport: Viewport) => void;
export type OnMoveStart = OnMove;
export type OnMoveEnd = OnMove;

export type ZoomInOut = (options?: ViewportHelperFunctionOptions) => Promise<boolean>;
export type ZoomTo = (zoomLevel: number, options?: ViewportHelperFunctionOptions) => Promise<boolean>;
export type GetZoom = () => number;
export type GetViewport = () => Viewport;
export type SetViewport = (viewport: Viewport, options?: ViewportHelperFunctionOptions) => Promise<boolean>;
export type SetCenter = (x: number, y: number, options?: SetCenterOptions) => Promise<boolean>;
export type FitBounds = (bounds: Rect, options?: FitBoundsOptions) => Promise<boolean>;

export type Connection = {
  source: string,
  target: string,
  sourceHandle: string | null,
  targetHandle: string | null,
};

export type HandleConnection = Connection & {
  edgeId: string,
};

export type ConnectionMode = 'strict' | 'loose';

export type OnConnectStartParams = {
  nodeId: string | null,
  handleId: string | null,
  handleType: HandleType | null,
};

export type OnConnectStart = (event: MouseEvent | TouchEvent, params: OnConnectStartParams) => void;
export type OnConnect = (connection: Connection) => void;
export type OnConnectEnd = (event: MouseEvent | TouchEvent, connectionState: FinalConnectionState) => void;

export type IsValidConnection = (edge: EdgeBase | Connection) => boolean;

export type FitViewParamsBase<NodeType: NodeBase> = {
  nodes: Map<string, InternalNodeBase<NodeType>>,
  width: number,
  height: number,
  panZoom: PanZoomInstance,
  minZoom: number,
  maxZoom: number,
};

export type FitViewOptionsBase<NodeType: NodeBase = NodeBase> = {
  padding?: number,
  includeHiddenNodes?: boolean,
  minZoom?: number,
  maxZoom?: number,
  duration?: number,
  nodes?: Array<NodeType | { id: string }>,
};

export type Viewport = {
  x: number,
  y: number,
  zoom: number,
};

export type KeyCode = string | Array<string>;

export type SnapGrid = [number, number];

export type PanOnScrollMode = 'free' | 'vertical' | 'horizontal';

export type ViewportHelperFunctionOptions = {
  duration?: number,
};

export type SetCenterOptions = ViewportHelperFunctionOptions & {
  zoom?: number,
};

export type FitBoundsOptions = ViewportHelperFunctionOptions & {
  padding?: number,
};

export type SelectionMode = 'partial' | 'full';

export type SelectionRect = {
  startX: number,
  startY: number,
  x: number,
  y: number,
  width: number,
  height: number,
};

export type ProOptions = {
  account?: string,
  hideAttribution: boolean,
};

export type NoConnection = {
  inProgress: false,
  isValid: null,
  from: null,
  fromHandle: null,
  fromPosition: null,
  fromNode: null,
  to: null,
  toHandle: null,
  toPosition: null,
  toNode: null,
};

export type ConnectionInProgress<NodeType: NodeBase> = {
  inProgress: true,
  isValid: boolean | null,
  from: XYPosition,
  fromHandle: Handle,
  fromPosition: Position,
  fromNode: NodeType,
  to: XYPosition,
  toHandle: Handle | null,
  toPosition: Position,
  toNode: NodeType | null,
};

export type ConnectionState<NodeType: NodeBase> = NoConnection | ConnectionInProgress<NodeType>;

export type FinalConnectionState = {
  startHandle: Handle | null,
  endHandle: Handle | null,
  connection: Connection | null,
};
