import { Box, Flex, Heading, Stack } from "@chakra-ui/react";
import { FC, memo } from "react";
import {
  Chart,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { useWallet } from "../hooks/useWallet";

Chart.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const Home: FC = memo(() => {
  const { isConnected } = useWallet();
  return (
    <Flex align="center" justify="center" height="100vh">
      <Box w="sm">
        <Stack>
          {isConnected && (
            <Line
              height="100%"
              width="100%"
              data={{
                labels: ["Jun", "Jul", "Aug"],
                datasets: [
                  {
                    label: "1",
                    data: [5, 6, 7],
                    borderColor: "rgb(255, 99, 132)",
                  },
                ],
              }}
            />
          )}
        </Stack>
      </Box>
    </Flex>
  );
});
