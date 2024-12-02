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

import type { HTMLAttributes } from 'react';
import type { Position, OnConnect, HandleType } from '../../types';

export type HandlePropsSystem = {
  /** The type of handle - source for source handles and target for target handles */
  type?: HandleType,
  /** The position of the handle */
  position?: Position,
  /** Function that checks if a connection is valid */
  isValidConnection?: (connection: Connection) => boolean,
  /** If handle is connectable */
  isConnectable?: boolean,
  /** If handle can be source of connection */
  isConnectableStart?: boolean,
  /** If handle can be target of connection */
  isConnectableEnd?: boolean,
  /** The id of the handle. If not set we generate an id */
  id?: string,
};

export type HandleProps = {
  ...HandlePropsSystem,
  ...HTMLAttributes<HTMLDivElement>,
  /** Callback called when connection is made */
  onConnect?: OnConnect,
  id?: string, // Override HTMLAttributes id to make it optional
};

import type { Node as ReactNode } from 'react';
import type { HTMLAttributes } from 'react';
import type { PanelPosition } from '../../types';

export type PanelProps = {
  ...HTMLAttributes<HTMLDivElement>,
  /** Set position of the panel */
  position?: PanelPosition,
  children: ReactNode,
};

import type { OnViewportChange, OnSelectionChangeFunc } from '../types';

export type UseOnViewportChangeOptions = {
  onChange?: OnViewportChange,
};

export type UseOnSelectionChangeOptions = {
  onChange?: OnSelectionChangeFunc,
};

export type UseNodesInitializedOptions = {
  includeHiddenNodes?: boolean,
};

import type { XYPosition, NodeBase, EdgeBase } from './index';

export type Dimensions = {
  width: number,
  height: number,
};

export type NodeDimensionChange = {
  id: string,
  type: 'dimensions',
  dimensions?: Dimensions,
  /* if this is true, the node is currently being resized via the NodeResizer */
  resizing?: boolean,
  /* if this is true, we will set width and height of the node and not just the measured dimensions */
  setAttributes?: boolean,
};

export type NodePositionChange = {
  id: string,
  type: 'position',
  position?: XYPosition,
  positionAbsolute?: XYPosition,
  dragging?: boolean,
};

export type NodeSelectionChange = {
  id: string,
  type: 'select',
  selected: boolean,
};

export type NodeRemoveChange = {
  id: string,
  type: 'remove',
};

export type NodeAddChange<NodeType: NodeBase = NodeBase> = {
  item: NodeType,
  type: 'add',
  index?: number,
};

export type NodeReplaceChange<NodeType: NodeBase = NodeBase> = {
  id: string,
  item: NodeType,
  type: 'replace',
};

/**
 * Union type of all possible node changes.
 */
export type NodeChange<NodeType: NodeBase = NodeBase> =
  | NodeDimensionChange
  | NodePositionChange
  | NodeSelectionChange
  | NodeRemoveChange
  | NodeAddChange<NodeType>
  | NodeReplaceChange<NodeType>;

export type EdgeSelectionChange = NodeSelectionChange;
export type EdgeRemoveChange = NodeRemoveChange;
export type EdgeAddChange<EdgeType: EdgeBase = EdgeBase> = {
  item: EdgeType,
  type: 'add',
  index?: number,
};

export type EdgeReplaceChange<EdgeType: EdgeBase = EdgeBase> = {
  id: string,
  item: EdgeType,
  type: 'replace',
};

export type EdgeChange<EdgeType: EdgeBase = EdgeBase> =
  | EdgeSelectionChange
  | EdgeRemoveChange
  | EdgeAddChange<EdgeType>
  | EdgeReplaceChange<EdgeType>;

// @flow

import type { CSSProperties, HTMLAttributes, MouseEvent as ReactMouseEvent, WheelEvent } from 'react';
import type {
  ConnectionMode,
  ConnectionLineType,
  OnConnect,
  OnConnectStart,
  OnConnectEnd,
  CoordinateExtent,
  KeyCode,
  PanOnScrollMode,
  ProOptions,
  PanelPosition,
  OnMove,
  OnMoveStart,
  OnMoveEnd,
  Viewport,
  NodeOrigin,
  HandleType,
  SelectionMode,
  OnError,
  ColorMode,
  SnapGrid,
} from './system';

