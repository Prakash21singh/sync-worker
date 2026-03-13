import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums";
import type * as Prisma from "../internal/prismaNamespace";
/**
 * Model MigrationFile
 *
 */
export type MigrationFileModel = runtime.Types.Result.DefaultSelection<Prisma.$MigrationFilePayload>;
export type AggregateMigrationFile = {
    _count: MigrationFileCountAggregateOutputType | null;
    _min: MigrationFileMinAggregateOutputType | null;
    _max: MigrationFileMaxAggregateOutputType | null;
};
export type MigrationFileMinAggregateOutputType = {
    id: string | null;
    fileId: string | null;
    source: $Enums.AdapterName | null;
    destination: $Enums.AdapterName | null;
    status: $Enums.MigrationStatus | null;
    migrationId: string | null;
};
export type MigrationFileMaxAggregateOutputType = {
    id: string | null;
    fileId: string | null;
    source: $Enums.AdapterName | null;
    destination: $Enums.AdapterName | null;
    status: $Enums.MigrationStatus | null;
    migrationId: string | null;
};
export type MigrationFileCountAggregateOutputType = {
    id: number;
    fileId: number;
    source: number;
    destination: number;
    status: number;
    migrationId: number;
    _all: number;
};
export type MigrationFileMinAggregateInputType = {
    id?: true;
    fileId?: true;
    source?: true;
    destination?: true;
    status?: true;
    migrationId?: true;
};
export type MigrationFileMaxAggregateInputType = {
    id?: true;
    fileId?: true;
    source?: true;
    destination?: true;
    status?: true;
    migrationId?: true;
};
export type MigrationFileCountAggregateInputType = {
    id?: true;
    fileId?: true;
    source?: true;
    destination?: true;
    status?: true;
    migrationId?: true;
    _all?: true;
};
export type MigrationFileAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which MigrationFile to aggregate.
     */
    where?: Prisma.MigrationFileWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of MigrationFiles to fetch.
     */
    orderBy?: Prisma.MigrationFileOrderByWithRelationInput | Prisma.MigrationFileOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.MigrationFileWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` MigrationFiles from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` MigrationFiles.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned MigrationFiles
    **/
    _count?: true | MigrationFileCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: MigrationFileMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: MigrationFileMaxAggregateInputType;
};
export type GetMigrationFileAggregateType<T extends MigrationFileAggregateArgs> = {
    [P in keyof T & keyof AggregateMigrationFile]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateMigrationFile[P]> : Prisma.GetScalarType<T[P], AggregateMigrationFile[P]>;
};
export type MigrationFileGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MigrationFileWhereInput;
    orderBy?: Prisma.MigrationFileOrderByWithAggregationInput | Prisma.MigrationFileOrderByWithAggregationInput[];
    by: Prisma.MigrationFileScalarFieldEnum[] | Prisma.MigrationFileScalarFieldEnum;
    having?: Prisma.MigrationFileScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: MigrationFileCountAggregateInputType | true;
    _min?: MigrationFileMinAggregateInputType;
    _max?: MigrationFileMaxAggregateInputType;
};
export type MigrationFileGroupByOutputType = {
    id: string;
    fileId: string;
    source: $Enums.AdapterName;
    destination: $Enums.AdapterName;
    status: $Enums.MigrationStatus;
    migrationId: string;
    _count: MigrationFileCountAggregateOutputType | null;
    _min: MigrationFileMinAggregateOutputType | null;
    _max: MigrationFileMaxAggregateOutputType | null;
};
type GetMigrationFileGroupByPayload<T extends MigrationFileGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<MigrationFileGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof MigrationFileGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], MigrationFileGroupByOutputType[P]> : Prisma.GetScalarType<T[P], MigrationFileGroupByOutputType[P]>;
}>>;
export type MigrationFileWhereInput = {
    AND?: Prisma.MigrationFileWhereInput | Prisma.MigrationFileWhereInput[];
    OR?: Prisma.MigrationFileWhereInput[];
    NOT?: Prisma.MigrationFileWhereInput | Prisma.MigrationFileWhereInput[];
    id?: Prisma.StringFilter<"MigrationFile"> | string;
    fileId?: Prisma.StringFilter<"MigrationFile"> | string;
    source?: Prisma.EnumAdapterNameFilter<"MigrationFile"> | $Enums.AdapterName;
    destination?: Prisma.EnumAdapterNameFilter<"MigrationFile"> | $Enums.AdapterName;
    status?: Prisma.EnumMigrationStatusFilter<"MigrationFile"> | $Enums.MigrationStatus;
    migrationId?: Prisma.StringFilter<"MigrationFile"> | string;
    migration?: Prisma.XOR<Prisma.MigrationScalarRelationFilter, Prisma.MigrationWhereInput>;
};
export type MigrationFileOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    fileId?: Prisma.SortOrder;
    source?: Prisma.SortOrder;
    destination?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    migrationId?: Prisma.SortOrder;
    migration?: Prisma.MigrationOrderByWithRelationInput;
};
export type MigrationFileWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.MigrationFileWhereInput | Prisma.MigrationFileWhereInput[];
    OR?: Prisma.MigrationFileWhereInput[];
    NOT?: Prisma.MigrationFileWhereInput | Prisma.MigrationFileWhereInput[];
    fileId?: Prisma.StringFilter<"MigrationFile"> | string;
    source?: Prisma.EnumAdapterNameFilter<"MigrationFile"> | $Enums.AdapterName;
    destination?: Prisma.EnumAdapterNameFilter<"MigrationFile"> | $Enums.AdapterName;
    status?: Prisma.EnumMigrationStatusFilter<"MigrationFile"> | $Enums.MigrationStatus;
    migrationId?: Prisma.StringFilter<"MigrationFile"> | string;
    migration?: Prisma.XOR<Prisma.MigrationScalarRelationFilter, Prisma.MigrationWhereInput>;
}, "id">;
export type MigrationFileOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    fileId?: Prisma.SortOrder;
    source?: Prisma.SortOrder;
    destination?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    migrationId?: Prisma.SortOrder;
    _count?: Prisma.MigrationFileCountOrderByAggregateInput;
    _max?: Prisma.MigrationFileMaxOrderByAggregateInput;
    _min?: Prisma.MigrationFileMinOrderByAggregateInput;
};
export type MigrationFileScalarWhereWithAggregatesInput = {
    AND?: Prisma.MigrationFileScalarWhereWithAggregatesInput | Prisma.MigrationFileScalarWhereWithAggregatesInput[];
    OR?: Prisma.MigrationFileScalarWhereWithAggregatesInput[];
    NOT?: Prisma.MigrationFileScalarWhereWithAggregatesInput | Prisma.MigrationFileScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"MigrationFile"> | string;
    fileId?: Prisma.StringWithAggregatesFilter<"MigrationFile"> | string;
    source?: Prisma.EnumAdapterNameWithAggregatesFilter<"MigrationFile"> | $Enums.AdapterName;
    destination?: Prisma.EnumAdapterNameWithAggregatesFilter<"MigrationFile"> | $Enums.AdapterName;
    status?: Prisma.EnumMigrationStatusWithAggregatesFilter<"MigrationFile"> | $Enums.MigrationStatus;
    migrationId?: Prisma.StringWithAggregatesFilter<"MigrationFile"> | string;
};
export type MigrationFileCreateInput = {
    id?: string;
    fileId: string;
    source: $Enums.AdapterName;
    destination: $Enums.AdapterName;
    status: $Enums.MigrationStatus;
    migration: Prisma.MigrationCreateNestedOneWithoutFilesInput;
};
export type MigrationFileUncheckedCreateInput = {
    id?: string;
    fileId: string;
    source: $Enums.AdapterName;
    destination: $Enums.AdapterName;
    status: $Enums.MigrationStatus;
    migrationId: string;
};
export type MigrationFileUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fileId?: Prisma.StringFieldUpdateOperationsInput | string;
    source?: Prisma.EnumAdapterNameFieldUpdateOperationsInput | $Enums.AdapterName;
    destination?: Prisma.EnumAdapterNameFieldUpdateOperationsInput | $Enums.AdapterName;
    status?: Prisma.EnumMigrationStatusFieldUpdateOperationsInput | $Enums.MigrationStatus;
    migration?: Prisma.MigrationUpdateOneRequiredWithoutFilesNestedInput;
};
export type MigrationFileUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fileId?: Prisma.StringFieldUpdateOperationsInput | string;
    source?: Prisma.EnumAdapterNameFieldUpdateOperationsInput | $Enums.AdapterName;
    destination?: Prisma.EnumAdapterNameFieldUpdateOperationsInput | $Enums.AdapterName;
    status?: Prisma.EnumMigrationStatusFieldUpdateOperationsInput | $Enums.MigrationStatus;
    migrationId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type MigrationFileCreateManyInput = {
    id?: string;
    fileId: string;
    source: $Enums.AdapterName;
    destination: $Enums.AdapterName;
    status: $Enums.MigrationStatus;
    migrationId: string;
};
export type MigrationFileUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fileId?: Prisma.StringFieldUpdateOperationsInput | string;
    source?: Prisma.EnumAdapterNameFieldUpdateOperationsInput | $Enums.AdapterName;
    destination?: Prisma.EnumAdapterNameFieldUpdateOperationsInput | $Enums.AdapterName;
    status?: Prisma.EnumMigrationStatusFieldUpdateOperationsInput | $Enums.MigrationStatus;
};
export type MigrationFileUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fileId?: Prisma.StringFieldUpdateOperationsInput | string;
    source?: Prisma.EnumAdapterNameFieldUpdateOperationsInput | $Enums.AdapterName;
    destination?: Prisma.EnumAdapterNameFieldUpdateOperationsInput | $Enums.AdapterName;
    status?: Prisma.EnumMigrationStatusFieldUpdateOperationsInput | $Enums.MigrationStatus;
    migrationId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type MigrationFileListRelationFilter = {
    every?: Prisma.MigrationFileWhereInput;
    some?: Prisma.MigrationFileWhereInput;
    none?: Prisma.MigrationFileWhereInput;
};
export type MigrationFileOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type MigrationFileCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    fileId?: Prisma.SortOrder;
    source?: Prisma.SortOrder;
    destination?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    migrationId?: Prisma.SortOrder;
};
export type MigrationFileMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    fileId?: Prisma.SortOrder;
    source?: Prisma.SortOrder;
    destination?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    migrationId?: Prisma.SortOrder;
};
export type MigrationFileMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    fileId?: Prisma.SortOrder;
    source?: Prisma.SortOrder;
    destination?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    migrationId?: Prisma.SortOrder;
};
export type MigrationFileCreateNestedManyWithoutMigrationInput = {
    create?: Prisma.XOR<Prisma.MigrationFileCreateWithoutMigrationInput, Prisma.MigrationFileUncheckedCreateWithoutMigrationInput> | Prisma.MigrationFileCreateWithoutMigrationInput[] | Prisma.MigrationFileUncheckedCreateWithoutMigrationInput[];
    connectOrCreate?: Prisma.MigrationFileCreateOrConnectWithoutMigrationInput | Prisma.MigrationFileCreateOrConnectWithoutMigrationInput[];
    createMany?: Prisma.MigrationFileCreateManyMigrationInputEnvelope;
    connect?: Prisma.MigrationFileWhereUniqueInput | Prisma.MigrationFileWhereUniqueInput[];
};
export type MigrationFileUncheckedCreateNestedManyWithoutMigrationInput = {
    create?: Prisma.XOR<Prisma.MigrationFileCreateWithoutMigrationInput, Prisma.MigrationFileUncheckedCreateWithoutMigrationInput> | Prisma.MigrationFileCreateWithoutMigrationInput[] | Prisma.MigrationFileUncheckedCreateWithoutMigrationInput[];
    connectOrCreate?: Prisma.MigrationFileCreateOrConnectWithoutMigrationInput | Prisma.MigrationFileCreateOrConnectWithoutMigrationInput[];
    createMany?: Prisma.MigrationFileCreateManyMigrationInputEnvelope;
    connect?: Prisma.MigrationFileWhereUniqueInput | Prisma.MigrationFileWhereUniqueInput[];
};
export type MigrationFileUpdateManyWithoutMigrationNestedInput = {
    create?: Prisma.XOR<Prisma.MigrationFileCreateWithoutMigrationInput, Prisma.MigrationFileUncheckedCreateWithoutMigrationInput> | Prisma.MigrationFileCreateWithoutMigrationInput[] | Prisma.MigrationFileUncheckedCreateWithoutMigrationInput[];
    connectOrCreate?: Prisma.MigrationFileCreateOrConnectWithoutMigrationInput | Prisma.MigrationFileCreateOrConnectWithoutMigrationInput[];
    upsert?: Prisma.MigrationFileUpsertWithWhereUniqueWithoutMigrationInput | Prisma.MigrationFileUpsertWithWhereUniqueWithoutMigrationInput[];
    createMany?: Prisma.MigrationFileCreateManyMigrationInputEnvelope;
    set?: Prisma.MigrationFileWhereUniqueInput | Prisma.MigrationFileWhereUniqueInput[];
    disconnect?: Prisma.MigrationFileWhereUniqueInput | Prisma.MigrationFileWhereUniqueInput[];
    delete?: Prisma.MigrationFileWhereUniqueInput | Prisma.MigrationFileWhereUniqueInput[];
    connect?: Prisma.MigrationFileWhereUniqueInput | Prisma.MigrationFileWhereUniqueInput[];
    update?: Prisma.MigrationFileUpdateWithWhereUniqueWithoutMigrationInput | Prisma.MigrationFileUpdateWithWhereUniqueWithoutMigrationInput[];
    updateMany?: Prisma.MigrationFileUpdateManyWithWhereWithoutMigrationInput | Prisma.MigrationFileUpdateManyWithWhereWithoutMigrationInput[];
    deleteMany?: Prisma.MigrationFileScalarWhereInput | Prisma.MigrationFileScalarWhereInput[];
};
export type MigrationFileUncheckedUpdateManyWithoutMigrationNestedInput = {
    create?: Prisma.XOR<Prisma.MigrationFileCreateWithoutMigrationInput, Prisma.MigrationFileUncheckedCreateWithoutMigrationInput> | Prisma.MigrationFileCreateWithoutMigrationInput[] | Prisma.MigrationFileUncheckedCreateWithoutMigrationInput[];
    connectOrCreate?: Prisma.MigrationFileCreateOrConnectWithoutMigrationInput | Prisma.MigrationFileCreateOrConnectWithoutMigrationInput[];
    upsert?: Prisma.MigrationFileUpsertWithWhereUniqueWithoutMigrationInput | Prisma.MigrationFileUpsertWithWhereUniqueWithoutMigrationInput[];
    createMany?: Prisma.MigrationFileCreateManyMigrationInputEnvelope;
    set?: Prisma.MigrationFileWhereUniqueInput | Prisma.MigrationFileWhereUniqueInput[];
    disconnect?: Prisma.MigrationFileWhereUniqueInput | Prisma.MigrationFileWhereUniqueInput[];
    delete?: Prisma.MigrationFileWhereUniqueInput | Prisma.MigrationFileWhereUniqueInput[];
    connect?: Prisma.MigrationFileWhereUniqueInput | Prisma.MigrationFileWhereUniqueInput[];
    update?: Prisma.MigrationFileUpdateWithWhereUniqueWithoutMigrationInput | Prisma.MigrationFileUpdateWithWhereUniqueWithoutMigrationInput[];
    updateMany?: Prisma.MigrationFileUpdateManyWithWhereWithoutMigrationInput | Prisma.MigrationFileUpdateManyWithWhereWithoutMigrationInput[];
    deleteMany?: Prisma.MigrationFileScalarWhereInput | Prisma.MigrationFileScalarWhereInput[];
};
export type MigrationFileCreateWithoutMigrationInput = {
    id?: string;
    fileId: string;
    source: $Enums.AdapterName;
    destination: $Enums.AdapterName;
    status: $Enums.MigrationStatus;
};
export type MigrationFileUncheckedCreateWithoutMigrationInput = {
    id?: string;
    fileId: string;
    source: $Enums.AdapterName;
    destination: $Enums.AdapterName;
    status: $Enums.MigrationStatus;
};
export type MigrationFileCreateOrConnectWithoutMigrationInput = {
    where: Prisma.MigrationFileWhereUniqueInput;
    create: Prisma.XOR<Prisma.MigrationFileCreateWithoutMigrationInput, Prisma.MigrationFileUncheckedCreateWithoutMigrationInput>;
};
export type MigrationFileCreateManyMigrationInputEnvelope = {
    data: Prisma.MigrationFileCreateManyMigrationInput | Prisma.MigrationFileCreateManyMigrationInput[];
    skipDuplicates?: boolean;
};
export type MigrationFileUpsertWithWhereUniqueWithoutMigrationInput = {
    where: Prisma.MigrationFileWhereUniqueInput;
    update: Prisma.XOR<Prisma.MigrationFileUpdateWithoutMigrationInput, Prisma.MigrationFileUncheckedUpdateWithoutMigrationInput>;
    create: Prisma.XOR<Prisma.MigrationFileCreateWithoutMigrationInput, Prisma.MigrationFileUncheckedCreateWithoutMigrationInput>;
};
export type MigrationFileUpdateWithWhereUniqueWithoutMigrationInput = {
    where: Prisma.MigrationFileWhereUniqueInput;
    data: Prisma.XOR<Prisma.MigrationFileUpdateWithoutMigrationInput, Prisma.MigrationFileUncheckedUpdateWithoutMigrationInput>;
};
export type MigrationFileUpdateManyWithWhereWithoutMigrationInput = {
    where: Prisma.MigrationFileScalarWhereInput;
    data: Prisma.XOR<Prisma.MigrationFileUpdateManyMutationInput, Prisma.MigrationFileUncheckedUpdateManyWithoutMigrationInput>;
};
export type MigrationFileScalarWhereInput = {
    AND?: Prisma.MigrationFileScalarWhereInput | Prisma.MigrationFileScalarWhereInput[];
    OR?: Prisma.MigrationFileScalarWhereInput[];
    NOT?: Prisma.MigrationFileScalarWhereInput | Prisma.MigrationFileScalarWhereInput[];
    id?: Prisma.StringFilter<"MigrationFile"> | string;
    fileId?: Prisma.StringFilter<"MigrationFile"> | string;
    source?: Prisma.EnumAdapterNameFilter<"MigrationFile"> | $Enums.AdapterName;
    destination?: Prisma.EnumAdapterNameFilter<"MigrationFile"> | $Enums.AdapterName;
    status?: Prisma.EnumMigrationStatusFilter<"MigrationFile"> | $Enums.MigrationStatus;
    migrationId?: Prisma.StringFilter<"MigrationFile"> | string;
};
export type MigrationFileCreateManyMigrationInput = {
    id?: string;
    fileId: string;
    source: $Enums.AdapterName;
    destination: $Enums.AdapterName;
    status: $Enums.MigrationStatus;
};
export type MigrationFileUpdateWithoutMigrationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fileId?: Prisma.StringFieldUpdateOperationsInput | string;
    source?: Prisma.EnumAdapterNameFieldUpdateOperationsInput | $Enums.AdapterName;
    destination?: Prisma.EnumAdapterNameFieldUpdateOperationsInput | $Enums.AdapterName;
    status?: Prisma.EnumMigrationStatusFieldUpdateOperationsInput | $Enums.MigrationStatus;
};
export type MigrationFileUncheckedUpdateWithoutMigrationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fileId?: Prisma.StringFieldUpdateOperationsInput | string;
    source?: Prisma.EnumAdapterNameFieldUpdateOperationsInput | $Enums.AdapterName;
    destination?: Prisma.EnumAdapterNameFieldUpdateOperationsInput | $Enums.AdapterName;
    status?: Prisma.EnumMigrationStatusFieldUpdateOperationsInput | $Enums.MigrationStatus;
};
export type MigrationFileUncheckedUpdateManyWithoutMigrationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fileId?: Prisma.StringFieldUpdateOperationsInput | string;
    source?: Prisma.EnumAdapterNameFieldUpdateOperationsInput | $Enums.AdapterName;
    destination?: Prisma.EnumAdapterNameFieldUpdateOperationsInput | $Enums.AdapterName;
    status?: Prisma.EnumMigrationStatusFieldUpdateOperationsInput | $Enums.MigrationStatus;
};
export type MigrationFileSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    fileId?: boolean;
    source?: boolean;
    destination?: boolean;
    status?: boolean;
    migrationId?: boolean;
    migration?: boolean | Prisma.MigrationDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["migrationFile"]>;
