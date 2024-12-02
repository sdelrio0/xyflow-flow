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
