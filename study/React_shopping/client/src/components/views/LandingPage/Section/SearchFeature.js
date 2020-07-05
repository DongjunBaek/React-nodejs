import React,{useState} from 'react'
import { Input } from 'antd';

const { Search } = Input;
//rfce
function SearchFeature(props) {

    const [SearchTerm, setSearchTerm] = useState("")
    
    const searchHandler = (event) => {
        setSearchTerm(event.currentTarget.value)
        props.refreshFunction(event.currentTarget.value)
    }

    return (
        <Search
            placeholder="input search text"
            onChange = {searchHandler}            
            style={{ width: 200 }}
        />
    )
}

//rfce
export default SearchFeature
