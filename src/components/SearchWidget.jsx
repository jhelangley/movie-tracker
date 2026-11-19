import {useState, useEffect} from 'react'
import ShowCard from './ShowCard';
import { useShow } from '../contexts';

export default function SearchWidget() {
    const [inputValue, setInputValue] = useState("")
    const [searchString, setSearchString] = useState("")
    const {showData, setShowData} = useShow();

    function handleInput(e) {
        const newInput = e.target.value;
        setInputValue(newInput);
    }

    function handleSubmit(e) {
        e.preventDefault();
        setSearchString(inputValue);
        setInputValue("");
    }

    useEffect(() => {
        async function searchAPI() {
          const response = await fetch(
            `https://api.tvmaze.com/search/shows?q=${searchString}`
          );
          const rawData = await response.json();
          const data = rawData.map(s => s.show)
          setShowData(data);
        }
      
        searchAPI();
      }, [searchString]);

  return (
    <>
    <form onSubmit={handleSubmit}>
        <input type="text" required onChange={handleInput} />
        <input type="submit" value="Search"></input>
    </form>
    {showData.map(show => <ShowCard show={show}/>)}

    </>
  )
}
