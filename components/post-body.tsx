import {
  StructuredText,
  Image,
  StructuredTextGraphQlResponse,
} from "react-datocms";

interface PostBodyProps {
  content: StructuredTextGraphQlResponse<any>; // TODO: find out real type
}

export default function PostBody(props: PostBodyProps) {
  const { content } = props;
  return (
    <div className="max-w-2xl mx-auto">
      <div className="prose prose-lg prose-blue">
        <StructuredText
          data={content}
          renderBlock={({ record }) => {
            if (record.__typename === "ImageBlockRecord") {
              // eslint-disable-next-line jsx-a11y/alt-text
              return <Image data={record.image.responsiveImage} />;
            }

            return (
              <>
                <p>Unable to render a block!</p>
                <pre>{JSON.stringify(record, null, 2)}</pre>
              </>
            );
          }}
        />
      </div>
    </div>
  );
}
