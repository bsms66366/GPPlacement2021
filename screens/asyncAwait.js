// aysnc wait function

const LoadData = async() => {
    try {
const url = `https://bdr17.brighton.domains/fetch/Airway.json`;
 const res = await fetch(url);
 console.log(res.ok)
 const data = await res.json();
 return data;
}catch(err){

console.error(err)
}
};
( async()=>{
const data = await LoadData();
console.log(data)
})();




