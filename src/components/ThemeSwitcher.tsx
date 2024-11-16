import { Moon, Sun } from "lucide-react";
import { useTheme } from "../GlobalContext";
import { ClassValue } from "clsx";

import Button from "./Button";

export function ThemeSwitcher({ className }: { className?: ClassValue }) {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      className={className}
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      <Sun className="hidden h-6 w-6 text-gray-900 dark:inline" />
      <Moon className="inline h-6 w-6 text-gray-900 dark:hidden" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
