import { Delete } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { ButtonHTMLAttributes } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

export function DeleteButton({ className, ...props }: Props) {
  return (
    <Button
      type="button"
      className={`${className} cursor-pointer`}
      variant={"destructive"}
      {...props}
    >
      <Delete className="w-5 h-5" />
      <span className="sr-only">Delete</span>
    </Button>
  );
}
