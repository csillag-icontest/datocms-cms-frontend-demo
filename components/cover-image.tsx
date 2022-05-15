import { Image } from "react-datocms";
import cn from "classnames";
import Link from "next/link";

interface CoverImageProps {
  title: string;
  responsiveImage: any; // TODO: find out real type
  slug?: string;
}

export default function CoverImage(props: CoverImageProps) {
  const { title, slug, responsiveImage } = props;
  const image = (
    <Image
      data={{
        ...responsiveImage,
        alt: `Cover Image for ${title}`,
      }}
      className={cn("shadow-small", {
        "hover:shadow-medium transition-shadow duration-200": slug,
      })}
    />
  );
  return (
    <div className="-mx-5 sm:mx-0">
      {slug ? (
        <Link href={`/posts/${slug}`}>
          <a aria-label={title}>{image}</a>
        </Link>
      ) : (
        image
      )}
    </div>
  );
}
