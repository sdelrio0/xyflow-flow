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
