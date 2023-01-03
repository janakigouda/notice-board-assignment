import {
  Stack,
  Box,
  Text,
} from "@chakra-ui/react";

export const NoticeList = ({ noticesData }) => {
  return (
    <>
      {noticesData &&
        [...noticesData].reverse().map((item, index) => {
          let d = new Date(item?.createdAt).toDateString();
          let t = new Date(item?.createdAt).toLocaleTimeString();
          return (
            <Box key={index} boxShadow="md" p="5">
              <Stack>
                <Box textAlign="left">
                  <Text>{item.notice}</Text>
                </Box>
                <Box display="flex">
                  <Text w="50%" textAlign="left">
                    {item.user[0].username}
                  </Text>
                  <Text textAlign="right" w="50%">
                    {d} {t}
                  </Text>
                </Box>
              </Stack>
            </Box>
          );
        })}
    </>
  );
};