import type {
  OnSelectionChangeFunc,
  NodeTypes,
  EdgeTypes,
  Node,
  Edge,
  ConnectionLineComponent,
  OnReconnect,
  OnInit,
  DefaultEdgeOptions,
  FitViewOptions,
  OnNodesDelete,
  OnEdgesDelete,
  OnDelete,
  OnNodesChange,
  OnEdgesChange,
  NodeMouseHandler,
  SelectionDragHandler,
  EdgeMouseHandler,
  OnNodeDrag,
  OnBeforeDelete,
  IsValidConnection,
} from './index';

export type ReactFlowProps<NodeType: Node = Node, EdgeType: Edge = Edge> = {
  /** An array of nodes to render in a controlled flow */
  nodes?: Array<NodeType>,
  /** An array of edges to render in a controlled flow */
  edges?: Array<EdgeType>,
  /** The initial nodes to render in an uncontrolled flow */
  defaultNodes?: Array<NodeType>,
  /** The initial edges to render in an uncontrolled flow */
  defaultEdges?: Array<EdgeType>,
  /** Defaults to be applied to all new edges */
  defaultEdgeOptions?: DefaultEdgeOptions,
  /** Custom node types */
  nodeTypes?: NodeTypes,
  /** Custom edge types */
  edgeTypes?: EdgeTypes,
  /** Connection line appearance */
  connectionLineStyle?: CSSProperties,
  /** Connection line type */
  connectionLineType?: ConnectionLineType,
  /** Custom connection line component */
  connectionLineComponent?: ConnectionLineComponent,
  /** Delete key code(s) */
  deleteKeyCode?: KeyCode,
  /** Selection key code */
  selectionKeyCode?: KeyCode,
  /** Multiselection key code */
  multiSelectionKeyCode?: KeyCode,
  /** Zoom activation key code */
  zoomActivationKeyCode?: KeyCode,
  /** Connection mode */
  connectionMode?: ConnectionMode,
  /** Snap grid */
  snapGrid?: SnapGrid,
  /** Snap to grid */
  snapToGrid?: boolean,
  /** Node origin */
  nodeOrigin?: NodeOrigin,
  /** Viewport */
  viewport?: Viewport,
  /** Default viewport */
  defaultViewport?: Viewport,
  /** Min zoom level */
  minZoom?: number,
  /** Max zoom level */
  maxZoom?: number,
  /** Translation extent */
  translateExtent?: CoordinateExtent,
  /** Node extent */
  nodeExtent?: CoordinateExtent,
  /** Enable/disable node dragging */
  nodesDraggable?: boolean,
  /** Enable/disable node connecting */
  nodesConnectable?: boolean,
  /** Enable/disable node selection */
  elementsSelectable?: boolean,
  /** Enable/disable panning */
  panOnDrag?: boolean | Array<number>,
  /** Enable/disable scroll to pan */
  panOnScroll?: boolean,
  /** Pan on scroll mode */
  panOnScrollMode?: PanOnScrollMode,
  /** Pan on scroll speed */
  panOnScrollSpeed?: number,
  /** Enable/disable zoom on scroll */
  zoomOnScroll?: boolean,
  /** Enable/disable zoom on pinch */
  zoomOnPinch?: boolean,
  /** Enable/disable zoom on double click */
  zoomOnDoubleClick?: boolean,
  /** Enable/disable prevent scrolling */
  preventScrolling?: boolean,
  /** Selection mode */
  selectionMode?: SelectionMode,
  /** Panel position */
  panelPosition?: PanelPosition,
  /** Pro options */
  proOptions?: ProOptions,
  /** Color mode */
  colorMode?: ColorMode,
  /** Node click distance */
  nodeClickDistance?: number,

  /** Callbacks */
  onNodeClick?: NodeMouseHandler<NodeType>,
  onNodeDoubleClick?: NodeMouseHandler<NodeType>,
  onNodeMouseEnter?: NodeMouseHandler<NodeType>,
  onNodeMouseMove?: NodeMouseHandler<NodeType>,
  onNodeMouseLeave?: NodeMouseHandler<NodeType>,
  onNodeContextMenu?: NodeMouseHandler<NodeType>,
  onNodeDragStart?: OnNodeDrag<NodeType>,
  onNodeDrag?: OnNodeDrag<NodeType>,
  onNodeDragStop?: OnNodeDrag<NodeType>,
  onNodesDelete?: OnNodesDelete<NodeType>,
  onEdgesDelete?: OnEdgesDelete<EdgeType>,
  onDelete?: OnDelete<NodeType, EdgeType>,
  onSelectionDragStart?: SelectionDragHandler<NodeType>,
  onSelectionDrag?: SelectionDragHandler<NodeType>,
  onSelectionDragStop?: SelectionDragHandler<NodeType>,
  onSelectionStart?: (event: ReactMouseEvent) => void,
  onSelectionEnd?: (event: ReactMouseEvent) => void,
  onSelectionContextMenu?: (event: ReactMouseEvent, nodes: Array<NodeType>) => void,
  onConnect?: OnConnect,
  onConnectStart?: OnConnectStart,
  onConnectEnd?: OnConnectEnd,
  onClickConnectStart?: OnConnectStart,
  onClickConnectEnd?: OnConnectEnd,
  onInit?: OnInit<NodeType, EdgeType>,
  onMove?: OnMove,
  onMoveStart?: OnMoveStart,
  onMoveEnd?: OnMoveEnd,
  onSelectionChange?: OnSelectionChangeFunc,
  onBeforeDelete?: OnBeforeDelete<NodeType, EdgeType>,
  onError?: OnError,
  onPaneClick?: (event: ReactMouseEvent) => void,
  onPaneContextMenu?: (event: ReactMouseEvent) => void,
  onPaneScroll?: (event: WheelEvent) => void,
  onEdgeClick?: EdgeMouseHandler<EdgeType>,
  onEdgeDoubleClick?: EdgeMouseHandler<EdgeType>,
  onEdgeMouseEnter?: EdgeMouseHandler<EdgeType>,
  onEdgeMouseMove?: EdgeMouseHandler<EdgeType>,
  onEdgeMouseLeave?: EdgeMouseHandler<EdgeType>,
  onEdgeContextMenu?: EdgeMouseHandler<EdgeType>,
  onEdgeUpdate?: OnReconnect<EdgeType>,
  onNodesChange?: OnNodesChange<NodeType>,
  onEdgesChange?: OnEdgesChange<EdgeType>,
  onNodeResize?: (node: NodeType) => void,
  isValidConnection?: IsValidConnection,

  /** Additional props */
  style?: CSSProperties,
  className?: string,
  children?: any,
} & $Rest<HTMLAttributes<HTMLDivElement>, {||}>;

