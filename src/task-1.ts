export function task1() {
    const container = document.createElement('div');
    container.style.display = 'flex';
    container.style.flexDirection = 'column';
    container.style.alignItems = 'center';
    container.style.justifyContent = 'center';
    container.style.width = '100%';
    container.style.height = '100vh';
    container.style.backgroundColor = 'black';

    const box = document.createElement('div');
    box.style.backgroundColor = 'red';
    box.style.width = '100px';
    box.style.height = '100px';
    const colors = ['red', 'green', 'blue'];
    let at_color = 0;
    box.addEventListener(
        'click',
        () => {
            at_color = (at_color + 1) % colors.length;
            box.style.backgroundColor = colors[at_color];
        },
    );

    container.appendChild(box);
    document.body.appendChild(container);
}