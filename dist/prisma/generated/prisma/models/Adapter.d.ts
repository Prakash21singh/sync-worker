import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums";
import type * as Prisma from "../internal/prismaNamespace";
/**
 * Model Adapter
 *
 */
export type AdapterModel = runtime.Types.Result.DefaultSelection<Prisma.$AdapterPayload>;
export type AggregateAdapter = {
    _count: AdapterCountAggregateOutputType | null;
    _min: AdapterMinAggregateOutputType | null;
    _max: AdapterMaxAggregateOutputType | null;
};
export type AdapterMinAggregateOutputType = {
    id: string | null;
    name: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    access_token: string | null;
    refresh_token: string | null;
    expires_in: Date | null;
    refresh_token_expires_in: Date | null;
    scope: string | null;
    token_type: string | null;
    adapter_type: $Enums.AdapterName | null;
    userId: string | null;
};
export type AdapterMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    access_token: string | null;
    refresh_token: string | null;
    expires_in: Date | null;
    refresh_token_expires_in: Date | null;
    scope: string | null;
    token_type: string | null;
    adapter_type: $Enums.AdapterName | null;
    userId: string | null;
};
export type AdapterCountAggregateOutputType = {
    id: number;
    name: number;
    createdAt: number;
    updatedAt: number;
    access_token: number;
    refresh_token: number;
    expires_in: number;
    refresh_token_expires_in: number;
    scope: number;
    token_type: number;
    adapter_type: number;
    userId: number;
    _all: number;
};
export type AdapterMinAggregateInputType = {
    id?: true;
    name?: true;
    createdAt?: true;
    updatedAt?: true;
    access_token?: true;
    refresh_token?: true;
    expires_in?: true;
    refresh_token_expires_in?: true;
    scope?: true;
    token_type?: true;
    adapter_type?: true;
    userId?: true;
};
export type AdapterMaxAggregateInputType = {
    id?: true;
    name?: true;
    createdAt?: true;
    updatedAt?: true;
    access_token?: true;
    refresh_token?: true;
    expires_in?: true;
    refresh_token_expires_in?: true;
    scope?: true;
    token_type?: true;
    adapter_type?: true;
    userId?: true;
};
export type AdapterCountAggregateInputType = {
    id?: true;
    name?: true;
    createdAt?: true;
    updatedAt?: true;
    access_token?: true;
    refresh_token?: true;
    expires_in?: true;
    refresh_token_expires_in?: true;
    scope?: true;
    token_type?: true;
    adapter_type?: true;
    userId?: true;
    _all?: true;
};
export type AdapterAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Adapter to aggregate.
     */
    where?: Prisma.AdapterWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Adapters to fetch.
     */
    orderBy?: Prisma.AdapterOrderByWithRelationInput | Prisma.AdapterOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.AdapterWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Adapters from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Adapters.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Adapters
    **/
    _count?: true | AdapterCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: AdapterMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: AdapterMaxAggregateInputType;
};
export type GetAdapterAggregateType<T extends AdapterAggregateArgs> = {
    [P in keyof T & keyof AggregateAdapter]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateAdapter[P]> : Prisma.GetScalarType<T[P], AggregateAdapter[P]>;
};
export type AdapterGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AdapterWhereInput;
    orderBy?: Prisma.AdapterOrderByWithAggregationInput | Prisma.AdapterOrderByWithAggregationInput[];
    by: Prisma.AdapterScalarFieldEnum[] | Prisma.AdapterScalarFieldEnum;
    having?: Prisma.AdapterScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: AdapterCountAggregateInputType | true;
    _min?: AdapterMinAggregateInputType;
    _max?: AdapterMaxAggregateInputType;
};
export type AdapterGroupByOutputType = {
    id: string;
    name: string;
    createdAt: Date;
    updatedAt: Date;
    access_token: string | null;
    refresh_token: string | null;
    expires_in: Date | null;
    refresh_token_expires_in: Date | null;
    scope: string | null;
    token_type: string | null;
    adapter_type: $Enums.AdapterName;
    userId: string;
    _count: AdapterCountAggregateOutputType | null;
    _min: AdapterMinAggregateOutputType | null;
    _max: AdapterMaxAggregateOutputType | null;
};
type GetAdapterGroupByPayload<T extends AdapterGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<AdapterGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof AdapterGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], AdapterGroupByOutputType[P]> : Prisma.GetScalarType<T[P], AdapterGroupByOutputType[P]>;
}>>;
export type AdapterWhereInput = {
    AND?: Prisma.AdapterWhereInput | Prisma.AdapterWhereInput[];
    OR?: Prisma.AdapterWhereInput[];
    NOT?: Prisma.AdapterWhereInput | Prisma.AdapterWhereInput[];
    id?: Prisma.StringFilter<"Adapter"> | string;
    name?: Prisma.StringFilter<"Adapter"> | string;
    createdAt?: Prisma.DateTimeFilter<"Adapter"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Adapter"> | Date | string;
    access_token?: Prisma.StringNullableFilter<"Adapter"> | string | null;
    refresh_token?: Prisma.StringNullableFilter<"Adapter"> | string | null;
    expires_in?: Prisma.DateTimeNullableFilter<"Adapter"> | Date | string | null;
    refresh_token_expires_in?: Prisma.DateTimeNullableFilter<"Adapter"> | Date | string | null;
    scope?: Prisma.StringNullableFilter<"Adapter"> | string | null;
    token_type?: Prisma.StringNullableFilter<"Adapter"> | string | null;
    adapter_type?: Prisma.EnumAdapterNameFilter<"Adapter"> | $Enums.AdapterName;
    userId?: Prisma.StringFilter<"Adapter"> | string;
    adapterAccountInfo?: Prisma.XOR<Prisma.AdapterAccountInfoNullableScalarRelationFilter, Prisma.AdapterAccountInfoWhereInput> | null;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    sourceMigrations?: Prisma.MigrationListRelationFilter;
    destinationMigrations?: Prisma.MigrationListRelationFilter;
};
export type AdapterOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    access_token?: Prisma.SortOrderInput | Prisma.SortOrder;
    refresh_token?: Prisma.SortOrderInput | Prisma.SortOrder;
    expires_in?: Prisma.SortOrderInput | Prisma.SortOrder;
    refresh_token_expires_in?: Prisma.SortOrderInput | Prisma.SortOrder;
    scope?: Prisma.SortOrderInput | Prisma.SortOrder;
    token_type?: Prisma.SortOrderInput | Prisma.SortOrder;
    adapter_type?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    adapterAccountInfo?: Prisma.AdapterAccountInfoOrderByWithRelationInput;
    user?: Prisma.UserOrderByWithRelationInput;
    sourceMigrations?: Prisma.MigrationOrderByRelationAggregateInput;
    destinationMigrations?: Prisma.MigrationOrderByRelationAggregateInput;
};
export type AdapterWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    name?: string;
    AND?: Prisma.AdapterWhereInput | Prisma.AdapterWhereInput[];
    OR?: Prisma.AdapterWhereInput[];
    NOT?: Prisma.AdapterWhereInput | Prisma.AdapterWhereInput[];
    createdAt?: Prisma.DateTimeFilter<"Adapter"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Adapter"> | Date | string;
    access_token?: Prisma.StringNullableFilter<"Adapter"> | string | null;
    refresh_token?: Prisma.StringNullableFilter<"Adapter"> | string | null;
    expires_in?: Prisma.DateTimeNullableFilter<"Adapter"> | Date | string | null;
    refresh_token_expires_in?: Prisma.DateTimeNullableFilter<"Adapter"> | Date | string | null;
    scope?: Prisma.StringNullableFilter<"Adapter"> | string | null;
    token_type?: Prisma.StringNullableFilter<"Adapter"> | string | null;
    adapter_type?: Prisma.EnumAdapterNameFilter<"Adapter"> | $Enums.AdapterName;
    userId?: Prisma.StringFilter<"Adapter"> | string;
    adapterAccountInfo?: Prisma.XOR<Prisma.AdapterAccountInfoNullableScalarRelationFilter, Prisma.AdapterAccountInfoWhereInput> | null;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    sourceMigrations?: Prisma.MigrationListRelationFilter;
    destinationMigrations?: Prisma.MigrationListRelationFilter;
}, "id" | "name">;
export type AdapterOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    access_token?: Prisma.SortOrderInput | Prisma.SortOrder;
    refresh_token?: Prisma.SortOrderInput | Prisma.SortOrder;
    expires_in?: Prisma.SortOrderInput | Prisma.SortOrder;
    refresh_token_expires_in?: Prisma.SortOrderInput | Prisma.SortOrder;
    scope?: Prisma.SortOrderInput | Prisma.SortOrder;
    token_type?: Prisma.SortOrderInput | Prisma.SortOrder;
    adapter_type?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    _count?: Prisma.AdapterCountOrderByAggregateInput;
    _max?: Prisma.AdapterMaxOrderByAggregateInput;
    _min?: Prisma.AdapterMinOrderByAggregateInput;
};
export type AdapterScalarWhereWithAggregatesInput = {
    AND?: Prisma.AdapterScalarWhereWithAggregatesInput | Prisma.AdapterScalarWhereWithAggregatesInput[];
    OR?: Prisma.AdapterScalarWhereWithAggregatesInput[];
    NOT?: Prisma.AdapterScalarWhereWithAggregatesInput | Prisma.AdapterScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Adapter"> | string;
    name?: Prisma.StringWithAggregatesFilter<"Adapter"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Adapter"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Adapter"> | Date | string;
    access_token?: Prisma.StringNullableWithAggregatesFilter<"Adapter"> | string | null;
    refresh_token?: Prisma.StringNullableWithAggregatesFilter<"Adapter"> | string | null;
    expires_in?: Prisma.DateTimeNullableWithAggregatesFilter<"Adapter"> | Date | string | null;
    refresh_token_expires_in?: Prisma.DateTimeNullableWithAggregatesFilter<"Adapter"> | Date | string | null;
    scope?: Prisma.StringNullableWithAggregatesFilter<"Adapter"> | string | null;
    token_type?: Prisma.StringNullableWithAggregatesFilter<"Adapter"> | string | null;
    adapter_type?: Prisma.EnumAdapterNameWithAggregatesFilter<"Adapter"> | $Enums.AdapterName;
    userId?: Prisma.StringWithAggregatesFilter<"Adapter"> | string;
};
export type AdapterCreateInput = {
    id?: string;
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    access_token?: string | null;
    refresh_token?: string | null;
    expires_in?: Date | string | null;
    refresh_token_expires_in?: Date | string | null;
    scope?: string | null;
    token_type?: string | null;
    adapter_type: $Enums.AdapterName;
    adapterAccountInfo?: Prisma.AdapterAccountInfoCreateNestedOneWithoutAdapterInput;
    user: Prisma.UserCreateNestedOneWithoutAdaptersInput;
    sourceMigrations?: Prisma.MigrationCreateNestedManyWithoutSourceAdapterInput;
    destinationMigrations?: Prisma.MigrationCreateNestedManyWithoutDestinationAdapterInput;
};
export type AdapterUncheckedCreateInput = {
    id?: string;
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    access_token?: string | null;
    refresh_token?: string | null;
    expires_in?: Date | string | null;
    refresh_token_expires_in?: Date | string | null;
    scope?: string | null;
    token_type?: string | null;
    adapter_type: $Enums.AdapterName;
    userId: string;
    adapterAccountInfo?: Prisma.AdapterAccountInfoUncheckedCreateNestedOneWithoutAdapterInput;
    sourceMigrations?: Prisma.MigrationUncheckedCreateNestedManyWithoutSourceAdapterInput;
    destinationMigrations?: Prisma.MigrationUncheckedCreateNestedManyWithoutDestinationAdapterInput;
};
export type AdapterUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    access_token?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    refresh_token?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    expires_in?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    refresh_token_expires_in?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    scope?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    token_type?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    adapter_type?: Prisma.EnumAdapterNameFieldUpdateOperationsInput | $Enums.AdapterName;
    adapterAccountInfo?: Prisma.AdapterAccountInfoUpdateOneWithoutAdapterNestedInput;
    user?: Prisma.UserUpdateOneRequiredWithoutAdaptersNestedInput;
    sourceMigrations?: Prisma.MigrationUpdateManyWithoutSourceAdapterNestedInput;
    destinationMigrations?: Prisma.MigrationUpdateManyWithoutDestinationAdapterNestedInput;
};
export type AdapterUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    access_token?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    refresh_token?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    expires_in?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    refresh_token_expires_in?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    scope?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    token_type?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    adapter_type?: Prisma.EnumAdapterNameFieldUpdateOperationsInput | $Enums.AdapterName;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    adapterAccountInfo?: Prisma.AdapterAccountInfoUncheckedUpdateOneWithoutAdapterNestedInput;
    sourceMigrations?: Prisma.MigrationUncheckedUpdateManyWithoutSourceAdapterNestedInput;
    destinationMigrations?: Prisma.MigrationUncheckedUpdateManyWithoutDestinationAdapterNestedInput;
};
export type AdapterCreateManyInput = {
    id?: string;
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    access_token?: string | null;
    refresh_token?: string | null;
    expires_in?: Date | string | null;
    refresh_token_expires_in?: Date | string | null;
    scope?: string | null;
    token_type?: string | null;
    adapter_type: $Enums.AdapterName;
    userId: string;
};
export type AdapterUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    access_token?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    refresh_token?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    expires_in?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    refresh_token_expires_in?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    scope?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    token_type?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    adapter_type?: Prisma.EnumAdapterNameFieldUpdateOperationsInput | $Enums.AdapterName;
};
export type AdapterUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    access_token?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    refresh_token?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    expires_in?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    refresh_token_expires_in?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    scope?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    token_type?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    adapter_type?: Prisma.EnumAdapterNameFieldUpdateOperationsInput | $Enums.AdapterName;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type AdapterListRelationFilter = {
    every?: Prisma.AdapterWhereInput;
    some?: Prisma.AdapterWhereInput;
    none?: Prisma.AdapterWhereInput;
};
export type AdapterOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type AdapterCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    access_token?: Prisma.SortOrder;
    refresh_token?: Prisma.SortOrder;
    expires_in?: Prisma.SortOrder;
    refresh_token_expires_in?: Prisma.SortOrder;
    scope?: Prisma.SortOrder;
    token_type?: Prisma.SortOrder;
    adapter_type?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
};
export type AdapterMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    access_token?: Prisma.SortOrder;
    refresh_token?: Prisma.SortOrder;
    expires_in?: Prisma.SortOrder;
    refresh_token_expires_in?: Prisma.SortOrder;
    scope?: Prisma.SortOrder;
    token_type?: Prisma.SortOrder;
    adapter_type?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
};
export type AdapterMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    access_token?: Prisma.SortOrder;
    refresh_token?: Prisma.SortOrder;
    expires_in?: Prisma.SortOrder;
    refresh_token_expires_in?: Prisma.SortOrder;
    scope?: Prisma.SortOrder;
    token_type?: Prisma.SortOrder;
    adapter_type?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
};
export type AdapterScalarRelationFilter = {
    is?: Prisma.AdapterWhereInput;
    isNot?: Prisma.AdapterWhereInput;
};
export type AdapterCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.AdapterCreateWithoutUserInput, Prisma.AdapterUncheckedCreateWithoutUserInput> | Prisma.AdapterCreateWithoutUserInput[] | Prisma.AdapterUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.AdapterCreateOrConnectWithoutUserInput | Prisma.AdapterCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.AdapterCreateManyUserInputEnvelope;
    connect?: Prisma.AdapterWhereUniqueInput | Prisma.AdapterWhereUniqueInput[];
};
export type AdapterUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.AdapterCreateWithoutUserInput, Prisma.AdapterUncheckedCreateWithoutUserInput> | Prisma.AdapterCreateWithoutUserInput[] | Prisma.AdapterUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.AdapterCreateOrConnectWithoutUserInput | Prisma.AdapterCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.AdapterCreateManyUserInputEnvelope;
    connect?: Prisma.AdapterWhereUniqueInput | Prisma.AdapterWhereUniqueInput[];
};
export type AdapterUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.AdapterCreateWithoutUserInput, Prisma.AdapterUncheckedCreateWithoutUserInput> | Prisma.AdapterCreateWithoutUserInput[] | Prisma.AdapterUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.AdapterCreateOrConnectWithoutUserInput | Prisma.AdapterCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.AdapterUpsertWithWhereUniqueWithoutUserInput | Prisma.AdapterUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.AdapterCreateManyUserInputEnvelope;
    set?: Prisma.AdapterWhereUniqueInput | Prisma.AdapterWhereUniqueInput[];
    disconnect?: Prisma.AdapterWhereUniqueInput | Prisma.AdapterWhereUniqueInput[];
    delete?: Prisma.AdapterWhereUniqueInput | Prisma.AdapterWhereUniqueInput[];
    connect?: Prisma.AdapterWhereUniqueInput | Prisma.AdapterWhereUniqueInput[];
    update?: Prisma.AdapterUpdateWithWhereUniqueWithoutUserInput | Prisma.AdapterUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.AdapterUpdateManyWithWhereWithoutUserInput | Prisma.AdapterUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.AdapterScalarWhereInput | Prisma.AdapterScalarWhereInput[];
};
export type AdapterUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.AdapterCreateWithoutUserInput, Prisma.AdapterUncheckedCreateWithoutUserInput> | Prisma.AdapterCreateWithoutUserInput[] | Prisma.AdapterUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.AdapterCreateOrConnectWithoutUserInput | Prisma.AdapterCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.AdapterUpsertWithWhereUniqueWithoutUserInput | Prisma.AdapterUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.AdapterCreateManyUserInputEnvelope;
    set?: Prisma.AdapterWhereUniqueInput | Prisma.AdapterWhereUniqueInput[];
    disconnect?: Prisma.AdapterWhereUniqueInput | Prisma.AdapterWhereUniqueInput[];
    delete?: Prisma.AdapterWhereUniqueInput | Prisma.AdapterWhereUniqueInput[];
    connect?: Prisma.AdapterWhereUniqueInput | Prisma.AdapterWhereUniqueInput[];
    update?: Prisma.AdapterUpdateWithWhereUniqueWithoutUserInput | Prisma.AdapterUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.AdapterUpdateManyWithWhereWithoutUserInput | Prisma.AdapterUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.AdapterScalarWhereInput | Prisma.AdapterScalarWhereInput[];
};
export type EnumAdapterNameFieldUpdateOperationsInput = {
    set?: $Enums.AdapterName;
};
export type AdapterCreateNestedOneWithoutAdapterAccountInfoInput = {
    create?: Prisma.XOR<Prisma.AdapterCreateWithoutAdapterAccountInfoInput, Prisma.AdapterUncheckedCreateWithoutAdapterAccountInfoInput>;
    connectOrCreate?: Prisma.AdapterCreateOrConnectWithoutAdapterAccountInfoInput;
    connect?: Prisma.AdapterWhereUniqueInput;
};
export type AdapterUpdateOneRequiredWithoutAdapterAccountInfoNestedInput = {
    create?: Prisma.XOR<Prisma.AdapterCreateWithoutAdapterAccountInfoInput, Prisma.AdapterUncheckedCreateWithoutAdapterAccountInfoInput>;
    connectOrCreate?: Prisma.AdapterCreateOrConnectWithoutAdapterAccountInfoInput;
    upsert?: Prisma.AdapterUpsertWithoutAdapterAccountInfoInput;
    connect?: Prisma.AdapterWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.AdapterUpdateToOneWithWhereWithoutAdapterAccountInfoInput, Prisma.AdapterUpdateWithoutAdapterAccountInfoInput>, Prisma.AdapterUncheckedUpdateWithoutAdapterAccountInfoInput>;
};
export type AdapterCreateNestedOneWithoutSourceMigrationsInput = {
    create?: Prisma.XOR<Prisma.AdapterCreateWithoutSourceMigrationsInput, Prisma.AdapterUncheckedCreateWithoutSourceMigrationsInput>;
    connectOrCreate?: Prisma.AdapterCreateOrConnectWithoutSourceMigrationsInput;
    connect?: Prisma.AdapterWhereUniqueInput;
};
export type AdapterCreateNestedOneWithoutDestinationMigrationsInput = {
    create?: Prisma.XOR<Prisma.AdapterCreateWithoutDestinationMigrationsInput, Prisma.AdapterUncheckedCreateWithoutDestinationMigrationsInput>;
    connectOrCreate?: Prisma.AdapterCreateOrConnectWithoutDestinationMigrationsInput;
    connect?: Prisma.AdapterWhereUniqueInput;
};
export type AdapterUpdateOneRequiredWithoutSourceMigrationsNestedInput = {
    create?: Prisma.XOR<Prisma.AdapterCreateWithoutSourceMigrationsInput, Prisma.AdapterUncheckedCreateWithoutSourceMigrationsInput>;
    connectOrCreate?: Prisma.AdapterCreateOrConnectWithoutSourceMigrationsInput;
    upsert?: Prisma.AdapterUpsertWithoutSourceMigrationsInput;
    connect?: Prisma.AdapterWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.AdapterUpdateToOneWithWhereWithoutSourceMigrationsInput, Prisma.AdapterUpdateWithoutSourceMigrationsInput>, Prisma.AdapterUncheckedUpdateWithoutSourceMigrationsInput>;
};
export type AdapterUpdateOneRequiredWithoutDestinationMigrationsNestedInput = {
    create?: Prisma.XOR<Prisma.AdapterCreateWithoutDestinationMigrationsInput, Prisma.AdapterUncheckedCreateWithoutDestinationMigrationsInput>;
    connectOrCreate?: Prisma.AdapterCreateOrConnectWithoutDestinationMigrationsInput;
    upsert?: Prisma.AdapterUpsertWithoutDestinationMigrationsInput;
    connect?: Prisma.AdapterWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.AdapterUpdateToOneWithWhereWithoutDestinationMigrationsInput, Prisma.AdapterUpdateWithoutDestinationMigrationsInput>, Prisma.AdapterUncheckedUpdateWithoutDestinationMigrationsInput>;
};
export type AdapterCreateWithoutUserInput = {
    id?: string;
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    access_token?: string | null;
    refresh_token?: string | null;
    expires_in?: Date | string | null;
    refresh_token_expires_in?: Date | string | null;
    scope?: string | null;
    token_type?: string | null;
    adapter_type: $Enums.AdapterName;
    adapterAccountInfo?: Prisma.AdapterAccountInfoCreateNestedOneWithoutAdapterInput;
    sourceMigrations?: Prisma.MigrationCreateNestedManyWithoutSourceAdapterInput;
    destinationMigrations?: Prisma.MigrationCreateNestedManyWithoutDestinationAdapterInput;
};
export type AdapterUncheckedCreateWithoutUserInput = {
    id?: string;
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    access_token?: string | null;
    refresh_token?: string | null;
    expires_in?: Date | string | null;
    refresh_token_expires_in?: Date | string | null;
    scope?: string | null;
    token_type?: string | null;
    adapter_type: $Enums.AdapterName;
    adapterAccountInfo?: Prisma.AdapterAccountInfoUncheckedCreateNestedOneWithoutAdapterInput;
    sourceMigrations?: Prisma.MigrationUncheckedCreateNestedManyWithoutSourceAdapterInput;
    destinationMigrations?: Prisma.MigrationUncheckedCreateNestedManyWithoutDestinationAdapterInput;
};
export type AdapterCreateOrConnectWithoutUserInput = {
    where: Prisma.AdapterWhereUniqueInput;
    create: Prisma.XOR<Prisma.AdapterCreateWithoutUserInput, Prisma.AdapterUncheckedCreateWithoutUserInput>;
};
export type AdapterCreateManyUserInputEnvelope = {
    data: Prisma.AdapterCreateManyUserInput | Prisma.AdapterCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type AdapterUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.AdapterWhereUniqueInput;
    update: Prisma.XOR<Prisma.AdapterUpdateWithoutUserInput, Prisma.AdapterUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.AdapterCreateWithoutUserInput, Prisma.AdapterUncheckedCreateWithoutUserInput>;
};
export type AdapterUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.AdapterWhereUniqueInput;
    data: Prisma.XOR<Prisma.AdapterUpdateWithoutUserInput, Prisma.AdapterUncheckedUpdateWithoutUserInput>;
};
export type AdapterUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.AdapterScalarWhereInput;
    data: Prisma.XOR<Prisma.AdapterUpdateManyMutationInput, Prisma.AdapterUncheckedUpdateManyWithoutUserInput>;
};
export type AdapterScalarWhereInput = {
    AND?: Prisma.AdapterScalarWhereInput | Prisma.AdapterScalarWhereInput[];
    OR?: Prisma.AdapterScalarWhereInput[];
    NOT?: Prisma.AdapterScalarWhereInput | Prisma.AdapterScalarWhereInput[];
    id?: Prisma.StringFilter<"Adapter"> | string;
    name?: Prisma.StringFilter<"Adapter"> | string;
    createdAt?: Prisma.DateTimeFilter<"Adapter"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Adapter"> | Date | string;
    access_token?: Prisma.StringNullableFilter<"Adapter"> | string | null;
    refresh_token?: Prisma.StringNullableFilter<"Adapter"> | string | null;
    expires_in?: Prisma.DateTimeNullableFilter<"Adapter"> | Date | string | null;
    refresh_token_expires_in?: Prisma.DateTimeNullableFilter<"Adapter"> | Date | string | null;
    scope?: Prisma.StringNullableFilter<"Adapter"> | string | null;
    token_type?: Prisma.StringNullableFilter<"Adapter"> | string | null;
    adapter_type?: Prisma.EnumAdapterNameFilter<"Adapter"> | $Enums.AdapterName;
    userId?: Prisma.StringFilter<"Adapter"> | string;
};
export type AdapterCreateWithoutAdapterAccountInfoInput = {
    id?: string;
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    access_token?: string | null;
    refresh_token?: string | null;
    expires_in?: Date | string | null;
    refresh_token_expires_in?: Date | string | null;
    scope?: string | null;
    token_type?: string | null;
    adapter_type: $Enums.AdapterName;
    user: Prisma.UserCreateNestedOneWithoutAdaptersInput;
    sourceMigrations?: Prisma.MigrationCreateNestedManyWithoutSourceAdapterInput;
    destinationMigrations?: Prisma.MigrationCreateNestedManyWithoutDestinationAdapterInput;
};
export type AdapterUncheckedCreateWithoutAdapterAccountInfoInput = {
    id?: string;
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    access_token?: string | null;
    refresh_token?: string | null;
    expires_in?: Date | string | null;
    refresh_token_expires_in?: Date | string | null;
    scope?: string | null;
    token_type?: string | null;
    adapter_type: $Enums.AdapterName;
    userId: string;
    sourceMigrations?: Prisma.MigrationUncheckedCreateNestedManyWithoutSourceAdapterInput;
    destinationMigrations?: Prisma.MigrationUncheckedCreateNestedManyWithoutDestinationAdapterInput;
};
export type AdapterCreateOrConnectWithoutAdapterAccountInfoInput = {
    where: Prisma.AdapterWhereUniqueInput;
    create: Prisma.XOR<Prisma.AdapterCreateWithoutAdapterAccountInfoInput, Prisma.AdapterUncheckedCreateWithoutAdapterAccountInfoInput>;
};
export type AdapterUpsertWithoutAdapterAccountInfoInput = {
    update: Prisma.XOR<Prisma.AdapterUpdateWithoutAdapterAccountInfoInput, Prisma.AdapterUncheckedUpdateWithoutAdapterAccountInfoInput>;
    create: Prisma.XOR<Prisma.AdapterCreateWithoutAdapterAccountInfoInput, Prisma.AdapterUncheckedCreateWithoutAdapterAccountInfoInput>;
    where?: Prisma.AdapterWhereInput;
};
export type AdapterUpdateToOneWithWhereWithoutAdapterAccountInfoInput = {
    where?: Prisma.AdapterWhereInput;
    data: Prisma.XOR<Prisma.AdapterUpdateWithoutAdapterAccountInfoInput, Prisma.AdapterUncheckedUpdateWithoutAdapterAccountInfoInput>;
};
export type AdapterUpdateWithoutAdapterAccountInfoInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    access_token?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    refresh_token?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    expires_in?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    refresh_token_expires_in?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    scope?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    token_type?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    adapter_type?: Prisma.EnumAdapterNameFieldUpdateOperationsInput | $Enums.AdapterName;
    user?: Prisma.UserUpdateOneRequiredWithoutAdaptersNestedInput;
    sourceMigrations?: Prisma.MigrationUpdateManyWithoutSourceAdapterNestedInput;
    destinationMigrations?: Prisma.MigrationUpdateManyWithoutDestinationAdapterNestedInput;
};
export type AdapterUncheckedUpdateWithoutAdapterAccountInfoInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    access_token?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    refresh_token?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    expires_in?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    refresh_token_expires_in?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    scope?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    token_type?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    adapter_type?: Prisma.EnumAdapterNameFieldUpdateOperationsInput | $Enums.AdapterName;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    sourceMigrations?: Prisma.MigrationUncheckedUpdateManyWithoutSourceAdapterNestedInput;
    destinationMigrations?: Prisma.MigrationUncheckedUpdateManyWithoutDestinationAdapterNestedInput;
};
export type AdapterCreateWithoutSourceMigrationsInput = {
    id?: string;
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    access_token?: string | null;
    refresh_token?: string | null;
    expires_in?: Date | string | null;
    refresh_token_expires_in?: Date | string | null;
    scope?: string | null;
    token_type?: string | null;
    adapter_type: $Enums.AdapterName;
    adapterAccountInfo?: Prisma.AdapterAccountInfoCreateNestedOneWithoutAdapterInput;
    user: Prisma.UserCreateNestedOneWithoutAdaptersInput;
    destinationMigrations?: Prisma.MigrationCreateNestedManyWithoutDestinationAdapterInput;
};
export type AdapterUncheckedCreateWithoutSourceMigrationsInput = {
    id?: string;
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    access_token?: string | null;
    refresh_token?: string | null;
    expires_in?: Date | string | null;
    refresh_token_expires_in?: Date | string | null;
    scope?: string | null;
    token_type?: string | null;
    adapter_type: $Enums.AdapterName;
    userId: string;
    adapterAccountInfo?: Prisma.AdapterAccountInfoUncheckedCreateNestedOneWithoutAdapterInput;
    destinationMigrations?: Prisma.MigrationUncheckedCreateNestedManyWithoutDestinationAdapterInput;
};
export type AdapterCreateOrConnectWithoutSourceMigrationsInput = {
    where: Prisma.AdapterWhereUniqueInput;
    create: Prisma.XOR<Prisma.AdapterCreateWithoutSourceMigrationsInput, Prisma.AdapterUncheckedCreateWithoutSourceMigrationsInput>;
};
export type AdapterCreateWithoutDestinationMigrationsInput = {
    id?: string;
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    access_token?: string | null;
    refresh_token?: string | null;
    expires_in?: Date | string | null;
    refresh_token_expires_in?: Date | string | null;
    scope?: string | null;
    token_type?: string | null;
    adapter_type: $Enums.AdapterName;
    adapterAccountInfo?: Prisma.AdapterAccountInfoCreateNestedOneWithoutAdapterInput;
    user: Prisma.UserCreateNestedOneWithoutAdaptersInput;
    sourceMigrations?: Prisma.MigrationCreateNestedManyWithoutSourceAdapterInput;
};
export type AdapterUncheckedCreateWithoutDestinationMigrationsInput = {
    id?: string;
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    access_token?: string | null;
    refresh_token?: string | null;
    expires_in?: Date | string | null;
    refresh_token_expires_in?: Date | string | null;
    scope?: string | null;
    token_type?: string | null;
    adapter_type: $Enums.AdapterName;
    userId: string;
    adapterAccountInfo?: Prisma.AdapterAccountInfoUncheckedCreateNestedOneWithoutAdapterInput;
    sourceMigrations?: Prisma.MigrationUncheckedCreateNestedManyWithoutSourceAdapterInput;
};
export type AdapterCreateOrConnectWithoutDestinationMigrationsInput = {
    where: Prisma.AdapterWhereUniqueInput;
    create: Prisma.XOR<Prisma.AdapterCreateWithoutDestinationMigrationsInput, Prisma.AdapterUncheckedCreateWithoutDestinationMigrationsInput>;
};
export type AdapterUpsertWithoutSourceMigrationsInput = {
    update: Prisma.XOR<Prisma.AdapterUpdateWithoutSourceMigrationsInput, Prisma.AdapterUncheckedUpdateWithoutSourceMigrationsInput>;
    create: Prisma.XOR<Prisma.AdapterCreateWithoutSourceMigrationsInput, Prisma.AdapterUncheckedCreateWithoutSourceMigrationsInput>;
    where?: Prisma.AdapterWhereInput;
};
export type AdapterUpdateToOneWithWhereWithoutSourceMigrationsInput = {
    where?: Prisma.AdapterWhereInput;
    data: Prisma.XOR<Prisma.AdapterUpdateWithoutSourceMigrationsInput, Prisma.AdapterUncheckedUpdateWithoutSourceMigrationsInput>;
};
export type AdapterUpdateWithoutSourceMigrationsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    access_token?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    refresh_token?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    expires_in?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    refresh_token_expires_in?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    scope?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    token_type?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    adapter_type?: Prisma.EnumAdapterNameFieldUpdateOperationsInput | $Enums.AdapterName;
    adapterAccountInfo?: Prisma.AdapterAccountInfoUpdateOneWithoutAdapterNestedInput;
    user?: Prisma.UserUpdateOneRequiredWithoutAdaptersNestedInput;
    destinationMigrations?: Prisma.MigrationUpdateManyWithoutDestinationAdapterNestedInput;
};
export type AdapterUncheckedUpdateWithoutSourceMigrationsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    access_token?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    refresh_token?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    expires_in?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    refresh_token_expires_in?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    scope?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    token_type?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    adapter_type?: Prisma.EnumAdapterNameFieldUpdateOperationsInput | $Enums.AdapterName;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    adapterAccountInfo?: Prisma.AdapterAccountInfoUncheckedUpdateOneWithoutAdapterNestedInput;
    destinationMigrations?: Prisma.MigrationUncheckedUpdateManyWithoutDestinationAdapterNestedInput;
};
export type AdapterUpsertWithoutDestinationMigrationsInput = {
    update: Prisma.XOR<Prisma.AdapterUpdateWithoutDestinationMigrationsInput, Prisma.AdapterUncheckedUpdateWithoutDestinationMigrationsInput>;
    create: Prisma.XOR<Prisma.AdapterCreateWithoutDestinationMigrationsInput, Prisma.AdapterUncheckedCreateWithoutDestinationMigrationsInput>;
    where?: Prisma.AdapterWhereInput;
};
export type AdapterUpdateToOneWithWhereWithoutDestinationMigrationsInput = {
    where?: Prisma.AdapterWhereInput;
    data: Prisma.XOR<Prisma.AdapterUpdateWithoutDestinationMigrationsInput, Prisma.AdapterUncheckedUpdateWithoutDestinationMigrationsInput>;
};
export type AdapterUpdateWithoutDestinationMigrationsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    access_token?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    refresh_token?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    expires_in?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    refresh_token_expires_in?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    scope?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    token_type?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    adapter_type?: Prisma.EnumAdapterNameFieldUpdateOperationsInput | $Enums.AdapterName;
    adapterAccountInfo?: Prisma.AdapterAccountInfoUpdateOneWithoutAdapterNestedInput;
    user?: Prisma.UserUpdateOneRequiredWithoutAdaptersNestedInput;
    sourceMigrations?: Prisma.MigrationUpdateManyWithoutSourceAdapterNestedInput;
};
export type AdapterUncheckedUpdateWithoutDestinationMigrationsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    access_token?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    refresh_token?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    expires_in?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    refresh_token_expires_in?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    scope?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    token_type?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    adapter_type?: Prisma.EnumAdapterNameFieldUpdateOperationsInput | $Enums.AdapterName;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    adapterAccountInfo?: Prisma.AdapterAccountInfoUncheckedUpdateOneWithoutAdapterNestedInput;
    sourceMigrations?: Prisma.MigrationUncheckedUpdateManyWithoutSourceAdapterNestedInput;
};
export type AdapterCreateManyUserInput = {
    id?: string;
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    access_token?: string | null;
    refresh_token?: string | null;
    expires_in?: Date | string | null;
    refresh_token_expires_in?: Date | string | null;
    scope?: string | null;
    token_type?: string | null;
    adapter_type: $Enums.AdapterName;
};
export type AdapterUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    access_token?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    refresh_token?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    expires_in?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    refresh_token_expires_in?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    scope?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    token_type?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    adapter_type?: Prisma.EnumAdapterNameFieldUpdateOperationsInput | $Enums.AdapterName;
    adapterAccountInfo?: Prisma.AdapterAccountInfoUpdateOneWithoutAdapterNestedInput;
    sourceMigrations?: Prisma.MigrationUpdateManyWithoutSourceAdapterNestedInput;
    destinationMigrations?: Prisma.MigrationUpdateManyWithoutDestinationAdapterNestedInput;
};
export type AdapterUncheckedUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    access_token?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    refresh_token?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    expires_in?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    refresh_token_expires_in?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    scope?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    token_type?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    adapter_type?: Prisma.EnumAdapterNameFieldUpdateOperationsInput | $Enums.AdapterName;
    adapterAccountInfo?: Prisma.AdapterAccountInfoUncheckedUpdateOneWithoutAdapterNestedInput;
    sourceMigrations?: Prisma.MigrationUncheckedUpdateManyWithoutSourceAdapterNestedInput;
    destinationMigrations?: Prisma.MigrationUncheckedUpdateManyWithoutDestinationAdapterNestedInput;
};
export type AdapterUncheckedUpdateManyWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    access_token?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    refresh_token?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    expires_in?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    refresh_token_expires_in?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    scope?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    token_type?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    adapter_type?: Prisma.EnumAdapterNameFieldUpdateOperationsInput | $Enums.AdapterName;
};
/**
 * Count Type AdapterCountOutputType
 */
