import React, { useState } from "react";

const Paginate = ({ users, usersPerPage }) => {
  const [currentPage, setCurrentPage] = useState(1);

  //Calculer l'index de début et de fin des utilisateurs à afficher sur la page actuelle
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  //Changer de page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <ul>
        {currentUsers.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
      <Pagination
        usersPerPage={usersPerPage}
        totalUsers={users.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </div>
  );
};

const Pagination = ({ usersPerPage, totalUsers, paginate, currentPage }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalUsers / usersPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li key={number} className={currentPage === number ? "active" : ""}>
            <a onClick={() => paginate(number)} href="!#" className="page-link">
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Paginate;
