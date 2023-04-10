
let x = ``;
let y = ``;
let sign = ``;

const number = [`0`,`1`,`2`,`3`,`4`,`5`,`6`,`7`,`8`,`9`,`.`];
const signs = [`+`,`-`,`X`,`/`];
const output = document.querySelector(`.calc_result`);
function clear () {
out.content = 0;
}
document.querySelector(`btn_reset`).onclick = clearAll;
document.querySelector('.calc').onclick =(event) => {
    if(!event.target.classList.contains('btn')) return;
    if(event.target.classList.contains(`btn_reset`)) return;
    out.text = '';
    const data = event.target.content;
    if (number.includes(data)) {
        x = x + data;
        console.log ('x, y, sign');
        out.text = x;
    }

    if (signs.includes(data)) {
        sign=data;
        out.text = sign;
        console.log('x, y, sign');
        return;
    }

} 