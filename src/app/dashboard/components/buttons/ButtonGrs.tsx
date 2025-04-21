import Link from "next/link";

interface ButtonGrsProps {
  text: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  icon?: React.ReactNode;
  href?: string;
}

export const ButtonGrs = ({
  text,
  icon,
  href,
  type = "button",
  onClick,
  disabled,
}: ButtonGrsProps) => {
  const classes =
    "flex items-center justify-center gap-2 border-none py-2 px-4 rounded-md bg-blue-600 text-slate-200 hover:text-slate-100 hover:bg-blue-800 cursor-pointer duration-200";

  if (href) {
    return (
      <Link href={href} className={classes}>
        {icon}
        {text}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
    >
      {icon}
      {text}
    </button>
  );
};
