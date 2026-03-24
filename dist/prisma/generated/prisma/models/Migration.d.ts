import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums";
import type * as Prisma from "../internal/prismaNamespace";
/**
 * Model Migration
 *
 */
export type MigrationModel = runtime.Types.Result.DefaultSelection<Prisma.$MigrationPayload>;
export type AggregateMigration = {
    _count: MigrationCountAggregateOutputType | null;
    _avg: MigrationAvgAggregateOutputType | null;
    _sum: MigrationSumAggregateOutputType | null;
    _min: MigrationMinAggregateOutputType | null;
    _max: MigrationMaxAggregateOutputType | null;
};
export type MigrationAvgAggregateOutputType = {
    totalFiles: number | null;
    completedFiles: number | null;
    failedFiles: number | null;
};
export type MigrationSumAggregateOutputType = {
    totalFiles: number | null;
    completedFiles: number | null;
    failedFiles: number | null;
};
export type MigrationMinAggregateOutputType = {
    id: string | null;
    status: $Enums.MigrationStatus | null;
    sourceAdapterId: string | null;
    destinationAdapterId: string | null;
    totalFiles: number | null;
    completedFiles: number | null;
    failedFiles: number | null;
    userId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type MigrationMaxAggregateOutputType = {
    id: string | null;
    status: $Enums.MigrationStatus | null;
    sourceAdapterId: string | null;
    destinationAdapterId: string | null;
    totalFiles: number | null;
    completedFiles: number | null;
    failedFiles: number | null;
    userId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type MigrationCountAggregateOutputType = {
    id: number;
    status: number;
    sourceAdapterId: number;
    destinationAdapterId: number;
    totalFiles: number;
    completedFiles: number;
    failedFiles: number;
    userId: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type MigrationAvgAggregateInputType = {
    totalFiles?: true;
    completedFiles?: true;
    failedFiles?: true;
};
export type MigrationSumAggregateInputType = {
    totalFiles?: true;
    completedFiles?: true;
    failedFiles?: true;
};
export type MigrationMinAggregateInputType = {
    id?: true;
    status?: true;
    sourceAdapterId?: true;
    destinationAdapterId?: true;
    totalFiles?: true;
    completedFiles?: true;
    failedFiles?: true;
    userId?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type MigrationMaxAggregateInputType = {
    id?: true;
    status?: true;
    sourceAdapterId?: true;
    destinationAdapterId?: true;
    totalFiles?: true;
    completedFiles?: true;
    failedFiles?: true;
    userId?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type MigrationCountAggregateInputType = {
    id?: true;
    status?: true;
    sourceAdapterId?: true;
    destinationAdapterId?: true;
    totalFiles?: true;
    completedFiles?: true;
    failedFiles?: true;
    userId?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type MigrationAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Migration to aggregate.
     */
    where?: Prisma.MigrationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Migrations to fetch.
     */
    orderBy?: Prisma.MigrationOrderByWithRelationInput | Prisma.MigrationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.MigrationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Migrations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Migrations.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Migrations
    **/
    _count?: true | MigrationCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: MigrationAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: MigrationSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: MigrationMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: MigrationMaxAggregateInputType;
};
export type GetMigrationAggregateType<T extends MigrationAggregateArgs> = {
    [P in keyof T & keyof AggregateMigration]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateMigration[P]> : Prisma.GetScalarType<T[P], AggregateMigration[P]>;
};
export type MigrationGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MigrationWhereInput;
    orderBy?: Prisma.MigrationOrderByWithAggregationInput | Prisma.MigrationOrderByWithAggregationInput[];
    by: Prisma.MigrationScalarFieldEnum[] | Prisma.MigrationScalarFieldEnum;
    having?: Prisma.MigrationScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: MigrationCountAggregateInputType | true;
    _avg?: MigrationAvgAggregateInputType;
    _sum?: MigrationSumAggregateInputType;
    _min?: MigrationMinAggregateInputType;
    _max?: MigrationMaxAggregateInputType;
};
export type MigrationGroupByOutputType = {
    id: string;
    status: $Enums.MigrationStatus;
    sourceAdapterId: string;
    destinationAdapterId: string;
    totalFiles: number;
    completedFiles: number;
    failedFiles: number;
    userId: string;
    createdAt: Date;
    updatedAt: Date;
    _count: MigrationCountAggregateOutputType | null;
    _avg: MigrationAvgAggregateOutputType | null;
    _sum: MigrationSumAggregateOutputType | null;
    _min: MigrationMinAggregateOutputType | null;
    _max: MigrationMaxAggregateOutputType | null;
};
type GetMigrationGroupByPayload<T extends MigrationGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<MigrationGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof MigrationGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], MigrationGroupByOutputType[P]> : Prisma.GetScalarType<T[P], MigrationGroupByOutputType[P]>;
}>>;
export type MigrationWhereInput = {
    AND?: Prisma.MigrationWhereInput | Prisma.MigrationWhereInput[];
    OR?: Prisma.MigrationWhereInput[];
    NOT?: Prisma.MigrationWhereInput | Prisma.MigrationWhereInput[];
    id?: Prisma.StringFilter<"Migration"> | string;
    status?: Prisma.EnumMigrationStatusFilter<"Migration"> | $Enums.MigrationStatus;
    sourceAdapterId?: Prisma.StringFilter<"Migration"> | string;
    destinationAdapterId?: Prisma.StringFilter<"Migration"> | string;
    totalFiles?: Prisma.IntFilter<"Migration"> | number;
    completedFiles?: Prisma.IntFilter<"Migration"> | number;
    failedFiles?: Prisma.IntFilter<"Migration"> | number;
    userId?: Prisma.StringFilter<"Migration"> | string;
    createdAt?: Prisma.DateTimeFilter<"Migration"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Migration"> | Date | string;
    selections?: Prisma.MigrationSelectionListRelationFilter;
    files?: Prisma.MigrationFileListRelationFilter;
    sourceAdapter?: Prisma.XOR<Prisma.AdapterScalarRelationFilter, Prisma.AdapterWhereInput>;
    destinationAdapter?: Prisma.XOR<Prisma.AdapterScalarRelationFilter, Prisma.AdapterWhereInput>;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
};
export type MigrationOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    sourceAdapterId?: Prisma.SortOrder;
    destinationAdapterId?: Prisma.SortOrder;
    totalFiles?: Prisma.SortOrder;
    completedFiles?: Prisma.SortOrder;
    failedFiles?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    selections?: Prisma.MigrationSelectionOrderByRelationAggregateInput;
    files?: Prisma.MigrationFileOrderByRelationAggregateInput;
    sourceAdapter?: Prisma.AdapterOrderByWithRelationInput;
    destinationAdapter?: Prisma.AdapterOrderByWithRelationInput;
    user?: Prisma.UserOrderByWithRelationInput;
};
export type MigrationWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.MigrationWhereInput | Prisma.MigrationWhereInput[];
    OR?: Prisma.MigrationWhereInput[];
    NOT?: Prisma.MigrationWhereInput | Prisma.MigrationWhereInput[];
    status?: Prisma.EnumMigrationStatusFilter<"Migration"> | $Enums.MigrationStatus;
    sourceAdapterId?: Prisma.StringFilter<"Migration"> | string;
    destinationAdapterId?: Prisma.StringFilter<"Migration"> | string;
    totalFiles?: Prisma.IntFilter<"Migration"> | number;
    completedFiles?: Prisma.IntFilter<"Migration"> | number;
    failedFiles?: Prisma.IntFilter<"Migration"> | number;
    userId?: Prisma.StringFilter<"Migration"> | string;
    createdAt?: Prisma.DateTimeFilter<"Migration"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Migration"> | Date | string;
    selections?: Prisma.MigrationSelectionListRelationFilter;
    files?: Prisma.MigrationFileListRelationFilter;
    sourceAdapter?: Prisma.XOR<Prisma.AdapterScalarRelationFilter, Prisma.AdapterWhereInput>;
    destinationAdapter?: Prisma.XOR<Prisma.AdapterScalarRelationFilter, Prisma.AdapterWhereInput>;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
}, "id">;
export type MigrationOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    sourceAdapterId?: Prisma.SortOrder;
    destinationAdapterId?: Prisma.SortOrder;
    totalFiles?: Prisma.SortOrder;
    completedFiles?: Prisma.SortOrder;
    failedFiles?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.MigrationCountOrderByAggregateInput;
    _avg?: Prisma.MigrationAvgOrderByAggregateInput;
    _max?: Prisma.MigrationMaxOrderByAggregateInput;
    _min?: Prisma.MigrationMinOrderByAggregateInput;
    _sum?: Prisma.MigrationSumOrderByAggregateInput;
};
export type MigrationScalarWhereWithAggregatesInput = {
    AND?: Prisma.MigrationScalarWhereWithAggregatesInput | Prisma.MigrationScalarWhereWithAggregatesInput[];
    OR?: Prisma.MigrationScalarWhereWithAggregatesInput[];
    NOT?: Prisma.MigrationScalarWhereWithAggregatesInput | Prisma.MigrationScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Migration"> | string;
    status?: Prisma.EnumMigrationStatusWithAggregatesFilter<"Migration"> | $Enums.MigrationStatus;
    sourceAdapterId?: Prisma.StringWithAggregatesFilter<"Migration"> | string;
    destinationAdapterId?: Prisma.StringWithAggregatesFilter<"Migration"> | string;
    totalFiles?: Prisma.IntWithAggregatesFilter<"Migration"> | number;
    completedFiles?: Prisma.IntWithAggregatesFilter<"Migration"> | number;
    failedFiles?: Prisma.IntWithAggregatesFilter<"Migration"> | number;
    userId?: Prisma.StringWithAggregatesFilter<"Migration"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Migration"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Migration"> | Date | string;
};
export type MigrationCreateInput = {
    id?: string;
    status: $Enums.MigrationStatus;
    totalFiles?: number;
    completedFiles?: number;
    failedFiles?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    selections?: Prisma.MigrationSelectionCreateNestedManyWithoutMigrationInput;
    files?: Prisma.MigrationFileCreateNestedManyWithoutMigrationInput;
    sourceAdapter: Prisma.AdapterCreateNestedOneWithoutSourceMigrationsInput;
    destinationAdapter: Prisma.AdapterCreateNestedOneWithoutDestinationMigrationsInput;
    user: Prisma.UserCreateNestedOneWithoutMigrationsInput;
};
export type MigrationUncheckedCreateInput = {
    id?: string;
    status: $Enums.MigrationStatus;
    sourceAdapterId: string;
    destinationAdapterId: string;
    totalFiles?: number;
    completedFiles?: number;
    failedFiles?: number;
    userId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    selections?: Prisma.MigrationSelectionUncheckedCreateNestedManyWithoutMigrationInput;
    files?: Prisma.MigrationFileUncheckedCreateNestedManyWithoutMigrationInput;
};
export type MigrationUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumMigrationStatusFieldUpdateOperationsInput | $Enums.MigrationStatus;
    totalFiles?: Prisma.IntFieldUpdateOperationsInput | number;
    completedFiles?: Prisma.IntFieldUpdateOperationsInput | number;
    failedFiles?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    selections?: Prisma.MigrationSelectionUpdateManyWithoutMigrationNestedInput;
    files?: Prisma.MigrationFileUpdateManyWithoutMigrationNestedInput;
    sourceAdapter?: Prisma.AdapterUpdateOneRequiredWithoutSourceMigrationsNestedInput;
    destinationAdapter?: Prisma.AdapterUpdateOneRequiredWithoutDestinationMigrationsNestedInput;
    user?: Prisma.UserUpdateOneRequiredWithoutMigrationsNestedInput;
};
export type MigrationUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumMigrationStatusFieldUpdateOperationsInput | $Enums.MigrationStatus;
    sourceAdapterId?: Prisma.StringFieldUpdateOperationsInput | string;
    destinationAdapterId?: Prisma.StringFieldUpdateOperationsInput | string;
    totalFiles?: Prisma.IntFieldUpdateOperationsInput | number;
    completedFiles?: Prisma.IntFieldUpdateOperationsInput | number;
    failedFiles?: Prisma.IntFieldUpdateOperationsInput | number;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    selections?: Prisma.MigrationSelectionUncheckedUpdateManyWithoutMigrationNestedInput;
    files?: Prisma.MigrationFileUncheckedUpdateManyWithoutMigrationNestedInput;
};
export type MigrationCreateManyInput = {
    id?: string;
    status: $Enums.MigrationStatus;
    sourceAdapterId: string;
    destinationAdapterId: string;
    totalFiles?: number;
    completedFiles?: number;
    failedFiles?: number;
    userId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type MigrationUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumMigrationStatusFieldUpdateOperationsInput | $Enums.MigrationStatus;
    totalFiles?: Prisma.IntFieldUpdateOperationsInput | number;
    completedFiles?: Prisma.IntFieldUpdateOperationsInput | number;
    failedFiles?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MigrationUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumMigrationStatusFieldUpdateOperationsInput | $Enums.MigrationStatus;
    sourceAdapterId?: Prisma.StringFieldUpdateOperationsInput | string;
    destinationAdapterId?: Prisma.StringFieldUpdateOperationsInput | string;
    totalFiles?: Prisma.IntFieldUpdateOperationsInput | number;
    completedFiles?: Prisma.IntFieldUpdateOperationsInput | number;
    failedFiles?: Prisma.IntFieldUpdateOperationsInput | number;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MigrationListRelationFilter = {
    every?: Prisma.MigrationWhereInput;
    some?: Prisma.MigrationWhereInput;
    none?: Prisma.MigrationWhereInput;
};
export type MigrationOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type MigrationCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    sourceAdapterId?: Prisma.SortOrder;
    destinationAdapterId?: Prisma.SortOrder;
    totalFiles?: Prisma.SortOrder;
    completedFiles?: Prisma.SortOrder;
    failedFiles?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type MigrationAvgOrderByAggregateInput = {
    totalFiles?: Prisma.SortOrder;
    completedFiles?: Prisma.SortOrder;
    failedFiles?: Prisma.SortOrder;
};
export type MigrationMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    sourceAdapterId?: Prisma.SortOrder;
    destinationAdapterId?: Prisma.SortOrder;
    totalFiles?: Prisma.SortOrder;
    completedFiles?: Prisma.SortOrder;
    failedFiles?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type MigrationMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    sourceAdapterId?: Prisma.SortOrder;
    destinationAdapterId?: Prisma.SortOrder;
    totalFiles?: Prisma.SortOrder;
    completedFiles?: Prisma.SortOrder;
    failedFiles?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type MigrationSumOrderByAggregateInput = {
    totalFiles?: Prisma.SortOrder;
    completedFiles?: Prisma.SortOrder;
    failedFiles?: Prisma.SortOrder;
};
export type MigrationScalarRelationFilter = {
    is?: Prisma.MigrationWhereInput;
    isNot?: Prisma.MigrationWhereInput;
};
export type MigrationCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.MigrationCreateWithoutUserInput, Prisma.MigrationUncheckedCreateWithoutUserInput> | Prisma.MigrationCreateWithoutUserInput[] | Prisma.MigrationUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.MigrationCreateOrConnectWithoutUserInput | Prisma.MigrationCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.MigrationCreateManyUserInputEnvelope;
    connect?: Prisma.MigrationWhereUniqueInput | Prisma.MigrationWhereUniqueInput[];
};
export type MigrationUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.MigrationCreateWithoutUserInput, Prisma.MigrationUncheckedCreateWithoutUserInput> | Prisma.MigrationCreateWithoutUserInput[] | Prisma.MigrationUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.MigrationCreateOrConnectWithoutUserInput | Prisma.MigrationCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.MigrationCreateManyUserInputEnvelope;
    connect?: Prisma.MigrationWhereUniqueInput | Prisma.MigrationWhereUniqueInput[];
};
export type MigrationUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.MigrationCreateWithoutUserInput, Prisma.MigrationUncheckedCreateWithoutUserInput> | Prisma.MigrationCreateWithoutUserInput[] | Prisma.MigrationUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.MigrationCreateOrConnectWithoutUserInput | Prisma.MigrationCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.MigrationUpsertWithWhereUniqueWithoutUserInput | Prisma.MigrationUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.MigrationCreateManyUserInputEnvelope;
    set?: Prisma.MigrationWhereUniqueInput | Prisma.MigrationWhereUniqueInput[];
    disconnect?: Prisma.MigrationWhereUniqueInput | Prisma.MigrationWhereUniqueInput[];
    delete?: Prisma.MigrationWhereUniqueInput | Prisma.MigrationWhereUniqueInput[];
    connect?: Prisma.MigrationWhereUniqueInput | Prisma.MigrationWhereUniqueInput[];
    update?: Prisma.MigrationUpdateWithWhereUniqueWithoutUserInput | Prisma.MigrationUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.MigrationUpdateManyWithWhereWithoutUserInput | Prisma.MigrationUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.MigrationScalarWhereInput | Prisma.MigrationScalarWhereInput[];
};
export type MigrationUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.MigrationCreateWithoutUserInput, Prisma.MigrationUncheckedCreateWithoutUserInput> | Prisma.MigrationCreateWithoutUserInput[] | Prisma.MigrationUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.MigrationCreateOrConnectWithoutUserInput | Prisma.MigrationCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.MigrationUpsertWithWhereUniqueWithoutUserInput | Prisma.MigrationUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.MigrationCreateManyUserInputEnvelope;
    set?: Prisma.MigrationWhereUniqueInput | Prisma.MigrationWhereUniqueInput[];
    disconnect?: Prisma.MigrationWhereUniqueInput | Prisma.MigrationWhereUniqueInput[];
    delete?: Prisma.MigrationWhereUniqueInput | Prisma.MigrationWhereUniqueInput[];
    connect?: Prisma.MigrationWhereUniqueInput | Prisma.MigrationWhereUniqueInput[];
    update?: Prisma.MigrationUpdateWithWhereUniqueWithoutUserInput | Prisma.MigrationUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.MigrationUpdateManyWithWhereWithoutUserInput | Prisma.MigrationUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.MigrationScalarWhereInput | Prisma.MigrationScalarWhereInput[];
};
export type MigrationCreateNestedManyWithoutSourceAdapterInput = {
    create?: Prisma.XOR<Prisma.MigrationCreateWithoutSourceAdapterInput, Prisma.MigrationUncheckedCreateWithoutSourceAdapterInput> | Prisma.MigrationCreateWithoutSourceAdapterInput[] | Prisma.MigrationUncheckedCreateWithoutSourceAdapterInput[];
    connectOrCreate?: Prisma.MigrationCreateOrConnectWithoutSourceAdapterInput | Prisma.MigrationCreateOrConnectWithoutSourceAdapterInput[];
    createMany?: Prisma.MigrationCreateManySourceAdapterInputEnvelope;
    connect?: Prisma.MigrationWhereUniqueInput | Prisma.MigrationWhereUniqueInput[];
};
export type MigrationCreateNestedManyWithoutDestinationAdapterInput = {
    create?: Prisma.XOR<Prisma.MigrationCreateWithoutDestinationAdapterInput, Prisma.MigrationUncheckedCreateWithoutDestinationAdapterInput> | Prisma.MigrationCreateWithoutDestinationAdapterInput[] | Prisma.MigrationUncheckedCreateWithoutDestinationAdapterInput[];
    connectOrCreate?: Prisma.MigrationCreateOrConnectWithoutDestinationAdapterInput | Prisma.MigrationCreateOrConnectWithoutDestinationAdapterInput[];
    createMany?: Prisma.MigrationCreateManyDestinationAdapterInputEnvelope;
    connect?: Prisma.MigrationWhereUniqueInput | Prisma.MigrationWhereUniqueInput[];
};
export type MigrationUncheckedCreateNestedManyWithoutSourceAdapterInput = {
    create?: Prisma.XOR<Prisma.MigrationCreateWithoutSourceAdapterInput, Prisma.MigrationUncheckedCreateWithoutSourceAdapterInput> | Prisma.MigrationCreateWithoutSourceAdapterInput[] | Prisma.MigrationUncheckedCreateWithoutSourceAdapterInput[];
    connectOrCreate?: Prisma.MigrationCreateOrConnectWithoutSourceAdapterInput | Prisma.MigrationCreateOrConnectWithoutSourceAdapterInput[];
    createMany?: Prisma.MigrationCreateManySourceAdapterInputEnvelope;
    connect?: Prisma.MigrationWhereUniqueInput | Prisma.MigrationWhereUniqueInput[];
};
export type MigrationUncheckedCreateNestedManyWithoutDestinationAdapterInput = {
    create?: Prisma.XOR<Prisma.MigrationCreateWithoutDestinationAdapterInput, Prisma.MigrationUncheckedCreateWithoutDestinationAdapterInput> | Prisma.MigrationCreateWithoutDestinationAdapterInput[] | Prisma.MigrationUncheckedCreateWithoutDestinationAdapterInput[];
    connectOrCreate?: Prisma.MigrationCreateOrConnectWithoutDestinationAdapterInput | Prisma.MigrationCreateOrConnectWithoutDestinationAdapterInput[];
    createMany?: Prisma.MigrationCreateManyDestinationAdapterInputEnvelope;
    connect?: Prisma.MigrationWhereUniqueInput | Prisma.MigrationWhereUniqueInput[];
};
export type MigrationUpdateManyWithoutSourceAdapterNestedInput = {
    create?: Prisma.XOR<Prisma.MigrationCreateWithoutSourceAdapterInput, Prisma.MigrationUncheckedCreateWithoutSourceAdapterInput> | Prisma.MigrationCreateWithoutSourceAdapterInput[] | Prisma.MigrationUncheckedCreateWithoutSourceAdapterInput[];
    connectOrCreate?: Prisma.MigrationCreateOrConnectWithoutSourceAdapterInput | Prisma.MigrationCreateOrConnectWithoutSourceAdapterInput[];
    upsert?: Prisma.MigrationUpsertWithWhereUniqueWithoutSourceAdapterInput | Prisma.MigrationUpsertWithWhereUniqueWithoutSourceAdapterInput[];
    createMany?: Prisma.MigrationCreateManySourceAdapterInputEnvelope;
    set?: Prisma.MigrationWhereUniqueInput | Prisma.MigrationWhereUniqueInput[];
    disconnect?: Prisma.MigrationWhereUniqueInput | Prisma.MigrationWhereUniqueInput[];
    delete?: Prisma.MigrationWhereUniqueInput | Prisma.MigrationWhereUniqueInput[];
    connect?: Prisma.MigrationWhereUniqueInput | Prisma.MigrationWhereUniqueInput[];
    update?: Prisma.MigrationUpdateWithWhereUniqueWithoutSourceAdapterInput | Prisma.MigrationUpdateWithWhereUniqueWithoutSourceAdapterInput[];
    updateMany?: Prisma.MigrationUpdateManyWithWhereWithoutSourceAdapterInput | Prisma.MigrationUpdateManyWithWhereWithoutSourceAdapterInput[];
    deleteMany?: Prisma.MigrationScalarWhereInput | Prisma.MigrationScalarWhereInput[];
};
export type MigrationUpdateManyWithoutDestinationAdapterNestedInput = {
    create?: Prisma.XOR<Prisma.MigrationCreateWithoutDestinationAdapterInput, Prisma.MigrationUncheckedCreateWithoutDestinationAdapterInput> | Prisma.MigrationCreateWithoutDestinationAdapterInput[] | Prisma.MigrationUncheckedCreateWithoutDestinationAdapterInput[];
    connectOrCreate?: Prisma.MigrationCreateOrConnectWithoutDestinationAdapterInput | Prisma.MigrationCreateOrConnectWithoutDestinationAdapterInput[];
    upsert?: Prisma.MigrationUpsertWithWhereUniqueWithoutDestinationAdapterInput | Prisma.MigrationUpsertWithWhereUniqueWithoutDestinationAdapterInput[];
    createMany?: Prisma.MigrationCreateManyDestinationAdapterInputEnvelope;
    set?: Prisma.MigrationWhereUniqueInput | Prisma.MigrationWhereUniqueInput[];
    disconnect?: Prisma.MigrationWhereUniqueInput | Prisma.MigrationWhereUniqueInput[];
    delete?: Prisma.MigrationWhereUniqueInput | Prisma.MigrationWhereUniqueInput[];
    connect?: Prisma.MigrationWhereUniqueInput | Prisma.MigrationWhereUniqueInput[];
    update?: Prisma.MigrationUpdateWithWhereUniqueWithoutDestinationAdapterInput | Prisma.MigrationUpdateWithWhereUniqueWithoutDestinationAdapterInput[];
    updateMany?: Prisma.MigrationUpdateManyWithWhereWithoutDestinationAdapterInput | Prisma.MigrationUpdateManyWithWhereWithoutDestinationAdapterInput[];
    deleteMany?: Prisma.MigrationScalarWhereInput | Prisma.MigrationScalarWhereInput[];
};
export type MigrationUncheckedUpdateManyWithoutSourceAdapterNestedInput = {
    create?: Prisma.XOR<Prisma.MigrationCreateWithoutSourceAdapterInput, Prisma.MigrationUncheckedCreateWithoutSourceAdapterInput> | Prisma.MigrationCreateWithoutSourceAdapterInput[] | Prisma.MigrationUncheckedCreateWithoutSourceAdapterInput[];
    connectOrCreate?: Prisma.MigrationCreateOrConnectWithoutSourceAdapterInput | Prisma.MigrationCreateOrConnectWithoutSourceAdapterInput[];
    upsert?: Prisma.MigrationUpsertWithWhereUniqueWithoutSourceAdapterInput | Prisma.MigrationUpsertWithWhereUniqueWithoutSourceAdapterInput[];
    createMany?: Prisma.MigrationCreateManySourceAdapterInputEnvelope;
    set?: Prisma.MigrationWhereUniqueInput | Prisma.MigrationWhereUniqueInput[];
    disconnect?: Prisma.MigrationWhereUniqueInput | Prisma.MigrationWhereUniqueInput[];
    delete?: Prisma.MigrationWhereUniqueInput | Prisma.MigrationWhereUniqueInput[];
    connect?: Prisma.MigrationWhereUniqueInput | Prisma.MigrationWhereUniqueInput[];
    update?: Prisma.MigrationUpdateWithWhereUniqueWithoutSourceAdapterInput | Prisma.MigrationUpdateWithWhereUniqueWithoutSourceAdapterInput[];
    updateMany?: Prisma.MigrationUpdateManyWithWhereWithoutSourceAdapterInput | Prisma.MigrationUpdateManyWithWhereWithoutSourceAdapterInput[];
    deleteMany?: Prisma.MigrationScalarWhereInput | Prisma.MigrationScalarWhereInput[];
};
export type MigrationUncheckedUpdateManyWithoutDestinationAdapterNestedInput = {
    create?: Prisma.XOR<Prisma.MigrationCreateWithoutDestinationAdapterInput, Prisma.MigrationUncheckedCreateWithoutDestinationAdapterInput> | Prisma.MigrationCreateWithoutDestinationAdapterInput[] | Prisma.MigrationUncheckedCreateWithoutDestinationAdapterInput[];
    connectOrCreate?: Prisma.MigrationCreateOrConnectWithoutDestinationAdapterInput | Prisma.MigrationCreateOrConnectWithoutDestinationAdapterInput[];
    upsert?: Prisma.MigrationUpsertWithWhereUniqueWithoutDestinationAdapterInput | Prisma.MigrationUpsertWithWhereUniqueWithoutDestinationAdapterInput[];
    createMany?: Prisma.MigrationCreateManyDestinationAdapterInputEnvelope;
    set?: Prisma.MigrationWhereUniqueInput | Prisma.MigrationWhereUniqueInput[];
    disconnect?: Prisma.MigrationWhereUniqueInput | Prisma.MigrationWhereUniqueInput[];
    delete?: Prisma.MigrationWhereUniqueInput | Prisma.MigrationWhereUniqueInput[];
    connect?: Prisma.MigrationWhereUniqueInput | Prisma.MigrationWhereUniqueInput[];
    update?: Prisma.MigrationUpdateWithWhereUniqueWithoutDestinationAdapterInput | Prisma.MigrationUpdateWithWhereUniqueWithoutDestinationAdapterInput[];
    updateMany?: Prisma.MigrationUpdateManyWithWhereWithoutDestinationAdapterInput | Prisma.MigrationUpdateManyWithWhereWithoutDestinationAdapterInput[];
    deleteMany?: Prisma.MigrationScalarWhereInput | Prisma.MigrationScalarWhereInput[];
};
export type EnumMigrationStatusFieldUpdateOperationsInput = {
    set?: $Enums.MigrationStatus;
};
export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type MigrationCreateNestedOneWithoutSelectionsInput = {
    create?: Prisma.XOR<Prisma.MigrationCreateWithoutSelectionsInput, Prisma.MigrationUncheckedCreateWithoutSelectionsInput>;
    connectOrCreate?: Prisma.MigrationCreateOrConnectWithoutSelectionsInput;
    connect?: Prisma.MigrationWhereUniqueInput;
};
export type MigrationUpdateOneRequiredWithoutSelectionsNestedInput = {
    create?: Prisma.XOR<Prisma.MigrationCreateWithoutSelectionsInput, Prisma.MigrationUncheckedCreateWithoutSelectionsInput>;
    connectOrCreate?: Prisma.MigrationCreateOrConnectWithoutSelectionsInput;
    upsert?: Prisma.MigrationUpsertWithoutSelectionsInput;
    connect?: Prisma.MigrationWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.MigrationUpdateToOneWithWhereWithoutSelectionsInput, Prisma.MigrationUpdateWithoutSelectionsInput>, Prisma.MigrationUncheckedUpdateWithoutSelectionsInput>;
};
export type MigrationCreateNestedOneWithoutFilesInput = {
    create?: Prisma.XOR<Prisma.MigrationCreateWithoutFilesInput, Prisma.MigrationUncheckedCreateWithoutFilesInput>;
    connectOrCreate?: Prisma.MigrationCreateOrConnectWithoutFilesInput;
    connect?: Prisma.MigrationWhereUniqueInput;
};
export type MigrationUpdateOneRequiredWithoutFilesNestedInput = {
    create?: Prisma.XOR<Prisma.MigrationCreateWithoutFilesInput, Prisma.MigrationUncheckedCreateWithoutFilesInput>;
    connectOrCreate?: Prisma.MigrationCreateOrConnectWithoutFilesInput;
    upsert?: Prisma.MigrationUpsertWithoutFilesInput;
    connect?: Prisma.MigrationWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.MigrationUpdateToOneWithWhereWithoutFilesInput, Prisma.MigrationUpdateWithoutFilesInput>, Prisma.MigrationUncheckedUpdateWithoutFilesInput>;
};
export type MigrationCreateWithoutUserInput = {
    id?: string;
    status: $Enums.MigrationStatus;
    totalFiles?: number;
    completedFiles?: number;
    failedFiles?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    selections?: Prisma.MigrationSelectionCreateNestedManyWithoutMigrationInput;
    files?: Prisma.MigrationFileCreateNestedManyWithoutMigrationInput;
    sourceAdapter: Prisma.AdapterCreateNestedOneWithoutSourceMigrationsInput;
    destinationAdapter: Prisma.AdapterCreateNestedOneWithoutDestinationMigrationsInput;
};
export type MigrationUncheckedCreateWithoutUserInput = {
    id?: string;
    status: $Enums.MigrationStatus;
    sourceAdapterId: string;
    destinationAdapterId: string;
    totalFiles?: number;
    completedFiles?: number;
    failedFiles?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    selections?: Prisma.MigrationSelectionUncheckedCreateNestedManyWithoutMigrationInput;
    files?: Prisma.MigrationFileUncheckedCreateNestedManyWithoutMigrationInput;
};
export type MigrationCreateOrConnectWithoutUserInput = {
    where: Prisma.MigrationWhereUniqueInput;
    create: Prisma.XOR<Prisma.MigrationCreateWithoutUserInput, Prisma.MigrationUncheckedCreateWithoutUserInput>;
};
export type MigrationCreateManyUserInputEnvelope = {
    data: Prisma.MigrationCreateManyUserInput | Prisma.MigrationCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type MigrationUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.MigrationWhereUniqueInput;
    update: Prisma.XOR<Prisma.MigrationUpdateWithoutUserInput, Prisma.MigrationUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.MigrationCreateWithoutUserInput, Prisma.MigrationUncheckedCreateWithoutUserInput>;
};
export type MigrationUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.MigrationWhereUniqueInput;
    data: Prisma.XOR<Prisma.MigrationUpdateWithoutUserInput, Prisma.MigrationUncheckedUpdateWithoutUserInput>;
};
export type MigrationUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.MigrationScalarWhereInput;
    data: Prisma.XOR<Prisma.MigrationUpdateManyMutationInput, Prisma.MigrationUncheckedUpdateManyWithoutUserInput>;
};
export type MigrationScalarWhereInput = {
    AND?: Prisma.MigrationScalarWhereInput | Prisma.MigrationScalarWhereInput[];
    OR?: Prisma.MigrationScalarWhereInput[];
    NOT?: Prisma.MigrationScalarWhereInput | Prisma.MigrationScalarWhereInput[];
    id?: Prisma.StringFilter<"Migration"> | string;
    status?: Prisma.EnumMigrationStatusFilter<"Migration"> | $Enums.MigrationStatus;
    sourceAdapterId?: Prisma.StringFilter<"Migration"> | string;
    destinationAdapterId?: Prisma.StringFilter<"Migration"> | string;
    totalFiles?: Prisma.IntFilter<"Migration"> | number;
    completedFiles?: Prisma.IntFilter<"Migration"> | number;
    failedFiles?: Prisma.IntFilter<"Migration"> | number;
    userId?: Prisma.StringFilter<"Migration"> | string;
    createdAt?: Prisma.DateTimeFilter<"Migration"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Migration"> | Date | string;
};
export type MigrationCreateWithoutSourceAdapterInput = {
    id?: string;
    status: $Enums.MigrationStatus;
    totalFiles?: number;
    completedFiles?: number;
    failedFiles?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    selections?: Prisma.MigrationSelectionCreateNestedManyWithoutMigrationInput;
    files?: Prisma.MigrationFileCreateNestedManyWithoutMigrationInput;
    destinationAdapter: Prisma.AdapterCreateNestedOneWithoutDestinationMigrationsInput;
    user: Prisma.UserCreateNestedOneWithoutMigrationsInput;
};
export type MigrationUncheckedCreateWithoutSourceAdapterInput = {
    id?: string;
    status: $Enums.MigrationStatus;
    destinationAdapterId: string;
    totalFiles?: number;
    completedFiles?: number;
    failedFiles?: number;
    userId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    selections?: Prisma.MigrationSelectionUncheckedCreateNestedManyWithoutMigrationInput;
    files?: Prisma.MigrationFileUncheckedCreateNestedManyWithoutMigrationInput;
};
export type MigrationCreateOrConnectWithoutSourceAdapterInput = {
    where: Prisma.MigrationWhereUniqueInput;
    create: Prisma.XOR<Prisma.MigrationCreateWithoutSourceAdapterInput, Prisma.MigrationUncheckedCreateWithoutSourceAdapterInput>;
};
export type MigrationCreateManySourceAdapterInputEnvelope = {
    data: Prisma.MigrationCreateManySourceAdapterInput | Prisma.MigrationCreateManySourceAdapterInput[];
    skipDuplicates?: boolean;
};
export type MigrationCreateWithoutDestinationAdapterInput = {
    id?: string;
    status: $Enums.MigrationStatus;
    totalFiles?: number;
    completedFiles?: number;
    failedFiles?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    selections?: Prisma.MigrationSelectionCreateNestedManyWithoutMigrationInput;
    files?: Prisma.MigrationFileCreateNestedManyWithoutMigrationInput;
    sourceAdapter: Prisma.AdapterCreateNestedOneWithoutSourceMigrationsInput;
    user: Prisma.UserCreateNestedOneWithoutMigrationsInput;
};
export type MigrationUncheckedCreateWithoutDestinationAdapterInput = {
    id?: string;
    status: $Enums.MigrationStatus;
    sourceAdapterId: string;
    totalFiles?: number;
    completedFiles?: number;
    failedFiles?: number;
    userId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    selections?: Prisma.MigrationSelectionUncheckedCreateNestedManyWithoutMigrationInput;
    files?: Prisma.MigrationFileUncheckedCreateNestedManyWithoutMigrationInput;
};
export type MigrationCreateOrConnectWithoutDestinationAdapterInput = {
    where: Prisma.MigrationWhereUniqueInput;
    create: Prisma.XOR<Prisma.MigrationCreateWithoutDestinationAdapterInput, Prisma.MigrationUncheckedCreateWithoutDestinationAdapterInput>;
};
export type MigrationCreateManyDestinationAdapterInputEnvelope = {
    data: Prisma.MigrationCreateManyDestinationAdapterInput | Prisma.MigrationCreateManyDestinationAdapterInput[];
    skipDuplicates?: boolean;
};
export type MigrationUpsertWithWhereUniqueWithoutSourceAdapterInput = {
    where: Prisma.MigrationWhereUniqueInput;
    update: Prisma.XOR<Prisma.MigrationUpdateWithoutSourceAdapterInput, Prisma.MigrationUncheckedUpdateWithoutSourceAdapterInput>;
    create: Prisma.XOR<Prisma.MigrationCreateWithoutSourceAdapterInput, Prisma.MigrationUncheckedCreateWithoutSourceAdapterInput>;
};
export type MigrationUpdateWithWhereUniqueWithoutSourceAdapterInput = {
    where: Prisma.MigrationWhereUniqueInput;
    data: Prisma.XOR<Prisma.MigrationUpdateWithoutSourceAdapterInput, Prisma.MigrationUncheckedUpdateWithoutSourceAdapterInput>;
};
export type MigrationUpdateManyWithWhereWithoutSourceAdapterInput = {
    where: Prisma.MigrationScalarWhereInput;
    data: Prisma.XOR<Prisma.MigrationUpdateManyMutationInput, Prisma.MigrationUncheckedUpdateManyWithoutSourceAdapterInput>;
};
export type MigrationUpsertWithWhereUniqueWithoutDestinationAdapterInput = {
    where: Prisma.MigrationWhereUniqueInput;
    update: Prisma.XOR<Prisma.MigrationUpdateWithoutDestinationAdapterInput, Prisma.MigrationUncheckedUpdateWithoutDestinationAdapterInput>;
    create: Prisma.XOR<Prisma.MigrationCreateWithoutDestinationAdapterInput, Prisma.MigrationUncheckedCreateWithoutDestinationAdapterInput>;
};
export type MigrationUpdateWithWhereUniqueWithoutDestinationAdapterInput = {
    where: Prisma.MigrationWhereUniqueInput;
    data: Prisma.XOR<Prisma.MigrationUpdateWithoutDestinationAdapterInput, Prisma.MigrationUncheckedUpdateWithoutDestinationAdapterInput>;
};
export type MigrationUpdateManyWithWhereWithoutDestinationAdapterInput = {
    where: Prisma.MigrationScalarWhereInput;
    data: Prisma.XOR<Prisma.MigrationUpdateManyMutationInput, Prisma.MigrationUncheckedUpdateManyWithoutDestinationAdapterInput>;
};
export type MigrationCreateWithoutSelectionsInput = {
    id?: string;
    status: $Enums.MigrationStatus;
    totalFiles?: number;
    completedFiles?: number;
    failedFiles?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    files?: Prisma.MigrationFileCreateNestedManyWithoutMigrationInput;
    sourceAdapter: Prisma.AdapterCreateNestedOneWithoutSourceMigrationsInput;
    destinationAdapter: Prisma.AdapterCreateNestedOneWithoutDestinationMigrationsInput;
    user: Prisma.UserCreateNestedOneWithoutMigrationsInput;
};
export type MigrationUncheckedCreateWithoutSelectionsInput = {
    id?: string;
    status: $Enums.MigrationStatus;
    sourceAdapterId: string;
    destinationAdapterId: string;
    totalFiles?: number;
    completedFiles?: number;
    failedFiles?: number;
    userId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    files?: Prisma.MigrationFileUncheckedCreateNestedManyWithoutMigrationInput;
};
export type MigrationCreateOrConnectWithoutSelectionsInput = {
    where: Prisma.MigrationWhereUniqueInput;
    create: Prisma.XOR<Prisma.MigrationCreateWithoutSelectionsInput, Prisma.MigrationUncheckedCreateWithoutSelectionsInput>;
};
export type MigrationUpsertWithoutSelectionsInput = {
    update: Prisma.XOR<Prisma.MigrationUpdateWithoutSelectionsInput, Prisma.MigrationUncheckedUpdateWithoutSelectionsInput>;
    create: Prisma.XOR<Prisma.MigrationCreateWithoutSelectionsInput, Prisma.MigrationUncheckedCreateWithoutSelectionsInput>;
    where?: Prisma.MigrationWhereInput;
};
export type MigrationUpdateToOneWithWhereWithoutSelectionsInput = {
    where?: Prisma.MigrationWhereInput;
    data: Prisma.XOR<Prisma.MigrationUpdateWithoutSelectionsInput, Prisma.MigrationUncheckedUpdateWithoutSelectionsInput>;
};
export type MigrationUpdateWithoutSelectionsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumMigrationStatusFieldUpdateOperationsInput | $Enums.MigrationStatus;
    totalFiles?: Prisma.IntFieldUpdateOperationsInput | number;
    completedFiles?: Prisma.IntFieldUpdateOperationsInput | number;
    failedFiles?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    files?: Prisma.MigrationFileUpdateManyWithoutMigrationNestedInput;
    sourceAdapter?: Prisma.AdapterUpdateOneRequiredWithoutSourceMigrationsNestedInput;
    destinationAdapter?: Prisma.AdapterUpdateOneRequiredWithoutDestinationMigrationsNestedInput;
    user?: Prisma.UserUpdateOneRequiredWithoutMigrationsNestedInput;
};
export type MigrationUncheckedUpdateWithoutSelectionsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumMigrationStatusFieldUpdateOperationsInput | $Enums.MigrationStatus;
    sourceAdapterId?: Prisma.StringFieldUpdateOperationsInput | string;
    destinationAdapterId?: Prisma.StringFieldUpdateOperationsInput | string;
    totalFiles?: Prisma.IntFieldUpdateOperationsInput | number;
    completedFiles?: Prisma.IntFieldUpdateOperationsInput | number;
    failedFiles?: Prisma.IntFieldUpdateOperationsInput | number;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    files?: Prisma.MigrationFileUncheckedUpdateManyWithoutMigrationNestedInput;
};
export type MigrationCreateWithoutFilesInput = {
    id?: string;
    status: $Enums.MigrationStatus;
    totalFiles?: number;
    completedFiles?: number;
    failedFiles?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    selections?: Prisma.MigrationSelectionCreateNestedManyWithoutMigrationInput;
    sourceAdapter: Prisma.AdapterCreateNestedOneWithoutSourceMigrationsInput;
    destinationAdapter: Prisma.AdapterCreateNestedOneWithoutDestinationMigrationsInput;
    user: Prisma.UserCreateNestedOneWithoutMigrationsInput;
};
export type MigrationUncheckedCreateWithoutFilesInput = {
    id?: string;
    status: $Enums.MigrationStatus;
    sourceAdapterId: string;
    destinationAdapterId: string;
    totalFiles?: number;
    completedFiles?: number;
    failedFiles?: number;
    userId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    selections?: Prisma.MigrationSelectionUncheckedCreateNestedManyWithoutMigrationInput;
};
export type MigrationCreateOrConnectWithoutFilesInput = {
    where: Prisma.MigrationWhereUniqueInput;
    create: Prisma.XOR<Prisma.MigrationCreateWithoutFilesInput, Prisma.MigrationUncheckedCreateWithoutFilesInput>;
};
export type MigrationUpsertWithoutFilesInput = {
    update: Prisma.XOR<Prisma.MigrationUpdateWithoutFilesInput, Prisma.MigrationUncheckedUpdateWithoutFilesInput>;
    create: Prisma.XOR<Prisma.MigrationCreateWithoutFilesInput, Prisma.MigrationUncheckedCreateWithoutFilesInput>;
    where?: Prisma.MigrationWhereInput;
};
export type MigrationUpdateToOneWithWhereWithoutFilesInput = {
    where?: Prisma.MigrationWhereInput;
    data: Prisma.XOR<Prisma.MigrationUpdateWithoutFilesInput, Prisma.MigrationUncheckedUpdateWithoutFilesInput>;
};
export type MigrationUpdateWithoutFilesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumMigrationStatusFieldUpdateOperationsInput | $Enums.MigrationStatus;
    totalFiles?: Prisma.IntFieldUpdateOperationsInput | number;
    completedFiles?: Prisma.IntFieldUpdateOperationsInput | number;
    failedFiles?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    selections?: Prisma.MigrationSelectionUpdateManyWithoutMigrationNestedInput;
    sourceAdapter?: Prisma.AdapterUpdateOneRequiredWithoutSourceMigrationsNestedInput;
    destinationAdapter?: Prisma.AdapterUpdateOneRequiredWithoutDestinationMigrationsNestedInput;
    user?: Prisma.UserUpdateOneRequiredWithoutMigrationsNestedInput;
};
export type MigrationUncheckedUpdateWithoutFilesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumMigrationStatusFieldUpdateOperationsInput | $Enums.MigrationStatus;
    sourceAdapterId?: Prisma.StringFieldUpdateOperationsInput | string;
    destinationAdapterId?: Prisma.StringFieldUpdateOperationsInput | string;
    totalFiles?: Prisma.IntFieldUpdateOperationsInput | number;
    completedFiles?: Prisma.IntFieldUpdateOperationsInput | number;
    failedFiles?: Prisma.IntFieldUpdateOperationsInput | number;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    selections?: Prisma.MigrationSelectionUncheckedUpdateManyWithoutMigrationNestedInput;
};
export type MigrationCreateManyUserInput = {
    id?: string;
    status: $Enums.MigrationStatus;
    sourceAdapterId: string;
    destinationAdapterId: string;
    totalFiles?: number;
    completedFiles?: number;
    failedFiles?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type MigrationUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumMigrationStatusFieldUpdateOperationsInput | $Enums.MigrationStatus;
    totalFiles?: Prisma.IntFieldUpdateOperationsInput | number;
    completedFiles?: Prisma.IntFieldUpdateOperationsInput | number;
    failedFiles?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    selections?: Prisma.MigrationSelectionUpdateManyWithoutMigrationNestedInput;
    files?: Prisma.MigrationFileUpdateManyWithoutMigrationNestedInput;
    sourceAdapter?: Prisma.AdapterUpdateOneRequiredWithoutSourceMigrationsNestedInput;
    destinationAdapter?: Prisma.AdapterUpdateOneRequiredWithoutDestinationMigrationsNestedInput;
};
export type MigrationUncheckedUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumMigrationStatusFieldUpdateOperationsInput | $Enums.MigrationStatus;
    sourceAdapterId?: Prisma.StringFieldUpdateOperationsInput | string;
    destinationAdapterId?: Prisma.StringFieldUpdateOperationsInput | string;
    totalFiles?: Prisma.IntFieldUpdateOperationsInput | number;
    completedFiles?: Prisma.IntFieldUpdateOperationsInput | number;
    failedFiles?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    selections?: Prisma.MigrationSelectionUncheckedUpdateManyWithoutMigrationNestedInput;
    files?: Prisma.MigrationFileUncheckedUpdateManyWithoutMigrationNestedInput;
};
export type MigrationUncheckedUpdateManyWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumMigrationStatusFieldUpdateOperationsInput | $Enums.MigrationStatus;
    sourceAdapterId?: Prisma.StringFieldUpdateOperationsInput | string;
    destinationAdapterId?: Prisma.StringFieldUpdateOperationsInput | string;
    totalFiles?: Prisma.IntFieldUpdateOperationsInput | number;
    completedFiles?: Prisma.IntFieldUpdateOperationsInput | number;
    failedFiles?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MigrationCreateManySourceAdapterInput = {
    id?: string;
    status: $Enums.MigrationStatus;
    destinationAdapterId: string;
    totalFiles?: number;
    completedFiles?: number;
    failedFiles?: number;
    userId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type MigrationCreateManyDestinationAdapterInput = {
    id?: string;
    status: $Enums.MigrationStatus;
    sourceAdapterId: string;
    totalFiles?: number;
    completedFiles?: number;
    failedFiles?: number;
    userId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type MigrationUpdateWithoutSourceAdapterInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumMigrationStatusFieldUpdateOperationsInput | $Enums.MigrationStatus;
    totalFiles?: Prisma.IntFieldUpdateOperationsInput | number;
    completedFiles?: Prisma.IntFieldUpdateOperationsInput | number;
    failedFiles?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    selections?: Prisma.MigrationSelectionUpdateManyWithoutMigrationNestedInput;
    files?: Prisma.MigrationFileUpdateManyWithoutMigrationNestedInput;
    destinationAdapter?: Prisma.AdapterUpdateOneRequiredWithoutDestinationMigrationsNestedInput;
    user?: Prisma.UserUpdateOneRequiredWithoutMigrationsNestedInput;
};
export type MigrationUncheckedUpdateWithoutSourceAdapterInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumMigrationStatusFieldUpdateOperationsInput | $Enums.MigrationStatus;
    destinationAdapterId?: Prisma.StringFieldUpdateOperationsInput | string;
    totalFiles?: Prisma.IntFieldUpdateOperationsInput | number;
    completedFiles?: Prisma.IntFieldUpdateOperationsInput | number;
    failedFiles?: Prisma.IntFieldUpdateOperationsInput | number;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    selections?: Prisma.MigrationSelectionUncheckedUpdateManyWithoutMigrationNestedInput;
    files?: Prisma.MigrationFileUncheckedUpdateManyWithoutMigrationNestedInput;
};
export type MigrationUncheckedUpdateManyWithoutSourceAdapterInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumMigrationStatusFieldUpdateOperationsInput | $Enums.MigrationStatus;
    destinationAdapterId?: Prisma.StringFieldUpdateOperationsInput | string;
    totalFiles?: Prisma.IntFieldUpdateOperationsInput | number;
    completedFiles?: Prisma.IntFieldUpdateOperationsInput | number;
    failedFiles?: Prisma.IntFieldUpdateOperationsInput | number;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MigrationUpdateWithoutDestinationAdapterInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumMigrationStatusFieldUpdateOperationsInput | $Enums.MigrationStatus;
    totalFiles?: Prisma.IntFieldUpdateOperationsInput | number;
    completedFiles?: Prisma.IntFieldUpdateOperationsInput | number;
    failedFiles?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    selections?: Prisma.MigrationSelectionUpdateManyWithoutMigrationNestedInput;
    files?: Prisma.MigrationFileUpdateManyWithoutMigrationNestedInput;
    sourceAdapter?: Prisma.AdapterUpdateOneRequiredWithoutSourceMigrationsNestedInput;
    user?: Prisma.UserUpdateOneRequiredWithoutMigrationsNestedInput;
};
export type MigrationUncheckedUpdateWithoutDestinationAdapterInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumMigrationStatusFieldUpdateOperationsInput | $Enums.MigrationStatus;
    sourceAdapterId?: Prisma.StringFieldUpdateOperationsInput | string;
    totalFiles?: Prisma.IntFieldUpdateOperationsInput | number;
    completedFiles?: Prisma.IntFieldUpdateOperationsInput | number;
    failedFiles?: Prisma.IntFieldUpdateOperationsInput | number;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    selections?: Prisma.MigrationSelectionUncheckedUpdateManyWithoutMigrationNestedInput;
    files?: Prisma.MigrationFileUncheckedUpdateManyWithoutMigrationNestedInput;
};
export type MigrationUncheckedUpdateManyWithoutDestinationAdapterInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumMigrationStatusFieldUpdateOperationsInput | $Enums.MigrationStatus;
    sourceAdapterId?: Prisma.StringFieldUpdateOperationsInput | string;
    totalFiles?: Prisma.IntFieldUpdateOperationsInput | number;
    completedFiles?: Prisma.IntFieldUpdateOperationsInput | number;
    failedFiles?: Prisma.IntFieldUpdateOperationsInput | number;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
