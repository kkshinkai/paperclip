interface PostParam {
    title: string
    content: string
}

export function post({ title, content }: PostParam): string {
    return `<!DOCTYPE html>\
<html>\
<head>\
<meta charset='utf-8'>\
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex/dist/katex.min.css">\
<title>${title}</title>\
</head>\
<body>\
${content}\
</body>\
</html>`;
}

