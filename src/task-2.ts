export function task2() {
    const container = document.createElement('div');
    container.style.position = 'relative';
    container.style.width = '100%';
    container.style.height = '100vh';
    container.style.backgroundColor = 'black';

    const box = document.createElement('div');
    box.style.backgroundColor = 'green';
    box.style.position = 'absolute';
    box.style.top = 'calc(50vh - 50px)';
    box.style.left = 'calc(50% - 50px)';
    box.style.width = '100px';
    box.style.height = '100px';
    box.addEventListener(
        'click',
        () => {
            const x = randomInt(
                10,
                90,
            );
            const y = randomInt(
                10,
                90,
            );
            box.style.top = `calc(${y}vh - 50px)`;
            box.style.left = `calc(${x}% - 50px)`;
        },
    );

    container.appendChild(box);
    document.body.appendChild(container);
}

function randomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (
        max - min
    )) + min;
}