/**
 * Count Type MigrationCountOutputType
 */
export type MigrationCountOutputType = {
    selections: number;
    files: number;
};
export type MigrationCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    selections?: boolean | MigrationCountOutputTypeCountSelectionsArgs;
    files?: boolean | MigrationCountOutputTypeCountFilesArgs;
};
/**
 * MigrationCountOutputType without action
 */
export type MigrationCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MigrationCountOutputType
     */
    select?: Prisma.MigrationCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * MigrationCountOutputType without action
 */
export type MigrationCountOutputTypeCountSelectionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MigrationSelectionWhereInput;
};
/**
 * MigrationCountOutputType without action
 */
export type MigrationCountOutputTypeCountFilesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MigrationFileWhereInput;
};
export type MigrationSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    status?: boolean;
    sourceAdapterId?: boolean;
    destinationAdapterId?: boolean;
    totalFiles?: boolean;
    completedFiles?: boolean;
    failedFiles?: boolean;
    userId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    selections?: boolean | Prisma.Migration$selectionsArgs<ExtArgs>;
    files?: boolean | Prisma.Migration$filesArgs<ExtArgs>;
    sourceAdapter?: boolean | Prisma.AdapterDefaultArgs<ExtArgs>;
    destinationAdapter?: boolean | Prisma.AdapterDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    _count?: boolean | Prisma.MigrationCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["migration"]>;
