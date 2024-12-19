import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";


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

export interface TypeTestimonialFields {
    text?: EntryFieldTypes.RichText;
    name?: EntryFieldTypes.Symbol;
    title?: EntryFieldTypes.Symbol;
    image?: EntryFieldTypes.AssetLink;
}

export type TypeTestimonialSkeleton = EntrySkeletonType<TypeTestimonialFields, "testimonial">;
export type TypeTestimonial<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeTestimonialSkeleton, Modifiers, Locales>;
