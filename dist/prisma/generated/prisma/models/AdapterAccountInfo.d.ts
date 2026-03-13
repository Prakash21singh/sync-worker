import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
/**
 * Model AdapterAccountInfo
 *
 */
export type AdapterAccountInfoModel = runtime.Types.Result.DefaultSelection<Prisma.$AdapterAccountInfoPayload>;
export type AggregateAdapterAccountInfo = {
    _count: AdapterAccountInfoCountAggregateOutputType | null;
    _min: AdapterAccountInfoMinAggregateOutputType | null;
    _max: AdapterAccountInfoMaxAggregateOutputType | null;
};
export type AdapterAccountInfoMinAggregateOutputType = {
    id: string | null;
    email: string | null;
    name: string | null;
    avatar: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    adapterId: string | null;
};
export type AdapterAccountInfoMaxAggregateOutputType = {
    id: string | null;
    email: string | null;
    name: string | null;
    avatar: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    adapterId: string | null;
};
export type AdapterAccountInfoCountAggregateOutputType = {
    id: number;
    email: number;
    name: number;
    avatar: number;
    createdAt: number;
    updatedAt: number;
    adapterId: number;
    _all: number;
};
export type AdapterAccountInfoMinAggregateInputType = {
    id?: true;
    email?: true;
    name?: true;
    avatar?: true;
    createdAt?: true;
    updatedAt?: true;
    adapterId?: true;
};
export type AdapterAccountInfoMaxAggregateInputType = {
    id?: true;
    email?: true;
    name?: true;
    avatar?: true;
    createdAt?: true;
    updatedAt?: true;
    adapterId?: true;
};
export type AdapterAccountInfoCountAggregateInputType = {
    id?: true;
    email?: true;
    name?: true;
    avatar?: true;
    createdAt?: true;
    updatedAt?: true;
    adapterId?: true;
    _all?: true;
};
export type AdapterAccountInfoAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which AdapterAccountInfo to aggregate.
     */
    where?: Prisma.AdapterAccountInfoWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of AdapterAccountInfos to fetch.
     */
    orderBy?: Prisma.AdapterAccountInfoOrderByWithRelationInput | Prisma.AdapterAccountInfoOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.AdapterAccountInfoWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` AdapterAccountInfos from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` AdapterAccountInfos.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned AdapterAccountInfos
    **/
    _count?: true | AdapterAccountInfoCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: AdapterAccountInfoMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: AdapterAccountInfoMaxAggregateInputType;
};
export type GetAdapterAccountInfoAggregateType<T extends AdapterAccountInfoAggregateArgs> = {
    [P in keyof T & keyof AggregateAdapterAccountInfo]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateAdapterAccountInfo[P]> : Prisma.GetScalarType<T[P], AggregateAdapterAccountInfo[P]>;
};
export type AdapterAccountInfoGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AdapterAccountInfoWhereInput;
    orderBy?: Prisma.AdapterAccountInfoOrderByWithAggregationInput | Prisma.AdapterAccountInfoOrderByWithAggregationInput[];
    by: Prisma.AdapterAccountInfoScalarFieldEnum[] | Prisma.AdapterAccountInfoScalarFieldEnum;
    having?: Prisma.AdapterAccountInfoScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: AdapterAccountInfoCountAggregateInputType | true;
    _min?: AdapterAccountInfoMinAggregateInputType;
    _max?: AdapterAccountInfoMaxAggregateInputType;
};
export type AdapterAccountInfoGroupByOutputType = {
    id: string;
    email: string | null;
    name: string | null;
    avatar: string | null;
    createdAt: Date;
    updatedAt: Date;
    adapterId: string;
    _count: AdapterAccountInfoCountAggregateOutputType | null;
    _min: AdapterAccountInfoMinAggregateOutputType | null;
    _max: AdapterAccountInfoMaxAggregateOutputType | null;
};
type GetAdapterAccountInfoGroupByPayload<T extends AdapterAccountInfoGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<AdapterAccountInfoGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof AdapterAccountInfoGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], AdapterAccountInfoGroupByOutputType[P]> : Prisma.GetScalarType<T[P], AdapterAccountInfoGroupByOutputType[P]>;
}>>;
export type AdapterAccountInfoWhereInput = {
    AND?: Prisma.AdapterAccountInfoWhereInput | Prisma.AdapterAccountInfoWhereInput[];
    OR?: Prisma.AdapterAccountInfoWhereInput[];
    NOT?: Prisma.AdapterAccountInfoWhereInput | Prisma.AdapterAccountInfoWhereInput[];
    id?: Prisma.StringFilter<"AdapterAccountInfo"> | string;
    email?: Prisma.StringNullableFilter<"AdapterAccountInfo"> | string | null;
    name?: Prisma.StringNullableFilter<"AdapterAccountInfo"> | string | null;
    avatar?: Prisma.StringNullableFilter<"AdapterAccountInfo"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"AdapterAccountInfo"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"AdapterAccountInfo"> | Date | string;
    adapterId?: Prisma.StringFilter<"AdapterAccountInfo"> | string;
    adapter?: Prisma.XOR<Prisma.AdapterScalarRelationFilter, Prisma.AdapterWhereInput>;
};
export type AdapterAccountInfoOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    email?: Prisma.SortOrderInput | Prisma.SortOrder;
    name?: Prisma.SortOrderInput | Prisma.SortOrder;
    avatar?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    adapterId?: Prisma.SortOrder;
    adapter?: Prisma.AdapterOrderByWithRelationInput;
};
export type AdapterAccountInfoWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    adapterId?: string;
    AND?: Prisma.AdapterAccountInfoWhereInput | Prisma.AdapterAccountInfoWhereInput[];
    OR?: Prisma.AdapterAccountInfoWhereInput[];
    NOT?: Prisma.AdapterAccountInfoWhereInput | Prisma.AdapterAccountInfoWhereInput[];
    email?: Prisma.StringNullableFilter<"AdapterAccountInfo"> | string | null;
    name?: Prisma.StringNullableFilter<"AdapterAccountInfo"> | string | null;
    avatar?: Prisma.StringNullableFilter<"AdapterAccountInfo"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"AdapterAccountInfo"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"AdapterAccountInfo"> | Date | string;
    adapter?: Prisma.XOR<Prisma.AdapterScalarRelationFilter, Prisma.AdapterWhereInput>;
}, "id" | "adapterId">;
export type AdapterAccountInfoOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    email?: Prisma.SortOrderInput | Prisma.SortOrder;
    name?: Prisma.SortOrderInput | Prisma.SortOrder;
    avatar?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    adapterId?: Prisma.SortOrder;
    _count?: Prisma.AdapterAccountInfoCountOrderByAggregateInput;
    _max?: Prisma.AdapterAccountInfoMaxOrderByAggregateInput;
    _min?: Prisma.AdapterAccountInfoMinOrderByAggregateInput;
};
export type AdapterAccountInfoScalarWhereWithAggregatesInput = {
    AND?: Prisma.AdapterAccountInfoScalarWhereWithAggregatesInput | Prisma.AdapterAccountInfoScalarWhereWithAggregatesInput[];
    OR?: Prisma.AdapterAccountInfoScalarWhereWithAggregatesInput[];
    NOT?: Prisma.AdapterAccountInfoScalarWhereWithAggregatesInput | Prisma.AdapterAccountInfoScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"AdapterAccountInfo"> | string;
    email?: Prisma.StringNullableWithAggregatesFilter<"AdapterAccountInfo"> | string | null;
    name?: Prisma.StringNullableWithAggregatesFilter<"AdapterAccountInfo"> | string | null;
    avatar?: Prisma.StringNullableWithAggregatesFilter<"AdapterAccountInfo"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"AdapterAccountInfo"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"AdapterAccountInfo"> | Date | string;
    adapterId?: Prisma.StringWithAggregatesFilter<"AdapterAccountInfo"> | string;
};
export type AdapterAccountInfoCreateInput = {
    id?: string;
    email?: string | null;
    name?: string | null;
    avatar?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    adapter: Prisma.AdapterCreateNestedOneWithoutAdapterAccountInfoInput;
};
export type AdapterAccountInfoUncheckedCreateInput = {
    id?: string;
    email?: string | null;
    name?: string | null;
    avatar?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    adapterId: string;
};
export type AdapterAccountInfoUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    avatar?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    adapter?: Prisma.AdapterUpdateOneRequiredWithoutAdapterAccountInfoNestedInput;
};
export type AdapterAccountInfoUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    avatar?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    adapterId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type AdapterAccountInfoCreateManyInput = {
    id?: string;
    email?: string | null;
    name?: string | null;
    avatar?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    adapterId: string;
};
export type AdapterAccountInfoUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    avatar?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AdapterAccountInfoUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    avatar?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    adapterId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type AdapterAccountInfoNullableScalarRelationFilter = {
    is?: Prisma.AdapterAccountInfoWhereInput | null;
    isNot?: Prisma.AdapterAccountInfoWhereInput | null;
};
export type AdapterAccountInfoCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    avatar?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    adapterId?: Prisma.SortOrder;
};
export type AdapterAccountInfoMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    avatar?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    adapterId?: Prisma.SortOrder;
};
export type AdapterAccountInfoMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    avatar?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    adapterId?: Prisma.SortOrder;
};
export type AdapterAccountInfoCreateNestedOneWithoutAdapterInput = {
    create?: Prisma.XOR<Prisma.AdapterAccountInfoCreateWithoutAdapterInput, Prisma.AdapterAccountInfoUncheckedCreateWithoutAdapterInput>;
    connectOrCreate?: Prisma.AdapterAccountInfoCreateOrConnectWithoutAdapterInput;
    connect?: Prisma.AdapterAccountInfoWhereUniqueInput;
};
export type AdapterAccountInfoUncheckedCreateNestedOneWithoutAdapterInput = {
    create?: Prisma.XOR<Prisma.AdapterAccountInfoCreateWithoutAdapterInput, Prisma.AdapterAccountInfoUncheckedCreateWithoutAdapterInput>;
    connectOrCreate?: Prisma.AdapterAccountInfoCreateOrConnectWithoutAdapterInput;
    connect?: Prisma.AdapterAccountInfoWhereUniqueInput;
};
export type AdapterAccountInfoUpdateOneWithoutAdapterNestedInput = {
    create?: Prisma.XOR<Prisma.AdapterAccountInfoCreateWithoutAdapterInput, Prisma.AdapterAccountInfoUncheckedCreateWithoutAdapterInput>;
    connectOrCreate?: Prisma.AdapterAccountInfoCreateOrConnectWithoutAdapterInput;
    upsert?: Prisma.AdapterAccountInfoUpsertWithoutAdapterInput;
    disconnect?: Prisma.AdapterAccountInfoWhereInput | boolean;
    delete?: Prisma.AdapterAccountInfoWhereInput | boolean;
    connect?: Prisma.AdapterAccountInfoWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.AdapterAccountInfoUpdateToOneWithWhereWithoutAdapterInput, Prisma.AdapterAccountInfoUpdateWithoutAdapterInput>, Prisma.AdapterAccountInfoUncheckedUpdateWithoutAdapterInput>;
};
export type AdapterAccountInfoUncheckedUpdateOneWithoutAdapterNestedInput = {
    create?: Prisma.XOR<Prisma.AdapterAccountInfoCreateWithoutAdapterInput, Prisma.AdapterAccountInfoUncheckedCreateWithoutAdapterInput>;
    connectOrCreate?: Prisma.AdapterAccountInfoCreateOrConnectWithoutAdapterInput;
    upsert?: Prisma.AdapterAccountInfoUpsertWithoutAdapterInput;
    disconnect?: Prisma.AdapterAccountInfoWhereInput | boolean;
    delete?: Prisma.AdapterAccountInfoWhereInput | boolean;
    connect?: Prisma.AdapterAccountInfoWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.AdapterAccountInfoUpdateToOneWithWhereWithoutAdapterInput, Prisma.AdapterAccountInfoUpdateWithoutAdapterInput>, Prisma.AdapterAccountInfoUncheckedUpdateWithoutAdapterInput>;
};
export type AdapterAccountInfoCreateWithoutAdapterInput = {
    id?: string;
    email?: string | null;
    name?: string | null;
    avatar?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type AdapterAccountInfoUncheckedCreateWithoutAdapterInput = {
    id?: string;
    email?: string | null;
    name?: string | null;
    avatar?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type AdapterAccountInfoCreateOrConnectWithoutAdapterInput = {
    where: Prisma.AdapterAccountInfoWhereUniqueInput;
    create: Prisma.XOR<Prisma.AdapterAccountInfoCreateWithoutAdapterInput, Prisma.AdapterAccountInfoUncheckedCreateWithoutAdapterInput>;
};
export type AdapterAccountInfoUpsertWithoutAdapterInput = {
    update: Prisma.XOR<Prisma.AdapterAccountInfoUpdateWithoutAdapterInput, Prisma.AdapterAccountInfoUncheckedUpdateWithoutAdapterInput>;
    create: Prisma.XOR<Prisma.AdapterAccountInfoCreateWithoutAdapterInput, Prisma.AdapterAccountInfoUncheckedCreateWithoutAdapterInput>;
    where?: Prisma.AdapterAccountInfoWhereInput;
};
export type AdapterAccountInfoUpdateToOneWithWhereWithoutAdapterInput = {
    where?: Prisma.AdapterAccountInfoWhereInput;
    data: Prisma.XOR<Prisma.AdapterAccountInfoUpdateWithoutAdapterInput, Prisma.AdapterAccountInfoUncheckedUpdateWithoutAdapterInput>;
};
export type AdapterAccountInfoUpdateWithoutAdapterInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    avatar?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AdapterAccountInfoUncheckedUpdateWithoutAdapterInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    avatar?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AdapterAccountInfoSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    email?: boolean;
    name?: boolean;
    avatar?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    adapterId?: boolean;
    adapter?: boolean | Prisma.AdapterDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["adapterAccountInfo"]>;
export type AdapterAccountInfoSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    email?: boolean;
    name?: boolean;
    avatar?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    adapterId?: boolean;
    adapter?: boolean | Prisma.AdapterDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["adapterAccountInfo"]>;
export type AdapterAccountInfoSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    email?: boolean;
    name?: boolean;
    avatar?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    adapterId?: boolean;
    adapter?: boolean | Prisma.AdapterDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["adapterAccountInfo"]>;
export type AdapterAccountInfoSelectScalar = {
    id?: boolean;
    email?: boolean;
    name?: boolean;
    avatar?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    adapterId?: boolean;
};
export type AdapterAccountInfoOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "email" | "name" | "avatar" | "createdAt" | "updatedAt" | "adapterId", ExtArgs["result"]["adapterAccountInfo"]>;
export type AdapterAccountInfoInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    adapter?: boolean | Prisma.AdapterDefaultArgs<ExtArgs>;
};
export type AdapterAccountInfoIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    adapter?: boolean | Prisma.AdapterDefaultArgs<ExtArgs>;
};
export type AdapterAccountInfoIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    adapter?: boolean | Prisma.AdapterDefaultArgs<ExtArgs>;
};
export type $AdapterAccountInfoPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "AdapterAccountInfo";
    objects: {
        adapter: Prisma.$AdapterPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        email: string | null;
        name: string | null;
        avatar: string | null;
        createdAt: Date;
        updatedAt: Date;
        adapterId: string;
    }, ExtArgs["result"]["adapterAccountInfo"]>;
    composites: {};
};
export type AdapterAccountInfoGetPayload<S extends boolean | null | undefined | AdapterAccountInfoDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$AdapterAccountInfoPayload, S>;
export type AdapterAccountInfoCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<AdapterAccountInfoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: AdapterAccountInfoCountAggregateInputType | true;
};
export interface AdapterAccountInfoDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['AdapterAccountInfo'];
        meta: {
            name: 'AdapterAccountInfo';
        };
    };
    /**
     * Find zero or one AdapterAccountInfo that matches the filter.
     * @param {AdapterAccountInfoFindUniqueArgs} args - Arguments to find a AdapterAccountInfo
     * @example
     * // Get one AdapterAccountInfo
     * const adapterAccountInfo = await prisma.adapterAccountInfo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AdapterAccountInfoFindUniqueArgs>(args: Prisma.SelectSubset<T, AdapterAccountInfoFindUniqueArgs<ExtArgs>>): Prisma.Prisma__AdapterAccountInfoClient<runtime.Types.Result.GetResult<Prisma.$AdapterAccountInfoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one AdapterAccountInfo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AdapterAccountInfoFindUniqueOrThrowArgs} args - Arguments to find a AdapterAccountInfo
     * @example
     * // Get one AdapterAccountInfo
     * const adapterAccountInfo = await prisma.adapterAccountInfo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AdapterAccountInfoFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, AdapterAccountInfoFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__AdapterAccountInfoClient<runtime.Types.Result.GetResult<Prisma.$AdapterAccountInfoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first AdapterAccountInfo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdapterAccountInfoFindFirstArgs} args - Arguments to find a AdapterAccountInfo
     * @example
     * // Get one AdapterAccountInfo
     * const adapterAccountInfo = await prisma.adapterAccountInfo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AdapterAccountInfoFindFirstArgs>(args?: Prisma.SelectSubset<T, AdapterAccountInfoFindFirstArgs<ExtArgs>>): Prisma.Prisma__AdapterAccountInfoClient<runtime.Types.Result.GetResult<Prisma.$AdapterAccountInfoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first AdapterAccountInfo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdapterAccountInfoFindFirstOrThrowArgs} args - Arguments to find a AdapterAccountInfo
     * @example
     * // Get one AdapterAccountInfo
     * const adapterAccountInfo = await prisma.adapterAccountInfo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AdapterAccountInfoFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, AdapterAccountInfoFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__AdapterAccountInfoClient<runtime.Types.Result.GetResult<Prisma.$AdapterAccountInfoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more AdapterAccountInfos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdapterAccountInfoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AdapterAccountInfos
     * const adapterAccountInfos = await prisma.adapterAccountInfo.findMany()
     *
     * // Get first 10 AdapterAccountInfos
     * const adapterAccountInfos = await prisma.adapterAccountInfo.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const adapterAccountInfoWithIdOnly = await prisma.adapterAccountInfo.findMany({ select: { id: true } })
     *
     */
    findMany<T extends AdapterAccountInfoFindManyArgs>(args?: Prisma.SelectSubset<T, AdapterAccountInfoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AdapterAccountInfoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a AdapterAccountInfo.
     * @param {AdapterAccountInfoCreateArgs} args - Arguments to create a AdapterAccountInfo.
     * @example
     * // Create one AdapterAccountInfo
     * const AdapterAccountInfo = await prisma.adapterAccountInfo.create({
     *   data: {
     *     // ... data to create a AdapterAccountInfo
     *   }
     * })
     *
     */
    create<T extends AdapterAccountInfoCreateArgs>(args: Prisma.SelectSubset<T, AdapterAccountInfoCreateArgs<ExtArgs>>): Prisma.Prisma__AdapterAccountInfoClient<runtime.Types.Result.GetResult<Prisma.$AdapterAccountInfoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many AdapterAccountInfos.
     * @param {AdapterAccountInfoCreateManyArgs} args - Arguments to create many AdapterAccountInfos.
     * @example
     * // Create many AdapterAccountInfos
     * const adapterAccountInfo = await prisma.adapterAccountInfo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends AdapterAccountInfoCreateManyArgs>(args?: Prisma.SelectSubset<T, AdapterAccountInfoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many AdapterAccountInfos and returns the data saved in the database.
     * @param {AdapterAccountInfoCreateManyAndReturnArgs} args - Arguments to create many AdapterAccountInfos.
     * @example
     * // Create many AdapterAccountInfos
     * const adapterAccountInfo = await prisma.adapterAccountInfo.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many AdapterAccountInfos and only return the `id`
     * const adapterAccountInfoWithIdOnly = await prisma.adapterAccountInfo.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends AdapterAccountInfoCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, AdapterAccountInfoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AdapterAccountInfoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a AdapterAccountInfo.
     * @param {AdapterAccountInfoDeleteArgs} args - Arguments to delete one AdapterAccountInfo.
     * @example
     * // Delete one AdapterAccountInfo
     * const AdapterAccountInfo = await prisma.adapterAccountInfo.delete({
     *   where: {
     *     // ... filter to delete one AdapterAccountInfo
     *   }
     * })
     *
     */
    delete<T extends AdapterAccountInfoDeleteArgs>(args: Prisma.SelectSubset<T, AdapterAccountInfoDeleteArgs<ExtArgs>>): Prisma.Prisma__AdapterAccountInfoClient<runtime.Types.Result.GetResult<Prisma.$AdapterAccountInfoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one AdapterAccountInfo.
     * @param {AdapterAccountInfoUpdateArgs} args - Arguments to update one AdapterAccountInfo.
     * @example
     * // Update one AdapterAccountInfo
     * const adapterAccountInfo = await prisma.adapterAccountInfo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends AdapterAccountInfoUpdateArgs>(args: Prisma.SelectSubset<T, AdapterAccountInfoUpdateArgs<ExtArgs>>): Prisma.Prisma__AdapterAccountInfoClient<runtime.Types.Result.GetResult<Prisma.$AdapterAccountInfoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more AdapterAccountInfos.
     * @param {AdapterAccountInfoDeleteManyArgs} args - Arguments to filter AdapterAccountInfos to delete.
     * @example
     * // Delete a few AdapterAccountInfos
     * const { count } = await prisma.adapterAccountInfo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends AdapterAccountInfoDeleteManyArgs>(args?: Prisma.SelectSubset<T, AdapterAccountInfoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more AdapterAccountInfos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdapterAccountInfoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AdapterAccountInfos
     * const adapterAccountInfo = await prisma.adapterAccountInfo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends AdapterAccountInfoUpdateManyArgs>(args: Prisma.SelectSubset<T, AdapterAccountInfoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more AdapterAccountInfos and returns the data updated in the database.
     * @param {AdapterAccountInfoUpdateManyAndReturnArgs} args - Arguments to update many AdapterAccountInfos.
     * @example
     * // Update many AdapterAccountInfos
     * const adapterAccountInfo = await prisma.adapterAccountInfo.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more AdapterAccountInfos and only return the `id`
     * const adapterAccountInfoWithIdOnly = await prisma.adapterAccountInfo.updateManyAndReturn({
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
    updateManyAndReturn<T extends AdapterAccountInfoUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, AdapterAccountInfoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AdapterAccountInfoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one AdapterAccountInfo.
     * @param {AdapterAccountInfoUpsertArgs} args - Arguments to update or create a AdapterAccountInfo.
     * @example
     * // Update or create a AdapterAccountInfo
     * const adapterAccountInfo = await prisma.adapterAccountInfo.upsert({
     *   create: {
     *     // ... data to create a AdapterAccountInfo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AdapterAccountInfo we want to update
     *   }
     * })
     */
    upsert<T extends AdapterAccountInfoUpsertArgs>(args: Prisma.SelectSubset<T, AdapterAccountInfoUpsertArgs<ExtArgs>>): Prisma.Prisma__AdapterAccountInfoClient<runtime.Types.Result.GetResult<Prisma.$AdapterAccountInfoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of AdapterAccountInfos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdapterAccountInfoCountArgs} args - Arguments to filter AdapterAccountInfos to count.
     * @example
     * // Count the number of AdapterAccountInfos
     * const count = await prisma.adapterAccountInfo.count({
     *   where: {
     *     // ... the filter for the AdapterAccountInfos we want to count
     *   }
     * })
    **/
    count<T extends AdapterAccountInfoCountArgs>(args?: Prisma.Subset<T, AdapterAccountInfoCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], AdapterAccountInfoCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a AdapterAccountInfo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdapterAccountInfoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AdapterAccountInfoAggregateArgs>(args: Prisma.Subset<T, AdapterAccountInfoAggregateArgs>): Prisma.PrismaPromise<GetAdapterAccountInfoAggregateType<T>>;
    /**
     * Group by AdapterAccountInfo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdapterAccountInfoGroupByArgs} args - Group by arguments.
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
    groupBy<T extends AdapterAccountInfoGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: AdapterAccountInfoGroupByArgs['orderBy'];
    } : {
        orderBy?: AdapterAccountInfoGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, AdapterAccountInfoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdapterAccountInfoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the AdapterAccountInfo model
     */
    readonly fields: AdapterAccountInfoFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for AdapterAccountInfo.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__AdapterAccountInfoClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    adapter<T extends Prisma.AdapterDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.AdapterDefaultArgs<ExtArgs>>): Prisma.Prisma__AdapterClient<runtime.Types.Result.GetResult<Prisma.$AdapterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the AdapterAccountInfo model
 */
export interface AdapterAccountInfoFieldRefs {
    readonly id: Prisma.FieldRef<"AdapterAccountInfo", 'String'>;
    readonly email: Prisma.FieldRef<"AdapterAccountInfo", 'String'>;
    readonly name: Prisma.FieldRef<"AdapterAccountInfo", 'String'>;
    readonly avatar: Prisma.FieldRef<"AdapterAccountInfo", 'String'>;
    readonly createdAt: Prisma.FieldRef<"AdapterAccountInfo", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"AdapterAccountInfo", 'DateTime'>;
    readonly adapterId: Prisma.FieldRef<"AdapterAccountInfo", 'String'>;
}
/**
 * AdapterAccountInfo findUnique
 */
export type AdapterAccountInfoFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which AdapterAccountInfo to fetch.
     */
    where: Prisma.AdapterAccountInfoWhereUniqueInput;
};
/**
 * AdapterAccountInfo findUniqueOrThrow
 */
export type AdapterAccountInfoFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which AdapterAccountInfo to fetch.
     */
    where: Prisma.AdapterAccountInfoWhereUniqueInput;
};
/**
 * AdapterAccountInfo findFirst
 */
export type AdapterAccountInfoFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which AdapterAccountInfo to fetch.
     */
    where?: Prisma.AdapterAccountInfoWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of AdapterAccountInfos to fetch.
     */
    orderBy?: Prisma.AdapterAccountInfoOrderByWithRelationInput | Prisma.AdapterAccountInfoOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for AdapterAccountInfos.
     */
    cursor?: Prisma.AdapterAccountInfoWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` AdapterAccountInfos from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` AdapterAccountInfos.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of AdapterAccountInfos.
     */
    distinct?: Prisma.AdapterAccountInfoScalarFieldEnum | Prisma.AdapterAccountInfoScalarFieldEnum[];
};
/**
 * AdapterAccountInfo findFirstOrThrow
 */
export type AdapterAccountInfoFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which AdapterAccountInfo to fetch.
     */
    where?: Prisma.AdapterAccountInfoWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of AdapterAccountInfos to fetch.
     */
    orderBy?: Prisma.AdapterAccountInfoOrderByWithRelationInput | Prisma.AdapterAccountInfoOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for AdapterAccountInfos.
     */
    cursor?: Prisma.AdapterAccountInfoWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` AdapterAccountInfos from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` AdapterAccountInfos.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of AdapterAccountInfos.
     */
    distinct?: Prisma.AdapterAccountInfoScalarFieldEnum | Prisma.AdapterAccountInfoScalarFieldEnum[];
};
/**
 * AdapterAccountInfo findMany
 */
