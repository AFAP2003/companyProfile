import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeProducttestimonialFields {
    text?: EntryFieldTypes.RichText;
    name?: EntryFieldTypes.Symbol;
    title?: EntryFieldTypes.Symbol;
    image?: EntryFieldTypes.AssetLink;
}
export interface IContentfulAsset {
    sys:{id:string},
    fields:{
        file:{
            url:string,
            detail?:string,
            filename?:string,
            contentType?:string
        }
    }
}


export type TypeProducttestimonialSkeleton = EntrySkeletonType<TypeProducttestimonialFields, "producttestimonial">;
export type TypeProducttestimonial<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeProducttestimonialSkeleton, Modifiers, Locales>;