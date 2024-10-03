export const fetchData = async (url,state,handler) =>{
   const response = await fetch(url).then(data => data.json() ).then(data =>{ 
      console.log(data);
      handler(...state,data)}).catch(e => console.error(e));
   return response;
}