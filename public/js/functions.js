// create labels (possibly dates)
// figure out how to find the dates in jason (not need this)
// process the json data to count the number per date
// look into to doing this for time?

$(document).ready(function(){

    const getDatesBetween = (startDate, endDate) => {
        const dates = [];
    
        // Strip hours minutes seconds etc.
        let currentDate = new Date(
            startDate.getFullYear(),
            startDate.getMonth(),
            startDate.getDate()
        );
    
        while (currentDate <= endDate) {
            arrayDate = currentDate.toISOString();
            arrayDate = arrayDate.substring(0, arrayDate.length - 14);
            dates.push(arrayDate);
    
            currentDate = new Date(
                currentDate.getFullYear(),
                currentDate.getMonth(),
                currentDate.getDate() + 1, // Will increase month if over range
            );
        }
    
        return dates;
    };

    $("#getData").on('click', function() {

        date1Temp = new Date($("#d1").val().toString());
        date1 = new Date(date1Temp.getFullYear(), date1Temp.getMonth(), date1Temp.getDate() + 1);
        date2Temp = new Date($("#d2").val().toString());
        date2 = new Date(date2Temp.getFullYear(), date2Temp.getMonth(), date2Temp.getDate() + 1);

        const dates = getDatesBetween(date1, date2); 

        console.log(dates);

        dateCount = [];
        
        $.ajax({
            method: "get", 
            url: "/api/counts", 
            data: { "enterorexit" : $("#eORe").val(),
                    "date1" : $("#d1").val(),
                    "date2" : $("#d2").val()
                  }, 
            success: function(rows, status) {

                // var output = "<ul>";

                // rows.forEach(function(row, index) {
                //     output += "<li>" + row.trafficid + " " +  row.date.substring(0, row.date.length - 14) + " " + row.time + "</li>"
                //     // console.log(row)
                // });
                
                // output += "</ul>";
                // document.getElementById("dataTest").innerHTML = output;


            }
        })
    })
});