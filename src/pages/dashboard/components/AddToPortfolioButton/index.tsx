import { useState } from "react";
import AddToPortfolioModal from "../AddToPortfolioModal";
import { Cryptocurrency } from "../../../../services/cryptocurrency/type";

type AddToPortfolioButtonProps = {
  crypto: Cryptocurrency;
};

const AddToPortfolioButton = ({ crypto }: AddToPortfolioButtonProps) => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    <>
      <button
        className="rounded-3xl px-3 py-2 bg-UI-BLUE  text-UI-WHITE"
        onClick={() => setIsOpenModal(true)}
      >
        Add to portfolio
      </button>
      <AddToPortfolioModal
        isOpen={isOpenModal}
        setIsOpen={setIsOpenModal}
        crypto={crypto}
      />
    </>
  );
};

export default AddToPortfolioButton;
