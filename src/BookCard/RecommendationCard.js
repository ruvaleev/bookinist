import React from  'react';

const RecommendationCard = React.memo(({ recommendation, removeRecommendation }) => (
  <div style={styles.row}>
    <div><img src={recommendation.cover} style={styles.picture}/></div>
    <div>{recommendation.title}</div>
    <div>{recommendation.authors[0].name}</div>
    <div><img src='https://a.deviantart.net/avatars/n/1/n1gga-chan.png?1'
             style={styles.close}
             onClick={() => removeRecommendation(recommendation.id)}
             data-testid={'remove_' + recommendation.id}/></div>
  </div>
));

export default RecommendationCard;

const styles = {
  row: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'space-between'
  },
  picture: {
    height: '5em',
  },
  close: {
    display: 'flex',
    width: '50%'
  }
}
