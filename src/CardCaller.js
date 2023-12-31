async function CardCaller() {     
  const response = await fetch('https://api.magicthegathering.io/v1/cards?cmc=5&pageSize=4&random=true')
    const jsonResponse = await response.json();    
    const arrayOfLists = jsonResponse.cards.map(
      card => <li key={card.name}>{card.name}</li>
    )    
    return arrayOfLists;
};    

export default CardCaller;