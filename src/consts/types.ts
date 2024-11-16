export type HotelsType = {
    name: string,
    country: string,
    address: string,
    stars: number,
    type: string,
    description: string,
    services: string[],
    min_price: number,
    currency: string,
    rating: number,
    reviews_amount: number,
    last_review: string
}

export type FilterProps = {
    type: string,
    title: string,
    options?: string[],
    value?: any,
    onChange: (type: string, value: any) => void;
};

export type CheckboxType = {
    label: string,
    isChecked: boolean,
}

export type Prices = {
    minValue: number | null;
    maxValue: number | null;
}

export type Filter = {
    country: CheckboxType[];
    type: CheckboxType[];
    stars: CheckboxType[];
    reviews: number | null;
    price: Prices;
}