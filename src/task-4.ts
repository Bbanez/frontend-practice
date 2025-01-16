declare global {
    interface Window {
        onInput: (event: KeyboardEvent) => void;
    }
}

export function task4() {
    const container = document.createElement('div');
    container.style.position = 'relative';
    container.style.width = '100%';
    container.style.height = '100vh';
    container.style.backgroundColor = 'black';

    container.innerHTML = `
        <div>
          <input oninput="onInput(event)" placeholder="Type something ..." />
          <p id="text-output" style="color: white;"></p>
        </div>
    `;

    window.onInput = (event) => {
        const p = document.getElementById('text-output');
        if (!p) {
            return;
        }
        p.innerText = (
            event.target as HTMLInputElement
        ).value;
    };

    document.body.appendChild(container);
}