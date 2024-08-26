"use client";

import React, { useEffect, useState } from "react";

import { usePathname } from "next/navigation";
import { Check, X } from "lucide-react";

interface TableCellsProps {
  value: string | JSX.Element;
  isTotal: boolean;
}
const TableCell: React.FC<TableCellsProps> = ({ value, isTotal }) => (
  <td
    className={
      isTotal ? "text-center md:px-5 font-medium text-sm lg:text-[16px]" : ""
    }
  >
    {value}
    {isTotal && (
      <button className="bg-[#ED459A] hover:bg-[#cf2279] w-full rounded-lg py-2 px-4 text-white mt-2 transition-all ease-in-out">
        Select
      </button>
    )}
  </td>
);

const PricePackage = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const tableData = [
    {
      package: "Functional website",
      basic: "check",
      standard: "check",
      premium: "check",
    },
    {
      package: "Seo Keywords",
      basic: "check",
      standard: "check",
      premium: "check",
    },
    {
      package: "Plugins/Extensions installations",
      basic: "check",
      standard: "check",
      premium: "check",
    },
    {
      package: "Revisions",
      basic: "Unlimited",
      standard: "Unlimited",
      premium: "Unlimited",
    },
    {
      package: "Words included",
      basic: "500",
      standard: "500",
      premium: "500",
    },
    {
      package: "Delivery time",
      basic: "check",
      standard: "check",
      premium: "check",
    },
    {
      package: "Total",
      basic: "$204",
      standard: "$230",
      premium: "$300",
    },
  ];

  const checkIsValid = (value: string) => {
    if (value === "check") {
      return <Check />;
    } else if (value === "no-check") {
      return <X />;
    } else {
      return value;
    }
  };

  const pathname = usePathname();

  return (
    <React.Fragment>
      {isClient && (
        <>
          <h1 className="text-black mt-10 mb-5 text-[24px] font-semibold">
            {pathname.includes("/seller-profile") ? "Packages" : ""}
          </h1>
          <table className="mb-20 hidden md:block">
            <thead>
              <tr>
                <th>Packages</th>
                <th>
                  $10
                  <br />
                  <p>Basic</p>
                  <br />
                  <p>Starter SHOPIFY PACKAGE</p>
                  <br />
                  <p>
                    A highly converting dropshipping store with 5<br /> products
                    on basic theme + 5 Apps + Free Logo
                  </p>
                </th>
                <th>
                  $30
                  <br />
                  <p>Standard</p>
                  <br />
                  <p>Starter SHOPIFY PACKAGE</p>
                  <br />
                  <p>
                    A highly converting dropshipping store with 5<br /> products
                    on basic theme + 5 Apps + Free Logo
                  </p>
                </th>
                <th>
                  $50
                  <br />
                  <p>Premium</p>
                  <br />
                  <p>Starter SHOPIFY PACKAGE</p>
                  <br />
                  <p>
                    A highly converting dropshipping store with 5<br /> products
                    on basic theme + 5 Apps + Free Logo
                  </p>
                </th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((data, index) => {
                const isTotal = data.package.includes("Total");
                return (
                  <tr key={index}>
                    <td>{data.package}</td>
                    <TableCell
                      value={checkIsValid(data.basic)}
                      isTotal={isTotal}
                    />
                    <TableCell
                      value={checkIsValid(data.standard)}
                      isTotal={isTotal}
                    />
                    <TableCell
                      value={checkIsValid(data.premium)}
                      isTotal={isTotal}
                    />
                  </tr>
                );
              })}
            </tbody>
          </table>
        </>
      )}
    </React.Fragment>
  );
};

export default PricePackage;
