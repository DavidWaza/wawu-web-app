import { useState } from "react";
import axiosInstance from "@/pages/api/axiosInstance";
import Button from "../ui/Button/Button"; // Assuming you have a Button component
import { fetch_services } from "@/pages/api/endpoints";

type Skill = {
  value: string; // UUID of the skill
  label: string; // Name of the skill
};

const ServiceSearch = () => {
  const [query, setQuery] = useState<string>(""); // Define query as a string
  const [results, setResults] = useState<Skill[]>([]); // Define results as an array of Skill

  const handleSearch = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const response = await axiosInstance.get(fetch_services, {
        params: { query }, // Pass the search query as a parameter
      });

      // Assuming the API returns a list of services
      const services = response.data.data.map((service: any) => ({
        value: service.uuid, // UUID of the service
        label: service.name, // Name of the service
      }));
      setResults(services); // Set results with the filtered services
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSearch} className="flex">
        <input
          type="text"
          placeholder="Search for any services"
          className="py-2 px-3 rounded-r-none rounded-md w-full border-none"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <Button
          variant="primary"
          className="rounded-l-none p-2 border-none"
          type="submit"
        >
          Search
        </Button>
      </form>

      <div className="mt-4">
        {results.length > 0 ? (
          <ul>
            {results.map((result, index) => (
              <li key={index}>{result.label}</li> // Display the name of the service
            ))}
          </ul>
        ) : (
          <p>No results found.</p>
        )}
      </div>
    </div>
  );
};

export default ServiceSearch;