export type ReactFlowRefType = {
  fitView: (options?: FitViewOptions) => void,
  zoomIn: () => void,
  zoomOut: () => void,
  zoomTo: (zoomLevel: number) => void,
  getNodes: () => Array<Node>,
  getEdges: () => Array<Edge>,
  getNode: (id: string) => Node | void,
  getEdge: (id: string) => Edge | void,
  setNodes: (nodes: Array<Node>) => void,
  setEdges: (edges: Array<Edge>) => void,
  addNodes: (nodes: Array<Node>) => void,
  addEdges: (edges: Array<Edge>) => void,
  toObject: () => Object,
  getViewport: () => Viewport,
  setViewport: (viewport: Viewport) => void,
  fitBounds: (bounds: { x: number, y: number, width: number, height: number }) => void,
  project: (position: { x: number, y: number }) => { x: number, y: number },
  initialized: boolean,
};

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

// @flow

import type { ComponentType } from 'react';
import type { 
  FitViewParamsBase,
  FitViewOptionsBase,
  ZoomInOut,
  ZoomTo,
  SetViewport,
  GetZoom,
  GetViewport,
  SetCenter,
  FitBounds,
  XYPosition,
  OnBeforeDeleteBase,
  Connection,
  NodeChange,
  EdgeChange,
} from './system';

import type { Node, Edge, ReactFlowInstance, EdgeProps, NodeProps } from './index';

export type OnNodesChange<NodeType: Node = Node> = (changes: Array<NodeChange<NodeType>>) => void;
export type OnEdgesChange<EdgeType: Edge = Edge> = (changes: Array<EdgeChange<EdgeType>>) => void;

export type OnNodesDelete<NodeType: Node = Node> = (nodes: Array<NodeType>) => void;
export type OnEdgesDelete<EdgeType: Edge = Edge> = (edges: Array<EdgeType>) => void;
export type OnDelete<NodeType: Node = Node, EdgeType: Edge = Edge> = (params: {
  nodes: Array<NodeType>,
  edges: Array<EdgeType>,
}) => void;

