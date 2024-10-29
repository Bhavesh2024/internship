import { Children, createContext, useState } from "react";

export const PaginationContext = createContext();

export const createPagination = (data, rows,setSlicedRowData) => {
  const isObject = typeof(data) == "object";
  const dividedDataArr = [];
  let totalDataLength = 0;
  console.log(data);
  console.log(isObject)
  if (isObject) {
    // console.log(Object.values(data));
    // console.log('hello')
    const dataArr = Object.values(data);
    dataArr.map((value, index) => {
      totalDataLength = totalDataLength + value.length;
    });
    if (totalDataLength > 5) {
      const remainingLength = totalDataLength % rows;
      dataArr.forEach((value, index) => {
        let minIndex = 0,
    maxIndex = rows;
        value.map((data, index) => {
          if (minIndex == index) {
            // console.log("data : ");
            if (dividedDataArr.length != 0) {
              dividedDataArr.map((arr) => {
                if (
                  arr.length < rows &&
                  arr.length != rows
                ) {
                  let currentIndex = index;
                  while (arr.length != rows) {
                    arr.push(value[currentIndex]);
                    currentIndex += 1;
                  }
                  minIndex = currentIndex;
                  maxIndex = rows + minIndex;
                }
              });
            }

            dividedDataArr.push(
              value.slice(minIndex, maxIndex)
            );
            // pagination.push(dividedDataArr.length);
            minIndex = maxIndex;
            maxIndex =
              minIndex < value.length
                ? minIndex + rows
                : minIndex + (value.length % rows);
          }
        });
        setSlicedRowData(dividedDataArr);
        // setPagination(pagination.push(dividedDataArr.length));
      });
    }
  }else{
      totalDataLength = data.length;
      console.log('hello' + data.length)
      if(totalDataLength > 3){
         data.map((value,index) =>{
            if(minIndex == index){
                if(dividedDataArr.length != 0){
                   dividedDataArr.map((arr) =>{
                    let minIndex = 0,
    maxIndex = rows;
                     if(arr.length < rows && arr.length != rows){
                        let currentIndex = index;
                       while(arr.length != rows){
                        arr.push(value[currentIndex]);
                        currentIndex += 1;
                       }
                       minIndex = currentIndex;
                       maxIndex = rows + minIndex;
                     }
                   })
                }
                dividedDataArr.push(value.slice(minIndex,maxIndex));
                minIndex = maxIndex;
                maxIndex = minIndex < value.length ? minIndex + rows : minIndex + (value.length % rows);
              }
            });
            setSlicedRowData(dividedDataArr);
      }
  }

  // console.log(slicedRowData);
};
const PaginationContextProvider = ({children}) =>{
  const [slicedRowData,setSlicedRowData] = useState([]);
  const [pageIndex,setPageIndex] = useState(0);
  const [activeIndex,setActiveIndex] = useState(0);


  return <>
      <PaginationContext.Provider value={{slicedRowData,setSlicedRowData,pageIndex,setPageIndex,activeIndex,setActiveIndex}}>
        {children}
      </PaginationContext.Provider>
  </>
}

export default PaginationContextProvider;