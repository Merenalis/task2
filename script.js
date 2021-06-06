const acc = document.querySelectorAll('.accordion-main__accordion');
let click = false;
document.addEventListener('change', function () {
    let chk = event.target;
    if (chk.tagName === 'INPUT' && chk.type === 'checkbox') {
        click = chk.checked;

    }
})
for (let item of acc) {
    item.addEventListener("click", function () {
        if (this.classList.contains('active')) {
            this.classList.remove('active');
        } else {
            if (click === false) {

                this.classList.toggle('active');

            } else {
                for (let el of acc) {
                    el.classList.remove('active');
                }
                this.classList.toggle('active');
            }
        }

    })
}