export type MigrationFileSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    fileId?: boolean;
    source?: boolean;
    destination?: boolean;
    status?: boolean;
    migrationId?: boolean;
    migration?: boolean | Prisma.MigrationDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["migrationFile"]>;
export type MigrationFileSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    fileId?: boolean;
    source?: boolean;
    destination?: boolean;
    status?: boolean;
    migrationId?: boolean;
    migration?: boolean | Prisma.MigrationDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["migrationFile"]>;
export type MigrationFileSelectScalar = {
    id?: boolean;
    fileId?: boolean;
    source?: boolean;
    destination?: boolean;
    status?: boolean;
    migrationId?: boolean;
};
export type MigrationFileOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "fileId" | "source" | "destination" | "status" | "migrationId", ExtArgs["result"]["migrationFile"]>;
export type MigrationFileInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    migration?: boolean | Prisma.MigrationDefaultArgs<ExtArgs>;
};
export type MigrationFileIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    migration?: boolean | Prisma.MigrationDefaultArgs<ExtArgs>;
};
export type MigrationFileIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    migration?: boolean | Prisma.MigrationDefaultArgs<ExtArgs>;
};
export type $MigrationFilePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "MigrationFile";
    objects: {
        migration: Prisma.$MigrationPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        fileId: string;
        source: $Enums.AdapterName;
        destination: $Enums.AdapterName;
        status: $Enums.MigrationStatus;
        migrationId: string;
    }, ExtArgs["result"]["migrationFile"]>;
    composites: {};
};
export type MigrationFileGetPayload<S extends boolean | null | undefined | MigrationFileDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$MigrationFilePayload, S>;
export type MigrationFileCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<MigrationFileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: MigrationFileCountAggregateInputType | true;
};
export interface MigrationFileDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['MigrationFile'];
        meta: {
            name: 'MigrationFile';
        };
    };
    /**
     * Find zero or one MigrationFile that matches the filter.
     * @param {MigrationFileFindUniqueArgs} args - Arguments to find a MigrationFile
     * @example
     * // Get one MigrationFile
     * const migrationFile = await prisma.migrationFile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MigrationFileFindUniqueArgs>(args: Prisma.SelectSubset<T, MigrationFileFindUniqueArgs<ExtArgs>>): Prisma.Prisma__MigrationFileClient<runtime.Types.Result.GetResult<Prisma.$MigrationFilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one MigrationFile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MigrationFileFindUniqueOrThrowArgs} args - Arguments to find a MigrationFile
     * @example
     * // Get one MigrationFile
     * const migrationFile = await prisma.migrationFile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MigrationFileFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, MigrationFileFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__MigrationFileClient<runtime.Types.Result.GetResult<Prisma.$MigrationFilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first MigrationFile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MigrationFileFindFirstArgs} args - Arguments to find a MigrationFile
     * @example
     * // Get one MigrationFile
     * const migrationFile = await prisma.migrationFile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MigrationFileFindFirstArgs>(args?: Prisma.SelectSubset<T, MigrationFileFindFirstArgs<ExtArgs>>): Prisma.Prisma__MigrationFileClient<runtime.Types.Result.GetResult<Prisma.$MigrationFilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first MigrationFile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MigrationFileFindFirstOrThrowArgs} args - Arguments to find a MigrationFile
     * @example
     * // Get one MigrationFile
     * const migrationFile = await prisma.migrationFile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MigrationFileFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, MigrationFileFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__MigrationFileClient<runtime.Types.Result.GetResult<Prisma.$MigrationFilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more MigrationFiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MigrationFileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MigrationFiles
     * const migrationFiles = await prisma.migrationFile.findMany()
     *
     * // Get first 10 MigrationFiles
     * const migrationFiles = await prisma.migrationFile.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const migrationFileWithIdOnly = await prisma.migrationFile.findMany({ select: { id: true } })
     *
     */
    findMany<T extends MigrationFileFindManyArgs>(args?: Prisma.SelectSubset<T, MigrationFileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MigrationFilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a MigrationFile.
     * @param {MigrationFileCreateArgs} args - Arguments to create a MigrationFile.
     * @example
     * // Create one MigrationFile
     * const MigrationFile = await prisma.migrationFile.create({
     *   data: {
     *     // ... data to create a MigrationFile
     *   }
     * })
     *
     */
    create<T extends MigrationFileCreateArgs>(args: Prisma.SelectSubset<T, MigrationFileCreateArgs<ExtArgs>>): Prisma.Prisma__MigrationFileClient<runtime.Types.Result.GetResult<Prisma.$MigrationFilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many MigrationFiles.
     * @param {MigrationFileCreateManyArgs} args - Arguments to create many MigrationFiles.
     * @example
     * // Create many MigrationFiles
     * const migrationFile = await prisma.migrationFile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends MigrationFileCreateManyArgs>(args?: Prisma.SelectSubset<T, MigrationFileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many MigrationFiles and returns the data saved in the database.
     * @param {MigrationFileCreateManyAndReturnArgs} args - Arguments to create many MigrationFiles.
     * @example
     * // Create many MigrationFiles
     * const migrationFile = await prisma.migrationFile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many MigrationFiles and only return the `id`
     * const migrationFileWithIdOnly = await prisma.migrationFile.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends MigrationFileCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, MigrationFileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MigrationFilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a MigrationFile.
     * @param {MigrationFileDeleteArgs} args - Arguments to delete one MigrationFile.
     * @example
     * // Delete one MigrationFile
     * const MigrationFile = await prisma.migrationFile.delete({
     *   where: {
     *     // ... filter to delete one MigrationFile
     *   }
     * })
     *
     */
    delete<T extends MigrationFileDeleteArgs>(args: Prisma.SelectSubset<T, MigrationFileDeleteArgs<ExtArgs>>): Prisma.Prisma__MigrationFileClient<runtime.Types.Result.GetResult<Prisma.$MigrationFilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one MigrationFile.
     * @param {MigrationFileUpdateArgs} args - Arguments to update one MigrationFile.
     * @example
     * // Update one MigrationFile
     * const migrationFile = await prisma.migrationFile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends MigrationFileUpdateArgs>(args: Prisma.SelectSubset<T, MigrationFileUpdateArgs<ExtArgs>>): Prisma.Prisma__MigrationFileClient<runtime.Types.Result.GetResult<Prisma.$MigrationFilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more MigrationFiles.
     * @param {MigrationFileDeleteManyArgs} args - Arguments to filter MigrationFiles to delete.
     * @example
     * // Delete a few MigrationFiles
     * const { count } = await prisma.migrationFile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends MigrationFileDeleteManyArgs>(args?: Prisma.SelectSubset<T, MigrationFileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more MigrationFiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MigrationFileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MigrationFiles
     * const migrationFile = await prisma.migrationFile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends MigrationFileUpdateManyArgs>(args: Prisma.SelectSubset<T, MigrationFileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more MigrationFiles and returns the data updated in the database.
     * @param {MigrationFileUpdateManyAndReturnArgs} args - Arguments to update many MigrationFiles.
     * @example
     * // Update many MigrationFiles
     * const migrationFile = await prisma.migrationFile.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more MigrationFiles and only return the `id`
     * const migrationFileWithIdOnly = await prisma.migrationFile.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends MigrationFileUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, MigrationFileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MigrationFilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one MigrationFile.
     * @param {MigrationFileUpsertArgs} args - Arguments to update or create a MigrationFile.
     * @example
     * // Update or create a MigrationFile
     * const migrationFile = await prisma.migrationFile.upsert({
     *   create: {
     *     // ... data to create a MigrationFile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MigrationFile we want to update
     *   }
     * })
     */
    upsert<T extends MigrationFileUpsertArgs>(args: Prisma.SelectSubset<T, MigrationFileUpsertArgs<ExtArgs>>): Prisma.Prisma__MigrationFileClient<runtime.Types.Result.GetResult<Prisma.$MigrationFilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of MigrationFiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MigrationFileCountArgs} args - Arguments to filter MigrationFiles to count.
     * @example
     * // Count the number of MigrationFiles
     * const count = await prisma.migrationFile.count({
     *   where: {
     *     // ... the filter for the MigrationFiles we want to count
     *   }
     * })
    **/
    count<T extends MigrationFileCountArgs>(args?: Prisma.Subset<T, MigrationFileCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], MigrationFileCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a MigrationFile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MigrationFileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MigrationFileAggregateArgs>(args: Prisma.Subset<T, MigrationFileAggregateArgs>): Prisma.PrismaPromise<GetMigrationFileAggregateType<T>>;
    /**
     * Group by MigrationFile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MigrationFileGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
    **/
    groupBy<T extends MigrationFileGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: MigrationFileGroupByArgs['orderBy'];
    } : {
        orderBy?: MigrationFileGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, MigrationFileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMigrationFileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the MigrationFile model
     */
    readonly fields: MigrationFileFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for MigrationFile.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__MigrationFileClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    migration<T extends Prisma.MigrationDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.MigrationDefaultArgs<ExtArgs>>): Prisma.Prisma__MigrationClient<runtime.Types.Result.GetResult<Prisma.$MigrationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
/**
 * Fields of the MigrationFile model
 */
export interface MigrationFileFieldRefs {
    readonly id: Prisma.FieldRef<"MigrationFile", 'String'>;
    readonly fileId: Prisma.FieldRef<"MigrationFile", 'String'>;
    readonly source: Prisma.FieldRef<"MigrationFile", 'AdapterName'>;
    readonly destination: Prisma.FieldRef<"MigrationFile", 'AdapterName'>;
    readonly status: Prisma.FieldRef<"MigrationFile", 'MigrationStatus'>;
    readonly migrationId: Prisma.FieldRef<"MigrationFile", 'String'>;
}
/**
 * MigrationFile findUnique
 */
export type MigrationFileFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MigrationFile
     */
    select?: Prisma.MigrationFileSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MigrationFile
     */
    omit?: Prisma.MigrationFileOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.MigrationFileInclude<ExtArgs> | null;
    /**
     * Filter, which MigrationFile to fetch.
     */
    where: Prisma.MigrationFileWhereUniqueInput;
};
/**
 * MigrationFile findUniqueOrThrow
 */
export type MigrationFileFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MigrationFile
     */
    select?: Prisma.MigrationFileSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MigrationFile
     */
    omit?: Prisma.MigrationFileOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.MigrationFileInclude<ExtArgs> | null;
    /**
     * Filter, which MigrationFile to fetch.
     */
    where: Prisma.MigrationFileWhereUniqueInput;
};
/**
 * MigrationFile findFirst
 */
