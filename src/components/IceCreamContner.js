import React from "react";
import { connect } from "react-redux";
import { buyIceCream } from "../redux";
function IceCreamContner(props) {
  return (
    <div>
      <h2>Number of Cakes: {props.numOfIceCreams}</h2>
      <button onClick={props.buyIceCream}>Buy IceCream</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  //console.log("map", state);
  return {
    numOfIceCreams: state.iceCream.numOfIceCreams,
  };
};
//console.log(buyIceCream());
const mapDispatchToProps = (dispatch) => {
  return {
    buyIceCream: () => dispatch(buyIceCream()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(IceCreamContner);
