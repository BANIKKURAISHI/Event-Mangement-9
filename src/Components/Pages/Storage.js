const getStoreItem=()=>{
  const getItems=localStorage.getItem('ItemName')
  if(getItems){
    return JSON.parse(getItems)
  }

return[]
}

const saveStoreItem=(id)=>{
   const addCard=getStoreItem()
   addCard.push(id)
  localStorage.getItem('ItemName',JSON.stringify(addCard))
}

export {saveStoreItem,getStoreItem}