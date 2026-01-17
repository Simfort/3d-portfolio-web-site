export default function HeaderText() {
  return (
    <div className="flex max-md:flex-col items-center mt-[100px]">
      {" "}
      <div className="h-[100px] w-[100px] bg-green-800 rounded-bl-[20px] rounded-tl-[50px] rounded-br-[20px] rounded-tr-2xl"></div>{" "}
      <div className="flex  flex-col gap-5 p-5 ">
        <h2 className="text-7xl max-md:text-5xl flex-wrap  flex gap-2   font-black">
          Hi,I`am <span className="text-green-800 ">David Lemonjava</span>
        </h2>
        <p className="text-xl font-bold ">
          I am fullstack developer in 15 years old.
        </p>
      </div>
    </div>
  );
}
