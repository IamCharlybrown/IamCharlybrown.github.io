import { lazy, Suspense } from "react";
import { Box, Flex } from "@chakra-ui/react";
import Loading from "./Loading";

const ModalPreview = lazy(() => import("./ModalCurses"));

function FinishedCurses() {
  return (
    <Flex align="center" justify="end">
      <Box>
        <Suspense fallback={<Loading />}>
          <ModalPreview />
        </Suspense>
      </Box>
    </Flex>
  );
}

export default FinishedCurses;
