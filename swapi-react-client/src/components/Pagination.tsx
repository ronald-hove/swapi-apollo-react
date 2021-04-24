import cx from 'classnames';
import React from 'react';

const Pagination = ({ troopersPerPage, totalTroopers, paginate, response, nextPage, PrevPage }: any) => {

  let currentPage = 0

  const pageNumbers = [];
  if (response.people.next == null) {
    pageNumbers.push(1)
  }else {
    currentPage = parseInt(response?.people?.next?.split('=')[1],10)
    currentPage-=2;
    for (let i = 1; i <= Math.ceil(totalTroopers / troopersPerPage); i++) {
      pageNumbers.push(i);
    }
  }

  return (
   < div>
      <div className="row">
        <div className="col"></div>
        {response?.people?.next !== null && 
          <div className="col-auto">
            <nav>
                <ul className='pagination'>
                    {pageNumbers.map((number, index) => (
                    <li key={number} className='page-item'>
                        <a onClick={() => paginate(number)} className={cx ({
                          'page-link': true,
                          'swapi-active': index == currentPage
                        })}>
                        {number}
                        </a>
                    </li>
                    ))}
                </ul>
            </nav>
          </div>
        }
        <div className="col"></div>
      </div>

    <div className="row">
      <div className="col"></div>
      <div className="col-auto">
          {response?.people?.next !== null &&
              <button className="btn btn-primary mr-3" onClick={() => nextPage(response?.people?.next)}>Next</button>            
          }
          { response?.people?.previous !== null &&
              <button className="btn btn-primary" onClick={() => PrevPage(response?.people?.previous)}>Previous</button>
          }
        </div>
      <div className="col"></div>
    </div>
   </div>

  );
};

export default Pagination;