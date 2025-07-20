import {getStudents} from "./api/getStudents";
import {addStudent} from "./api/addStudents";
import {updateStudent} from "./api/updateStudents"
import {deleteStudent} from "./api/deleteStudents";
import {renderStudents} from "./js/renderStudents";

document.querySelector("#get-students-btn").addEventListener("click", () => {
    getStudents().then(
    (data) =>{
        console.log(data);
        document.querySelector("tbody").innerHTML = renderStudents(data);
    }
  );
})

document.querySelector("#add-student-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const name = e.target.elements.name.value;
    const age = e.target.elements.age.value;
    const course = e.target.elements.course.value;
    const skills = e.target.elements.skills.value;
    const email = e.target.elements.email.value;
    let isEnrolled = e.target.elements.isEnrolled.value;
    if (isEnrolled === true){
        isEnrolled = "true"
    } else {
        isEnrolled = "false"
    }
    const studentObject = {
      name: name,
      age: age,
      course: course,
      skills: skills,
      email: email,
      isEnrolled: isEnrolled
    };
    console.log(studentObject)
    addStudent(studentObject).then(() => {
        getStudents().then((data) => {
            document.querySelector("tbody").innerHTML = renderStudents(data);
    })})

    e.target.elements.name.value = "";
    e.target.elements.age.value = "";
    e.target.elements.course.value = "";
    e.target.elements.skills.value = "";
    e.target.elements.email.value = "";
    e.target.elements.isEnrolled.value = "";
  });



let studentId = null
document.querySelector("tbody").addEventListener("click", (e) => {
  if (e.target.textContent.trim() === "Редагувати") {
    const tr = e.target.closest("tr");
    studentId = tr.getAttribute("data-id");

    document.querySelector("#modalNameChange").value = tr.querySelector(".name").textContent;
    document.querySelector("#modalAgeChange").value = tr.querySelector(".age").textContent;
    document.querySelector("#modalCourseChange").value = tr.querySelector(".course").textContent;
    document.querySelector("#modalSkillsChange").value = tr.querySelector(".skills").textContent;
    document.querySelector("#modalEmailChange").value = tr.querySelector(".email").textContent;
    document.querySelector("#isEnrolledChange").checked = tr.querySelector(".isEnrolled").textContent === "true";
    document.querySelector("#modalEdit").style.display = "block";
    document.querySelector(".modal-backdrop").style.display = "block";
  }
});

document.querySelector(".modal-edit-btn").addEventListener("click", () => {
  const updatedStudent = {
        name: document.querySelector("#modalNameChange").value,
        age: parseInt(document.querySelector("#modalAgeChange").value),
        course: document.querySelector("#modalCourseChange").value,
        skills: document.querySelector("#modalSkillsChange").value,
        email: document.querySelector("#modalEmailChange").value,
        isEnrolled: document.querySelector("#isEnrolledChange").checked
    };

    console.log(updatedStudent)

  updateStudent(updatedStudent, studentId)
    .then(() => getStudents())
    .then((data) => {
      document.querySelector("tbody").innerHTML = renderStudents(data);
      document.querySelector("#modalEdit").style.display = "none";
      document.querySelector(".modal-backdrop").style.display = "none";
    })
    .catch(error => {
      console.error("Error updating student:", error);
    });
})

document.querySelector("tbody").addEventListener("click", (e) => {
    if (e.target.textContent === "Видалити"){
        const tr = e.target.closest("tr");
        const studentId = tr.getAttribute("data-id"); 
        deleteStudent(studentId).then(() => {
            getStudents().then((data) => {
                console.log(data);
                document.querySelector("tbody").innerHTML = renderStudents(data);
            })})
    }}
)