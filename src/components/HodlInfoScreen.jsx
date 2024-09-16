import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Switch,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const data = [
  {
    id: '1',
    platform: 'WazirX',
    price: '₹ 25,72,612',
    buySell: '₹ 25,72,610 / ₹ 25,72,612',
    difference: '-3.14 %',
    savings: '₹ 83,498',
    isSavingPositive: false,
  },
  {
    id: '2',
    platform: 'Bitbns',
    price: '₹ 28,83,906',
    buySell: '₹ 28,55,164 / ₹ 28,82,157',
    difference: '8.58 %',
    savings: '₹ 2,27,796',
    isSavingPositive: true,
  },
  {
    id: '3',
    platform: 'Colodax',
    price: '₹ 25,46,035',
    buySell: '₹ 25,33,304 / ₹ 28,51,559',
    difference: '-4.14 %',
    savings: '₹ 1,10,074',
    isSavingPositive: false,
  },
  {
    id: '4',
    platform: 'Zebpay',
    price: '₹ 26,50,000',
    buySell: '₹ 26,49,999 / ₹ 26,21,000',
    difference: '-0.23 %',
    savings: '₹ 6,110',
    isSavingPositive: false,
  },
];

const HodlInfoScreen = () => {
  const renderItem = ({item}) => (
    <View style={styles.listItem}>
      <View style={styles.platformContainer}>
        <Icon name="bitcoin" size={16} color="#fff" style={styles.icon} />
        <Text style={styles.platform}>{item.platform}</Text>
      </View>
      <Text style={styles.price}>{item.price}</Text>
      <Text style={styles.buySell}>{item.buySell}</Text>
      <Text
        style={[
          styles.difference,
          item.isSavingPositive ? styles.positive : styles.negative,
        ]}>
        {item.difference}
      </Text>
      <Text
        style={[
          styles.savings,
          item.isSavingPositive ? styles.positive : styles.negative,
        ]}>
        {item.isSavingPositive ? (
          <Icon name="arrow-up" size={12} color="#2a9d8f" />
        ) : (
          <Icon name="arrow-down" size={12} color="#e76f51" />
        )}
        {item.isSavingPositive ? ` ${item.savings}` : ` ${item.savings}`}
      </Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>HODLINFO</Text>
        <View style={styles.headerRight}>
          <Switch style={styles.switch} />
          <TouchableOpacity style={styles.telegramButton}>
            <Text style={styles.telegramButtonText}>Connect Telegram</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.percentagesContainer}>
        <Text style={styles.percentageText}>0.1 %</Text>
        <Text style={styles.percentageText}>0.96 %</Text>
        <Text style={styles.percentageText}>2.73 %</Text>
        <Text style={styles.percentageText}>7.51 %</Text>
      </View>
      <View style={styles.labelContainer}>
        <Text style={styles.labelText}>5 Mins</Text>
        <Text style={styles.labelText}>1 Hour</Text>
        <Text style={styles.labelText}>1 Day</Text>
        <Text style={styles.labelText}>7 Days</Text>
      </View>
      <View style={styles.bestPriceContainer}>
        <Text style={styles.bestPriceLabel}>Best Price to Trade</Text>
        <Text style={styles.bestPrice}>₹ 26,56,110</Text>
      </View>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContainer}
      />
      <TouchableOpacity style={styles.addButton}>
        <Text style={styles.addButtonText}>Add to HomeScreen</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1c1c28',
    padding: 12,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  headerText: {
    color: '#6fffe9',
    fontSize: 18,
    fontWeight: 'bold',
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  telegramButton: {
    backgroundColor: '#2a9d8f',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 20,
    marginLeft: 8,
  },
  telegramButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 10,
  },
  switch: {
    transform: [{scaleX: 0.7}, {scaleY: 0.7}],
  },
  percentagesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  percentageText: {
    color: '#6fffe9',
    fontSize: 14,
  },
  labelContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  labelText: {
    color: '#aaa',
    fontSize: 10,
  },
  bestPriceContainer: {
    alignItems: 'center',
    marginBottom: 16,
  },
  bestPriceLabel: {
    color: '#aaa',
    fontSize: 14,
  },
  bestPrice: {
    color: '#6fffe9',
    fontSize: 24,
    fontWeight: 'bold',
  },
  listContainer: {
    marginTop: 12,
  },
  listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#2b2b3a',
    padding: 10,
    borderRadius: 8,
    marginBottom: 12,
    width: '95%',
    alignSelf: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 5,
    shadowOffset: {width: 0, height: 2},
    elevation: 3,
  },
  platformContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '20%',
  },
  platform: {
    color: '#fff',
    fontSize: 12,
    marginLeft: 4,
  },
  price: {
    color: '#fff',
    fontSize: 12,
    width: '20%',
  },
  buySell: {
    color: '#fff',
    fontSize: 12,
    width: '30%',
  },
  difference: {
    fontSize: 12,
    width: '15%',
    textAlign: 'center',
  },
  savings: {
    fontSize: 12,
    width: '15%',
    textAlign: 'right',
  },
  positive: {
    color: '#2a9d8f',
  },
  negative: {
    color: '#e76f51',
  },
  icon: {
    marginRight: 4,
  },
  addButton: {
    backgroundColor: '#2a9d8f',
    paddingVertical: 10,
    borderRadius: 20,
    alignItems: 'center',
    marginVertical: 20,
    marginHorizontal: 12,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default HodlInfoScreen;