export type AdapterCountOutputType = {
    sourceMigrations: number;
    destinationMigrations: number;
};
export type AdapterCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    sourceMigrations?: boolean | AdapterCountOutputTypeCountSourceMigrationsArgs;
    destinationMigrations?: boolean | AdapterCountOutputTypeCountDestinationMigrationsArgs;
};
/**
 * AdapterCountOutputType without action
 */
export type AdapterCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdapterCountOutputType
     */
    select?: Prisma.AdapterCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * AdapterCountOutputType without action
 */
export type AdapterCountOutputTypeCountSourceMigrationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MigrationWhereInput;
};
/**
 * AdapterCountOutputType without action
 */
export type AdapterCountOutputTypeCountDestinationMigrationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MigrationWhereInput;
};
export type AdapterSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    access_token?: boolean;
    refresh_token?: boolean;
    expires_in?: boolean;
    refresh_token_expires_in?: boolean;
    scope?: boolean;
    token_type?: boolean;
    adapter_type?: boolean;
    userId?: boolean;
    adapterAccountInfo?: boolean | Prisma.Adapter$adapterAccountInfoArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    sourceMigrations?: boolean | Prisma.Adapter$sourceMigrationsArgs<ExtArgs>;
    destinationMigrations?: boolean | Prisma.Adapter$destinationMigrationsArgs<ExtArgs>;
    _count?: boolean | Prisma.AdapterCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["adapter"]>;
