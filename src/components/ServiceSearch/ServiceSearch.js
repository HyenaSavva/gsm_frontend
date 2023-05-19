import { useMemo } from "react";
import { Input } from "antd";

const ServiceSearch = ({ itemsData, setCardsSearch, onChange }) => {
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

  const handleFocus = (value) => {
    setCardsSearch(itemsData);
  };

  const cardsSearchList = useMemo(
    () =>
      itemsData.map((item) => {
        return {
          ...item,
          label: item.title + " " + item.price + " lei",
          value: item.itemId,
        };
      }),
    [itemsData]
  );

  return (
    <Input
      mode="multiple"
      optionFilterProp="label"
      listHeight={160}
      placeholder="Please select"
      style={{ width: "100%" }}
      maxTagTextLength={10}
      onSearch={handleSearch}
      onChange={onChange}
      onFocus={handleFocus}
      options={cardsSearchList}
    />
  );
};

export default ServiceSearch;
