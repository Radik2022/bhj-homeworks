const interestCheck = [...document.querySelectorAll('.interest__check')];

interestCheck.forEach((check) => check.addEventListener('change', (event) => {
    let perent = event.target.closest('.interest');
    let children = [...perent.querySelectorAll('.interest__check')];

    if (!children[0].checked) {
        children.forEach(child => child.checked = false);
        return;
    } else {
        children.forEach(child => child.checked = true)
    }
}));
