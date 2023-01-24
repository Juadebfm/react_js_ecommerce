import React, { useContext } from "react";
//import Link
import { Link } from "react-router-dom";
//import icons
import { IoMdArrowForward } from "react-icons/io";
import { FiTrash2 } from "react-icons/fi";
// import components
import CartItem from "../components/CartItem";
//import sidebar context
import { SidebarContext } from "../contexts/SidebarContext";
// import cart context
import { CartContext } from "../contexts/CartContext";

const Sidebar = () => {
  const { isOpen, handleClose } = useContext(SidebarContext);
  const { cart, clearCart, total, itemAmount } = useContext(CartContext);
  return (
    <div
      className={`${
        isOpen ? "right-0" : "-right-full"
      } w-full bg-white mb-4 border-8 border-b-slate-700 fixed top-0 h-[100%] shadow-2xl md:w-[35vw] xl:max-w-[30vw] transition-all duration-300 z-20 px-4 lg:px-[35px] overflow-y-scroll`}
    >
      <div className="flex flex-col space-y-4">
        <div className="font-semibold flex items-center justify-between border-b py-6 border-gray-300">
          {/* Shopping Cart Title */}
          <div className="">Shopping Cart ({itemAmount})</div>
          {/* icons */}
          <div onClick={handleClose} className="cursor-pointer">
            <IoMdArrowForward className="text-2xl" />
          </div>
        </div>
        {/* total */}
        <div className="border-b border-gray-300 pb-4">
          <div className="flex w-full justify-between items-center">
            {/* total */}
            <div className="uppercase  font-semibold">
              <span className="mr-2">Total:</span> ${" "}
              {parseFloat(total).toFixed(2)}
            </div>
            {/* clear cart */}
            <div
              onClick={clearCart}
              className="cursor-pointer py-4 bg-rose-500 text-white w-1/5 h-12 flex justify-center items-center text-xl"
            >
              <FiTrash2 />
            </div>
          </div>
          <Link
            to={"/"}
            className="bg-gray-200 flex p-4 justify-center text-primary w-full font-medium my-3"
          >
            View Cart
          </Link>
          <Link
            to={"/"}
            className="bg-black flex p-4 justify-center text-white w-full font-medium my-3"
          >
            Checkout
          </Link>
        </div>
      </div>
      {/* Cart Item */}
      <div className=" flex flex-col gap-y-2 h-[100%] lg:h-[640px]">
        {cart.map((item) => {
          return <CartItem item={item} key={item.id} />;
        })}
      </div>
    </div>
  );
};

export default Sidebar;
