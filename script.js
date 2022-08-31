const calculate =document.querySelector('.calculate')
calculate.addEventListener('click',(e)=>{
    var enterdate =new Date(document.querySelector('.date').value)
    var inputdate={
        year:enterdate.getFullYear(),
        month:enterdate.getMonth(),
        day:enterdate.getDay(),
    }
    var date=new Date()
    var d2=date.getDate()
    var m2=1+date.getMonth()
    var y2=date.getFullYear()
    var month=[31,28,31,30,31,30,31,31,30,31,30,31]

if(inputdate.day>d2){
    d2=d2+month[m2-1]
    m2=m2-1
}
if(inputdate.month>m2){
    m2-m2+12
    y2=y2-1
}
var d=d2-inputdate.day
var m=m2-inputdate.month
var y=y2-inputdate.year

var year=(document.querySelector('.year').innerHTML=y)
var months=(document.querySelector('.month').innerHTML=m)
var day=(document.querySelector('.day').innerHTML=d)

})