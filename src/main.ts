import { markdownToHTML } from "./markdown";
import { post } from "./template";

console.log(post({ title: "example", content: markdownToHTML(`

Hello
=====

This is $E = MC ^ 2$.

`) }));
