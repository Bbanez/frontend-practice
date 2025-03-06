declare global {
    interface Window {
        onInput: (event: KeyboardEvent) => void;
        onSubmit: () => void;
        closeToast: () => void;
    }
}

export function task5() {
    const container = document.createElement('div');
    container.style.position = 'relative';
    container.style.width = '100%';
    container.style.height = '100vh';
    container.style.backgroundColor = 'black';

    let toast_content = '';
    let timeout: any = undefined;

    container.innerHTML = `
        <div>
            <div style="display: flex; align-items: center; gap: 12px; padding-top: 12px; padding-left: 12px;">
                <input
                    oninput="onInput(event)"
                    placeholder="Type something ..."
                    style="padding: 4px 8px;"
                />
                <button 
                    style="
                        border-radius: 4px;
                        background-color: green;
                        border: none;
                        color: black;
                        padding: 4px 8px;
                        font-weight: bold
                    "
                    onclick="onSubmit()"
                >
                    Submit
                </button>
            </div>
            <button
                id="toast" 
                onclick="closeToast()"
                style="
                    display: flex; 
                    align-items: center;
                    position: fixed;
                    bottom: 20px; 
                    left: -100px;
                    border: none;
                    background-color: red;
                    color: white;
                    font-weight: bold;
                    padding: 20px;
                    font-size: 20px;
                    border-radius: 10px;
                    transition: all;
                    transition-duration: 300ms;
                    opacity: 0;
                "
            >
            </button>
        </div>
    `;

    window.onInput = (event) => {
        toast_content = (event.target as HTMLInputElement).value;
    };

    window.onSubmit = () => {
        const toast = document.getElementById('toast');
        if (!toast) {
            return;
        }
        toast.innerText = toast_content;
        toast.style.left = '20px';
        toast.style.opacity = '1';
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            window.closeToast();
        }, 5000);
    };

    window.closeToast = () => {
        const toast = document.getElementById('toast');
        if (!toast) {
            return;
        }
        toast.style.left = '-100px';
        toast.style.opacity = '0';
    };

    document.body.appendChild(container);
}
