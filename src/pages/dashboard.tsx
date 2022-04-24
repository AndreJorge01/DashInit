import { Box, Text, Flex, SimpleGrid, theme } from '@chakra-ui/react'
import dynamic from 'next/dynamic'
import { Header } from "../components/Header";
import { Sidebar } from '../components/Sidebar';


const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

const options = {
  chart: {
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
    },
    foreColor: theme.colors.gray[500],
  },
  grid: {
    show: false,
  },
  dataLabels: {
    enabled: false,
  },
  tooltip: {
    enabled: false,
  },
  xaxis: {
    type: 'datetime',
    axisBorder: {
      color: theme.colors.gray[600],
    },
    axisTicks: {
      color: theme.colors.gray[600],
    },
    categories: [
      '2022-04-18t00:00:00:00z',
      '2022-04-19t00:00:00:00z',
      '2022-04-20t00:00:00:00z',
      '2022-04-21t00:00:00:00z',
      '2022-04-22t00:00:00:00z',
      '2022-04-23t00:00:00:00z',
      '2022-04-24t00:00:00:00z',
      '2022-04-25t00:00:00:00z',
      '2022-04-26t00:00:00:00z',
      '2022-04-27t00:00:00:00z',
    ],
  },
  fill: {
    opacity: 0.3,
    type: 'gradient',
    gradient: {
      shade: 'dark',
      opacityFrom: 0.7,
      opacyTo: 0.3,
    },
  },
};

const series = [
  { name: 'series-1', data: [10, 20, 30, 20, 29, 36, 40, 45, 50] },
]

const series2 = [
  { name: 'series-1', data: [350, 320, 290, 270, 241, 201, 156, 106] },
]




export default function Dashboard() {
  return (
    <Flex direction="column" h="100vh">
      <Header />

      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />

        <SimpleGrid flex="1" gap="4" minChildWidth="360px" >
          <Box
            p={["6", "8"]}
            bg="gray.800"
            borderRadius={8}
            pb="4"
          >
            <Text fontSize="lg" mb="4">Vendas da Semana</Text>
            <Chart options={options} series={series} type="area" height={160} />
          </Box>
          <Box
            p={["6", "8"]}
            bg="gray.800"
            borderRadius={8}
            pb="4"
          >
            <Text fontSize="lg" mb="4">Produtos em Estoque</Text>
            <Chart options={options} series={series2} type="area" height={160} />
          </Box>
        </SimpleGrid>
      </Flex>
    </Flex>
  );
}