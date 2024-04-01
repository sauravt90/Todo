const taskForm = document.getElementById("task-from")
const registerTask = document.getElementById("add-new-task")




if (registerTask) {

    registerTask.addEventListener('click', (e) => {
        console.log("cliecked");
        const AddTaskRequest = {
            taskName: taskForm.taskName.value,
            taskDescription: taskForm.taskDescription.value,
            taskDate: "2023-12-02",
            taskEndDate: "2023-12-02",
            taskStatus: "pending"
        }
        console.log(AddTaskRequest);
        fetch("http://localhost:8085/task/createTask", {
            method: 'POST',
            body: JSON.stringify(AddTaskRequest),
            headers: { 'content-type': 'application/json', Authorization: 'Bearer ' + token }
        }).then(
            console.log("called")
        ).catch(() => {
            alert("login failed")
        })
    })


}