export type MigrationSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    status?: boolean;
    sourceAdapterId?: boolean;
    destinationAdapterId?: boolean;
    totalFiles?: boolean;
    completedFiles?: boolean;
    failedFiles?: boolean;
    userId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    sourceAdapter?: boolean | Prisma.AdapterDefaultArgs<ExtArgs>;
    destinationAdapter?: boolean | Prisma.AdapterDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["migration"]>;
export type MigrationSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    status?: boolean;
    sourceAdapterId?: boolean;
    destinationAdapterId?: boolean;
    totalFiles?: boolean;
    completedFiles?: boolean;
    failedFiles?: boolean;
    userId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    sourceAdapter?: boolean | Prisma.AdapterDefaultArgs<ExtArgs>;
    destinationAdapter?: boolean | Prisma.AdapterDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["migration"]>;
export type MigrationSelectScalar = {
    id?: boolean;
    status?: boolean;
    sourceAdapterId?: boolean;
    destinationAdapterId?: boolean;
    totalFiles?: boolean;
    completedFiles?: boolean;
    failedFiles?: boolean;
    userId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type MigrationOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "status" | "sourceAdapterId" | "destinationAdapterId" | "totalFiles" | "completedFiles" | "failedFiles" | "userId" | "createdAt" | "updatedAt", ExtArgs["result"]["migration"]>;
export type MigrationInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    selections?: boolean | Prisma.Migration$selectionsArgs<ExtArgs>;
    files?: boolean | Prisma.Migration$filesArgs<ExtArgs>;
    sourceAdapter?: boolean | Prisma.AdapterDefaultArgs<ExtArgs>;
    destinationAdapter?: boolean | Prisma.AdapterDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    _count?: boolean | Prisma.MigrationCountOutputTypeDefaultArgs<ExtArgs>;
};
export type MigrationIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    sourceAdapter?: boolean | Prisma.AdapterDefaultArgs<ExtArgs>;
    destinationAdapter?: boolean | Prisma.AdapterDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type MigrationIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    sourceAdapter?: boolean | Prisma.AdapterDefaultArgs<ExtArgs>;
    destinationAdapter?: boolean | Prisma.AdapterDefaultArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $MigrationPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Migration";
    objects: {
        selections: Prisma.$MigrationSelectionPayload<ExtArgs>[];
        files: Prisma.$MigrationFilePayload<ExtArgs>[];
        sourceAdapter: Prisma.$AdapterPayload<ExtArgs>;
        destinationAdapter: Prisma.$AdapterPayload<ExtArgs>;
        user: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        status: $Enums.MigrationStatus;
        sourceAdapterId: string;
        destinationAdapterId: string;
        totalFiles: number;
        completedFiles: number;
        failedFiles: number;
        userId: string;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["migration"]>;
    composites: {};
};
export type MigrationGetPayload<S extends boolean | null | undefined | MigrationDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$MigrationPayload, S>;
export type MigrationCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<MigrationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: MigrationCountAggregateInputType | true;
};
export interface MigrationDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Migration'];
        meta: {
            name: 'Migration';
        };
    };
    /**
     * Find zero or one Migration that matches the filter.
     * @param {MigrationFindUniqueArgs} args - Arguments to find a Migration
     * @example
     * // Get one Migration
     * const migration = await prisma.migration.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MigrationFindUniqueArgs>(args: Prisma.SelectSubset<T, MigrationFindUniqueArgs<ExtArgs>>): Prisma.Prisma__MigrationClient<runtime.Types.Result.GetResult<Prisma.$MigrationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Migration that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MigrationFindUniqueOrThrowArgs} args - Arguments to find a Migration
     * @example
     * // Get one Migration
     * const migration = await prisma.migration.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MigrationFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, MigrationFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__MigrationClient<runtime.Types.Result.GetResult<Prisma.$MigrationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Migration that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MigrationFindFirstArgs} args - Arguments to find a Migration
     * @example
     * // Get one Migration
     * const migration = await prisma.migration.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MigrationFindFirstArgs>(args?: Prisma.SelectSubset<T, MigrationFindFirstArgs<ExtArgs>>): Prisma.Prisma__MigrationClient<runtime.Types.Result.GetResult<Prisma.$MigrationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Migration that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MigrationFindFirstOrThrowArgs} args - Arguments to find a Migration
     * @example
     * // Get one Migration
     * const migration = await prisma.migration.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MigrationFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, MigrationFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__MigrationClient<runtime.Types.Result.GetResult<Prisma.$MigrationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Migrations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MigrationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Migrations
     * const migrations = await prisma.migration.findMany()
     *
     * // Get first 10 Migrations
     * const migrations = await prisma.migration.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const migrationWithIdOnly = await prisma.migration.findMany({ select: { id: true } })
     *
     */
    findMany<T extends MigrationFindManyArgs>(args?: Prisma.SelectSubset<T, MigrationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MigrationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Migration.
     * @param {MigrationCreateArgs} args - Arguments to create a Migration.
     * @example
     * // Create one Migration
     * const Migration = await prisma.migration.create({
     *   data: {
     *     // ... data to create a Migration
     *   }
     * })
     *
     */
    create<T extends MigrationCreateArgs>(args: Prisma.SelectSubset<T, MigrationCreateArgs<ExtArgs>>): Prisma.Prisma__MigrationClient<runtime.Types.Result.GetResult<Prisma.$MigrationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Migrations.
     * @param {MigrationCreateManyArgs} args - Arguments to create many Migrations.
     * @example
     * // Create many Migrations
     * const migration = await prisma.migration.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends MigrationCreateManyArgs>(args?: Prisma.SelectSubset<T, MigrationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Migrations and returns the data saved in the database.
     * @param {MigrationCreateManyAndReturnArgs} args - Arguments to create many Migrations.
     * @example
     * // Create many Migrations
     * const migration = await prisma.migration.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Migrations and only return the `id`
     * const migrationWithIdOnly = await prisma.migration.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends MigrationCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, MigrationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MigrationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Migration.
     * @param {MigrationDeleteArgs} args - Arguments to delete one Migration.
     * @example
     * // Delete one Migration
     * const Migration = await prisma.migration.delete({
     *   where: {
     *     // ... filter to delete one Migration
     *   }
     * })
     *
     */
    delete<T extends MigrationDeleteArgs>(args: Prisma.SelectSubset<T, MigrationDeleteArgs<ExtArgs>>): Prisma.Prisma__MigrationClient<runtime.Types.Result.GetResult<Prisma.$MigrationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Migration.
     * @param {MigrationUpdateArgs} args - Arguments to update one Migration.
     * @example
     * // Update one Migration
     * const migration = await prisma.migration.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends MigrationUpdateArgs>(args: Prisma.SelectSubset<T, MigrationUpdateArgs<ExtArgs>>): Prisma.Prisma__MigrationClient<runtime.Types.Result.GetResult<Prisma.$MigrationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Migrations.
     * @param {MigrationDeleteManyArgs} args - Arguments to filter Migrations to delete.
     * @example
     * // Delete a few Migrations
     * const { count } = await prisma.migration.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends MigrationDeleteManyArgs>(args?: Prisma.SelectSubset<T, MigrationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Migrations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MigrationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Migrations
     * const migration = await prisma.migration.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends MigrationUpdateManyArgs>(args: Prisma.SelectSubset<T, MigrationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Migrations and returns the data updated in the database.
     * @param {MigrationUpdateManyAndReturnArgs} args - Arguments to update many Migrations.
     * @example
     * // Update many Migrations
     * const migration = await prisma.migration.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Migrations and only return the `id`
     * const migrationWithIdOnly = await prisma.migration.updateManyAndReturn({
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
    updateManyAndReturn<T extends MigrationUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, MigrationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MigrationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Migration.
     * @param {MigrationUpsertArgs} args - Arguments to update or create a Migration.
     * @example
     * // Update or create a Migration
     * const migration = await prisma.migration.upsert({
     *   create: {
     *     // ... data to create a Migration
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Migration we want to update
     *   }
     * })
     */
    upsert<T extends MigrationUpsertArgs>(args: Prisma.SelectSubset<T, MigrationUpsertArgs<ExtArgs>>): Prisma.Prisma__MigrationClient<runtime.Types.Result.GetResult<Prisma.$MigrationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Migrations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MigrationCountArgs} args - Arguments to filter Migrations to count.
     * @example
     * // Count the number of Migrations
     * const count = await prisma.migration.count({
     *   where: {
     *     // ... the filter for the Migrations we want to count
     *   }
     * })
    **/
    count<T extends MigrationCountArgs>(args?: Prisma.Subset<T, MigrationCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], MigrationCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Migration.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MigrationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MigrationAggregateArgs>(args: Prisma.Subset<T, MigrationAggregateArgs>): Prisma.PrismaPromise<GetMigrationAggregateType<T>>;
    /**
     * Group by Migration.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MigrationGroupByArgs} args - Group by arguments.
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
    groupBy<T extends MigrationGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: MigrationGroupByArgs['orderBy'];
    } : {
        orderBy?: MigrationGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, MigrationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMigrationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Migration model
     */
    readonly fields: MigrationFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for Migration.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__MigrationClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    selections<T extends Prisma.Migration$selectionsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Migration$selectionsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MigrationSelectionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    files<T extends Prisma.Migration$filesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Migration$filesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MigrationFilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    sourceAdapter<T extends Prisma.AdapterDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.AdapterDefaultArgs<ExtArgs>>): Prisma.Prisma__AdapterClient<runtime.Types.Result.GetResult<Prisma.$AdapterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    destinationAdapter<T extends Prisma.AdapterDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.AdapterDefaultArgs<ExtArgs>>): Prisma.Prisma__AdapterClient<runtime.Types.Result.GetResult<Prisma.$AdapterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the Migration model
 */
export interface MigrationFieldRefs {
    readonly id: Prisma.FieldRef<"Migration", 'String'>;
    readonly status: Prisma.FieldRef<"Migration", 'MigrationStatus'>;
    readonly sourceAdapterId: Prisma.FieldRef<"Migration", 'String'>;
    readonly destinationAdapterId: Prisma.FieldRef<"Migration", 'String'>;
    readonly totalFiles: Prisma.FieldRef<"Migration", 'Int'>;
    readonly completedFiles: Prisma.FieldRef<"Migration", 'Int'>;
    readonly failedFiles: Prisma.FieldRef<"Migration", 'Int'>;
    readonly userId: Prisma.FieldRef<"Migration", 'String'>;
    readonly createdAt: Prisma.FieldRef<"Migration", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Migration", 'DateTime'>;
}
/**
 * Migration findUnique
 */
export type MigrationFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Migration
     */
    select?: Prisma.MigrationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Migration
     */
    omit?: Prisma.MigrationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.MigrationInclude<ExtArgs> | null;
    /**
     * Filter, which Migration to fetch.
     */
    where: Prisma.MigrationWhereUniqueInput;
};
/**
 * Migration findUniqueOrThrow
 */
export type MigrationFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Migration
     */
    select?: Prisma.MigrationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Migration
     */
    omit?: Prisma.MigrationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.MigrationInclude<ExtArgs> | null;
    /**
     * Filter, which Migration to fetch.
     */
    where: Prisma.MigrationWhereUniqueInput;
};
/**
 * Migration findFirst
 */
export type MigrationFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Migration
     */
    select?: Prisma.MigrationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Migration
     */
    omit?: Prisma.MigrationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.MigrationInclude<ExtArgs> | null;
    /**
     * Filter, which Migration to fetch.
     */
    where?: Prisma.MigrationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Migrations to fetch.
     */
    orderBy?: Prisma.MigrationOrderByWithRelationInput | Prisma.MigrationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Migrations.
     */
    cursor?: Prisma.MigrationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Migrations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Migrations.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Migrations.
     */
    distinct?: Prisma.MigrationScalarFieldEnum | Prisma.MigrationScalarFieldEnum[];
};
/**
 * Migration findFirstOrThrow
 */
