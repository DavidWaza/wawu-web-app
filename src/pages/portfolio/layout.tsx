import GigPortfolio from "../sellers/Components/GigPortfolio/GigPortfolio";
import Header from "../sellers/Components/Header/Header";


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
