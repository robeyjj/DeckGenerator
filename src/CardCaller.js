async function CardCaller() {     
  const fetchBaseUrl = "https://api.magicthegathering.io/v1/cards?";
  let nameSearchValue = "";
  let colorIdentitySearchValue = "R,W"
  let numberOfCardsToGrab = 5;
  let randomValue = "true";

  const response = await fetch(fetchBaseUrl 
    + "pageSize=" + numberOfCardsToGrab
    + "&" + "random=" + randomValue    
    + "&" + "colors=" + colorIdentitySearchValue
    );
  const jsonResponse = await response.json();    
  const arrayOfLists = jsonResponse.cards.map(
    card => <tr key={card.name}><th><img class="Card-image" id={card.name} height={210} width={150} src={card.imageUrl}/></th><th>{card.name}</th></tr>
  );    
  return arrayOfLists;
};    

export default CardCaller;