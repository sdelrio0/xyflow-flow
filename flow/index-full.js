// @flow

import type { 
  CSSProperties, 
  ComponentType, 
  HTMLAttributes, 
  MouseEvent as ReactMouseEvent,
  Node as ReactNode,
  TouchEvent,
  FocusEvent,
  KeyboardEvent,
  WheelEvent,
} from 'react';
import type { Selection } from 'd3-selection';
import type { D3DragEvent, SubjectPosition } from 'd3-drag';
import type { ZoomBehavior } from 'd3-zoom';

// ==============================
// Component Exports
// ==============================

export { default as ReactFlow } from './container/ReactFlow';
export { Handle } from './components/Handle';
export { EdgeText } from './components/Edges/EdgeText';
export { StraightEdge } from './components/Edges/StraightEdge';
export { StepEdge } from './components/Edges/StepEdge';
export { BezierEdge } from './components/Edges/BezierEdge';
export { SimpleBezierEdge, getSimpleBezierPath } from './components/Edges/SimpleBezierEdge';
export { SmoothStepEdge } from './components/Edges/SmoothStepEdge';
export { BaseEdge } from './components/Edges/BaseEdge';
export { ReactFlowProvider } from './components/ReactFlowProvider';
export { Panel } from './components/Panel';
export { EdgeLabelRenderer } from './components/EdgeLabelRenderer';
export { ViewportPortal } from './components/ViewportPortal';

// ==============================
// Hook Exports
// ==============================

export { useReactFlow } from './hooks/useReactFlow';
export { useUpdateNodeInternals } from './hooks/useUpdateNodeInternals';
export { useNodes } from './hooks/useNodes';
export { useEdges } from './hooks/useEdges';
export { useViewport } from './hooks/useViewport';
export { useKeyPress } from './hooks/useKeyPress';
export { useNodesState, useEdgesState } from './hooks/useNodesEdgesState';
export { useStore, useStoreApi } from './hooks/useStore';
export { useOnViewportChange } from './hooks/useOnViewportChange';
export { useOnSelectionChange } from './hooks/useOnSelectionChange';
export { useNodesInitialized } from './hooks/useNodesInitialized';
export { useHandleConnections } from './hooks/useHandleConnections';
export { useNodesData } from './hooks/useNodesData';
export { useConnection } from './hooks/useConnection';
export { useInternalNode } from './hooks/useInternalNode';
export { useNodeId } from './contexts/NodeIdContext';

// ==============================
// Utility Exports
// ==============================

export { applyNodeChanges, applyEdgeChanges } from './utils/changes';
export { isNode, isEdge } from './utils/general';

// ==============================
// Additional Component Exports
// ==============================

export { NodeResizer } from './additional-components/NodeResizer';
export { NodeToolbar } from './additional-components/NodeToolbar';
export { Background } from './additional-components/Background';
export { MiniMap } from './additional-components/MiniMap';
export { Controls } from './additional-components/Controls';

// ==============================
// Type Exports
// ==============================

export type { ReactFlow } from './container/ReactFlow';
export type { Handle } from './components/Handle';
export type { EdgeText } from './components/Edges/EdgeText';
export type { StraightEdge } from './components/Edges/StraightEdge';
export type { StepEdge } from './components/Edges/StepEdge';
export type { BezierEdge } from './components/Edges/BezierEdge';
export type { SimpleBezierEdge } from './components/Edges/SimpleBezierEdge';
export type { SmoothStepEdge } from './components/Edges/SmoothStepEdge';
export type { BaseEdge } from './components/Edges/BaseEdge';
export type { ReactFlowProvider } from './components/ReactFlowProvider';
export type { Panel } from './components/Panel';
export type { EdgeLabelRenderer } from './components/EdgeLabelRenderer';
export type { ViewportPortal } from './components/ViewportPortal';

