import { Container, Stack } from "@mui/material";
import Navbar from "../../components/navbar";
import LeftSide from "../../components/leftside";
import MainIamge from "../../components/middle";

const Home = () => {
  return (
    <>
      <Navbar />
      <Container maxWidth={"xl"} sx={{ p: 4 }}>
        <Stack direction={"row"} spacing={4} width='100%'>
          <LeftSide />
          <MainIamge />
        </Stack>
      </Container>
    </>
  );
};

export default Home;
