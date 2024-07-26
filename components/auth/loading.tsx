import Image from "next/image";

export const Loading = () => {
  return (
    <div className="h-full w-full flex flex-col  justify-center items-center">
      <Image
        src="/abWBsvg.svg"
        alt="logo"
        width={200}
        height={100}
        className="animate-pulse duration-700"
      />
    </div>
  );
};