export type { useReactFlow } from './hooks/useReactFlow';
export type { useUpdateNodeInternals } from './hooks/useUpdateNodeInternals';
export type { useNodes } from './hooks/useNodes';
export type { useEdges } from './hooks/useEdges';
export type { useViewport } from './hooks/useViewport';
export type { useKeyPress } from './hooks/useKeyPress';
export type { useNodesState, useEdgesState } from './hooks/useNodesEdgesState';
export type { useStore, useStoreApi } from './hooks/useStore';
export type { useOnViewportChange } from './hooks/useOnViewportChange';
export type { useOnSelectionChange } from './hooks/useOnSelectionChange';
export type { useNodesInitialized } from './hooks/useNodesInitialized';
export type { useHandleConnections } from './hooks/useHandleConnections';
export type { useNodesData } from './hooks/useNodesData';
export type { useConnection } from './hooks/useConnection';
export type { useInternalNode } from './hooks/useInternalNode';
export type { useNodeId } from './contexts/NodeIdContext';

export type { applyNodeChanges, applyEdgeChanges } from './utils/changes';
export type { isNode, isEdge } from './utils/general';

export type { NodeResizer } from './additional-components/NodeResizer';
export type { NodeToolbar } from './additional-components/NodeToolbar';
export type { Background } from './additional-components/Background';
export type { MiniMap } from './additional-components/MiniMap';
export type { Controls } from './additional-components/Controls';

// ==============================
// Basic Types
// ==============================

export type XYPosition = {
  x: number,
  y: number,
};

export type XYZPosition = {
  x: number,
  y: number,
  zoom: number,
};

export type Dimensions = {
  width: number,
  height: number,
};

export type Rect = {
  x: number,
  y: number,
  width: number,
  height: number,
};

export type Box = {
  x: number,
  y: number,
  width: number,
  height: number,
};

export type Transform = {
  x: number,
  y: number,
  zoom: number,
};

export type ColorMode = 'light' | 'dark';
export type ColorModeClass = 'light' | 'dark' | '';

export type Position = 'left' | 'top' | 'right' | 'bottom';
export type HandleType = 'source' | 'target';
export type NodeOrigin = [number, number];
export type CoordinateExtent = [[number, number], [number, number]];

// ==============================
// React Flow Props
// ==============================

export type ProOptions = {
  account?: string,
  hideAttribution?: boolean,
};

