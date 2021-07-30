const path = "/users/download/index.html"

const isHtml = path => {
    const requieredExt = ".html";
    const pathExt = path.slice(-5);

    return pathExt == requieredExt

}

console.log(isHtml(path));