import { SafeAreaView, ScrollView } from 'react-native';
import { useTheme } from '@tamagui/core';
import Box from '../components/Box';
import Heading from '../components/Heading';
import WeatherCard from '../components/WeatherCard';
import ThemeSwitcher from '../components/ThemeSwitcher';
import Button from '../components/Button';

type Props = {
  onSwitchTheme: () => void;
};

const Home = ({ onSwitchTheme }: Props) => {
  const theme = useTheme();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.background.val }}>
      <Box flex={1} bg="$background" space="$md">
        <Box py="$xs" fd="row" ai="center" px="$md" jc="space-between">
          <Heading size="h1">Weather app</Heading>
          <ThemeSwitcher onSwitch={onSwitchTheme} />
        </Box>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Box space="$lg" px="$md">
            <WeatherCard city="Paris" latitude={48.85} longitude={2.35} />
            {/* <WeatherCard city="Lyon" latitude={45.75} longitude={4.85} /> */}
            {/* <WeatherCard city="Berlin" latitude={52.52} longitude={13.41} /> */}
            <Button
              title="Hello"
              type="primary"
              centered
              onPress={() => {
                console.log('press');
              }}
            />
          </Box>
        </ScrollView>
      </Box>
    </SafeAreaView>
  );
};

export default Home;
