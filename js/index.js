const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const selection_item = $$('.selection_item');
const selection_line = $('.selection_line')

const products_container_body = $$('.products_container_body')
selection_line.style.left = $('.selection_item.check').offsetLeft + 'px';
selection_line.style.width = $('.selection_item.check').offsetWidth + 'px';

selection_item.forEach((tab, index) => {
    const pane = products_container_body[index];
    tab.onclick = function () {
        $('.selection_item.check').classList.remove('check');
        tab.classList.add('check');
        selection_line.style.left = tab.offsetLeft + 'px';
        selection_line.style.width = tab.offsetWidth + 'px';

        $('.products_container_body.active').classList.remove('active');
        pane.classList.add('active');
    }
})