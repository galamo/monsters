
const mainBoard = document.querySelector("#main");
const monster1 = new Monster("shrek", "green",
    "https://i.ytimg.com/vi/LEmTf7A5Xl4/maxresdefault.jpg", { x: "400px", y: "400px" })
const monster2 = new Monster("clown", "funny",
    "https://cdn.ebaumsworld.com/mediaFiles/picture/604025/85925971.jpg", { x: "300px", y: "200px" })
const monster3 = new Monster("woman", "in red",
    "https://images.pexels.com/photos/247122/pexels-photo-247122.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", { x: "500px", y: "100px" })

const monsters = [];
monsters.push(monster1, monster2, monster3)

for (let index = 0; index < monsters.length; index++) {

}

monsters.forEach(function (monster) {
    console.log(monster)
});

function draw(arr) {
    mainBoard.innerHTML = "";
    arr.forEach(function (monster) {
        mainBoard.append(monster.getCard(200, 200))

    });
}


draw(monsters)

setTimeout(() => {
    monster1.setPicture("https://cdn.ebaumsworld.com/thumbs/2019/04/02/072350/85925938/creepy2.jpg")
    monster1.setXpos(20)
    draw(monsters)
}, 1000)


setTimeout(() => {
    monster1.setXpos(400)
    draw(monsters)
}, 4000)

