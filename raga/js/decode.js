
function decode(s) {
    return s
        .replace(/\+/, '.')
        .replace(/é/g, '')
        .replace(/,/g, '')
}