export type ReactFlowProps = {
  nodes?: Node[],
  edges?: Edge[],
  defaultNodes?: Node[],
  defaultEdges?: Edge[],
  className?: string,
  nodeTypes?: NodeTypes,
  edgeTypes?: EdgeTypes,
  proOptions?: ProOptions,
  onNodeClick?: (event: ReactMouseEvent, node: Node) => void,
  onEdgeClick?: (event: ReactMouseEvent, edge: Edge) => void,
  onInit?: (reactFlowInstance: ReactFlowInstance) => void,
  onMove?: OnMove,
  onMoveStart?: OnMoveStart,
  onMoveEnd?: OnMoveEnd,
  onConnect?: OnConnect,
  onConnectStart?: OnConnectStart,
  onConnectEnd?: OnConnectEnd,
  onClickConnectStart?: OnConnectStart,
  onClickConnectEnd?: OnConnectEnd,
  onNodeMouseEnter?: OnNodeMouseHandler,
  onNodeMouseMove?: OnNodeMouseHandler,
  onNodeMouseLeave?: OnNodeMouseHandler,
  onNodeContextMenu?: OnNodeMouseHandler,
  onNodeDoubleClick?: OnNodeMouseHandler,
  onNodeDragStart?: OnNodeDragHandler,
  onNodeDrag?: OnNodeDragHandler,
  onNodeDragStop?: OnNodeDragHandler,
  onNodesDelete?: OnNodesDelete,
  onEdgesDelete?: OnEdgesDelete,
  onSelectionDragStart?: OnSelectionDragHandler,
  onSelectionDrag?: OnSelectionDragHandler,
  onSelectionDragStop?: OnSelectionDragHandler,
  onSelectionStart?: OnSelectionHandler,
  onSelectionEnd?: OnSelectionHandler,
  onSelectionContextMenu?: OnSelectionContextMenu,
  onPaneClick?: OnPaneHandler,
  onPaneContextMenu?: OnPaneHandler,
  onPaneScroll?: OnPaneHandler,
  onPaneMouseEnter?: OnPaneHandler,
  onPaneMouseMove?: OnPaneHandler,
  onPaneMouseLeave?: OnPaneHandler,
  onEdgeUpdate?: OnEdgeUpdateFunc,
  onEdgeContextMenu?: OnEdgeMouseHandler,
  onEdgeMouseEnter?: OnEdgeMouseHandler,
  onEdgeMouseMove?: OnEdgeMouseHandler,
  onEdgeMouseLeave?: OnEdgeMouseHandler,
  onEdgeDoubleClick?: OnEdgeMouseHandler,
  onEdgeUpdateStart?: OnEdgeUpdateStartFunc,
  onEdgeUpdateEnd?: OnEdgeUpdateEndFunc,
  onError?: OnError,
  onViewportChange?: OnViewportChangeFunc,
  onBeforeDelete?: OnBeforeDelete,
  nodesDraggable?: boolean,
  nodesConnectable?: boolean,
  nodesFocusable?: boolean,
  nodeOrigin?: NodeOrigin,
  edgesFocusable?: boolean,
  edgesUpdatable?: boolean,
  elementsSelectable?: boolean,
  selectNodesOnDrag?: boolean,
  panOnDrag?: boolean | number[],
  panOnScroll?: boolean,
  panOnScrollSpeed?: number,
  panOnScrollMode?: PanOnScrollMode,
  zoomOnScroll?: boolean,
  zoomOnPinch?: boolean,
  zoomOnDoubleClick?: boolean,
  preventScrolling?: boolean,
  snapToGrid?: boolean,
  snapGrid?: [number, number],
  onlyRenderVisibleElements?: boolean,
  defaultViewport?: Viewport,
  translateExtent?: CoordinateExtent,
  minZoom?: number,
  maxZoom?: number,
  nodeExtent?: CoordinateExtent,
  defaultMarkerColor?: string,
  zoomActivationKeyCode?: string,
  selectionKeyCode?: string,
  selectionOnDrag?: boolean,
  selectionMode?: SelectionMode,
  panActivationKeyCode?: string,
  multiSelectionKeyCode?: string,
  deleteKeyCode?: string | null,
  elevateNodesOnSelect?: boolean,
  elevateEdgesOnSelect?: boolean,
  disableKeyboardA11y?: boolean,
  autoPanOnNodeDrag?: boolean,
  autoPanOnConnect?: boolean,
  connectionMode?: ConnectionMode,
  isValidConnection?: (connection: Connection) => boolean,
  fitView?: boolean,
  fitViewOptions?: FitViewOptions,
  connectOnClick?: boolean,
  attributionPosition?: PanelPosition,
  proOptions?: ProOptions,
  children?: ReactNode,
};

// ==============================
// Connection Types
// ==============================

export type Connection = {
  source: string,
  target: string,
  sourceHandle: string | null,
  targetHandle: string | null,
};

export type ConnectionMode = 'strict' | 'loose';

export type ConnectionStatus = 'valid' | 'invalid';

export type OnConnectStartParams = {
  nodeId: string | null,
  handleId: string | null,
  handleType: HandleType | null,
};

export type OnConnectStart = (event: MouseEvent | TouchEvent, params: OnConnectStartParams) => void;
export type OnConnect = (connection: Connection) => void;
export type OnConnectEnd = (event: MouseEvent | TouchEvent) => void;

// ==============================
// Node Types
// ==============================

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
  handles?: Array<Handle>,
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
};

export type NodeTypes = {
  [key: string]: ComponentType<
    NodeProps & {
      data: any,
      type: any,
    }
  >
};

export type NodeProps<
  NodeData: { [key: string]: any } = { [key: string]: any },
  NodeType: string = string
