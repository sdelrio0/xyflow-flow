// @flow

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
