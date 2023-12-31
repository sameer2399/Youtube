import Button from "./Button";

const List = ["Game", "Songs", "Live", "Cricket", "Soccer", "News", "Cooking", "Movies"];
const ButtonList = () => {
  return (
    <div className="md:flex hidden">
      {List.map((list, index) => (
        <Button key={index} name={list} />
      ))}
    </div>
  );
};

export default ButtonList;