export type MigrationFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Migration
     */
    select?: Prisma.MigrationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Migration
     */
    omit?: Prisma.MigrationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.MigrationInclude<ExtArgs> | null;
    /**
     * Filter, which Migration to fetch.
     */
    where?: Prisma.MigrationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Migrations to fetch.
     */
    orderBy?: Prisma.MigrationOrderByWithRelationInput | Prisma.MigrationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Migrations.
     */
    cursor?: Prisma.MigrationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Migrations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Migrations.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Migrations.
     */
    distinct?: Prisma.MigrationScalarFieldEnum | Prisma.MigrationScalarFieldEnum[];
};
/**
 * Migration findMany
 */
export type MigrationFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Migration
     */
    select?: Prisma.MigrationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Migration
     */
    omit?: Prisma.MigrationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.MigrationInclude<ExtArgs> | null;
    /**
     * Filter, which Migrations to fetch.
     */
    where?: Prisma.MigrationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Migrations to fetch.
     */
    orderBy?: Prisma.MigrationOrderByWithRelationInput | Prisma.MigrationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Migrations.
     */
    cursor?: Prisma.MigrationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Migrations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Migrations.
     */
    skip?: number;
    distinct?: Prisma.MigrationScalarFieldEnum | Prisma.MigrationScalarFieldEnum[];
};
/**
 * Migration create
 */
