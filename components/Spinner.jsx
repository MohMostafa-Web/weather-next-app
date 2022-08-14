import Image from "next/image";
import spinner from "../public/spinner.gif";

const Spinner = () => {
  return (
    <div className="w-[100vw] h-[100vh] flex justify-center items-center">
      <Image src={spinner} alt="loading..." width={200} height={200} />
    </div>
  );
};

export default Spinner;