export type AdapterSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    access_token?: boolean;
    refresh_token?: boolean;
    expires_in?: boolean;
    refresh_token_expires_in?: boolean;
    scope?: boolean;
    token_type?: boolean;
    adapter_type?: boolean;
    userId?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["adapter"]>;
export type AdapterSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    access_token?: boolean;
    refresh_token?: boolean;
    expires_in?: boolean;
    refresh_token_expires_in?: boolean;
    scope?: boolean;
    token_type?: boolean;
    adapter_type?: boolean;
    userId?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["adapter"]>;
export type AdapterSelectScalar = {
    id?: boolean;
    name?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    access_token?: boolean;
    refresh_token?: boolean;
    expires_in?: boolean;
    refresh_token_expires_in?: boolean;
    scope?: boolean;
    token_type?: boolean;
    adapter_type?: boolean;
    userId?: boolean;
};
export type AdapterOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "name" | "createdAt" | "updatedAt" | "access_token" | "refresh_token" | "expires_in" | "refresh_token_expires_in" | "scope" | "token_type" | "adapter_type" | "userId", ExtArgs["result"]["adapter"]>;
export type AdapterInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    adapterAccountInfo?: boolean | Prisma.Adapter$adapterAccountInfoArgs<ExtArgs>;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    sourceMigrations?: boolean | Prisma.Adapter$sourceMigrationsArgs<ExtArgs>;
    destinationMigrations?: boolean | Prisma.Adapter$destinationMigrationsArgs<ExtArgs>;
    _count?: boolean | Prisma.AdapterCountOutputTypeDefaultArgs<ExtArgs>;
};
export type AdapterIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type AdapterIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $AdapterPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Adapter";
    objects: {
        adapterAccountInfo: Prisma.$AdapterAccountInfoPayload<ExtArgs> | null;
        user: Prisma.$UserPayload<ExtArgs>;
        sourceMigrations: Prisma.$MigrationPayload<ExtArgs>[];
        destinationMigrations: Prisma.$MigrationPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        access_token: string | null;
        refresh_token: string | null;
        expires_in: Date | null;
        refresh_token_expires_in: Date | null;
        scope: string | null;
        token_type: string | null;
        adapter_type: $Enums.AdapterName;
        userId: string;
    }, ExtArgs["result"]["adapter"]>;
    composites: {};
};
export type AdapterGetPayload<S extends boolean | null | undefined | AdapterDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$AdapterPayload, S>;
export type AdapterCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<AdapterFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: AdapterCountAggregateInputType | true;
};
export interface AdapterDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Adapter'];
        meta: {
            name: 'Adapter';
        };
    };
    /**
     * Find zero or one Adapter that matches the filter.
     * @param {AdapterFindUniqueArgs} args - Arguments to find a Adapter
     * @example
     * // Get one Adapter
     * const adapter = await prisma.adapter.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AdapterFindUniqueArgs>(args: Prisma.SelectSubset<T, AdapterFindUniqueArgs<ExtArgs>>): Prisma.Prisma__AdapterClient<runtime.Types.Result.GetResult<Prisma.$AdapterPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Adapter that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AdapterFindUniqueOrThrowArgs} args - Arguments to find a Adapter
     * @example
     * // Get one Adapter
     * const adapter = await prisma.adapter.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AdapterFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, AdapterFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__AdapterClient<runtime.Types.Result.GetResult<Prisma.$AdapterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Adapter that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdapterFindFirstArgs} args - Arguments to find a Adapter
     * @example
     * // Get one Adapter
     * const adapter = await prisma.adapter.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AdapterFindFirstArgs>(args?: Prisma.SelectSubset<T, AdapterFindFirstArgs<ExtArgs>>): Prisma.Prisma__AdapterClient<runtime.Types.Result.GetResult<Prisma.$AdapterPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Adapter that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdapterFindFirstOrThrowArgs} args - Arguments to find a Adapter
     * @example
     * // Get one Adapter
     * const adapter = await prisma.adapter.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AdapterFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, AdapterFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__AdapterClient<runtime.Types.Result.GetResult<Prisma.$AdapterPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Adapters that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdapterFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Adapters
     * const adapters = await prisma.adapter.findMany()
     *
     * // Get first 10 Adapters
     * const adapters = await prisma.adapter.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const adapterWithIdOnly = await prisma.adapter.findMany({ select: { id: true } })
     *
     */
    findMany<T extends AdapterFindManyArgs>(args?: Prisma.SelectSubset<T, AdapterFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AdapterPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Adapter.
     * @param {AdapterCreateArgs} args - Arguments to create a Adapter.
     * @example
     * // Create one Adapter
     * const Adapter = await prisma.adapter.create({
     *   data: {
     *     // ... data to create a Adapter
     *   }
     * })
     *
     */
    create<T extends AdapterCreateArgs>(args: Prisma.SelectSubset<T, AdapterCreateArgs<ExtArgs>>): Prisma.Prisma__AdapterClient<runtime.Types.Result.GetResult<Prisma.$AdapterPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Adapters.
     * @param {AdapterCreateManyArgs} args - Arguments to create many Adapters.
     * @example
     * // Create many Adapters
     * const adapter = await prisma.adapter.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends AdapterCreateManyArgs>(args?: Prisma.SelectSubset<T, AdapterCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Adapters and returns the data saved in the database.
     * @param {AdapterCreateManyAndReturnArgs} args - Arguments to create many Adapters.
     * @example
     * // Create many Adapters
     * const adapter = await prisma.adapter.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Adapters and only return the `id`
     * const adapterWithIdOnly = await prisma.adapter.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends AdapterCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, AdapterCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AdapterPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Adapter.
     * @param {AdapterDeleteArgs} args - Arguments to delete one Adapter.
     * @example
     * // Delete one Adapter
     * const Adapter = await prisma.adapter.delete({
     *   where: {
     *     // ... filter to delete one Adapter
     *   }
     * })
     *
     */
    delete<T extends AdapterDeleteArgs>(args: Prisma.SelectSubset<T, AdapterDeleteArgs<ExtArgs>>): Prisma.Prisma__AdapterClient<runtime.Types.Result.GetResult<Prisma.$AdapterPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Adapter.
     * @param {AdapterUpdateArgs} args - Arguments to update one Adapter.
     * @example
     * // Update one Adapter
     * const adapter = await prisma.adapter.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends AdapterUpdateArgs>(args: Prisma.SelectSubset<T, AdapterUpdateArgs<ExtArgs>>): Prisma.Prisma__AdapterClient<runtime.Types.Result.GetResult<Prisma.$AdapterPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Adapters.
     * @param {AdapterDeleteManyArgs} args - Arguments to filter Adapters to delete.
     * @example
     * // Delete a few Adapters
     * const { count } = await prisma.adapter.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends AdapterDeleteManyArgs>(args?: Prisma.SelectSubset<T, AdapterDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Adapters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdapterUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Adapters
     * const adapter = await prisma.adapter.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends AdapterUpdateManyArgs>(args: Prisma.SelectSubset<T, AdapterUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Adapters and returns the data updated in the database.
     * @param {AdapterUpdateManyAndReturnArgs} args - Arguments to update many Adapters.
     * @example
     * // Update many Adapters
     * const adapter = await prisma.adapter.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Adapters and only return the `id`
     * const adapterWithIdOnly = await prisma.adapter.updateManyAndReturn({
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
    updateManyAndReturn<T extends AdapterUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, AdapterUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AdapterPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Adapter.
     * @param {AdapterUpsertArgs} args - Arguments to update or create a Adapter.
     * @example
     * // Update or create a Adapter
     * const adapter = await prisma.adapter.upsert({
     *   create: {
     *     // ... data to create a Adapter
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Adapter we want to update
     *   }
     * })
     */
    upsert<T extends AdapterUpsertArgs>(args: Prisma.SelectSubset<T, AdapterUpsertArgs<ExtArgs>>): Prisma.Prisma__AdapterClient<runtime.Types.Result.GetResult<Prisma.$AdapterPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Adapters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdapterCountArgs} args - Arguments to filter Adapters to count.
     * @example
     * // Count the number of Adapters
     * const count = await prisma.adapter.count({
     *   where: {
     *     // ... the filter for the Adapters we want to count
     *   }
     * })
    **/
    count<T extends AdapterCountArgs>(args?: Prisma.Subset<T, AdapterCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], AdapterCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Adapter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdapterAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AdapterAggregateArgs>(args: Prisma.Subset<T, AdapterAggregateArgs>): Prisma.PrismaPromise<GetAdapterAggregateType<T>>;
    /**
     * Group by Adapter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdapterGroupByArgs} args - Group by arguments.
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
    groupBy<T extends AdapterGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: AdapterGroupByArgs['orderBy'];
    } : {
        orderBy?: AdapterGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, AdapterGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdapterGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Adapter model
     */
    readonly fields: AdapterFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for Adapter.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__AdapterClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    adapterAccountInfo<T extends Prisma.Adapter$adapterAccountInfoArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Adapter$adapterAccountInfoArgs<ExtArgs>>): Prisma.Prisma__AdapterAccountInfoClient<runtime.Types.Result.GetResult<Prisma.$AdapterAccountInfoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    sourceMigrations<T extends Prisma.Adapter$sourceMigrationsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Adapter$sourceMigrationsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MigrationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    destinationMigrations<T extends Prisma.Adapter$destinationMigrationsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Adapter$destinationMigrationsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MigrationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
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
 * Fields of the Adapter model
 */
export interface AdapterFieldRefs {
    readonly id: Prisma.FieldRef<"Adapter", 'String'>;
    readonly name: Prisma.FieldRef<"Adapter", 'String'>;
    readonly createdAt: Prisma.FieldRef<"Adapter", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Adapter", 'DateTime'>;
    readonly access_token: Prisma.FieldRef<"Adapter", 'String'>;
    readonly refresh_token: Prisma.FieldRef<"Adapter", 'String'>;
    readonly expires_in: Prisma.FieldRef<"Adapter", 'DateTime'>;
    readonly refresh_token_expires_in: Prisma.FieldRef<"Adapter", 'DateTime'>;
    readonly scope: Prisma.FieldRef<"Adapter", 'String'>;
    readonly token_type: Prisma.FieldRef<"Adapter", 'String'>;
    readonly adapter_type: Prisma.FieldRef<"Adapter", 'AdapterName'>;
    readonly userId: Prisma.FieldRef<"Adapter", 'String'>;
}
/**
 * Adapter findUnique
 */
export type AdapterFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Adapter
     */
    select?: Prisma.AdapterSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Adapter
     */
    omit?: Prisma.AdapterOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AdapterInclude<ExtArgs> | null;
    /**
     * Filter, which Adapter to fetch.
     */
    where: Prisma.AdapterWhereUniqueInput;
};
/**
 * Adapter findUniqueOrThrow
 */
export type AdapterFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Adapter
     */
    select?: Prisma.AdapterSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Adapter
     */
    omit?: Prisma.AdapterOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AdapterInclude<ExtArgs> | null;
    /**
     * Filter, which Adapter to fetch.
     */
    where: Prisma.AdapterWhereUniqueInput;
};
/**
 * Adapter findFirst
 */
export type AdapterFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Adapter
     */
    select?: Prisma.AdapterSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Adapter
     */
    omit?: Prisma.AdapterOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AdapterInclude<ExtArgs> | null;
    /**
     * Filter, which Adapter to fetch.
     */
    where?: Prisma.AdapterWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Adapters to fetch.
     */
    orderBy?: Prisma.AdapterOrderByWithRelationInput | Prisma.AdapterOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Adapters.
     */
    cursor?: Prisma.AdapterWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Adapters from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Adapters.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Adapters.
     */
    distinct?: Prisma.AdapterScalarFieldEnum | Prisma.AdapterScalarFieldEnum[];
};
/**
 * Adapter findFirstOrThrow
 */
export type AdapterFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Adapter
     */
    select?: Prisma.AdapterSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Adapter
     */
    omit?: Prisma.AdapterOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AdapterInclude<ExtArgs> | null;
    /**
     * Filter, which Adapter to fetch.
     */
    where?: Prisma.AdapterWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Adapters to fetch.
     */
    orderBy?: Prisma.AdapterOrderByWithRelationInput | Prisma.AdapterOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Adapters.
     */
    cursor?: Prisma.AdapterWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Adapters from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Adapters.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Adapters.
     */
    distinct?: Prisma.AdapterScalarFieldEnum | Prisma.AdapterScalarFieldEnum[];
};
/**
 * Adapter findMany
 */
