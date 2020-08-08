import React from  'react';

import RecommendationCard from './RecommendationCard';

class RecommendationList extends React.Component {
  constructor(props) {
    super(props);
    this.removeRecommendation = this.removeRecommendation.bind(this);
    this.state = {
      recommendations: this.props.recommendations.slice(0, 3)
    }
  }

  removeRecommendation(wasteRecommendation) {
    this.setState({
      recommendations: this.props.recommendations.filter(function(recommendation) { 
        return recommendation.id != wasteRecommendation
      }).slice(0, 3)
    });
  }

  render() {
    return(
      <>
        {this.state.recommendations.map((recommendation, i) => (
          <RecommendationCard key={recommendation.id} 
                              recommendation={recommendation}
                              removeRecommendation={this.removeRecommendation}/>
        ))}
      </>
    )
  }
};

export default RecommendationList;
