import React from 'react';
import { StyleSheet, View, Image, Dimensions } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { RobotoText } from './StyledText';

const window = Dimensions.get('window');
const PAGE_WIDTH = window.width;

const featuredItems = [
  {
    id: 1,
    image: require('../assets/images/img-1.jpeg'),
  },
  {
    id: 2,
    image: require('../assets/images/img-2.jpeg'),
  },
  {
    id: 3,
    image: require('../assets/images/img-3.jpeg'),
  },
  {
    id: 4,
    image: require('../assets/images/img-4.jpeg'),
  },
];

const dessertItems = [
  {
    id: 1,
    image: require('../assets/images/dessert-1.jpeg'),
  },
  {
    id: 2,
    image: require('../assets/images/dessert-2.jpeg'),
  },
  {
    id: 3,
    image: require('../assets/images/dessert-3.jpeg'),
  },
  {
    id: 4,
    image: require('../assets/images/dessert-4.jpeg'),
  },
];

const renderItem = ({ item }: any) => {
  return (
    <View style={styles.itemContainer}>
      <Image source={item.image} style={styles.itemImage} />
    </View>
  );
};

const HomeScreenInfo = () => {
  return (
    <View style={styles.container}>
      <RobotoText style={styles.title}>Welcome to TasteBudThai</RobotoText>
      <RobotoText style={styles.description}>
        Your gateway to a culinary journey through the vibrant and diverse cuisine of Thailand. Immerse yourself in the rich flavors, tantalizing spices, and mouthwatering dishes that Thailand has to offer.
      </RobotoText>

      <View style={styles.sectionContainer}>
        <RobotoText style={styles.featuredSubtitle}>Featured Dishes</RobotoText>
        <View style={styles.carouselContainer}>
          <Carousel
            data={featuredItems}
            renderItem={renderItem}
            sliderWidth={PAGE_WIDTH}
            itemWidth={250}
            loop
            autoplay
          />
        </View>
      </View>

      <View style={styles.sectionContainer}>
        <RobotoText style={styles.subtitle}>Desserts</RobotoText>
        <View style={styles.carouselContainer}>
          <Carousel
            data={dessertItems}
            renderItem={renderItem}
            sliderWidth={PAGE_WIDTH}
            itemWidth={250}
            loop
            autoplay
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
    padding: 10,
  },
  sectionContainer: {
    flex: 1,
    backgroundColor: '#f1f1f1',
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  featuredSubtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    margin: 10
  },
  carouselContainer: {
    flex: 1,
    height: 240,
  },
  itemContainer: {
    width: 250,
    height: 150,
    borderRadius: 10,
    overflow: 'hidden',
  },
  itemImage: {
    width: '100%',
    height: '100%',
  },
});

export default HomeScreenInfo;
