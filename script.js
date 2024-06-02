document.getElementById('color-select').addEventListener('change', function() {
    const shirt = document.getElementById('shirt');
    shirt.style.backgroundColor = this.value;
});
