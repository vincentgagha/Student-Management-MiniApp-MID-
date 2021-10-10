//Button Show-Hide
const formInput = document.querySelector('#show-hide');
const buttonShowHide = document.querySelector('#button-show-hide');

buttonShowHide.addEventListener("click", () => 
{
    if(formInput.style.display === "none")
    {
        formInput.style.display = "block";
        buttonShowHide.textContent = "Hide Form Add New Student";
    }
    else
    {
        formInput.style.display = "none";
        buttonShowHide.textContent = "Show Form Add New Student";
    }
});

