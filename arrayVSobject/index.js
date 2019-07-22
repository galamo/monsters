const users = {
    "galamo": new User("galamo", "galamo", 30135564),
    "nirr1": new User("nirr1", "nirr1", 87646823)
}

function User(_name, _lastName, _id) {
    this.name = _name;
    this.lastName = _lastName;
    this.id = _id;
}


let stickyNotes = {};


function StickyNote(header, description) {
    const rand = Math.round(Math.random() * 99999)
    this.id = `note_${rand}`
    this.header = header + rand;
    this.description = description + rand;
}

for (let index = 0; index < 20; index++) {
    const stickyNote = new StickyNote("header", "description")
    const { id } = stickyNote
    stickyNotes[id] = stickyNote
}

//ObjectKeys
console.log(Object.keys(stickyNotes).length)
for (let noteKey in stickyNotes) {
    console.log(`Key is: ${noteKey} : Object is:`, stickyNotes[noteKey])
    delete stickyNotes[noteKey]
}


