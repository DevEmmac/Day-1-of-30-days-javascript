
    /*
     EXERCISES: LEVEL 3
      Create a human readable time format using the Date time object. 
      The hour and the minute should be all the time two 
      digits(7 hours should be 07 and 5 minutes should be 05 )
     */
       
      // YYY-MM-DD HH:mm eg. 20120-01-02 07:05
      
      let currentDate = new Date();
      let yearF = currentDate.getFullYear();
      let monthF = currentDate.getMonth();
      let dayF = currentDate.getDay();
      let hourF = currentDate.getHours();
      let minutesF = currentDate.getMinutes(); 
        
      if (dayF < 10) {
          dayF = '0' + dayF            // 02
        }
      
      if (monthF < 10) {
            monthF = '0' + monthF      // 01
        }

      if ( hourF < 10) {
        hourF = '0' + hourF            // 07
      }

      if (minutesF) {
        minutesF = '0' + minutesF      // 05
      }
      console.log(`${yearF}-${monthF}-${dayF} ${hourF}:${minutesF}`)   // 2023-01-02 07:05

