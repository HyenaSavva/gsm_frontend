export const onDragEnd = (
  result,
  cardsSearch,
  cartItems,
  setCardsSearch,
  setCartItems
) => {
  const { destination, source, draggableId } = result;
  const cardsSearchList = cardsSearch;
  const cartItemsList = cartItems;

  if (!destination) {
    return;
  }

  if (
    destination.droppableId === source.droppableId &&
    destination.index === source.index
  ) {
    return;
  }

  if (
    destination.droppableId !== source.droppableId &&
    destination.droppableId === "cartDroppable"
  ) {
    const cardsSearchItem = cardsSearch.filter(
      (item) => item.itemId === draggableId
    );
    cardsSearchList.splice(source.index, 1);
    setCardsSearch([...cardsSearchList]);

    cartItemsList.splice(destination.index, 0, ...cardsSearchItem);
    setCartItems(cartItemsList);
  }

  if (
    destination.droppableId !== source.droppableId &&
    destination.droppableId === "searchDroppable"
  ) {
    const cartItem = cartItems.filter((item) => item.itemId === draggableId);

    cartItemsList.splice(source.index, 1);
    setCartItems(cartItemsList);

    cardsSearchList.splice(destination.index, 0, ...cartItem);
    setCardsSearch([...cardsSearchList]);
  }
};
