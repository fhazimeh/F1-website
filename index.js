window.addEventListener('load', function() {
    document.querySelector('.carousel-inner').classList.add('loaded');
});


document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("yearsList").addEventListener("change", function () {
        let selectedYear = this.value;

        // Hide all tables inside .teams-standings
        document.querySelectorAll(".teams-standings table").forEach(table => {
            table.style.display = "none";
        });

        // Show the selected table
        let selectedTable = document.getElementById(`teams-standings-${selectedYear}`);
        if (selectedTable) {
            selectedTable.style.display = "table";
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("yearsList1").addEventListener("change", function(){
        let selectedYear1 = this.value;

        document.querySelectorAll(".drivers-standings table").forEach(table => {
            table.style.display = "none";
        });

        let selectedTable1 = document.getElementById(`drivers-standings-${selectedYear1}`);
        if (selectedTable1) {
            selectedTable1.style.display = "table";
        }
    });
});
