import type { IImage } from "@/lib/adapters/prepareImageProps";
import type { ILink } from "@/lib/adapters/prepareLinkProps";
import type { IRichText } from "@/lib/adapters/prepareRichTextProps";

interface IBlogPostCardProps {
  text: IRichText;
  image: IImage;
  link: ILink;
}

interface IBlogSection {
  text: IRichText;
  posts: IBlogPostCardProps[];
  style: string;
  theme?: "light" | "dark";
  _key: string;
}

export interface IBlogSectionProps {
  data: IBlogSection;
}
