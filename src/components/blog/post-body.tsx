// import { PortableText } from '@portabletext/react'
import BlockContent from "@sanity/block-content-to-react";

import markdownStyles from "./markdown-styles.module.css";

import { sanityConfig } from "../../lib/config";
export default function PostBody({ content }: any) {
  const serializers = {
    types: {
      code: (props: any) => (
        <pre data-language={props.node.language}>
          <code>{props.node.code}</code>
        </pre>
      ),
    },
  };
  return (
    <div className={` mx-8 ${markdownStyles.markdown}`}>
      {/* <PortableText value={content} /> */}
      <BlockContent
        blocks={content}
        serializers={serializers}
        projectId={sanityConfig.projectId}
        dataset={sanityConfig.dataset}
      />
    </div>
  );
}
