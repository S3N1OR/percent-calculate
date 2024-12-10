const table_a = document.getElementById('table-a');
const table_b = document.getElementById('table-b');
const table_c = document.getElementById('table-c');

function get_response() {
    const aValues = table_a.value.split('\n').map(Number);
    const bValues = table_b.value.split('\n').map(Number);

    const resultValues = aValues.map((a, idx) => {
        const b = bValues[idx] || 0;
        if (a === 0) return '∞';
        return (b / a * 100 - 100).toFixed(2) + '%';
    });

    table_c.value = resultValues.join('\n');
}