export type MigrationFileFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MigrationFile
     */
    select?: Prisma.MigrationFileSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MigrationFile
     */
    omit?: Prisma.MigrationFileOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.MigrationFileInclude<ExtArgs> | null;
    /**
     * Filter, which MigrationFile to fetch.
     */
    where?: Prisma.MigrationFileWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of MigrationFiles to fetch.
     */
    orderBy?: Prisma.MigrationFileOrderByWithRelationInput | Prisma.MigrationFileOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for MigrationFiles.
     */
    cursor?: Prisma.MigrationFileWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` MigrationFiles from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` MigrationFiles.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of MigrationFiles.
     */
    distinct?: Prisma.MigrationFileScalarFieldEnum | Prisma.MigrationFileScalarFieldEnum[];
};
/**
 * MigrationFile findFirstOrThrow
 */
export type MigrationFileFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MigrationFile
     */
    select?: Prisma.MigrationFileSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MigrationFile
     */
    omit?: Prisma.MigrationFileOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.MigrationFileInclude<ExtArgs> | null;
    /**
     * Filter, which MigrationFile to fetch.
     */
    where?: Prisma.MigrationFileWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of MigrationFiles to fetch.
     */
    orderBy?: Prisma.MigrationFileOrderByWithRelationInput | Prisma.MigrationFileOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for MigrationFiles.
     */
    cursor?: Prisma.MigrationFileWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` MigrationFiles from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` MigrationFiles.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of MigrationFiles.
     */
    distinct?: Prisma.MigrationFileScalarFieldEnum | Prisma.MigrationFileScalarFieldEnum[];
};
/**
 * MigrationFile findMany
 */
