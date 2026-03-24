export declare const AdapterName: {
    readonly GOOGLE_DRIVE: "GOOGLE_DRIVE";
    readonly DROPBOX: "DROPBOX";
};
export type AdapterName = (typeof AdapterName)[keyof typeof AdapterName];
export declare const MigrationFileStatus: {
    readonly PENDING: "PENDING";
    readonly TRANSFERRING: "TRANSFERRING";
    readonly COMPLETED: "COMPLETED";
    readonly FAILED: "FAILED";
};
export type MigrationFileStatus = (typeof MigrationFileStatus)[keyof typeof MigrationFileStatus];
export declare const MigrationSelectionType: {
    readonly FILE: "FILE";
    readonly FOLDER: "FOLDER";
};
export type MigrationSelectionType = (typeof MigrationSelectionType)[keyof typeof MigrationSelectionType];
export declare const MigrationStatus: {
    readonly PENDING: "PENDING";
    readonly DISCOVERING: "DISCOVERING";
    readonly TRANSFERRING: "TRANSFERRING";
    readonly COMPLETED: "COMPLETED";
    readonly FAILED: "FAILED";
    readonly RETRYING: "RETRYING";
    readonly SKIPPED: "SKIPPED";
};
export type MigrationStatus = (typeof MigrationStatus)[keyof typeof MigrationStatus];
//# sourceMappingURL=enums.d.ts.map