export type AdapterFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Adapter
     */
    select?: Prisma.AdapterSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Adapter
     */
    omit?: Prisma.AdapterOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AdapterInclude<ExtArgs> | null;
    /**
     * Filter, which Adapters to fetch.
     */
    where?: Prisma.AdapterWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Adapters to fetch.
     */
    orderBy?: Prisma.AdapterOrderByWithRelationInput | Prisma.AdapterOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Adapters.
     */
    cursor?: Prisma.AdapterWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Adapters from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Adapters.
     */
    skip?: number;
    distinct?: Prisma.AdapterScalarFieldEnum | Prisma.AdapterScalarFieldEnum[];
};
/**
 * Adapter create
 */
export type AdapterCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Adapter
     */
    select?: Prisma.AdapterSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Adapter
     */
    omit?: Prisma.AdapterOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AdapterInclude<ExtArgs> | null;
    /**
     * The data needed to create a Adapter.
     */
    data: Prisma.XOR<Prisma.AdapterCreateInput, Prisma.AdapterUncheckedCreateInput>;
};
/**
 * Adapter createMany
 */
export type AdapterCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many Adapters.
     */
    data: Prisma.AdapterCreateManyInput | Prisma.AdapterCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * Adapter createManyAndReturn
 */
export type AdapterCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Adapter
     */
    select?: Prisma.AdapterSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Adapter
     */
    omit?: Prisma.AdapterOmit<ExtArgs> | null;
    /**
     * The data used to create many Adapters.
     */
    data: Prisma.AdapterCreateManyInput | Prisma.AdapterCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AdapterIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * Adapter update
 */
