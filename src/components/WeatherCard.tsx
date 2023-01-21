import {
  CloudDrizzle,
  CloudFog,
  CloudHail,
  CloudLightning,
  CloudRain,
  CloudRainWind,
  CloudSnow,
  CloudSun,
  Sun,
} from '@tamagui/lucide-icons';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Animated, { FadeIn } from 'react-native-reanimated';
import { getDayName } from '../utils/date';
import Box from './Box';
import Card from './Card';
import Heading from './Heading';
import Text from './Text';

export interface DailyUnits {
  time: string;
  weathercode: string;
  temperature_2m_max: string;
  temperature_2m_min: string;
}

export interface Daily {
  time: string[];
  weathercode: number[];
  temperature_2m_max: number[];
  temperature_2m_min: number[];
}

export interface CurrentWeather {
  temperature: number;
  windspeed: number;
  winddirection: number;
  weathercode: number;
  time: string;
}

export interface WeatherData {
  latitude: number;
  longitude: number;
  generationtime_ms: number;
  utc_offset_seconds: number;
  timezone: string;
  timezone_abbreviation: string;
  elevation: number;
  daily_units: DailyUnits;
  daily: Daily;
  current_weather: CurrentWeather;
}

type Props = {
  latitude: number;
  longitude: number;
  city: string;
};

const WeatherCard = ({ latitude, longitude, city }: Props) => {
  const [data, setData] = useState<WeatherData | null>(null);
  const [isCollapsed, setIsCollapsed] = useState(false);

  useEffect(() => {
    axios
      .get(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=weathercode,temperature_2m_max,temperature_2m_min&timezone=Europe/Paris&current_weather=true`,
      )
      .then((response) => {
        setData(response.data);
      });
  }, []);

  const renderWeatherIcon = (weatherCode: number) => {
    switch (weatherCode) {
      case 0:
        return <Sun />;
      case 1:
      case 2:
      case 3:
        return <CloudSun />;
      case 45:
      case 48:
        return <CloudFog />;
      case 51:
      case 53:
      case 55:
        return <CloudDrizzle />;
      case 56:
      case 57:
        return <CloudHail />;
      case 61:
      case 63:
      case 65:
        return <CloudRain />;
      case 66:
      case 67:
        return <CloudRain />;
      case 71:
      case 73:
      case 75:
        return <CloudSnow />;
      case 77:
        return <CloudSnow />;
      case 80:
      case 81:
      case 82:
        return <CloudRainWind />;
      case 85:
      case 86:
        return <CloudRainWind />;
      case 95:
      case 96:
      case 99:
        return <CloudLightning />;
      default:
        return null;
    }
  };

  if (!data) {
    return null;
  }

  return (
    <Card space="$sm" onPress={() => setIsCollapsed(!isCollapsed)}>
      <Box jc="space-between" fd="row">
        <Heading size="h1">{city}</Heading>
        <Text size="xl">{data.current_weather.temperature}°C</Text>
      </Box>

      {!isCollapsed && (
        <Animated.View entering={FadeIn}>
          <Box separator={<Box thin bg="$darkblue" />}>
            {data.daily.time.map((time, index) => (
              <Box key={time} py="$sm" fd="row" ai="center">
                <Box fd="row" f={1}>
                  <Text>{getDayName(new Date(time))}</Text>
                </Box>
                <Box f={2} fd="row" ai="center" jc="space-between">
                  {renderWeatherIcon(data.daily.weathercode[index])}
                  <Text size="sm">
                    {data.daily.temperature_2m_min[index]}°C - {data.daily.temperature_2m_max[index]}°C
                  </Text>
                </Box>
              </Box>
            ))}
          </Box>
        </Animated.View>
      )}
    </Card>
  );
};

export default WeatherCard;
