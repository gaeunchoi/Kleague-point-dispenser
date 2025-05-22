import Image from "next/image";

function TeamInfoHeader() {
  return (
    <div className="bg-white p-4 flex flex-row gap-2">
      <Image
        src={"/file.svg"}
        alt={"logo"}
        width={50}
        height={50}
        className="mr-2"
      />
      <div className="flex flex-col gap-1">
        <h2 className="text-2xl font-bold">TeamName</h2>
        <span className="bg-[#ccc] rounded-xl text-center p-1">K리그1</span>
      </div>
    </div>
  );
}

export default TeamInfoHeader;
