import React, { useEffect, useState } from "react";
import ListData from "./Components/ListData/ListData";
import Pagination from "./Components/Pagination";

const App = () => {
  const [fetchedData, setFetchedData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(3);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await response.json();
      setFetchedData(data);
      setIsLoading(false);
    };

    fetchData();
  }, []);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = fetchedData.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="container">
      {isLoading && (
        <div className="loader-container">
          <span className="loader"></span>
        </div>
      )}
      {fetchedData && <ListData data={currentItems} />}
      <Pagination
        itemsPerPage={itemsPerPage}
        totalItems={fetchedData.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </div>
  );
};

export default App;
