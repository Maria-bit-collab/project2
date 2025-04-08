let cardData = [
  {
      title: "приготовить еду",
      subtitle: "45 мин",
      subtitle2: "создать кулинарный шедевр"
  },
  {
      title: "написать код",
      subtitle: "2 часа",
      subtitle2: "разработать новый функционал"
  }
];

export const getCards = () => cardData;
export const addCard = (newCard) => cardData.push(newCard);
export const updateCard = (index, card) => cardData[index] = card;
export const removeCard = (index) => cardData.splice(index, 1);
