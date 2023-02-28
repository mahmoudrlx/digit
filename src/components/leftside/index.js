import { Stack, Button, TextField } from "@mui/material";
import {
  useGetAllProductsQuery,
  useGetProductQuery,
} from "../../features/apiSlice";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { image } from "../../features/imageSlice";

const dataImages = [
  {
    id: 2014422,
    width: 3024,
    height: 3024,
    url: "https://www.pexels.com/photo/brown-rocks-during-golden-hour-2014422/",
    photographer: "Joey Farina",
    photographer_url: "https://www.pexels.com/@joey",
    photographer_id: 680589,
    avg_color: "#978E82",
    src: {
      original:
        "https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg",
      large2x:
        "https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      large:
        "https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      medium:
        "https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&h=350",
      small:
        "https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&h=130",
      portrait:
        "https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
      landscape:
        "https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      tiny: "https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
    },
    liked: false,
    alt: "Brown Rocks During Golden Hour",
  },
  {
    id: 2880507,
    width: 4000,
    height: 6000,
    url: "https://www.pexels.com/photo/woman-in-white-long-sleeved-top-and-skirt-standing-on-field-2880507/",
    photographer: "Deden Dicky Ramdhani",
    photographer_url: "https://www.pexels.com/@drdeden88",
    photographer_id: 1378810,
    avg_color: "#7E7F7B",
    src: {
      original:
        "https://images.pexels.com/photos/2880507/pexels-photo-2880507.jpeg",
      large2x:
        "https://images.pexels.com/photos/2880507/pexels-photo-2880507.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      large:
        "https://images.pexels.com/photos/2880507/pexels-photo-2880507.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      medium:
        "https://images.pexels.com/photos/2880507/pexels-photo-2880507.jpeg?auto=compress&cs=tinysrgb&h=350",
      small:
        "https://images.pexels.com/photos/2880507/pexels-photo-2880507.jpeg?auto=compress&cs=tinysrgb&h=130",
      portrait:
        "https://images.pexels.com/photos/2880507/pexels-photo-2880507.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
      landscape:
        "https://images.pexels.com/photos/2880507/pexels-photo-2880507.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
      tiny: "https://images.pexels.com/photos/2880507/pexels-photo-2880507.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
    },
    liked: false,
    alt: "Brown Rocks During Golden Hour",
  },
];

const LeftSide = () => {
  const [data, setData] = useState([]);
  const [value, setValue] = useState("");
  const { data: getAllPhotos } = useGetAllProductsQuery();
  const { data: getType } = useGetProductQuery(value);
  const [activeButton, setActiveButton] = useState();
  const dispath = useDispatch();

  useEffect(() => {
    setData(getAllPhotos?.photos);
  }, [getAllPhotos?.photos, data]);

  const getImg = (e) => {
    setActiveButton(e.target.id);
    const imgData = dataImages.filter(
      (photo) => photo.id.toString() === e.target.id
    );

    const { alt, photographer, photographer_url, src } = imgData[0];

    dispath(
      image({
        fullName: photographer,
        link: photographer_url,
        img: src.medium,
        alt,
      })
    );
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <Stack width='50%' direction='column' spacing={2}>
      <TextField
        variant='outlined'
        onChange={handleChange}
        placeholder='Search'
      />
      {dataImages?.map((item, index) => (
        <Button
          key={item.id}
          onClick={getImg}
          id={item.id}
          fullWidth
          variant={
            activeButton === item.id.toString() ? "contained" : "outlined"
          }>{`image ${index + 1}`}</Button>
      ))}
    </Stack>
  );
};

export default LeftSide;
