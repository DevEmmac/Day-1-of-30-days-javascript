const activity = document.querySelector('.activity')
const acti = document.querySelector('.activities')
const techs = document.querySelector('.techs')
const maq = document.querySelector('.marquee')


let year = document.querySelector("#teach");
const tech = technologies.map((tech) => tech.toUpperCase())
            let count = 0;
            setInterval(e => {
                let randomNumber = Math.floor(Math.random() * 11);
                count = (count + randomNumber) % tech.length;
                let newColour = tech[count];
                year.textContent = `${newColour}`;
            }, 1200);

            setInterval(e => {
                let randomNumber = Math.floor(Math.random() * 11);
                count = (count + randomNumber) % activities.length;
                let newColour = activities[count];
                activity.textContent = `${newColour}`;
            }, 1000);


            const backgroundColorChange = () => {
                let random1 = Math.floor(Math.random() * 255)
                let random2 = Math.floor(Math.random() * 255)
                let random3 = Math.floor(Math.random() * 255)
                color = `rgb(${random1},${random2},${random3})`
                year.style.color = color
            }
            setInterval(backgroundColorChange, 2000)