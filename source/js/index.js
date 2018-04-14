var trigger = document.getElementsByClassName('acco__trigger');

for(var i = 0; i < trigger.length; i++) {
    trigger[i].onclick = function() {
        var content = this.nextElementSibling;

        if(content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + 'px';
        }
    }
}

