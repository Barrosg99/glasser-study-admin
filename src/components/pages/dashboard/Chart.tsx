import { useEffect, useState, useRef } from "react";
import * as echarts from "echarts/core";
import { BarChart } from "echarts/charts";
import {
  Card,
  CardHeader,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import {
  TitleComponent,
  TooltipComponent,
  GridComponent,
  DatasetComponent,
  TransformComponent,
} from "echarts/components";
import { LabelLayout, UniversalTransition } from "echarts/features";

import { SVGRenderer } from "echarts/renderers";

import type {
  DatasetComponentOption,
  GridComponentOption,
  BarSeriesOption,
  TitleComponentOption,
  TooltipComponentOption,
} from "echarts";
import { useDataProvider } from "react-admin";

type ECOption = echarts.ComposeOption<
  | BarSeriesOption
  | TitleComponentOption
  | TooltipComponentOption
  | GridComponentOption
  | DatasetComponentOption
>;

echarts.use([
  BarChart,
  TitleComponent,
  TooltipComponent,
  GridComponent,
  DatasetComponent,
  TransformComponent,
  LabelLayout,
  UniversalTransition,
  SVGRenderer,
]);

const Chart = () => {
  const dataProvider = useDataProvider();
  const [selectedFilter, setSelectedFilter] = useState<string>("users");
  const [selectedPeriod, setSelectedPeriod] = useState<string>("MONTH");
  const chartRef = useRef<HTMLDivElement>(null);
  const chartInstance = useRef<echarts.ECharts | null>(null);
  const [chartData, setChartData] = useState<{
    data: number[];
    labels: string[];
  }>({ data: [], labels: [] });

  useEffect(() => {
    const getChartData = async () => {
      const data = await dataProvider.getSummary(
        selectedFilter,
        selectedPeriod
      );
      setChartData({ data: data.data, labels: data.labels });
    };

    getChartData();
  }, [selectedFilter, selectedPeriod, dataProvider]);

  useEffect(() => {
    // Initialize chart
    if (chartRef.current) {
      if (!chartInstance.current) {
        chartInstance.current = echarts.init(chartRef.current);
      }

      // Configure the chart
      const option: ECOption = {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow",
          },
        },
        xAxis: {
          data: chartData.labels,
          axisTick: {
            alignWithLabel: true,
          },
        },
        yAxis: [
          {
            type: "value",
          },
        ],
        series: [
          {
            name: "Quantidade",
            type: "bar",
            barWidth: "60%",
            data: chartData.data,
          },
        ],
      };

      chartInstance.current.setOption(option);
    }

    const handleResize = () => {
      chartInstance.current?.resize();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      chartInstance.current?.dispose();
      chartInstance.current = null;
    };
  }, [chartData]);

  return (
    <div style={{ padding: "0px 0px 30px 15px" }}>
      <Card>
        <CardHeader title="Relatório" />
        <div ref={chartRef} style={{ height: 300 }} />

        <div
          style={{
            display: "flex",
            gap: 20,
            padding: "0px 15px 15px 15px",
            width: "50%",
            minWidth: "300px",
          }}
        >
          <FormControl fullWidth>
            <InputLabel id="filter-select-label">Filtros</InputLabel>
            <Select
              label="Filtro"
              value={selectedFilter}
              onChange={(e) => setSelectedFilter(e.target.value)}
              labelId="filter-select-label"
              id="filter-select"
            >
              <MenuItem value={"users"}>Usuarios Criados</MenuItem>
              <MenuItem value={"posts"}>Posts Criados</MenuItem>
              <MenuItem value={"goals"}>Metricas Criadas</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth>
            <InputLabel id="period-select-label">Periodos</InputLabel>
            <Select
              label="Periodo"
              value={selectedPeriod}
              onChange={(e) => setSelectedPeriod(e.target.value)}
              labelId="period-select-label"
              id="period-select"
            >
              <MenuItem value={"WEEK"}>Semana</MenuItem>
              <MenuItem value={"MONTH"}>Mês</MenuItem>
              <MenuItem value={"THREE_MONTHS"}>3 Meses</MenuItem>
            </Select>
          </FormControl>
        </div>
      </Card>
    </div>
  );
};

export default Chart;
