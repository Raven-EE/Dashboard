const chart = document.querySelector("#chart").getContext('2d');

// create a new chart instance
new Chart(chart, {
    type: 'line',
    data:{
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov'],
        
        datasets: [
            {
                label: 'BTC',
                data: [29374, 33537, 49631, 59095, 57828, 36684, 33572, 33974, 48847, 48116, 61004],
                borderColor: 'red',
                borderWidth: 2
            },
            {
                label: 'ETH',
                data: [31500, 41000, 88800, 26000, 46000, 32698, 5000, 3000, 18656, 24832, 36854],
                borderColor: 'blue',
                borderWidth: 2
            },

        ]
    },
    options: {
        responsive: true
    }

})

// show or hide sidebar
const menuBtn = document.querySelector('.menu-btn');
const closeBtn = document.querySelector('.close-btn');
const sidebar = document.querySelector('aside');


menuBtn.addEventListener('click', () =>{
    sidebar.style.display = 'block';
})

closeBtn.addEventListener('click', () =>{
    sidebar.style.display = 'none';
})



// change theme
const themBtn = document.querySelector('.theme-btn');
themBtn.addEventListener('click', () =>{
    document.body.classList.toggle('dark-theme');


    themBtn.querySelector('span:first-child').classList.toggle('active');
    themBtn.querySelector('span:last-child').classList.toggle('active');
})
