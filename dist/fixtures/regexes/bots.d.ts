declare const _exports: ({
    "regex": string;
    "category": string;
    "producer": {
        "url": string;
        "name": string;
    };
    "name": string;
    "url": string;
} | {
    "regex": string;
    "producer": {
        "url": string;
        "name": string;
    };
    "name": string;
    "category": string;
    "url"?: undefined;
} | {
    "regex": string;
    "url": string;
    "name": string;
    "category": string;
    "producer"?: undefined;
} | {
    "regex": string;
    "url": string;
    "name": string;
    "category"?: undefined;
    "producer"?: undefined;
} | {
    "regex": string;
    "name": string;
    "category": string;
    "producer"?: undefined;
    "url"?: undefined;
} | {
    "regex": string;
    "url": string;
    "name": string;
    "producer": {
        "url": string;
        "name": string;
    };
    "category"?: undefined;
} | {
    "regex": string;
    "name": string;
    "category"?: undefined;
    "producer"?: undefined;
    "url"?: undefined;
} | {
    "regex": string;
    "producer": {
        "url": string;
        "name": string;
    };
    "name": string;
    "category"?: undefined;
    "url"?: undefined;
})[];
export = _exports;
