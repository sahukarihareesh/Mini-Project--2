let students = [];

// Add a new student
function addStudent() {
    const nameInput = document.getElementById("studentName");
    const name = nameInput.value.trim();

    if (name === "") {
        alert("Please enter student name");
        return;
    }

    students.push({
        name: name,
        attendance: "Absent"
    });

    nameInput.value = "";

    displayStudents();
}

// Toggle attendance
function markAttendance(index) {
    if (students[index].attendance === "Absent") {
        students[index].attendance = "Present";
    } else {
        students[index].attendance = "Absent";
    }

    displayStudents();
}

// Delete student
function deleteStudent(index) {
    students.splice(index, 1);

    displayStudents();
}

// Display students
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
            <span class="student-name">
                ${student.name}
            </span>

            <span class="${statusClass}">
                ${student.attendance}
            </span>

            <button onclick="markAttendance(${index})">
                Toggle Attendance
            </button>

            <button onclick="deleteStudent(${index})">
                Delete
            </button>
        `;

        list.appendChild(li);
    });
}
