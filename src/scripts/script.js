import { db, ref, set, update, remove, get } from './firebaseConfig.js';

const enterID = document.getElementById("enterID");
const enterName = document.getElementById("enterName");
const enterAge = document.getElementById("enterAge");
const insertBtn = document.getElementById("insert");
const updateBtn = document.getElementById("update");
const removeBtn = document.getElementById("remove");
const goToFindBtn = document.getElementById("goToFind");

function validateFields() {
    if (!enterID.value) {
        alert("ID field is empty");
        return false;
    }
    if (!enterName.value) {
        alert("Name field is empty");
        return false;
    }
    if (!enterAge.value) {
        alert("Age field is empty");
        return false;
    }
    return true;
}

async function InsertData() {
    if (!validateFields()) return;

    const id = enterID.value;
    const snapshot = await get(ref(db, `People/${id}`));
    if (snapshot.exists()) {
        alert("ID already used");
    } else {
        set(ref(db, `People/${id}`), {
            Name: enterName.value,
            Age: enterAge.value
        })
        .then(() => alert("Data added successfully"))
        .catch(error => console.error("Error adding data:", error));
    }
}

async function UpdateData() {
    if (!validateFields()) return;

    const id = enterID.value;
    const snapshot = await get(ref(db, `People/${id}`));
    if (!snapshot.exists()) {
        alert("ID not found");
    } else {
        update(ref(db, `People/${id}`), {
            Name: enterName.value,
            Age: enterAge.value
        })
        .then(() => alert("Data updated successfully"))
        .catch(error => console.error("Error updating data:", error));
    }
}

async function RemoveData() {
    if (!enterID.value) {
        alert("ID field is empty");
        return;
    }
    
    const id = enterID.value;
    const snapshot = await get(ref(db, `People/${id}`));
    if (!snapshot.exists()) {
        alert("ID not found");
    } else {
        remove(ref(db, `People/${id}`))
        .then(() => alert("Data deleted successfully"))
        .catch(error => console.error("Error deleting data:", error));
    }
}

insertBtn.addEventListener("click", InsertData);
updateBtn.addEventListener("click", UpdateData);
removeBtn.addEventListener("click", RemoveData);
goToFindBtn.addEventListener("click", () => {
    window.location.href = "/pages/find.html";
});
