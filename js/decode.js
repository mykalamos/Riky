
function decode(s) {
    return s
        .replace(/x/g, '')
        .replace(/%C3%A9/g, '')
        .replace(/,/g, '')
}