export type MigrationCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Migration
     */
    select?: Prisma.MigrationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Migration
     */
    omit?: Prisma.MigrationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.MigrationInclude<ExtArgs> | null;
    /**
     * The data needed to create a Migration.
     */
    data: Prisma.XOR<Prisma.MigrationCreateInput, Prisma.MigrationUncheckedCreateInput>;
};
/**
 * Migration createMany
 */
export type MigrationCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many Migrations.
     */
    data: Prisma.MigrationCreateManyInput | Prisma.MigrationCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * Migration createManyAndReturn
 */
export type MigrationCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Migration
     */
    select?: Prisma.MigrationSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Migration
     */
    omit?: Prisma.MigrationOmit<ExtArgs> | null;
    /**
     * The data used to create many Migrations.
     */
    data: Prisma.MigrationCreateManyInput | Prisma.MigrationCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.MigrationIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * Migration update
 */
export type MigrationUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Migration
     */
    select?: Prisma.MigrationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Migration
     */
    omit?: Prisma.MigrationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.MigrationInclude<ExtArgs> | null;
    /**
     * The data needed to update a Migration.
     */
    data: Prisma.XOR<Prisma.MigrationUpdateInput, Prisma.MigrationUncheckedUpdateInput>;
    /**
     * Choose, which Migration to update.
     */
    where: Prisma.MigrationWhereUniqueInput;
};
/**
 * Migration updateMany
 */
