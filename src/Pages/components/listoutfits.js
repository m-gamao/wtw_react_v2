import React, { Component } from "react";
import { connect } from "react-redux";
import "../../../assets/Outfits.css";
import { getOutfits } from "../../../Store/middleware/OutfitsAsync";

class ListOutfits extends Component {
  handleSave = (event) => {
    //let recipe_name = event.target.parentElement.dataset.recipe_name
    let {
      recipe_name,
      url,
      image,
      serving_size,
    } = event.target.parentElement.dataset;
    this.props.getOutfits(recipe_name, url, image, serving_size);
  };

  // splitEvery = (array, length) =>
  //   array.reduce((result, item, index) => {
  //     if (index % length === 0) result.push([]);
  //     result[Math.floor(index / length)].push(item);
  //     return result;
  //   }, []);

  render() {
    return (
      <div className="outfit-container">
        {this.props.outfitsData.map((hit, index) => (
          <div
            className="outfit-list"
            key={index}
            data-outfit_name={hit.recipe.name}
            data-url={hit.recipe.url}
            data-image={hit.recipe.image}
            data-serving_size={hit.recipe.yield}
          >
            <a href={hit.recipe.url} target="_blank" rel="noopener noreferrer">
              <img src={hit.recipe.image} alt="recipe-thumbnail" />
            </a>
            <h2>{hit.recipe.label}</h2>
            <h4>Yield: {hit.recipe.yield}</h4>
            <button onClick={this.handleSave}>
              <h5>Save</h5>
            </button>
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  outfitsData: state.outfitsReducer.outfitsData,
});

export default connect(mapStateToProps, { getOutfits })(ListOutfits);