export type AdapterUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Adapter
     */
    select?: Prisma.AdapterSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Adapter
     */
    omit?: Prisma.AdapterOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AdapterInclude<ExtArgs> | null;
    /**
     * The data needed to update a Adapter.
     */
    data: Prisma.XOR<Prisma.AdapterUpdateInput, Prisma.AdapterUncheckedUpdateInput>;
    /**
     * Choose, which Adapter to update.
     */
    where: Prisma.AdapterWhereUniqueInput;
};
/**
 * Adapter updateMany
 */
export type AdapterUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update Adapters.
     */
    data: Prisma.XOR<Prisma.AdapterUpdateManyMutationInput, Prisma.AdapterUncheckedUpdateManyInput>;
    /**
     * Filter which Adapters to update
     */
    where?: Prisma.AdapterWhereInput;
    /**
     * Limit how many Adapters to update.
     */
    limit?: number;
};
/**
 * Adapter updateManyAndReturn
 */
export type AdapterUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Adapter
     */
    select?: Prisma.AdapterSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Adapter
     */
    omit?: Prisma.AdapterOmit<ExtArgs> | null;
    /**
     * The data used to update Adapters.
     */
    data: Prisma.XOR<Prisma.AdapterUpdateManyMutationInput, Prisma.AdapterUncheckedUpdateManyInput>;
    /**
     * Filter which Adapters to update
     */
    where?: Prisma.AdapterWhereInput;
    /**
     * Limit how many Adapters to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AdapterIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * Adapter upsert
 */