export type MigrationFileFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MigrationFile
     */
    select?: Prisma.MigrationFileSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MigrationFile
     */
    omit?: Prisma.MigrationFileOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.MigrationFileInclude<ExtArgs> | null;
    /**
     * Filter, which MigrationFiles to fetch.
     */
    where?: Prisma.MigrationFileWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of MigrationFiles to fetch.
     */
    orderBy?: Prisma.MigrationFileOrderByWithRelationInput | Prisma.MigrationFileOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing MigrationFiles.
     */
    cursor?: Prisma.MigrationFileWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` MigrationFiles from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` MigrationFiles.
     */
    skip?: number;
    distinct?: Prisma.MigrationFileScalarFieldEnum | Prisma.MigrationFileScalarFieldEnum[];
};
/**
 * MigrationFile create
 */
export type MigrationFileCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MigrationFile
     */
    select?: Prisma.MigrationFileSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MigrationFile
     */
    omit?: Prisma.MigrationFileOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.MigrationFileInclude<ExtArgs> | null;
    /**
     * The data needed to create a MigrationFile.
     */
    data: Prisma.XOR<Prisma.MigrationFileCreateInput, Prisma.MigrationFileUncheckedCreateInput>;
};
/**
 * MigrationFile createMany
 */
export type MigrationFileCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many MigrationFiles.
     */
    data: Prisma.MigrationFileCreateManyInput | Prisma.MigrationFileCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * MigrationFile createManyAndReturn
 */
