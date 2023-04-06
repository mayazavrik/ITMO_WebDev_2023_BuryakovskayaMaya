import "uno.css";
import "@unocss/reset/tailwind.css";

const domBtnCreateTask = document.getElementById("btnCreateTask");
const domPopupCreateTask= document.getElementById("popupCreateTask");
const domBtnCloseCreateTaskPopup= document.getElementById("btnCloseCreateTaskPopup");

domBtnCreateTask.onclick = () => {
    console.log("click");
    domPopupCreateTask.classList.remove("hidden");
    domBtnCloseCreateTaskPopup.onclick = () => {
        domPopupCreateTask.classList.add("hidden");
        domBtnCloseCreateTaskPopup.onclick = null;
    }
};
