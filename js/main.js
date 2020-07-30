var ctx = document.getElementById('bar').getContext('2d');

var barChart = new Chart(ctx,{
   type: 'bar', 
   data:{
       labels:['小1', '中1', '中3', '高1', '高3', '現在'],
       datasets:[
           {
               type:'line',
               label:'身長の推移',
               data:[116, 136, 160, 161.5, 163.4, 165],
               backgroundColor:[
                   'rgba(255, 0, 0, 0.2)',
                   'rgba(255, 0, 0, 0.2)',
                   'rgba(255, 0, 0, 0.2)',
                   'rgba(255, 0, 0, 0.2)',
                   'rgba(255, 0, 0, 0.2)',
                   'rgba(255, 0, 0, 0.2)',                
               ]              
           }
       ]
   },
    options:{
        scales:{
            yAxes:[{
                ticks:{
                    beginAtZero:true
                }
            }]
        }
    }
});