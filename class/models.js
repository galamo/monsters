//template for creating objects

class Monster {
    // new ClassName = > constructor
    constructor(name, lastName, imageUrl, pos) {
        this.id = `monster_${Math.round(Math.random() * 999)}`;
        this.name = name;
        this.lastName = lastName;
        this.imageUrl = imageUrl
        this.x = pos.x
        this.y = pos.y

    }

    //behaviour
    sayHi() {
        // return this.name + " " + this.lastName;
        return `${this.name} _ ${this.lastName}`;
    }

    setPicture(pic) {
        this.imageUrl = pic
    }

    setXpos(xpos) {
        // this.x = parseInt(this.x) + xpos + "px"
        this.x = `${parseInt(this.x) + xpos}px`
    }

    getCard(w, h) {
        const monsterUI = document.createElement("div")
        const img = document.createElement("img");
        img.src = this.imageUrl
        img.height = w;
        img.width = h;
        monsterUI.append(img)
        monsterUI.style.position = "absolute"
        monsterUI.style.left = this.x
        monsterUI.style.top = this.y
        return monsterUI;
    }

}




