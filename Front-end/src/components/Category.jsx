import { Link } from "react-router-dom";

const Category = ({ img, title, to, link }) => {
  return (
    <Link className=" border-2 w-[290px] bg-white border-white">
      <div className="p-2 flex flex-col h-full gap-1 ">
        <p>{title}</p>
        <img className="w-[25rem] h-[20rem]" src={img} alt="logo" />
        <p to={to}>{link}</p>
      </div>
    </Link>
  );
};

export default Category;
