import React from 'react';
import Link from 'next/link';

import styles from './Pagintation.module.css';

const Pagination = () => {
  const mockPagination = Array(50)
    .fill('')
    .map((_, index) => (
      <li key={index + 1}>
        <Link passHref href="/">
          <a>{index + 1}</a>
        </Link>
      </li>
    ));

  return (
    <div className={styles['wrapper-pagination']}>
      {/* <ul className={styles['pagination-container']}>{mockPagination}</ul> */}
      <button type="button" className={styles['show-more']}>
        Ver Mais
      </button>
    </div>
  );
};

export default Pagination;
