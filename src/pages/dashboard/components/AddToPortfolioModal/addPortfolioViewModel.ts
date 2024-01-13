import { useContext, useState } from "react";
import PortfolioRemote from "../../../../services/portfolio/remote/portfolio.remote";
import PortfolioRepository from "../../../../services/portfolio/repository/portfolio.repository";
import { UserInformationContext } from "../../../../core/authentication/context";
import { PostAddToPortfolioBody } from "../../../../services/portfolio/types";

function useAddPortfolioViewModel() {
  const [isWaitingForResponse, setIsWaitingForResponse] =
    useState<boolean>(false);

  const portfolioRepository = new PortfolioRepository(new PortfolioRemote());

  const { accessToken } = useContext(UserInformationContext);
  const submitForm = (values: PostAddToPortfolioBody) => {
    setIsWaitingForResponse(true);
    portfolioRepository.postAddToPortfolio(accessToken, values).subscribe({
      next: () => {},
      error: () => {
        setIsWaitingForResponse(false);
      },
      complete: () => {
        setIsWaitingForResponse(false);
      },
    });
  };
  return { submitForm, isWaitingForResponse };
}

export default useAddPortfolioViewModel;