export type NodeTypes = {
  [key: string]: ComponentType<
    NodeProps & {
      data: any,
      type: any,
    }
  >
};

export type EdgeTypes = {
  [key: string]: ComponentType<
    EdgeProps & {
      data: any,
      type: any,
    }
  >
};

export type UnselectNodesAndEdgesParams = {
  nodes?: Array<Node>,
  edges?: Array<Edge>,
};

export type OnSelectionChangeParams = {
  nodes: Array<Node>,
  edges: Array<Edge>,
};

export type OnSelectionChangeFunc = (params: OnSelectionChangeParams) => void;

export type FitViewParams<NodeType: Node = Node> = FitViewParamsBase<NodeType>;
export type FitViewOptions<NodeType: Node = Node> = FitViewOptionsBase<NodeType>;
export type FitView = (fitViewOptions?: FitViewOptions) => Promise<boolean>;
export type OnInit<NodeType: Node = Node, EdgeType: Edge = Edge> = (
  reactFlowInstance: ReactFlowInstance<NodeType, EdgeType>
) => void;

export type ViewportHelperFunctions = {
  /**
   * Zooms viewport in by 1.2.
   */
  zoomIn: ZoomInOut,
  /**
   * Zooms viewport out by 1 / 1.2.
   */
  zoomOut: ZoomInOut,
  /**
   * Sets the current zoom level.
   */
  zoomTo: ZoomTo,
  /**
   * Returns the current zoom level.
   */
  getZoom: GetZoom,
  /**
   * Sets the current viewport.
   */
  setViewport: SetViewport,
  /**
   * Returns the current viewport.
   */
  getViewport: GetViewport,
  /**
   * Centers the viewport.
   */
  setCenter: SetCenter,
  /**
   * Fits the viewport to the given bounds.
   */
  fitBounds: FitBounds,
};

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

// @flow

import type { HandleConnection, HandleType, Rect, Viewport } from './system';
import type { Node, Edge, ViewportHelperFunctions, InternalNode } from './index';

export type ReactFlowJsonObject<NodeType: Node = Node, EdgeType: Edge = Edge> = {
  nodes: Array<NodeType>,
  edges: Array<EdgeType>,
  viewport: Viewport,
};

export type DeleteElementsOptions = {
  nodes?: Array<Node | { id: $PropertyType<Node, 'id'> }>,
  edges?: Array<Edge | { id: $PropertyType<Edge, 'id'> }>,
};

export type GeneralHelpers<NodeType: Node = Node, EdgeType: Edge = Edge> = {
  /**
   * Returns nodes.
   */
  getNodes: () => Array<NodeType>,
  /**
   * Sets nodes.
   */
  setNodes: (payload: Array<NodeType> | ((nodes: Array<NodeType>) => Array<NodeType>)) => void,
  /**
   * Adds nodes.
   */
  addNodes: (payload: Array<NodeType> | NodeType) => void,
  /**
   * Returns a node by id.
   */
  getNode: (id: string) => NodeType | void,
  /**
   * Returns an internal node by id.
   */
  getInternalNode: (id: string) => InternalNode<NodeType> | void,
  /**
   * Returns edges.
   */
  getEdges: () => Array<EdgeType>,
  /**
   * Sets edges.
   */
  setEdges: (payload: Array<EdgeType> | ((edges: Array<EdgeType>) => Array<EdgeType>)) => void,
  /**
   * Adds edges.
   */
  addEdges: (payload: Array<EdgeType> | EdgeType) => void,
  /**
   * Returns an edge by id.
   */
  getEdge: (id: string) => EdgeType | void,
  /**
   * Returns the nodes, edges and the viewport as a JSON object.
   */
  toObject: () => ReactFlowJsonObject<NodeType, EdgeType>,
  /**
   * Deletes nodes and edges.
   */
  deleteElements: (params: DeleteElementsOptions) => Promise<{
    deletedNodes: Array<Node>,
    deletedEdges: Array<Edge>,
  }>,
  /**
   * Returns all nodes that intersect with the given node or rect.
   */
  getIntersectingNodes: (
    node: Node | Rect,
    partially?: boolean,
    nodes?: Array<Node>
  ) => Array<Node>,
  /**
   * Returns all handle connections for a node.
   */
  getConnectedEdges: (nodes: Array<Node>, edges: Array<Edge>) => Array<Edge>,
  /**
   * Returns all handle connections for a node.
   */
  getHandleConnections: (nodeId: string, handleId: string, type: HandleType) => Array<HandleConnection>,
};

