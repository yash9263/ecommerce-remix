import styled from "styled-components";

export default function Index() {
  return (
    <Box style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>Welcome to Remix (using styled components)</h1>
    </Box>
  );
}

export const Box = styled.div`
  background: #000;
  color: #fff;
`;
