import React, { useEffect, useState } from "react";
import fetchData from "../utils/fetchData";
export const DomainContext = React.createContext();

const url = "https://api.propeers.in/api/v1/domains/allDomains";

function DomainProvider(props) {
  const [selectedDomains, setSelectedDomains] = useState([])
  const [domainsList, setDomainsList] = useState([]);
  const [subDomains, setSubDomains] = useState([]);

  useEffect(() => {
    let isMounted = true;

    if (isMounted) {
      async function extractDomainList(url) {
        const { data } = await fetchData(url);
        setDomainsList(data);
      }
      extractDomainList(url);
    }
    return () => {
      isMounted = false;
    };
  }, []);


  return (
    <DomainContext.Provider
      value={{
        selectedDomains,
        setSelectedDomains,
        domainsList, 
        setDomainsList,
        subDomains, 
        setSubDomains
      }}
    >
      {props.children}
    </DomainContext.Provider>
  );
}

export default DomainProvider;