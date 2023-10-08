const getStore=()=>{
  const store=localStorage.getItem('ItemName')
  if(store){
      return JSON.parse(store)
  }
  return[]
}

const saveStore= id =>{
  const saveData=getStore()
  saveData.push(id)
  localStorage.setItem('ItemName',JSON.stringify(saveData))


}


export {saveStore,getStore}