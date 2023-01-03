import {
  Stack,
  Box,
  Heading,
  Text,
  Textarea,
  Button,
  useToast,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getUserNotice,
  postUserNotices,
} from "../store/userNotices/userNotices.actions";
import { useNavigate } from "react-router-dom";
import { NoticeList } from "./NoticesList";

export const Notices = () => {
  const dispatch = useDispatch();
  const [notice, setNotices] = useState("");
  const { data } = useSelector((state) => state.users);
  const { noticesData } = useSelector((state) => state.userNotices);
  const navigate = useNavigate();
  const uid = localStorage.getItem("userInfo");

  useEffect(() => {
    dispatch(getUserNotice());
  }, [dispatch]);

  const handleClick = (e) => {
    e.preventDefault();
    if (uid == null || uid == "") {
      navigate("/");
    } else {
      let obj = {
        notice: notice,
        userid: uid,
      };
      dispatch(postUserNotices(obj));
      setTimeout(() => {
        window.location.reload(true);
      }, 2000);
    }
    setNotices("");
  };

  return (
    <>
      <Stack w="60%" marginLeft="auto" marginRight="auto" marginTop="20">
        <Heading>Notice Board</Heading>
        <Box marginBottom="20">
          <Text textAlign="left">Submit a notice:</Text>
          <Textarea
            type="text"
            placeholder="Write a notice"
            onChange={(e) => setNotices(e.target.value)}
            value={notice}
          />
          <Box textAlign="right" marginTop="5" marginBottom="5">
            <Button
              bg="black"
              color="white"
              onClick={handleClick}
              disabled={uid == ""}
            >
              Submit
            </Button>
          </Box>
        </Box>
        <Box>
          <NoticeList noticesData={noticesData} />
        </Box>
      </Stack>
    </>
  );
};
