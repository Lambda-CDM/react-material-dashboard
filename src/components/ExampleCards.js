import React from 'react';
import {Card, CardActions, CardHeader, CardTitle, CardText} from 'material-ui/Card';
import {List} from 'material-ui/List';
import FlatButton from 'material-ui/FlatButton';

const items = [
  {
    id: 1,
    title: 'First Header Title',
    subtitle: 'First Header Subtitle',
    avatar: 'http://lorempixel.com/100/100/nature/1'
  }, {
    id: 2,
    title: 'Second Header Title',
    subtitle: 'Second Header Subtitle',
    avatar: 'http://lorempixel.com/100/100/nature/2'
  }, {
    id: 3,
    title: 'Third Header Title',
    subtitle: 'Third Header Subtitle',
    avatar: 'http://lorempixel.com/100/100/nature/3'
  }, {
    id: 4,
    title: 'Fourth Header Title',
    subtitle: 'Fourth Header Subtitle',
    avatar: 'http://lorempixel.com/100/100/nature/4'
  }
]

const ExampleCard = (item) => (
  <div key={item.id}>
    <Card>
      <CardHeader
        title={item.title}
        subtitle={item.subtitle}
        avatar={item.avatar}
      />
      <CardTitle title="Card title" subtitle="Card subtitle"/>
      <CardText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
        Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
        Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
      </CardText>
      <CardActions>
        <FlatButton label="Share"/>
        <FlatButton label="Like"/>
      </CardActions>
    </Card>
    <br/>
  </div>
)

const ExampleCards = () => {
  const cards = items.map(item => ExampleCard(item));
  return (
    <div>
      <h1 className="page-title">Cards</h1>

      <List>
        {cards}
      </List>
    </div>
  );
}

export default ExampleCards;
