function returnsPromise(rejectPram=3){
    //simulating service call
    return new Promise((resolve,reject)=>{
      if(rejectPram==='reject') reject('U wanted this to happen!');
      setTimeout(()=>{
        resolve({value:'Pratheek'})
      },rejectPram*1000);
    }
  )};
        //1st service call
    var x=returnsPromise(1)
          .then((res)=>{
              //opertion after first service call responded
              console.log("Service 1 responded",res);
              return res;
            })
          .then((res)=>{
            //2nd service call
            returnsPromise(1)
                    .then((res)=>{
                      //operation after 2nd service call responded
                      console.log("After 2nd sevice call responded",res);
                      return res;
                    });
            return res;
          })
          .then((res)=>{
            //Some thing that has to run after service 1 responded and service 2 request is made
            res && console.log("After 1st call response and 2nd request done",res)
          })
          .catch((rej)=>{
            throw new Error(rej);
          });
  
  const m= async()=>{
    //1st service call
    let res=await returnsPromise(1);
    //opertion after first service call responded
    console.log("Service 1 responded",res);
    let service2Res=(async()=>{
      //2nd service call
      let res=await returnsPromise(1);
      //operation after 2nd service call responded
      console.log("After 2nd sevice call responded",res);
      return res;
    })();
    //Some thing that has to run after service 1 responded and service 2 request is made
    console.log("After 1st call response and 2nd request done",res);
    //service2Res.then((res)=>console.log("After service 2 also responded",res));
    console.log("After service 2 also responded",await service2Res)
  }