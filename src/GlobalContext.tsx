import React, { createContext, useContext, useEffect, useReducer } from "react";
import type {
  GlobalState,
  GlobalAction,
  Theme,
  UserPreferences,
} from "./types";

const initialState: GlobalState = {
  theme: "light",
  userPreferences: {
    fontSize: "medium",
    language: "en",
    notifications: true,
  },
  isLoading: false,
};

function reducer(state: GlobalState, action: GlobalAction): GlobalState {
  switch (action.type) {
    case "SET_THEME":
      return {
        ...state,
        theme: action.payload,
      };
    case "SET_USER_PREFERENCES":
      return {
        ...state,
        userPreferences: {
          ...state.userPreferences,
          ...action.payload,
        },
      };
    case "SET_LOADING":
      return {
        ...state,
        isLoading: action.payload,
      };
    default:
      return state;
  }
}

interface GlobalContextValue {
  state: GlobalState;
  dispatch: React.Dispatch<GlobalAction>;
}

const GlobalContext = createContext<GlobalContextValue | undefined>(undefined);

const STORAGE_KEY = "global-state";

export function GlobalProvider({ children }: { children: React.ReactNode }) {
  // Initialize state from localStorage if available
  const [state, dispatch] = useReducer(reducer, initialState, (initial) => {
    if (typeof window === "undefined") return initial;

    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      return JSON.parse(stored);
    }
    return initial;
  });

  // Persist state changes to localStorage
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }, [state]);

  // Apply theme class to document
  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(state.theme);
  }, [state.theme]);

  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
}

// Custom hooks to access specific parts of state
export function useGlobal() {
  const context = useContext(GlobalContext);
  if (context === undefined) {
    throw new Error("useGlobal must be used within a GlobalProvider");
  }
  return context;
}

export function useTheme() {
  const { state, dispatch } = useGlobal();

  const setTheme = (theme: Theme) => {
    dispatch({ type: "SET_THEME", payload: theme });
  };

  return {
    theme: state.theme,
    setTheme,
  };
}

export function useUserPreferences() {
  const { state, dispatch } = useGlobal();

  const updatePreferences = (preferences: Partial<UserPreferences>) => {
    dispatch({ type: "SET_USER_PREFERENCES", payload: preferences });
  };

  return {
    preferences: state.userPreferences,
    updatePreferences,
  };
}