export type MigrationFileCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MigrationFile
     */
    select?: Prisma.MigrationFileSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the MigrationFile
     */
    omit?: Prisma.MigrationFileOmit<ExtArgs> | null;
    /**
     * The data used to create many MigrationFiles.
     */
    data: Prisma.MigrationFileCreateManyInput | Prisma.MigrationFileCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.MigrationFileIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * MigrationFile update
 */
export type MigrationFileUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MigrationFile
     */
    select?: Prisma.MigrationFileSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MigrationFile
     */
    omit?: Prisma.MigrationFileOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.MigrationFileInclude<ExtArgs> | null;
    /**
     * The data needed to update a MigrationFile.
     */
    data: Prisma.XOR<Prisma.MigrationFileUpdateInput, Prisma.MigrationFileUncheckedUpdateInput>;
    /**
     * Choose, which MigrationFile to update.
     */
    where: Prisma.MigrationFileWhereUniqueInput;
};
/**
 * MigrationFile updateMany
 */
export type MigrationFileUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update MigrationFiles.
     */
    data: Prisma.XOR<Prisma.MigrationFileUpdateManyMutationInput, Prisma.MigrationFileUncheckedUpdateManyInput>;
    /**
     * Filter which MigrationFiles to update
     */
    where?: Prisma.MigrationFileWhereInput;
    /**
     * Limit how many MigrationFiles to update.
     */
    limit?: number;
};
/**
 * MigrationFile updateManyAndReturn
 */
