import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import { addToCart } from "../redux/features/cart/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebaseAuth/firebase';


const StoreContainer = () => {
  const dispatch = useDispatch();
  const [Data, setData] = useState();

  const foodTable = collection(db, 'Dessert')

  useEffect(() => {
      const getFood = async () => {
          const data = await getDocs(foodTable)
          setData(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
         
      }
      getFood();
  }, [])

  console.log(Data);

  const StoreItems = () => {
    const renderStoreItems = ({ item }) => {
      return (
        <View style={styles.storeItem}>
          <View style={styles.storeItemImg}>
            <Image style={styles.storeItemImage} source={{ uri: item.image }} />
          </View>
          <View style={styles.storeItemInfo}>
            <Text style={styles.storeItemTitle}>{item.type}</Text>
            <Text style={styles.storeItemPrice}>R{item.Price}</Text>
            <TouchableOpacity
              onPress={() => {
                dispatch(addToCart(item));
              }}
              style={styles.addToCart}
            >
              <Text style={styles.addToCartText}>Add to Cart</Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    };

    return (
      <View>
        <FlatList
          data={Data}
          renderItem={renderStoreItems}
          keyExtractor={(item) => item.id}
          ListFooterComponent={() => <View style={{ height: 200 }} />}
        />
      </View>
    );
  };
  return (
    <View>
      <StoreItems />
    </View>
  );
};

export default StoreContainer;

const styles = StyleSheet.create({
  storeItem: {
    flexDirection: "row",
    padding: 10,
    marginBottom: 10,
    marginVertical: 5,
    marginHorizontal: 10,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: "#F5E0E0",
    justifyContent: "center",
    marginVertical: 0,
  },
  storeItemImg: {
    width: "30%",
    height: 100,
    borderRadius: 5,
    overflow: "hidden",
  },
  storeItemImage: {
    width: "100%",
    height: "100%",
  },
  storeItemInfo: {
    width: "70%",
    padding: 10,
  },
  storeItemTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  storeItemPrice: {
    fontSize: 16,
    color: "red",
  },
  addToCart: {
    backgroundColor: "black",
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  addToCartText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
