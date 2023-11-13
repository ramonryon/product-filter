"use client"

import { ReadonlyURLSearchParams, useSearchParams } from 'next/navigation';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

const colors = ['Red', 'Green', 'Blue', 'Black', 'Brown', 'Pink'];
const categories = ['Men Cloth', 'Womens Cloth'];
const sizes = ['S', 'M', 'L', 'XL'];
const sortingOrder = ['Newest', 'Price Low - High', 'Price High - Low'];

const filterOptions = [
    {
        id: 'sort',
        title: 'Sorting Order',
        options: sortingOrder,
        type: 'radio',
    },
    {
        id: 'categories',
        title: 'Categories',
        options: categories,
        type: 'checkbox',
    },
    {
        id: 'colors',
        title: 'Colors',
        options: colors,
        type: 'checkbox',
    },
    {
        id: 'sizes',
        title: 'Sizes',
        options: sizes,
        type: 'checkbox',
    }
];

function checkValidQuery(queries: string[]) {
    return queries.filter((query) => query !== '').length > 0;
}

export function convertStringToQueriesObject(
    searchParams: ReadonlyURLSearchParams
) {
    let selectedQueries: Record<string, string[]> = {};
    searchParams.forEach((values, key) => {
        const queries = values.split(",");
        if (selectedQueries[key]) {
            selectedQueries[key].push(...queries);
        } else {
            selectedQueries[key] = queries;
        }
    });
    return selectedQueries;
}

function convertValidStringQueries(queries: Record<string, string[]>) {
    let q = "";
    for (let [key, value] of Object.entries(queries)) {
        q = q + `${q === "" ? "" : "&"}${key}=${value}`;
    }
    return q;
}

const FilertSection = () => {
    const router = useRouter()
    const searchParams = useSearchParams();

    const [selectedFilterQueries, setSelectedFilterQueries] = useState <
        Record<stringify, string[]>({});

    useEffect(() => {
        const paramsObj = convertStringToQueriesObject(searchParams);
        setSelectedFilterQueries(paramsObj);
    }, [searchParams]);

    return (
        <div>FilertSection</div>
    )
}

export default FilertSection