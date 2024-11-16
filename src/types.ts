export type Theme = "light" | "dark";

export interface UserPreferences {
  fontSize: "small" | "medium" | "large";
  language: "en" | "es" | "fr";
  notifications: boolean;
}

export interface GlobalState {
  theme: Theme;
  userPreferences: UserPreferences;
  isLoading: boolean;
}

export type GlobalAction =
  | { type: "SET_THEME"; payload: Theme }
  | { type: "SET_USER_PREFERENCES"; payload: Partial<UserPreferences> }
  | { type: "SET_LOADING"; payload: boolean };
