export function task3() {
    const container = document.createElement('div');
    container.style.position = 'relative';
    container.style.width = '100%';
    container.style.height = '100vh';
    container.style.backgroundColor = 'black';

    const circle = document.createElement('div');
    circle.style.backgroundColor = 'green';
    circle.style.transition = 'all';
    circle.style.transitionDuration = '1s';
    circle.style.transitionTimingFunction = 'linear';
    circle.style.borderRadius = '100%'
    circle.style.position = 'fixed';
    circle.style.top = 'calc(50vh - 50px)';
    circle.style.left = 'calc(50% - 50px)';
    circle.style.width = '20px';
    circle.style.height = '20px';

    window.addEventListener('mousemove', (event) => {
        circle.style.top = `${event.clientY - 10}px`;
        circle.style.left = `${event.clientX - 10}px`;
    })

    container.appendChild(circle);
    document.body.appendChild(container);
}