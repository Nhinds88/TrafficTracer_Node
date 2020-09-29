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

    function renderChart(data, labels) {
        var ctx = document.getElementById("myChart").getContext('2d');
        var myChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: labels,
                datasets: [{
                    label: 'Customers',
                    data: data,
                    borderColor: 'rgba(75, 192, 192, 1)',
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true,
                            callback: function(value, index, values) {
                                return value;
                            }
                        }
                    }]
                }
            }
        });
    }

    function getCounts(arr, val) {
        var count = 0;
        arr.forEach((v) => (v == val && count++));
        return count;
    }

    $("#getData").on('click', function() {

        var customer = {trafficid: 0, date: "1988-09-30", time: "00:00:00"}

        date1Temp = new Date($("#d1").val().toString());
        date1 = new Date(date1Temp.getFullYear(), date1Temp.getMonth(), date1Temp.getDate() + 1);
        date2Temp = new Date($("#d2").val().toString());
        date2 = new Date(date2Temp.getFullYear(), date2Temp.getMonth(), date2Temp.getDate() + 1);

        const dates = getDatesBetween(date1, date2); 

        console.log(dates);
        
        $.ajax({
            method: "get", 
            url: "/api/counts", 
            data: { "enterorexit" : $("#eORe").val(),
                    "date1" : $("#d1").val(),
                    "date2" : $("#d2").val()
                  }, 
            success: function(rows, status) {

                var dateCount = [];
                var dateArray = [];

                rows.forEach(function(row, index) {
                    dateArray[index] = row.date.substring(0, row.date.length - 14);
                });

                for (i = 0; i < dates.length; i++) {
                    dateCount[i] = getCounts(dateArray, dates[i]);
                }

                console.log("Counts");
                console.log(dateCount);

                renderChart(dateCount, dates);
            }
        })
    })
});