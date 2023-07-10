import axios from 'axios';
import { useState, useEffect } from 'react';

import Button from './components/Button';
import ListItem from './components/ListItem';
import ListItemLayout from './components/ListItemLayout';
import Pagination from './components/Pagination';
import ListFilter from './components/ListFilter';
import OpenClosedFilters from './components/OpenClosedFilter';

import styles from './ListContainer.module.css';

const GITHUB_API = 'https://api.github.com';

export default function ListContainer() {
  const [inputValue, setInputValue] = useState('is:pr is:open');
  const [list, setList] = useState([]);
  const [page, setPage] = useState(1);
  const [isOpenMode, setIsOpenMode] = useState(true);
  const maxPage = 10;

  async function getData(params) {
    const { data } = await axios.get(
      `${GITHUB_API}/repos/facebook/react/issues`,
      {
        params,
      }
    );
    setList(data);
  }

  useEffect(() => {
    getData({ page, state: isOpenMode ? 'open' : 'closed' });
  }, [page, isOpenMode]);

  console.log({ list });

  return (
    <>
      <div className={styles.listContainer}>
        <div className={styles.topSection}>
          <input
            className={styles.input}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <Button
            style={{
              fontSize: '14px',
              backgroundColor: 'green',
              color: 'white',
            }}
          >
            New Issue
          </Button>
        </div>
        <OpenClosedFilters
          isOpenMode={isOpenMode}
          onClickMode={setIsOpenMode}
        />
        <div className={styles.container}>
          <ListItemLayout className={styles.listFilter}>
            <ListFilter
              onChangeFilter={(filteredData) => {
                // 필터링된 요소에 맞게 데이터를 불러오기
              }}
            />
          </ListItemLayout>
          {list.map((item) => (
            <ListItem data={item} key={item.id} />
          ))}
        </div>
      </div>
      <div className={styles.paginationContainer}>
        <Pagination
          maxPage={maxPage}
          currentPage={page}
          onClickPageButton={(number) => setPage(number)}
        />
      </div>
    </>
  );
}
