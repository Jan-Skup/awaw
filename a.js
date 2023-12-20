document.addEventListener("DOMContentLoaded", function () {
    // Tutaj umieść logikę wczytywania danych z backendu
    fetchData();
});

function fetchData() {
    // W tym przykładzie założymy, że backend dostarcza dane pod adresem /api/data
    fetch("/api/data")
        .then(response => response.json())
        .then(data => displayData(data))
        .catch(error => console.error("Błąd podczas pobierania danych:", error));
}

function displayData(data) {
    const dataList = document.getElementById("data-list");

    // Wyczyść istniejące dane na liście
    dataList.innerHTML = "";

    // Dodaj nowe dane na liście
    data.forEach(item => {
        const listItem = document.createElement("li");
        listItem.textContent = item.name; // Załóżmy, że dane zawierają pole 'name'
        dataList.appendChild(listItem);
    });
}