export type MigrationUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update Migrations.
     */
    data: Prisma.XOR<Prisma.MigrationUpdateManyMutationInput, Prisma.MigrationUncheckedUpdateManyInput>;
    /**
     * Filter which Migrations to update
     */
    where?: Prisma.MigrationWhereInput;
    /**
     * Limit how many Migrations to update.
     */
    limit?: number;
};
/**
 * Migration updateManyAndReturn
 */
export type MigrationUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Migration
     */
    select?: Prisma.MigrationSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Migration
     */
    omit?: Prisma.MigrationOmit<ExtArgs> | null;
    /**
     * The data used to update Migrations.
     */
    data: Prisma.XOR<Prisma.MigrationUpdateManyMutationInput, Prisma.MigrationUncheckedUpdateManyInput>;
    /**
     * Filter which Migrations to update
     */
    where?: Prisma.MigrationWhereInput;
    /**
     * Limit how many Migrations to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.MigrationIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * Migration upsert
 */
export type MigrationUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Migration
     */
    select?: Prisma.MigrationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Migration
     */
    omit?: Prisma.MigrationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.MigrationInclude<ExtArgs> | null;
    /**
     * The filter to search for the Migration to update in case it exists.
     */
    where: Prisma.MigrationWhereUniqueInput;
    /**
     * In case the Migration found by the `where` argument doesn't exist, create a new Migration with this data.
     */
    create: Prisma.XOR<Prisma.MigrationCreateInput, Prisma.MigrationUncheckedCreateInput>;
    /**
     * In case the Migration was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.MigrationUpdateInput, Prisma.MigrationUncheckedUpdateInput>;
};
/**
 * Migration delete
 */
