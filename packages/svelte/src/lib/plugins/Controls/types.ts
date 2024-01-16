import type { PanelPosition } from '@xyflow/system';

export type ControlsProps = {
  /** Position of the controls on the pane
   * @example PanelPosition.TopLeft, PanelPosition.TopRight,
   * PanelPosition.BottomLeft, PanelPosition.BottomRight
   */
  position?: PanelPosition;
  /** Show button for zoom in/out */
  showZoom?: boolean;
  /** Show button for fit view */
  showFitView?: boolean;
  /** Show button for toggling interactivity */
  showLock?: boolean;
  buttonBgColor?: string;
  buttonBgColorHover?: string;
  buttonColor?: string;
  buttonColorHover?: string;
  'aria-label'?: string;
};
