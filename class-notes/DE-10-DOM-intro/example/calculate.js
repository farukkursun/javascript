const yaricapInput= document.querySelector('#yaricap')
const buton=document.querySelector('#btn')

buton.onclick=()=>{

 const r= yaricapInput.value
 const alan= (Math.PI*r*r).toFixed(2)

 const cevre=(2*Math.PI*r).toFixed(2)

document.querySelector('.alan').textContent=alan
document.querySelector('.cevre').textContent=cevre

}


//sayfa ilk yüklendigunde cursor inputun icinde olmasini istersek

yaricapInput.focus()