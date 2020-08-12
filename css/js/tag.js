document.querySelectorAll('.tag').forEach(box => {
    const tagNome = box.tagName.toLowerCase()

    box.style.borderColor = '#616161'

    if(!box.classList.contains('nolabel')){
        const label = document.createElement('label')
        label.style.backgroundColor = "#616161"
        label.innerHTML = tagNome
        box.insertBefore(label,box.childNodes[0])
    }
})