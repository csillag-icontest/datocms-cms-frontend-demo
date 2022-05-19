import Image from "next/image";
import openingPic from "../public/img/strong_woman.jpg";

export const Index = () => (
  <div>
    <h1>Hello, world of sports!</h1>
    <Image src={openingPic} alt={"Strong woman competition"} />
  </div>
);

export default Index;
