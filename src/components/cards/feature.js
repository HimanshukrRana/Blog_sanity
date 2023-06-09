/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Heading, Text } from "theme-ui";
import { LearnMore } from "../link";
import { useRouter } from "next/router";
import Image from "../image";

const Feature = ({ data, ...props }) => {
  const router = useRouter();
  return (
    <div onClick={() => router.replace(data.pathname)} sx={styles.DivClass}>
      <Box sx={styles.feature} {...props}>
        <Box as="figure">
          <Image src={data?.icon} alt={data?.title} />
        </Box>
        <Box>
          <Heading as="h4">{data?.title}</Heading>
          <Text as="p">{data?.description}</Text>
          {/* {data?.path && <LearnMore path={data?.path} />} */}
        </Box>
      </Box>
    </div>
  );
};

export default Feature;

const styles = {
  DivClass: {
    cursor: "pointer",
    border: "2px solid black",
    borderRadius: "10px",
    padding: "20px",
    marginTop: ["10px", "5px", "7px", null, null],
  },
  feature: {
    display: [null, null, null, null, null, "flex"],
    textAlign: ["center", null, null, null, null, "left"],
    px: [3, null, null, null, "unset"],
    figure: {
      minWidth: [42, null, null, 70],
      mr: [null, null, null, null, null, 6],
      mb: [3, null, null, null, null, 0],
      img: {
        mx: ["auto"],
      },
    },
    h4: {
      fontSize: [2, null, null, 3],
      lineHeight: 1.28,
      color: "heading",
      mb: 3,
    },
    p: {
      fontSize: [1, null, null, 2],
      lineHeight: 1.88,
      color: "text",
    },
    a: {
      mt: [3],
    },
  },
};
