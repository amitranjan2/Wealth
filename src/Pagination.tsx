import React from 'react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  const handlePageChange = (page: number) => {
    onPageChange(page);
  };

  return (
    <div className="flex justify-center items-center mt-5">
      <button
        className={`mr-3 px-4 py-2 rounded-md border transition-transform transform ${
          currentPage === 1 ? 'bg-gray-300 cursor-not-allowed text-gray-500' : 'bg-orange-500 hover:bg-orange-700 text-white cursor-pointer shadow-md hover:scale-105'
        }`}
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Previous
      </button>
      <span className="text-lg font-semibold mx-4">
        Page {currentPage} of {totalPages}
      </span>
      <button
        className={`ml-3 px-4 py-2 rounded-md border transition-transform transform ${
          currentPage === totalPages ? 'bg-gray-300 cursor-not-allowed text-gray-500' : 'bg-green-500 hover:bg-green-700 text-white cursor-pointer shadow-md hover:scale-105'
        }`}
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