> = Node<NodeData, NodeType> & {
  isConnectable: boolean,
  sourcePosition?: Position,
  targetPosition?: Position,
  dragging?: boolean,
  selected?: boolean,
  onClick?: (event: ReactMouseEvent, node: Node) => void,
  onMouseEnter?: (event: ReactMouseEvent, node: Node) => void,
  onMouseMove?: (event: ReactMouseEvent, node: Node) => void,
  onMouseLeave?: (event: ReactMouseEvent, node: Node) => void,
  onContextMenu?: (event: ReactMouseEvent, node: Node) => void,
  onDoubleClick?: (event: ReactMouseEvent, node: Node) => void,
};

export type NodeChange<NodeType: Node = Node> =
  | {
      id: string,
      type: 'position',
      position?: XYPosition,
      positionAbsolute?: XYPosition,
      dragging?: boolean,
    }
  | {
      id: string,
      type: 'dimensions',
      dimensions: Dimensions,
    }
  | {
      id: string,
      type: 'select',
      selected: boolean,
    }
  | {
      id: string,
      type: 'remove',
    }
  | {
      item: NodeType,
      type: 'add',
    }
  | {
      id: string,
      data: { [key: string]: any },
      type: 'reset',
    };

export type NodeDragHandler = (event: ReactMouseEvent, node: Node, nodes: Node[]) => void;
export type NodeMouseHandler = (event: ReactMouseEvent, node: Node) => void;

// ==============================
// Edge Types
// ==============================

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

export type Edge<
  EdgeData: { [key: string]: any } = { [key: string]: any },
  EdgeType: string | void = string | void
> = EdgeBase<EdgeData, EdgeType> & {
  label?: ReactNode,
  labelStyle?: CSSProperties,
  labelShowBg?: boolean,
  labelBgStyle?: CSSProperties,
  labelBgPadding?: [number, number],
  labelBgBorderRadius?: number,
  markerStart?: string,
  markerEnd?: string,
  className?: string,
};

export type EdgeTypes = {
  [key: string]: ComponentType<EdgeProps>,
};

export type EdgeProps<
  EdgeData: { [key: string]: any } = { [key: string]: any }
> = Edge<EdgeData> & {
  sourceX: number,
  sourceY: number,
  targetX: number,
  targetY: number,
  selected?: boolean,
  animated?: boolean,
  onClick?: (event: ReactMouseEvent, edge: Edge) => void,
  onEdgeDoubleClick?: (event: ReactMouseEvent, edge: Edge) => void,
  onContextMenu?: (event: ReactMouseEvent, edge: Edge) => void,
  onMouseEnter?: (event: ReactMouseEvent, edge: Edge) => void,
  onMouseMove?: (event: ReactMouseEvent, edge: Edge) => void,
  onMouseLeave?: (event: ReactMouseEvent, edge: Edge) => void,
};

// ==============================
// Handle Types
// ==============================

export type Handle = {
  id: string | null,
  position: Position,
  x: number,
  y: number,
  width: number,
  height: number,
  type?: HandleType,
};

export type HandleProps = HTMLAttributes<HTMLDivElement> & {
  type?: HandleType,
  position?: Position,
  isValidConnection?: (connection: Connection) => boolean,
  isConnectable?: boolean,
  isConnectableStart?: boolean,
  isConnectableEnd?: boolean,
  id?: string,
};

// ==============================
// Viewport Types
// ==============================

export type Viewport = {
  x: number,
  y: number,
  zoom: number,
};

export type ViewportHelperFunctions = {
  zoomIn: () => void,
  zoomOut: () => void,
  zoomTo: (zoomLevel: number) => void,
  getZoom: () => number,
  setViewport: (viewport: Viewport) => void,
  getViewport: () => Viewport,
  fitView: (options?: FitViewOptions) => void,
  setCenter: (x: number, y: number, options?: { zoom?: number, duration?: number }) => void,
  fitBounds: (bounds: Rect, options?: FitBoundsOptions) => void,
  project: (position: XYPosition) => XYPosition,
};

export type FitViewOptions = {
  padding?: number,
  minZoom?: number,
  maxZoom?: number,
  duration?: number,
  nodes?: Node[],
};

