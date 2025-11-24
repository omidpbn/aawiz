import ListCard from "../modules/showCard/components/organisms/listCard";

const Page = () => {
  return (
    <div className="w-full h-full flex flex-col items-center my-4 ">
      <h1 className="md:text-4xl text-2xl font-bold text-black dark:text-white text-center">List Card</h1>
      <ListCard />
    </div>
  );
};

export default Page;