export type ReactFlowInstance<NodeType: Node = Node, EdgeType: Edge = Edge> = GeneralHelpers<NodeType, EdgeType> &
  ViewportHelperFunctions & {
    viewportInitialized: boolean,
  };

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

// @flow

import type { PanOnScrollMode, CoordinateExtent, Transform, Viewport } from './general';

export type OnDraggingChange = (dragging: boolean) => void;
export type OnTransformChange = (transform: Transform) => void;

export type PanZoomParams = {
  domNode: Element,
  minZoom: number,
  maxZoom: number,
  paneClickDistance: number,
  viewport: Viewport,
  translateExtent: CoordinateExtent,
  onDraggingChange: OnDraggingChange,
  onPanZoomStart?: OnPanZoom,
  onPanZoom?: OnPanZoom,
  onPanZoomEnd?: OnPanZoom,
};

export type PanZoomTransformOptions = {
  duration?: number,
};

export type OnPanZoom = (event: MouseEvent | TouchEvent | null, viewport: Viewport) => void;

export type PanZoomUpdateOptions = {
  noWheelClassName: string,
  noPanClassName: string,
  onPaneContextMenu?: (event: MouseEvent) => void,
  preventScrolling: boolean,
  panOnScroll: boolean,
  panOnDrag: boolean | Array<number>,
  panOnScrollMode: PanOnScrollMode,
  panOnScrollSpeed: number,
  userSelectionActive: boolean,
  zoomOnPinch: boolean,
  zoomOnScroll: boolean,
  zoomOnDoubleClick: boolean,
  zoomActivationKeyPressed: boolean,
  lib: string,
  onTransformChange: OnTransformChange,
};

export type PanZoomInstance = {
  update: (params: PanZoomUpdateOptions) => void,
  destroy: () => void,
  getViewport: () => Viewport,
  setViewport: (viewport: Viewport, options?: PanZoomTransformOptions) => Promise<any>,
  setViewportConstrained: (
    viewport: Viewport,
    extent: CoordinateExtent,
    translateExtent: CoordinateExtent
  ) => Promise<any>,
  setScaleExtent: (scaleExtent: [number, number]) => void,
  setTranslateExtent: (translateExtent: CoordinateExtent) => void,
  scaleTo: (scale: number, options?: PanZoomTransformOptions) => Promise<boolean>,
  scaleBy: (factor: number, options?: PanZoomTransformOptions) => Promise<boolean>,
  syncViewport: (viewport: Viewport) => void,
  setClickDistance: (distance: number) => void,
};

// @flow

