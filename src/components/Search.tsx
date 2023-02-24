import React, { useState } from "react"
import Flex from "../styles/Flex.styled"
import StyledSearch from "../styles/StyledSearch.styled"

type Props = {
  setSearchedTerm: Function
}

function Search({ setSearchedTerm }: Props) {
  const [input, setInput] = useState('');

  function handleSearch() {
    setSearchedTerm(input)
    setInput('')
  }

  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    const target = e.target
    setInput(target.value)
  }

  return (
    <StyledSearch>
      <Flex items="center" justify="space-between"> 
        <input 
          type="text" 
          placeholder="Salad" 
          autoComplete="off" 
          value={input}
          onChange={(e) => onChange(e)}
        />

        <img 
          className="search" 
          src="/search.svg" 
          alt="search"
          onClick={handleSearch} 
        />
      </Flex>
    </StyledSearch>
  )
}

export default Search
