export interface NavigationEntry {
  pathname: string;
  search: string;
}

/**
 * Browser history state which associates with navigator state.
 */
export interface NavigatorState {
  cursor: number;
  entries: NavigationEntry[];
}

export interface NavigatorOptions {
  /**
   * Should navigator display debug messages.
   * @default false
   */
  debug?: boolean;
}

export interface NavigatorEventsMap {
  /**
   * Being called whenever current history changes.
   * @param event - occurred event.
   */
  change: (event: NavigationEntry) => void;
}

/**
 * Entry information allowed to be used in push and replace Navigator methods.
 * Should be either path or object partially describing it.
 */
export type AllowedEntry = string | {
  pathname?: string;
  search?: string;
};
