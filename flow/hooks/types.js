// @flow

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