export type FitBoundsOptions = {
  padding?: number,
  minZoom?: number,
  maxZoom?: number,
  duration?: number,
};

// ==============================
// Panel Types
// ==============================

export type PanelPosition = 
  | 'top-left' 
  | 'top-center' 
  | 'top-right' 
  | 'bottom-left' 
  | 'bottom-center' 
  | 'bottom-right';

export type PanelProps = HTMLAttributes<HTMLDivElement> & {
  position?: PanelPosition,
  children: ReactNode,
};

// ==============================
// Store Types
// ==============================

export type ReactFlowState = {
  nodes: Node[],
  edges: Edge[],
  viewport: Viewport,
  nodeInternals: Map<string, Node>,
  edgeInternals: Map<string, Edge>,
  selectedNodes: Node[],
  selectedEdges: Edge[],
  minZoom: number,
  maxZoom: number,
  translateExtent: CoordinateExtent,
  nodeExtent: CoordinateExtent,
  nodesSelectionActive: boolean,
  userSelectionRect: SelectionRect | null,
  connectionNodeId: string | null,
  connectionHandleId: string | null,
  connectionHandleType: HandleType | null,
  connectionPosition: XYPosition,
  connectionMode: ConnectionMode,
  snapGrid: [number, number],
  snapToGrid: boolean,
  nodesDraggable: boolean,
  nodesConnectable: boolean,
  elementsSelectable: boolean,
  multiSelectionActive: boolean,
  width: number,
  height: number,
  initialized: boolean,
  paneDragging: boolean,
  preventScrolling: boolean,
};

// ==============================
// System Types
// ==============================

export type NodeChange = 
  | {
      type: 'position',
      id: string,
      position?: XYPosition,
      positionAbsolute?: XYPosition,
      dragging?: boolean,
    }
  | {
      type: 'dimensions',
      id: string,
      dimensions: Dimensions,
    }
  | {
      type: 'select',
      id: string,
      selected: boolean,
    }
  | {
      type: 'remove',
      id: string,
    }
  | {
      type: 'add',
      item: Node,
    };

export type EdgeChange =
  | {
      type: 'select',
      id: string,
      selected: boolean,
    }
  | {
      type: 'remove',
      id: string,
    }
  | {
      type: 'add',
      item: Edge,
    };

export type FitViewOptions = {
  padding?: number,
  minZoom?: number,
  maxZoom?: number,
  duration?: number,
  nodes?: Node[],
};

export type FlowExportObject = {
  nodes: Node[],
  edges: Edge[],
  viewport: Viewport,
  nodeInternals?: Map<string, Node>,
};

// ==============================
// Utility Function Types
// ==============================

export type GetIntersectingNodes = (
  node: Node,
  nodes: Node[],
  nodeInternals: Map<string, Node>,
  options?: { 
    partially?: boolean,
    targetNode?: Node,
    nodeIntersectionThreshold?: number,
  }
) => Node[];

export type IsEdgeVisible = (
  edge: Edge,
  nodeInternals: Map<string, Node>,
  layoutedEdges: Map<string, Edge>,
  viewport: Viewport,
  width: number,
  height: number
) => boolean;

export type GetNodesBounds = (
  nodes: Node[],
  nodeInternals: Map<string, Node>,
  options?: {
    includeHiddenNodes?: boolean,
  }
) => Rect;

// ==============================
// Event Types
// ==============================

export type OnError = (error: Error) => void;

export type OnNodesChange<NodeType: Node = Node> = (changes: Array<NodeChange<NodeType>>) => void;
export type OnEdgesChange<EdgeType: Edge = Edge> = (changes: Array<EdgeChange<EdgeType>>) => void;

export type OnNodesDelete<NodeType: Node = Node> = (nodes: Array<NodeType>) => void;
export type OnEdgesDelete<EdgeType: Edge = Edge> = (edges: Array<EdgeType>) => void;

export type OnMove = (event: MouseEvent | TouchEvent | null, viewport: Viewport) => void;
export type OnMoveStart = OnMove;
export type OnMoveEnd = OnMove;

