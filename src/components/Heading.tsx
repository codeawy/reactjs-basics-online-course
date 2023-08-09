import { ReactNode } from "react";

const Heading = (props: { title: string; children: ReactNode }) => {
  const { title, children } = props;
  console.log(props);
  return (
    <h2 style={{ fontSize: 40, textAlign: "center" }}>
      {title}
      {children}
    </h2>
  );
};

export default Heading;