export type MigrationDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Migration
     */
    select?: Prisma.MigrationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Migration
     */
    omit?: Prisma.MigrationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.MigrationInclude<ExtArgs> | null;
    /**
     * Filter which Migration to delete.
     */
    where: Prisma.MigrationWhereUniqueInput;
};
/**
 * Migration deleteMany
 */
export type MigrationDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Migrations to delete
     */
    where?: Prisma.MigrationWhereInput;
    /**
     * Limit how many Migrations to delete.
     */
    limit?: number;
};
/**
 * Migration.selections
 */
export type Migration$selectionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MigrationSelection
     */
    select?: Prisma.MigrationSelectionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MigrationSelection
     */
    omit?: Prisma.MigrationSelectionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.MigrationSelectionInclude<ExtArgs> | null;
    where?: Prisma.MigrationSelectionWhereInput;
    orderBy?: Prisma.MigrationSelectionOrderByWithRelationInput | Prisma.MigrationSelectionOrderByWithRelationInput[];
    cursor?: Prisma.MigrationSelectionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MigrationSelectionScalarFieldEnum | Prisma.MigrationSelectionScalarFieldEnum[];
};
/**
 * Migration.files
 */
export type Migration$filesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    where?: Prisma.MigrationFileWhereInput;
    orderBy?: Prisma.MigrationFileOrderByWithRelationInput | Prisma.MigrationFileOrderByWithRelationInput[];
    cursor?: Prisma.MigrationFileWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MigrationFileScalarFieldEnum | Prisma.MigrationFileScalarFieldEnum[];
};
/**
 * Migration without action
 */
export type MigrationDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Migration
     */
    select?: Prisma.MigrationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Migration
     */
    omit?: Prisma.MigrationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.MigrationInclude<ExtArgs> | null;
};
export {};
//# sourceMappingURL=Migration.d.ts.map