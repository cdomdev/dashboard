import { Button } from "@/components/ui/button";
import { Edit } from "lucide-react";

interface Props {
  className?: string;
  handler?: () => void;
}

export function Editbutton({ className, handler }: Props) {
  return (
    <Button
      type="button"
      className={`${className} cursor-pointer`}
      variant={"default"}
      onClick={handler}
    >
      <Edit className="w-5 h-5" />
      <span className="sr-only">Edit</span>
    </Button>
  );
}
