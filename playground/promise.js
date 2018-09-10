var asyncAdd = (a,b)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(typeof a === 'number'&& typeof b === 'number'){
                resolve(a+b);
            }else
            {
                reject('Arguments must be number');
            }
        },2500);
    });
};

asyncAdd(20,30).then((res)=>{
    console.log('Result: ',res);
    return asyncAdd(res,'50');
},(errorMessage) =>{
    console.log(errorMessage);
    }).then((res)=>{
    console.log('It should be 100 ',res);
},(errorMessage)=>{
    console.log(errorMessage);
});









// var somePromise = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve('Hey it worked!');
//         // resolve();
//         reject('Unable to print to screen')
//     },2500);
    
// });
// somePromise.then((message)=>{
//     console.log(`Success:${message}`);
// },(errorMessage)=>{
//     console.log('Error: ',errorMessage);
// });