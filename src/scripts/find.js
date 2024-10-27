import { db, ref, get, child } from './firebaseConfig.js';

const findID = document.getElementById("findID");
const findName = document.getElementById("findName");
const findAge = document.getElementById("findAge");
const findBtn = document.getElementById("find");
const goToMainBtn = document.getElementById("goToMain");

// Function to fetch data from Firebase based on the entered ID
function FindData() {
    const id = findID.value;
    const dbRef = ref(db);

    get(child(dbRef, `People/${id}`))
    .then((snapshot) => {
        if (snapshot.exists()) {
            findName.textContent = `Name: ${snapshot.val().Name}`;
            findAge.textContent = `Age: ${snapshot.val().Age}`;
        } else {
            alert("No data found");
        }
    })
    .catch(error => console.error("Error finding data:", error));
}

// Event listeners
findBtn.addEventListener("click", FindData);
goToMainBtn.addEventListener("click", () => {
    window.location.href = "/";
});
