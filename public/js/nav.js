window.onload = () => {
    let navBarLI = document.querySelectorAll(`ul.left > li`);
    let pageTitle = document.querySelector(`.app > h1`);

    if (!pageTitle) return;
    for (let i = 0; i < navBarLI.length; i++) {
        console.log(navBarLI[i].innerHTML, pageTitle.innerHTML);
        if (navBarLI[i].querySelector(`a > span`).innerHTML == pageTitle.innerHTML) navBarLI[i].innerHTML = `<a aria-disabled="true"><span>${pageTitle.innerHTML}</span></a>`;
        else if (navBarLI[i].querySelector(`a > span`).innerHTML == `Home` && pageTitle.innerHTML == `Welcome to MineKing!`) navBarLI[i].innerHTML = `<a aria-disabled="true"><span>Home</span></a>`;
    }
}