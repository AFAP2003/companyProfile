import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypePricingcardtwoFields {
    type?: EntryFieldTypes.Symbol;
    price?: EntryFieldTypes.Symbol;
    description?: EntryFieldTypes.Symbol;
    featureone?: EntryFieldTypes.Symbol;
    featuretwo?: EntryFieldTypes.Symbol;
    featurethree?: EntryFieldTypes.Symbol;
}

export type TypePricingcardtwoSkeleton = EntrySkeletonType<TypePricingcardtwoFields, "pricingcardtwo">;
export type TypePricingcardtwo<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypePricingcardtwoSkeleton, Modifiers, Locales>;