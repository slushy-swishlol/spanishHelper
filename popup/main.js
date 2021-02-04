document.addEventListener("click", (e) => {
    if (e.target.classList.contains("accent")){
        navigator.clipboard.writeText(e.target.innerText);
    }
});