export type MigrationFileUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MigrationFile
     */
    select?: Prisma.MigrationFileSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the MigrationFile
     */
    omit?: Prisma.MigrationFileOmit<ExtArgs> | null;
    /**
     * The data used to update MigrationFiles.
     */
    data: Prisma.XOR<Prisma.MigrationFileUpdateManyMutationInput, Prisma.MigrationFileUncheckedUpdateManyInput>;
    /**
     * Filter which MigrationFiles to update
     */
    where?: Prisma.MigrationFileWhereInput;
    /**
     * Limit how many MigrationFiles to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.MigrationFileIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * MigrationFile upsert
 */
export type MigrationFileUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MigrationFile
     */
    select?: Prisma.MigrationFileSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MigrationFile
     */
    omit?: Prisma.MigrationFileOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.MigrationFileInclude<ExtArgs> | null;
    /**
     * The filter to search for the MigrationFile to update in case it exists.
     */
    where: Prisma.MigrationFileWhereUniqueInput;
    /**
     * In case the MigrationFile found by the `where` argument doesn't exist, create a new MigrationFile with this data.
     */
    create: Prisma.XOR<Prisma.MigrationFileCreateInput, Prisma.MigrationFileUncheckedCreateInput>;
    /**
     * In case the MigrationFile was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.MigrationFileUpdateInput, Prisma.MigrationFileUncheckedUpdateInput>;
};
/**
 * MigrationFile delete
 */
export type MigrationFileDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MigrationFile
     */
    select?: Prisma.MigrationFileSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MigrationFile
     */
    omit?: Prisma.MigrationFileOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.MigrationFileInclude<ExtArgs> | null;
    /**
     * Filter which MigrationFile to delete.
     */
    where: Prisma.MigrationFileWhereUniqueInput;
};
/**
 * MigrationFile deleteMany
 */
export type MigrationFileDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which MigrationFiles to delete
     */
    where?: Prisma.MigrationFileWhereInput;
    /**
     * Limit how many MigrationFiles to delete.
     */
    limit?: number;
};
/**
 * MigrationFile without action
 */
export type MigrationFileDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MigrationFile
     */
    select?: Prisma.MigrationFileSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MigrationFile
     */
    omit?: Prisma.MigrationFileOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.MigrationFileInclude<ExtArgs> | null;
};
export {};
//# sourceMappingURL=MigrationFile.d.ts.map