// ==============================
// Instance Types
// ==============================

export type ReactFlowInstance = {
  nodes: Node[],
  edges: Edge[],
  getNode: (id: string) => Node | undefined,
  getEdge: (id: string) => Edge | undefined,
  setNodes: (nodes: Node[]) => void,
  setEdges: (edges: Edge[]) => void,
  addNodes: (nodes: Node[]) => void,
  addEdges: (edges: Edge[]) => void,
  toObject: () => ReactFlowJsonObject,
  viewportInitialized: boolean,
  ...ViewportHelperFunctions,
};

export type ReactFlowJsonObject = {
  nodes: Node[],
  edges: Edge[],
  viewport: Viewport,
};

// ==============================
// Utility Types
// ==============================

export type CoordinateExtent = [[number, number], [number, number]];

export type ConnectionLineType = 'default' | 'straight' | 'step' | 'smoothstep' | 'bezier';
export type ConnectionLineComponentProps = {
  connectionLineStyle?: CSSProperties,
  connectionLineType: ConnectionLineType,
  fromNode?: Node,
  fromHandle?: HandleElement,
  fromX: number,
  fromY: number,
  toX: number,
  toY: number,
  fromPosition: Position,
  toPosition: Position,
};

export type ConnectionLineComponent = ComponentType<ConnectionLineComponentProps>;

export type BackgroundVariant = 'dots' | 'lines' | 'cross';

export type BackgroundProps = {
  id?: string,
  variant?: BackgroundVariant,
  gap?: number,
  size?: number,
  color?: string,
  style?: CSSProperties,
  className?: string,
};

export type MiniMapProps = {
  nodeStrokeColor?: string,
  nodeColor?: string,
  nodeClassName?: string,
  nodeBorderRadius?: number,
  nodeStrokeWidth?: number,
  maskColor?: string,
  maskStrokeColor?: string,
  maskStrokeWidth?: number,
  position?: PanelPosition,
  style?: CSSProperties,
  className?: string,
  onClick?: (event: MouseEvent, position: XYPosition) => void,
  onNodeClick?: (event: MouseEvent, node: Node) => void,
  pannable?: boolean,
  zoomable?: boolean,
  ariaLabel?: string,
};

export type ControlProps = {
  showZoom?: boolean,
  showFitView?: boolean,
  showInteractive?: boolean,
  fitViewOptions?: FitViewOptions,
  onZoomIn?: () => void,
  onZoomOut?: () => void,
  onFitView?: () => void,
  onInteractiveChange?: (interactiveStatus: boolean) => void,
  style?: CSSProperties,
  className?: string,
  position?: PanelPosition,
};

// ==============================
// Selection Types
// ==============================

export type SelectionMode = 'partial' | 'full';

export type SelectionRect = {
  x: number,
  y: number,
  width: number,
  height: number,
};

export type OnSelectionHandler = (event: ReactMouseEvent) => void;
export type OnSelectionContextMenu = (event: ReactMouseEvent, nodes: Node[]) => void;
export type OnSelectionDragHandler = (event: ReactMouseEvent, nodes: Node[]) => void;

// ==============================
// Handler Types
// ==============================

export type OnPaneHandler = (event: ReactMouseEvent) => void;
export type OnEdgeUpdateStartFunc = (event: ReactMouseEvent, edge: Edge, handleType: HandleType) => void;
export type OnEdgeUpdateEndFunc = (event: MouseEvent | TouchEvent) => void;
export type OnEdgeUpdateFunc = (oldEdge: Edge, newConnection: Connection) => void;
export type OnBeforeDelete = (params: { nodes: Node[], edges: Edge[] }) => boolean | void;

// ==============================
// Pan/Zoom Types
// ==============================

export type PanOnScrollMode = 'free' | 'horizontal' | 'vertical';

export type ViewportHelperFunctionOptions = {
  duration?: number,
};

export type SetCenterOptions = {
  zoom?: number,
  duration?: number,
};
