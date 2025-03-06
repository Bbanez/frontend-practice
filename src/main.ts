import './style.css';
import { task1 } from './task-1.ts';
import { task2 } from './task-2.ts';
import { task3 } from './task-3.ts';
import { task4 } from './task-4.ts';
import { task5 } from './task-5.ts';

async function main() {
    if (window.location.pathname === '/task-1') {
        task1();
    } else if (window.location.pathname === '/task-2') {
        task2();
    } else if (window.location.pathname === '/task-3') {
        task3();
    } else if (window.location.pathname === '/task-4') {
        task4();
    } else if (window.location.pathname === '/task-4') {
        task4();
    } else if (window.location.pathname === '/task-5') {
        task5();
    }
}

main().catch((err) => {
    console.error(err);
});
