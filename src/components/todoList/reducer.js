export function reducer(state , action){
    const copyState = {...state}
    switch (action.type) {
      case "ADD_ITEM":
        copyState.works.push({
          task :action.payload,
          date :new Date().toLocaleString(),
          done:false
        })
        break;
        case "TOGGLE_DOWN":
          copyState.works[action.payload].done = !copyState.works[action.payload].done
        break;
        case "DELETE_ITEM":
          copyState.works.splice(action.payload , 1);
          break;
        case "EDDIT" :
            copyState.works[action.payload]={
                task :action.newEddit,
                date :new Date().toLocaleString(),
                done :false,
                eddited : true
            }

        break;
    }
    return copyState ;
  }
 export const initialState = {
    works:[]
  }