export type AdapterAccountInfoFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which AdapterAccountInfos to fetch.
     */
    where?: Prisma.AdapterAccountInfoWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of AdapterAccountInfos to fetch.
     */
    orderBy?: Prisma.AdapterAccountInfoOrderByWithRelationInput | Prisma.AdapterAccountInfoOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing AdapterAccountInfos.
     */
    cursor?: Prisma.AdapterAccountInfoWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` AdapterAccountInfos from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` AdapterAccountInfos.
     */
    skip?: number;
    distinct?: Prisma.AdapterAccountInfoScalarFieldEnum | Prisma.AdapterAccountInfoScalarFieldEnum[];
};
/**
 * AdapterAccountInfo create
 */
export type AdapterAccountInfoCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to create a AdapterAccountInfo.
     */
    data: Prisma.XOR<Prisma.AdapterAccountInfoCreateInput, Prisma.AdapterAccountInfoUncheckedCreateInput>;
};
/**
 * AdapterAccountInfo createMany
 */
export type AdapterAccountInfoCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many AdapterAccountInfos.
     */
    data: Prisma.AdapterAccountInfoCreateManyInput | Prisma.AdapterAccountInfoCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * AdapterAccountInfo createManyAndReturn
 */
export type AdapterAccountInfoCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdapterAccountInfo
     */
    select?: Prisma.AdapterAccountInfoSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the AdapterAccountInfo
     */
    omit?: Prisma.AdapterAccountInfoOmit<ExtArgs> | null;
    /**
     * The data used to create many AdapterAccountInfos.
     */
    data: Prisma.AdapterAccountInfoCreateManyInput | Prisma.AdapterAccountInfoCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AdapterAccountInfoIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * AdapterAccountInfo update
 */
