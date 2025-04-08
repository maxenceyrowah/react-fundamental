import { useEffect, useState } from "react";

const API_URL = "https://jsonplaceholder.typicode.com/albums";

const useJsonPlaceholderGateway = () => {
  const [projets, setProjets] = useState([]);

  useEffect(() => {
    getProjets();
  }, []);

  const getProjets = async () => {
    try {
      const response = await fetch(API_URL);

      if (!response.ok) {
        throw new Error("Erreur lors du chargement des projets");
      }
      const data = await response.json();
      setProjets(data);
    } catch (error) {
      console.log("[] error", error);
    }
  };

  return {
    projets,
  };
};

export default useJsonPlaceholderGateway;
