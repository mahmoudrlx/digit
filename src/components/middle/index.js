import { Link, Stack } from "@mui/material";
import { useSelector } from "react-redux";

const MainIamge = () => {
  const { fullName, link, img, alt } = useSelector((state) => state.image);

  return (
    <Stack direction='column' spacing={4} width='100%'>
      <Link href={link}>{fullName}</Link>

      <img src={img} alt={alt} />
    </Stack>
  );
};

export default MainIamge;
