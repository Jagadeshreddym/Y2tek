import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Switch } from 'react-native';
import BotSummary from './BotSummary';

const BotSummartAI = () => {
  const [initialCapital, setInitialCapital] = useState(50);
  const [targetProfit, setTargetProfit] = useState(5);
  const [stopLoss, setStopLoss] = useState(5);
  const [maxDrawdown, setMaxDrawdown] = useState(10);
  const [isTrailingTargetEnabled, setIsTrailingTargetEnabled] = useState(false);
  const [isReinvestProfitEnabled, setIsReinvestProfitEnabled] = useState(false);
  const [isTrailingStopLossEnabled, setIsTrailingStopLossEnabled] = useState(true);
  const [isAllowShortingEnabled, setIsAllowShortingEnabled] = useState(true);

  const handleInitialCapitalChange = (value: React.SetStateAction<number>) => {
    setInitialCapital(value);
  };

  const handleTargetProfitChange = () => {
    setTargetProfit(6);
  };

  const handleStopLossChange = (value: React.SetStateAction<number>) => {
    setStopLoss(value);
  };

  const handleMaxDrawdownChange = (value: React.SetStateAction<number>) => {
    setMaxDrawdown(value);
  };

  const toggleTrailingTarget = () => {
    setIsTrailingTargetEnabled(!isTrailingTargetEnabled);
  };

  const toggleReinvestProfit = () => {
    setIsReinvestProfitEnabled(!isReinvestProfitEnabled);
  };

  const toggleTrailingStopLoss = () => {
    setIsTrailingStopLossEnabled(!isTrailingStopLossEnabled);
  };

  const toggleAllowShorting = () => {
    setIsAllowShortingEnabled(!isAllowShortingEnabled);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Bitcoin_Buy_5m_5_3_2024_01_23_10...</Text>
      <Text style={styles.date}>2024-01-23 10:11 PM</Text>

      <View style={styles.row}>
        <Text style={styles.label}>Symbol</Text>
        <Text style={styles.value}>Bitcoin (BTCUSDT)</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Initial Capital USD</Text>
        <Text style={styles.value}>${initialCapital}</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>ML Bot</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Buy</Text>
        </TouchableOpacity>
        <Text style={styles.label}>Timeframe</Text>
        <Text style={styles.value}>5M</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Margin</Text>
        <Text style={styles.value}>100%</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Target Profit/Goal</Text>
        <Text style={styles.value}>{targetProfit}% / 6%</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Stoploss/Goal</Text>
        <Text style={styles.value}>{stopLoss}% / 6%</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Max Drawdown Limit</Text>
        <Text style={styles.value}>${maxDrawdown}</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Trailing Target</Text>
        <Switch value={isTrailingTargetEnabled} onValueChange={toggleTrailingTarget} />
        <Text style={styles.label}>Reinvest Profit</Text>
        <Switch value={isReinvestProfitEnabled} onValueChange={toggleReinvestProfit} />
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Trailing Stoploss</Text>
        <Switch value={isTrailingStopLossEnabled} onValueChange={toggleTrailingStopLoss} />
        <Text style={styles.label}>Allow Shorting</Text>
        <Switch value={isAllowShortingEnabled} onValueChange={toggleAllowShorting} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  date: {
    fontSize: 16,
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  label: {
    fontSize: 16,
    flex: 1,
  },
  value: {
    fontSize: 16,
    flex: 1,
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default BotSummartAI;