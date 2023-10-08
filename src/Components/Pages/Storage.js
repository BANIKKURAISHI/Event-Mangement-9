const getStoreItem=()=>{
  const getItem=localStorage.getItem('ItemName')
  if(getItem){
    return JSON.parse(getItem)
  }

return[]
}

const saveStoreItem=(id)=>{
   const addCard=getStoreItem()
   addCard.push(id)
  localStorage.getItem('ItemName',JSON.stringify(addCard))
}

export {saveStoreItem,getStoreItem}