import type {
    ConnectionMode,
    ConnectionState,
    CoordinateExtent,
    InternalNodeUpdate,
    UpdateNodePositions,
    NodeOrigin,
    OnConnect,
    OnError,
    OnViewportChange,
    SelectionRect,
    SnapGrid,
    Handle,
    Transform,
    PanZoomInstance,
    PanBy,
    OnConnectStart,
    OnConnectEnd,
    OnSelectionDrag,
    OnMoveStart,
    OnMove,
    OnMoveEnd,
    UpdateConnection,
    EdgeLookup,
    ConnectionLookup,
    NodeLookup,
    NodeChange,
    EdgeChange,
    ParentLookup,
  } from './system';
  
  import type {
    Edge,
    Node,
    OnNodesChange,
    OnEdgesChange,
    DefaultEdgeOptions,
    FitViewOptions,
    OnNodesDelete,
    OnEdgesDelete,
    OnSelectionChangeFunc,
    UnselectNodesAndEdgesParams,
    OnDelete,
    OnNodeDrag,
    OnBeforeDelete,
    IsValidConnection,
    InternalNode,
  } from './index';
  
  export type ReactFlowStore<NodeType: Node = Node, EdgeType: Edge = Edge> = {
    rfId: string,
    width: number,
    height: number,
    transform: Transform,
    nodes: Array<NodeType>,
    nodeLookup: NodeLookup<InternalNode<NodeType>>,
    parentLookup: ParentLookup<InternalNode<NodeType>>,
    edges: Array<EdgeType>,
    edgeLookup: EdgeLookup<EdgeType>,
    connectionLookup: ConnectionLookup,
    onNodesChange: OnNodesChange<NodeType> | null,
    onEdgesChange: OnEdgesChange<EdgeType> | null,
    hasDefaultNodes: boolean,
    hasDefaultEdges: boolean,
    domNode: HTMLDivElement | null,
    paneDragging: boolean,
    noPanClassName: string,
  
    panZoom: PanZoomInstance | null,
    minZoom: number,
    maxZoom: number,
    translateExtent: CoordinateExtent,
    nodeExtent: CoordinateExtent,
    nodeOrigin: NodeOrigin,
    nodeDragThreshold: number,
  
    nodesSelectionActive: boolean,
    userSelectionActive: boolean,
    userSelectionRect: SelectionRect | null,
  
    connection: ConnectionState<InternalNode<NodeType>>,
    connectionMode: ConnectionMode,
    connectionClickStartHandle: ({
      nodeId: $PropertyType<Handle, 'nodeId'>,
      id: $PropertyType<Handle, 'id'>,
      type: $PropertyType<Handle, 'type'>,
    }) | null,
  
    snapToGrid: boolean,
    snapGrid: SnapGrid,
  
    nodesDraggable: boolean,
    nodesConnectable: boolean,
    nodesFocusable: boolean,
    edgesFocusable: boolean,
    edgesReconnectable: boolean,
    elementsSelectable: boolean,
    elevateNodesOnSelect: boolean,
    elevateEdgesOnSelect: boolean,
    selectNodesOnDrag: boolean,
  
    multiSelectionActive: boolean,
  
    onNodeDragStart?: OnNodeDrag<NodeType>,
    onNodeDrag?: OnNodeDrag<NodeType>,
    onNodeDragStop?: OnNodeDrag<NodeType>,
    onSelectionDragStart?: OnSelectionDrag,
    onSelectionDrag?: OnSelectionDrag,
    onSelectionDragStop?: OnSelectionDrag,
    onMoveStart?: OnMoveStart,
    onMove?: OnMove,
    onMoveEnd?: OnMoveEnd,
    onConnect?: OnConnect,
    onConnectStart?: OnConnectStart,
    onConnectEnd?: OnConnectEnd,
    onClickConnectStart?: OnConnectStart,
    onClickConnectEnd?: OnConnectEnd,
    onNodesDelete?: OnNodesDelete<NodeType>,
    onEdgesDelete?: OnEdgesDelete<EdgeType>,
    onDelete?: OnDelete<NodeType, EdgeType>,
    onBeforeDelete?: OnBeforeDelete<NodeType, EdgeType>,
    onSelectionChange?: OnSelectionChangeFunc,
    onError?: OnError,
    isValidConnection?: IsValidConnection,
  
    connectOnClick: boolean,
    defaultEdgeOptions?: DefaultEdgeOptions,
  };
  
  export type ReactFlowActions<NodeType: Node = Node, EdgeType: Edge = Edge> = {
    setNodes: (nodes: Array<NodeType>) => void,
    setEdges: (edges: Array<EdgeType>) => void,
    setDefaultNodesAndEdges: (nodes?: Array<NodeType>, edges?: Array<EdgeType>) => void,
    updateNodeInternals: (updates: Map<string, InternalNodeUpdate>, params?: { triggerFitView: boolean }) => void,
    updateNodePositions: UpdateNodePositions,
    resetSelectedElements: () => void,
    unselectNodesAndEdges: (params?: UnselectNodesAndEdgesParams) => void,
    addSelectedNodes: (nodeIds: Array<string>) => void,
    addSelectedEdges: (edgeIds: Array<string>) => void,
    setMinZoom: (minZoom: number) => void,
    setMaxZoom: (maxZoom: number) => void,
    setTranslateExtent: (translateExtent: CoordinateExtent) => void,
    setNodeExtent: (nodeExtent: CoordinateExtent) => void,
    cancelConnection: () => void,
    updateConnection: UpdateConnection<InternalNode<NodeType>>,
    reset: () => void,
    triggerNodeChanges: (changes: Array<NodeChange<NodeType>>) => void,
    triggerEdgeChanges: (changes: Array<EdgeChange<EdgeType>>) => void,
    panBy: PanBy,
    fitView: (options?: FitViewOptions) => Promise<boolean>,
    fitViewSync: (options?: FitViewOptions) => boolean,
    setPaneClickDistance: (distance: number) => void,
  };
  
  export type ReactFlowState<NodeType: Node = Node, EdgeType: Edge = Edge> = ReactFlowStore<NodeType, EdgeType> &
    ReactFlowActions<NodeType, EdgeType>;

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

