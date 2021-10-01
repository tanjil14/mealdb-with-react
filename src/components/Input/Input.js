import React, { useState } from 'react';
import { FormControl, InputGroup } from 'react-bootstrap';
import SearchFoods from '../SearchFoods/SearchFoods';

const Input = () => {
    const [input, setInput] = useState("");
    const handleChange = (e) => {
      setInput(e.target.value);
    };
    return (
        <>
        <InputGroup className="mb-3 mt-2">
        <FormControl
          placeholder="Search your favorite food..."
          aria-label="Search your favorite food"
          onChange={handleChange}
        />
        {/* <Button
          // onClick={clickHandler}
          variant="outline-secondary"
          id="button-addon2"
        >
          Button
        </Button> */}
      </InputGroup>
      <SearchFoods name={input}/>
      </>
    );
};

export default Input;