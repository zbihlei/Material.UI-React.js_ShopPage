import { TextField } from '@mui/material'
import React from 'react'

const Search = ({value, onSearch}) => {
  return (
    <TextField
        type='search'
        label= 'search'
        value={value}
        variant='standard'
        style={{'marginBottom': '40px'}}
        onChange={onSearch}

    />
)
}

export default Search