export type AdapterAccountInfoUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to update a AdapterAccountInfo.
     */
    data: Prisma.XOR<Prisma.AdapterAccountInfoUpdateInput, Prisma.AdapterAccountInfoUncheckedUpdateInput>;
    /**
     * Choose, which AdapterAccountInfo to update.
     */
    where: Prisma.AdapterAccountInfoWhereUniqueInput;
};
/**
 * AdapterAccountInfo updateMany
 */
export type AdapterAccountInfoUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update AdapterAccountInfos.
     */
    data: Prisma.XOR<Prisma.AdapterAccountInfoUpdateManyMutationInput, Prisma.AdapterAccountInfoUncheckedUpdateManyInput>;
    /**
     * Filter which AdapterAccountInfos to update
     */
    where?: Prisma.AdapterAccountInfoWhereInput;
    /**
     * Limit how many AdapterAccountInfos to update.
     */
    limit?: number;
};
/**
 * AdapterAccountInfo updateManyAndReturn
 */
export type AdapterAccountInfoUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdapterAccountInfo
     */
    select?: Prisma.AdapterAccountInfoSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the AdapterAccountInfo
     */
    omit?: Prisma.AdapterAccountInfoOmit<ExtArgs> | null;
    /**
     * The data used to update AdapterAccountInfos.
     */
    data: Prisma.XOR<Prisma.AdapterAccountInfoUpdateManyMutationInput, Prisma.AdapterAccountInfoUncheckedUpdateManyInput>;
    /**
     * Filter which AdapterAccountInfos to update
     */
    where?: Prisma.AdapterAccountInfoWhereInput;
    /**
     * Limit how many AdapterAccountInfos to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AdapterAccountInfoIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * AdapterAccountInfo upsert
 */
