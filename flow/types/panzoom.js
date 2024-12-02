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
