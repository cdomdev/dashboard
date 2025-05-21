import { Button } from "@/components/ui/button";
import { Edit } from "lucide-react";
import { ButtonHTMLAttributes } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

export function Editbutton({ className, ...props }: Props) {
  return (
    <Button
      type="button"
      className={`${className} cursor-pointer`}
      variant={"default"}
      {...props}
    >
      <Edit className="w-5 h-5" />
      <span className="sr-only">Edit</span>
    </Button>
  );
}
