import React from "react";
import { Dimensions, TouchableOpacity, View } from "react-native";

var { width } = Dimensions.get("window");

const ProductList = (props) => {
  return (
    <TouchableOpacity style={{ width: "50%" }}>
      <View style={{ width: width / 2, backgroundColor: "gainsboro" }}></View>
    </TouchableOpacity>
  );
};

export default ProductList;
