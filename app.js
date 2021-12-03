const title = document.querySelector('.title');
const boxContent = document.querySelector('.content');
const codePrimary = document.querySelector('.key-code');
const namePrimary = document.querySelector('.key-name');
const name = document.querySelector('.key span');
const code = document.querySelector('.code span');


// Event press key
window.addEventListener('keydown', e => {
    const keyName = e.keyCode === 32 ? "Space" : e.key;
    const codeKey = e.keyCode;
    title.style.display = "none";
    boxContent.style.display = "flex";
    codePrimary.innerHTML = codeKey;
    namePrimary.innerHTML = keyName.toUpperCase();
    name.innerHTML = keyName;
    code.innerHTML = codeKey;
})