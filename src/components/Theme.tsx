"use client";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function ModeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Button variant="ghost" size="icon" className="cursor-pointer">
        <span className="sr-only">Toggle theme</span>
      </Button>
    );
  }

  const showIcon = () => {
    if (theme === "dark" || resolvedTheme === "dark") {
      return <Moon className="size-5" />;
    } else {
      return <Sun className="size-5" />;
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="m-0 hover:bg-transparent p-0 relative focus:outline-none focus:ring-0 ring-0 dark:hover:bg-transparent dark:ring-0">
        <button className="cursor-pointer">
          {showIcon()}
          <span className="sr-only">Toggle theme</span>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem
          onClick={() => setTheme("light")}
          className="cursor-pointer"
        >
          <Sun /> Claro
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme("dark")}
          className="cursor-pointer"
        >
          <Moon className="size-4" /> Oscuro
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
