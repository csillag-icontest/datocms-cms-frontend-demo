import {ReactNode} from "react";

interface ContainerProps {
  children: ReactNode;
}

export default function Container(props: ContainerProps) {
  return <div className="container mx-auto px-5">{props.children}</div>;
}