export type AdapterAccountInfoUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The filter to search for the AdapterAccountInfo to update in case it exists.
     */
    where: Prisma.AdapterAccountInfoWhereUniqueInput;
    /**
     * In case the AdapterAccountInfo found by the `where` argument doesn't exist, create a new AdapterAccountInfo with this data.
     */
    create: Prisma.XOR<Prisma.AdapterAccountInfoCreateInput, Prisma.AdapterAccountInfoUncheckedCreateInput>;
    /**
     * In case the AdapterAccountInfo was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.AdapterAccountInfoUpdateInput, Prisma.AdapterAccountInfoUncheckedUpdateInput>;
};
/**
 * AdapterAccountInfo delete
 */
export type AdapterAccountInfoDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter which AdapterAccountInfo to delete.
     */
    where: Prisma.AdapterAccountInfoWhereUniqueInput;
};
/**
 * AdapterAccountInfo deleteMany
 */
export type AdapterAccountInfoDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which AdapterAccountInfos to delete
     */
    where?: Prisma.AdapterAccountInfoWhereInput;
    /**
     * Limit how many AdapterAccountInfos to delete.
     */
    limit?: number;
};
/**
 * AdapterAccountInfo without action
 */
export type AdapterAccountInfoDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};
export {};
//# sourceMappingURL=AdapterAccountInfo.d.ts.map