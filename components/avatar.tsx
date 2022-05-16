import { Image, ResponsiveImageType } from "react-datocms";

interface AvatarProps {
  name: string;
  picture: {
    responsiveImage: ResponsiveImageType;
  };
}

export default function Avatar(props: AvatarProps) {
  const { name, picture } = props;
  return (
    <div className="flex items-center">
      <div className="w-12 h-12 mr-4">
        <Image
          data={{
            ...picture.responsiveImage,
            alt: name,
          }}
          className="rounded-full"
        />
      </div>
      <div className="text-xl font-bold">{name}</div>
    </div>
  );
}
