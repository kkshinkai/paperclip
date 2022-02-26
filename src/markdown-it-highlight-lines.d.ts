declare module 'markdown-it-highlight-lines' {
    import { PluginSimple } from 'markdown-it';
    declare const highlightLines: PluginSimple;
    export = highlightLines;
}

declare module 'markdown-it-texmath' {
    import { KatexOptions } from 'katex';
    import { PluginWithOptions } from 'markdown-it';

    declare const markdownItTexmath: PluginWithOptions<{
        engine: unknown,
        delimiters: string,
        katexOptions: KatexOptions,
    }>;
    export = markdownItTexmath;
}