export type XYPosition = {
    x: number,
    y: number,
  };
  
  export type Rect = {
    x: number,
    y: number,
    width: number,
    height: number,
  };
  
  export type Position = 'top' | 'right' | 'bottom' | 'left';
  

// Components
export { default as ReactFlow } from './container/ReactFlow';
export { Handle, type HandleProps } from './components/Handle';
export { EdgeText, type EdgeTextProps } from './components/Edges/EdgeText';
export { StraightEdge } from './components/Edges/StraightEdge';
export { StepEdge } from './components/Edges/StepEdge';
export { BezierEdge } from './components/Edges/BezierEdge';
export { SimpleBezierEdge, getSimpleBezierPath } from './components/Edges/SimpleBezierEdge';
export { SmoothStepEdge } from './components/Edges/SmoothStepEdge';
export { BaseEdge, type BaseEdgeProps, type EdgeComponentProps } from './components/Edges/BaseEdge';
export { ReactFlowProvider } from './components/ReactFlowProvider';
export { Panel, type PanelProps } from './components/Panel';
export { EdgeLabelRenderer } from './components/EdgeLabelRenderer';
export { ViewportPortal } from './components/ViewportPortal';

// Hooks
export { useReactFlow } from './hooks/useReactFlow';
export { useUpdateNodeInternals } from './hooks/useUpdateNodeInternals';
export { useNodes } from './hooks/useNodes';
export { useEdges } from './hooks/useEdges';
export { useViewport } from './hooks/useViewport';
export { useKeyPress } from './hooks/useKeyPress';
export { useNodesState, useEdgesState } from './hooks/useNodesEdgesState';
export { useStore, useStoreApi } from './hooks/useStore';
export { useOnViewportChange, type UseOnViewportChangeOptions } from './hooks/useOnViewportChange';
export { useOnSelectionChange, type UseOnSelectionChangeOptions } from './hooks/useOnSelectionChange';
export { useNodesInitialized, type UseNodesInitializedOptions } from './hooks/useNodesInitialized';
export { useHandleConnections } from './hooks/useHandleConnections';
export { useNodesData } from './hooks/useNodesData';
export { useConnection } from './hooks/useConnection';
export { useInternalNode } from './hooks/useInternalNode';
export { useNodeId } from './contexts/NodeIdContext';

// Utils
export { applyNodeChanges, applyEdgeChanges } from './utils/changes';
export { isNode, isEdge } from './utils/general';

// Additional Components
export * from './additional-components';

// Types
export * from './types';

// System types
export type {
  Align,
  SmoothStepPathOptions,
  BezierPathOptions,
  ConnectionLineType,
  ConnectionMode,
  ConnectionStatus,
  CoordinateExtent,
  DefaultEdgeOptions,
  Edge,
  EdgeChange,
  EdgeMarker,
  EdgeMarkerType,
  EdgeMouseHandler,
  EdgeProps,
  EdgeSelectionChange,
  EdgeTextProps,
  EdgeTypes,
  EdgeUpdateParamsBase,
  FitBoundsOptions,
  FitViewOptions,
  FlowExportObject,
  HandleType,
  Node,
  NodeChange,
  NodeDimensionChange,
  NodeDragHandler,
  NodeInternals,
  NodeMouseHandler,
  NodeOrigin,
  NodePositionChange,
  NodeProps,
  NodeSelectionChange,
  NodeTypes,
  OnConnect,
  OnConnectEnd,
  OnConnectStart,
  OnEdgeUpdateFunc,
  OnError,
  OnMove,
  OnMoveEnd,
  OnMoveStart,
  OnNodesChange,
  OnNodesDelete,
  OnSelectionChangeFunc,
  OnViewportChangeFunc,
  PanOnScrollMode,
  Position,
  ProOptions,
  ReactFlowInstance,
  ReactFlowJsonObject,
  ReactFlowProps,
  ReactFlowRefType,
  ReactFlowState,
  SelectionDragHandler,
  SelectionRect,
  Viewport,
  ViewportHelperFunctions,
  XYPosition,
  XYZPosition,
} from './types';
