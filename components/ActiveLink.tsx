import Link from "next/link";
import { CSSProperties, FC } from "react";
import { useRouter } from "next/router";

const style: CSSProperties = {
  color: "#0070f3",
  textDecoration: "underline",
};

type Props = {
  text: string;
  href: string;
};

export const ActiveLink: FC<Props> = ({ text, href }) => {
  const router = useRouter();
  return (
    <Link href={href}>
      <a style={router.asPath === href ? style : undefined}>{text}</a>
    </Link>
  );
};
