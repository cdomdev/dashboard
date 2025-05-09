import Link from "next/link";

interface ButtonGrsProps {
  text: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  icon?: React.ReactNode;
  href?: string;
  classNeme?: string;
  children?: React.ReactNode;
}

export const ButtonGrs = ({
  text,
  icon,
  href,
  type = "button",
  onClick,
  disabled,
  classNeme,
  children,
}: ButtonGrsProps) => {
  const classes = `${classNeme} flex items-center justify-center gap-2 border-none py-2 px-4 rounded-md bg-blue-600 text-slate-200 hover:text-slate-100 hover:bg-blue-800 cursor-pointer duration-200`;

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
      {children}
    </button>
  );
};
