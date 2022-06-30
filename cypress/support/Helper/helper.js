
class helper {

       
      randomIntByMax(n){
        return Math.floor(Math.random() * (n + 1))
      }

      timeStamp(){
      let today = new Date();
      let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
      let time = today.getHours() + "-" + today.getMinutes() + "-" + today.getSeconds();
      let dateTime = date+'_'+time; 
      return dateTime;
      }

      date(){
        let today = new Date();
        let date = today.getDate();
        return date
        }

      

}export default helper;