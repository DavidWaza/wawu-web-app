import GigPortfolio from "../buyers/Components/GigPortfolio/GigPortfolio";
import Header from "../buyers/Components/Header/Header";

interface PortfolioLayoutProps {
  children: React.ReactNode;
}

export default function PortfolioLayout({ children }: PortfolioLayoutProps) {
  return (
    <div>
      <Header />
      <GigPortfolio />
      {children}
    </div>
  );
}
