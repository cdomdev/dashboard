import Link from "next/link";

interface Props {
  className?: string;
  handler?: () => void;
  url: string;
}

export function DetailsButton({ url }: Props) {
  return (
    <Link href={url} className="hover:underline dark:text-blue-600 inline-block  mx-auto border p-1.5 rounded-md dark:hover:text-white text-gray-900  dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none ">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="icon icon-tabler icons-tabler-outline icon-tabler-file-description"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M14 3v4a1 1 0 0 0 1 1h4" />
        <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
        <path d="M9 17h6" />
        <path d="M9 13h6" />
      </svg>
    </Link>
  );
}
