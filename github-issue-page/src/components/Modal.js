import { useEffect, useState } from 'react';
import styles from './Modal.module.css';
import cx from 'clsx';

export default function Modal({
  opened,
  title,
  onClose,
  placeholder,
  searchDataList,
  onClickCell,
}) {
  const [searchValue, setSearchValue] = useState('');
  const [filteredData, setFilteredData] = useState(searchDataList);

  // 검색어 로우 데이터 보존
  useEffect(() => {
    setFilteredData(searchDataList);
  }, [searchDataList]);

  // 검색 필터링
  useEffect(() => {
    if (searchValue === '') {
      setFilteredData(searchDataList);
    } else {
      const filteredSearchList = searchDataList.filter((item) =>
        item.name.toLowerCase().includes(searchValue.toLowerCase())
      );
      setFilteredData(filteredSearchList);
    }
  }, [searchDataList, searchValue]);

  return (
    <div className={cx(styles.modal, { [styles.opened]: opened })}>
      <div className={styles.header}>
        <span>Filter by {title}</span>
        <button onClick={onClose}>X</button>
      </div>
      <div className={styles.input}>
        <input
          placeholder={placeholder}
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </div>
      <div className={styles.list}>
        {filteredData.map((data) => (
          <div
            key={data.name}
            onClick={() => {
              const isLabel = title.toLowerCase() === 'label';
              const paramKey = isLabel ? 'labels' : title.toLowerCase();

              onClickCell({ [paramKey]: data.name });
            }}
            className={styles.item}
            role="button"
          >
            {data.name}
          </div>
        ))}
      </div>
    </div>
  );
}
