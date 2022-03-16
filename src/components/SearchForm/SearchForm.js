import TextInput from '../TextInput/TextInput';
import styles from './SearchForm.module.scss';
import Button from '../Button/Button';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { updateSearchString } from '../../redux/searchStringReducer';

const SearchForm = () => {

  const [searchString, setSearchString] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(updateSearchString(searchString));
  };

  useEffect(() => {
    dispatch(updateSearchString(''));
  }, []);

  return (
      <form className= {styles.searchForm} onSubmit= {handleSubmit}>
          <TextInput placeholder="Search..." value={searchString} onChange={e => setSearchString(e.target.value)} />
          <Button>
            <span className="fa fa-search" />
          </Button>
      </form>
  );
};

export default SearchForm;