export type AdapterUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Adapter
     */
    select?: Prisma.AdapterSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Adapter
     */
    omit?: Prisma.AdapterOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AdapterInclude<ExtArgs> | null;
    /**
     * The filter to search for the Adapter to update in case it exists.
     */
    where: Prisma.AdapterWhereUniqueInput;
    /**
     * In case the Adapter found by the `where` argument doesn't exist, create a new Adapter with this data.
     */
    create: Prisma.XOR<Prisma.AdapterCreateInput, Prisma.AdapterUncheckedCreateInput>;
    /**
     * In case the Adapter was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.AdapterUpdateInput, Prisma.AdapterUncheckedUpdateInput>;
};
/**
 * Adapter delete
 */
export type AdapterDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Adapter
     */
    select?: Prisma.AdapterSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Adapter
     */
    omit?: Prisma.AdapterOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AdapterInclude<ExtArgs> | null;
    /**
     * Filter which Adapter to delete.
     */
    where: Prisma.AdapterWhereUniqueInput;
};
/**
 * Adapter deleteMany
 */
export type AdapterDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Adapters to delete
     */
    where?: Prisma.AdapterWhereInput;
    /**
     * Limit how many Adapters to delete.
     */
    limit?: number;
};
/**
 * Adapter.adapterAccountInfo
 */
