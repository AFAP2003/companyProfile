import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

interface TypePricingcardthreeFields {
    type?: EntryFieldTypes.Symbol;
    price?: EntryFieldTypes.Symbol;
    description?: EntryFieldTypes.Symbol;
    featureone?: EntryFieldTypes.Symbol;
    featuretwo?: EntryFieldTypes.Symbol;
    featurethree?: EntryFieldTypes.Symbol;
}

export type TypePricingcardthreeSkeleton = EntrySkeletonType<TypePricingcardthreeFields, "pricingcardthree">;
export type TypePricingcardthree<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypePricingcardthreeSkeleton, Modifiers, Locales>;