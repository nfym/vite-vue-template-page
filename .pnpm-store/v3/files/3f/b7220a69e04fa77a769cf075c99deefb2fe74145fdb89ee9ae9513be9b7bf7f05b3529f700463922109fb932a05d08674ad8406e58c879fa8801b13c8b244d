import * as vue from '@volar/vue-language-core';
export declare function createLanguageService(host: vue.LanguageServiceHost): {
    __internal__: {
        languageService: import("typescript/lib/tsserverlibrary").LanguageService;
        context: {
            typescriptLanguageServiceHost: import("typescript/lib/tsserverlibrary").LanguageServiceHost;
            mapper: {
                get: (fileName: string) => [import("@volar/language-core").SourceFile, import("@volar/language-core").LanguageModule<import("@volar/language-core").SourceFile>] | undefined;
                delete: (fileName: string) => boolean;
                has: (fileName: string) => boolean;
                set: (fileName: string, vueFile: import("@volar/language-core").SourceFile, languageModule: import("@volar/language-core").LanguageModule<import("@volar/language-core").SourceFile>) => [import("@volar/language-core").SourceFile, import("@volar/language-core").LanguageModule<import("@volar/language-core").SourceFile>];
                getFileNames: () => string[];
                getAll: () => [import("@volar/language-core").SourceFile, import("@volar/language-core").LanguageModule<import("@volar/language-core").SourceFile>][];
                getTeleport: (fileName: string) => import("@volar/language-core").Teleport | undefined;
                getAllEmbeddeds: () => Generator<{
                    sourceFile: import("@volar/language-core").SourceFile;
                    embedded: import("@volar/language-core").EmbeddedFile;
                }, void, unknown>;
                fromEmbeddedLocation: (fileName: string, offset: number, baseOnRight?: boolean | undefined) => Generator<{
                    fileName: string;
                    offset: number;
                    mapping: import("@volar/source-map").Mapping<any>;
                    sourceMap: import("@volar/source-map").SourceMapBase<any>;
                } | {
                    fileName: string;
                    offset: number;
                    mapping?: undefined;
                    sourceMap?: undefined;
                }, void, unknown>;
                fromEmbeddedFile: (file: import("@volar/language-core").EmbeddedFile) => import("@volar/language-core").SourceFile | undefined;
                fromEmbeddedFileName: (fileName: string) => {
                    sourceFile: import("@volar/language-core").SourceFile;
                    embedded: import("@volar/language-core").EmbeddedFile;
                } | undefined;
                getSourceMap: (file: import("@volar/language-core").SourceFile, mappings: import("@volar/source-map").Mapping<any>[]) => import("@volar/source-map").SourceMapBase<any>;
                onSourceFileUpdated(file: import("@volar/language-core").SourceFile): void;
            };
        };
    };
} & import("typescript/lib/tsserverlibrary").LanguageService;
