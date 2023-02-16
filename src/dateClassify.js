
function  classify(cardList){
    // console.log('cardList[0]时间：')
    // console.log(cardList[6].cardTime)
    // console.log(typeof cardList[6].cardTime)
   
    // const adate=new Date(cardList[6].cardTime)
     for(let i=0;i<=cardList.length;i++){
        console.log(cardList[i].cardTime)
        const adate=cardList[i].cardTime
        const year=adate.getFullYear()
        const Month=adate.getMonth()+1
        const day=adate.getDate()
        const houre=adate.getHours()
        const minut=adate.getMinutes()
        // const second=adate.getSeconds()
        console.log(year,Month,day,houre,minut)
        // if()
     }
}


export default classify