export type Adapter$adapterAccountInfoArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdapterAccountInfo
     */
    select?: Prisma.AdapterAccountInfoSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AdapterAccountInfo
     */
    omit?: Prisma.AdapterAccountInfoOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AdapterAccountInfoInclude<ExtArgs> | null;
    where?: Prisma.AdapterAccountInfoWhereInput;
};
/**
 * Adapter.sourceMigrations
 */
export type Adapter$sourceMigrationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    where?: Prisma.MigrationWhereInput;
    orderBy?: Prisma.MigrationOrderByWithRelationInput | Prisma.MigrationOrderByWithRelationInput[];
    cursor?: Prisma.MigrationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MigrationScalarFieldEnum | Prisma.MigrationScalarFieldEnum[];
};
/**
 * Adapter.destinationMigrations
 */
export type Adapter$destinationMigrationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    where?: Prisma.MigrationWhereInput;
    orderBy?: Prisma.MigrationOrderByWithRelationInput | Prisma.MigrationOrderByWithRelationInput[];
    cursor?: Prisma.MigrationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MigrationScalarFieldEnum | Prisma.MigrationScalarFieldEnum[];
};
/**
 * Adapter without action
 */
export type AdapterDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Adapter
     */
    select?: Prisma.AdapterSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Adapter
     */
    omit?: Prisma.AdapterOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AdapterInclude<ExtArgs> | null;
};
export {};
//# sourceMappingURL=Adapter.d.ts.map