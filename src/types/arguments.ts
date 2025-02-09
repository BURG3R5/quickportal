export default interface Arguments {
    from: number;
    as: string | undefined;
    to: string;
    open: boolean;
    localAlias: string;
    log: boolean;
    _: string[];
    $0: string;
    [x: string]: unknown;
}
