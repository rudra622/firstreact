export const UtilsData =((data,key)=>{
    // console.log(data,"data");
    // console.log(key,"key");

    let uniq =data.map((d)=>{
        return d[key];
    })
    console.log(uniq,"uniq");

    let removeDuplicate = uniq.filter((data,id)=>{
        return uniq.indexOf(data)===id
    })
    return removeDuplicate

})