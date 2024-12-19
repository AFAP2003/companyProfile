import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypePricingcardoneFields {
    type?: EntryFieldTypes.Symbol;
    price?: EntryFieldTypes.Symbol;
    description?: EntryFieldTypes.Symbol;
    featureone?: EntryFieldTypes.Symbol;
    featuretwo?: EntryFieldTypes.Symbol;
    featurethree?: EntryFieldTypes.Symbol;
}

export type TypePricingcardoneSkeleton = EntrySkeletonType<TypePricingcardoneFields, "pricingcardone">;
export type TypePricingcardone<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypePricingcardoneSkeleton, Modifiers, Locales>;