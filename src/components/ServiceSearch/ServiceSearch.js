import { useState } from "react";
import { Input, AutoComplete, Checkbox, Select } from "antd";
import { checkBoxOptions } from "./utils";

const ServiceSearch = ({ itemsData, setCardsSearch }) => {
  const cardsList = itemsData.map((item) => {
    return {
      ...item,
      key: item.itemId,
      label: item.title + " " + item.price + " lei",
      value: item.title,
    };
  });

  const [autoCompleteCards, setAutoCompleteCards] = useState(cardsList);
  const { Search } = Input;

  const handleSearch = (value) => {
    const filteredCardsList = itemsData.filter((item) =>
      item.title.toLowerCase().includes(value.toLowerCase())
    );

    if (value.length && filteredCardsList.length > 0) {
      setCardsSearch(filteredCardsList);
    } else if (value.length && !filteredCardsList.length) {
    } else {
      setCardsSearch(itemsData);
    }
  };

  const handleComplete = (value) => {
    const filteredCardsList = cardsList.filter((item) =>
      item.title.toLowerCase().includes(value.toLowerCase())
    );

    setAutoCompleteCards(filteredCardsList);
  };

  const handleCheck = (filters) => {
    let results = cardsList;

    filters.forEach((filter) => {
      results = results.filter((item) => {
        return item.label.toLowerCase().includes(filter.toLowerCase());
      });
    });

    setCardsSearch(results);
  };

  return (
    <>
      <AutoComplete
        style={{ width: "100%" }}
        options={autoCompleteCards}
        onChange={handleComplete}
      >
        <Search
          allowClear={true}
          onSearch={handleSearch}
          placeholder="Introduce your product"
          loading={false}
        />
      </AutoComplete>
      <Checkbox.Group
        style={{
          width: "100%",
        }}
        onChange={handleCheck}
        options={checkBoxOptions}
      />
    </>
  );
};

export default ServiceSearch;
