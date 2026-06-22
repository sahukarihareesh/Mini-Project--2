let students = [];

function addStudent() {
    let name = document.getElementById("studentName").value.trim();

    if (name === "") {
        alert("Please enter student name");
        return;
    }

    students.push({
        name: name,
        attendance: "Absent"
    });

    document.getElementById("studentName").value = "";
    displayStudents();
}

function markAttendance(index) {
    students[index].attendance =
        students[index].attendance === "Absent"
            ? "Present"
            : "Absent";

    displayStudents();
}

function displayStudents() {
    const list = document.getElementById("studentList");
    list.innerHTML = "";

    students.forEach((student, index) => {
        const li = document.createElement("li");

        const statusClass =
            student.attendance === "Present"
                ? "present"
                : "absent";

        li.innerHTML = `
            ${student.name} -
            <span class="${statusClass}">
                ${student.attendance}
            </span>
            <button onclick="markAttendance(${index})">
                Toggle Attendance
            </button>
        `;

        list.appendChild(li);
    });
}