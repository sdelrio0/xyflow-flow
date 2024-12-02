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
