const toggleMenu = () => {
    let designState = document.getElementById("navitem").classList.contains("show");
    if (designState) {
        document.getElementById("navitem").classList.remove("show")
    } else {
        document.getElementById("navitem").classList.add("show")   
    }
}
