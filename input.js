document.querySelectorAll('input').forEach( el => {
            console.log(el)
            el.addEventListener('keydown', e => {
                console.log(e.keyCode);
                if(e.keyCode === 13) {
                    let nextEl = el.nextElementSibling;
                    console.log(nextEl)
                    if(nextEl.nodeName === 'INPUT') {
                        nextEl.focus();
                    }else {
                        alert('done');
                    }
                }
            })
        })
